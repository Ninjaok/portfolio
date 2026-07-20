/* Logo do site (paths originais de logo/sun-logo.svg).

   SVG inline em vez de <img src="/logo/sun-logo.svg"> de propósito: só
   assim o traço herda `currentColor` do contexto onde é usado — um SVG
   carregado como imagem externa tem o seu próprio contexto de estilo e
   ignoraria a cor do elemento pai. É isso que deixa o logo mudar de tema
   (oliva #6b7a3f no claro, sage #a8b57a no escuro) e ficar na cor certa
   dentro do botão de participante, sem duplicar ficheiros por variante.

   Sem "use client": é markup estático puro, renderiza no servidor. */
export default function SunLogo() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.2"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M 94.97 102.53 L 75.31 58.35 L 111.24 26.00 L 130.91 70.17 Z" />
      <path d="M 94.97 102.53 L 130.91 70.17 L 172.78 94.35 L 136.85 126.70 Z" />
      <path d="M 94.97 102.53 L 136.85 126.70 L 126.80 174.00 L 84.92 149.82 Z" />
      <path d="M 94.97 102.53 L 84.92 149.82 L 36.83 154.88 L 46.89 107.58 Z" />
      <path d="M 94.97 102.53 L 46.89 107.58 L 27.22 63.41 L 75.31 58.35 Z" />
    </svg>
  );
}
