/* Penrose P3 (ladrilhado de losangos) pelo método da pentagrelha de de Bruijn.

   Regras do padrão (conferidas contra modelo2.svg, que é exatamente isto):
   - Um único comprimento de aresta para todos os losangos.
   - Só dois losangos: "gordo" 72°/108° e "fino" 36°/144°.
   - A razão gordo:fino tende para φ = (1+√5)/2 — assinatura do ladrilhado
     de Penrose, e o motivo de ele ser aperiódico (φ é irracional).

   Porquê de Bruijn e não subdivisão/deflação: a deflação cresce ~φ²ᴺ e
   precisaria de ~150k triângulos para cobrir uma página inteira. A
   pentagrelha gera diretamente só os losangos de uma região pedida, em
   tempo proporcional ao que sai (alguns ms por secção).

   Como funciona: 5 famílias de retas paralelas (normais eⱼ a 72° umas das
   outras, deslocamentos γⱼ). Cada interseção entre uma reta da família j e
   uma da família l corresponde a um losango; o vetor de índices K (quantas
   retas de cada família ficam para trás) dá os 4 vértices somando K_m·e_m.
   Σγⱼ inteiro ⇒ Penrose (com Σγⱼ = 1 aqui). */

const DIRS: Array<[number, number]> = Array.from({ length: 5 }, (_, j) => {
  const a = (2 * Math.PI * j) / 5;
  return [Math.cos(a), Math.sin(a)];
});

// Σ = 1 (inteiro) ⇒ Penrose. Valores distintos entre si evitam um centro de
// simetria de 5 dobras visível (que γⱼ todos iguais produziria).
const GAMMA = [0.1, 0.2, 0.3, 0.4, 0.0];

/* Σ_m e_m (e_m · p) = (5/2) p para 5 direções unitárias igualmente
   espaçadas, ou seja, o espaço de índices mapeia para posições ~2.5×. */
const INDEX_TO_POS = 2.5;
const K_MARGIN = 4; // folga de retas para não abrir buracos nas bordas

export type PenroseRect = {
  /** Canto em coordenadas de PÁGINA (px). Partilhar o mesmo referencial
      entre secções é o que faz o padrão continuar sem cortes de uma para a
      outra. */
  left: number;
  top: number;
  width: number;
  height: number;
};

/** Intervalo de índices de reta da família j que pode tocar o retângulo. */
function kRange(j: number, x0: number, y0: number, x1: number, y1: number) {
  let lo = Infinity;
  let hi = -Infinity;
  const [ex, ey] = DIRS[j];
  for (const [x, y] of [
    [x0, y0],
    [x1, y0],
    [x0, y1],
    [x1, y1],
  ]) {
    const v = (ex * x + ey * y) / INDEX_TO_POS + GAMMA[j];
    if (v < lo) lo = v;
    if (v > hi) hi = v;
  }
  return [Math.floor(lo) - K_MARGIN, Math.ceil(hi) + K_MARGIN] as const;
}

/**
 * Caminho SVG (`d`) com o contorno dos losangos que cobrem `rect`, com
 * arestas de `edge` px. Os vértices saem relativos ao canto do retângulo
 * (0,0 = rect.left/rect.top), prontos para um viewBox `0 0 w h`.
 */
export function penrosePath(rect: PenroseRect, edge: number): string {
  // Trabalha em unidades de aresta e converte no fim.
  const x0 = rect.left / edge;
  const y0 = rect.top / edge;
  const x1 = (rect.left + rect.width) / edge;
  const y1 = (rect.top + rect.height) / edge;

  // Cada aresta é partilhada por 2 losangos — desenhar só uma vez reduz o
  // caminho a metade e evita traço duplicado (mais escuro) nas junções.
  const seen = new Set<string>();
  const parts: string[] = [];

  const emit = (ax: number, ay: number, bx: number, by: number) => {
    const a = `${ax.toFixed(1)},${ay.toFixed(1)}`;
    const b = `${bx.toFixed(1)},${by.toFixed(1)}`;
    const key = a < b ? `${a}|${b}` : `${b}|${a}`;
    if (seen.has(key)) return;
    seen.add(key);
    parts.push(`M${a.replace(",", " ")}L${b.replace(",", " ")}`);
  };

  for (let j = 0; j < 5; j++) {
    for (let l = j + 1; l < 5; l++) {
      const [ejx, ejy] = DIRS[j];
      const [elx, ely] = DIRS[l];
      const det = ejx * ely - ejy * elx;
      const [jStart, jEnd] = kRange(j, x0, y0, x1, y1);
      const [lStart, lEnd] = kRange(l, x0, y0, x1, y1);

      for (let kj = jStart; kj <= jEnd; kj++) {
        for (let kl = lStart; kl <= lEnd; kl++) {
          // Interseção das retas kj (família j) e kl (família l).
          const cj = kj - GAMMA[j];
          const cl = kl - GAMMA[l];
          const px = (cj * ely - cl * ejy) / det;
          const py = (ejx * cl - elx * cj) / det;

          // Vetor de índices nessa interseção.
          const K: number[] = [];
          for (let m = 0; m < 5; m++) {
            if (m === j) K.push(kj);
            else if (m === l) K.push(kl);
            else K.push(Math.ceil(DIRS[m][0] * px + DIRS[m][1] * py + GAMMA[m]));
          }

          // 4 vértices: K com kj e kl a variar 0/1 (ordem em volta do losango).
          const vx: number[] = [];
          const vy: number[] = [];
          for (const [a, b] of [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
          ]) {
            let sx = 0;
            let sy = 0;
            for (let m = 0; m < 5; m++) {
              const km = K[m] + (m === j ? a : 0) + (m === l ? b : 0);
              sx += km * DIRS[m][0];
              sy += km * DIRS[m][1];
            }
            vx.push(sx);
            vy.push(sy);
          }

          // Descarta o que cai fora da região pedida (o centro decide).
          const cx = (vx[0] + vx[2]) / 2;
          const cy = (vy[0] + vy[2]) / 2;
          if (cx < x0 || cx > x1 || cy < y0 || cy > y1) continue;

          for (let i = 0; i < 4; i++) {
            const n = (i + 1) % 4;
            emit(
              (vx[i] - x0) * edge,
              (vy[i] - y0) * edge,
              (vx[n] - x0) * edge,
              (vy[n] - y0) * edge,
            );
          }
        }
      }
    }
  }

  return parts.join("");
}
