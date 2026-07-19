"use client";

import { useEffect, useRef, useState } from "react";
import { penrosePath } from "@/lib/penrose";
import styles from "./PentagonTexture.module.css";

/* Comprimento da aresta dos losangos (px). Mais pequeno = mais denso; a
   contagem de losangos cresce com 1/edge², por isso é o botão principal
   entre fidelidade ao modelo e peso do caminho SVG. */
const EDGE = 22;

/* Folga vertical de sobre-desenho: se a secção crescer (reflow do conteúdo)
   até este limite, a área nova já tem padrão desenhado. */
const OVERDRAW_Y = 500;

/* Posição/‌tamanho de layout, subindo a cadeia de offsetParent.

   Não usar getBoundingClientRect aqui: as ProjectSection entram com
   `transform: translateY(30px)` (fade-in), e o rect INCLUI esse transform.
   Medir a meio da animação dava uma posição 30px errada, o que desalinhava
   a fase do ladrilhado nessa secção (costura visível na fronteira) e
   deslocava o buraco do rato. offsetTop/offsetLeft ignoram transforms. */
function layoutBox(node: HTMLElement) {
  let left = 0;
  let top = 0;
  let n: HTMLElement | null = node;
  while (n) {
    left += n.offsetLeft;
    top += n.offsetTop;
    n = n.offsetParent as HTMLElement | null;
  }
  return { left, top, width: node.offsetWidth, height: node.offsetHeight };
}

/* Camada de fundo com um ladrilhado de Penrose P3 (ver lib/penrose.ts).

   O ladrilhado é aperiódico — não existe tile que se repita, logo não pode
   ser um <pattern> de CSS. Em vez disso, cada secção gera o seu pedaço em
   COORDENADAS DE PÁGINA: como todas partilham o mesmo referencial e os
   mesmos γ, os pedaços encaixam exatamente de uma secção para a seguinte,
   sem costura e sem repetição.

   ESTÁTICO por construção: o padrão é desenhado em píxeis absolutos (sem
   viewBox, logo nunca estica) e a camada é ANCORADA À DIREITA da secção com
   largura fixa. A borda direita do conteúdo coincide com a borda direita do
   viewport e não se move quando a sidebar abre/fecha — só a esquerda muda.
   Logo o padrão fica imóvel em coordenadas de ecrã: mudar a sidebar apenas
   revela/esconde a faixa esquerda, já desenhada (o excesso fica por baixo
   da sidebar). Só um resize da JANELA regenera. */
export default function PentagonTexture() {
  const ref = useRef<SVGSVGElement>(null);
  const [geom, setGeom] = useState<{ d: string; w: number } | null>(null);
  // Canto DA CAMADA (não da secção) em coordenadas de página, para converter
  // o ponteiro sem chamar getBoundingClientRect a cada mousemove.
  const pagePos = useRef({ left: 0, top: 0 });
  const genW = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A camada é `position: absolute` dentro da secção, por isso é a secção
    // (o pai) que define a caixa.
    const host = el.parentElement;
    if (!host) return;

    let raf = 0;
    const compute = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const box = layoutBox(host);
        if (!box.width || !box.height) return;
        // Largura fixa = viewport + folga: cobre a secção em qualquer estado
        // da sidebar (compacta liberta ~320px extra à esquerda).
        const w = window.innerWidth + EDGE * 2;
        genW.current = w;
        const right = box.left + box.width; // = borda direita do viewport
        pagePos.current = { left: right - w, top: box.top };
        setGeom({
          w,
          d: penrosePath(
            {
              left: Math.round(right - w),
              top: Math.round(box.top),
              width: w,
              height: Math.ceil(box.height) + OVERDRAW_Y,
            },
            EDGE,
          ),
        });
      });
    };

    // Posição atualizada barata (sem regenerar): o buraco do rato precisa do
    // canto ATUAL da camada mesmo quando o conteúdo acima muda de altura.
    const trackPos = () => {
      const box = layoutBox(host);
      pagePos.current = {
        left: box.left + box.width - genW.current,
        top: box.top,
      };
    };

    compute();

    // Só um resize real da JANELA regenera o padrão (debounced). Os reflows
    // internos (abrir/fechar a sidebar) não mexem no desenho — o
    // ResizeObserver abaixo apenas atualiza a posição para o ponteiro.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onWindowResize = () => {
      trackPos();
      clearTimeout(timer);
      timer = setTimeout(compute, 250);
    };

    const ro = new ResizeObserver(trackPos);
    ro.observe(host);
    ro.observe(document.body);
    window.addEventListener("resize", onWindowResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onWindowResize);
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  /* Ponteiro seguido GLOBALMENTE (window), não por secção: cada camada
     converte a posição de página para o seu próprio referencial, mesmo que o
     rato esteja noutra secção. Como o raio da máscara é grande, uma secção a
     poucas centenas de px do cursor recebe --my negativo (ou > altura) e o
     degradê ainda entra — é isso que limpa os dois lados da fronteira entre
     duas ProjectSection ao mesmo tempo.

     Usa e.pageX/pageY + o canto já medido em vez de getBoundingClientRect,
     para não forçar layout a cada movimento do rato. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let px = 0;
    let py = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--mx", `${px - pagePos.current.left}px`);
      el.style.setProperty("--my", `${py - pagePos.current.top}px`);
    };
    const onMove = (e: MouseEvent) => {
      px = e.pageX;
      py = e.pageY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      el.style.setProperty("--mx", "-99999px");
      el.style.setProperty("--my", "-99999px");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    /* Sem viewBox: as coordenadas do path são píxeis CSS 1:1 do elemento.
       Largura fixa + ancoragem à direita (CSS): o elemento não se move em
       coordenadas de ecrã quando a sidebar muda a largura da secção. */
    <svg
      ref={ref}
      className={styles.texture}
      style={geom ? { width: geom.w } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {geom && (
        <path
          d={geom.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
