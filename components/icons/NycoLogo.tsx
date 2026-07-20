"use client";

import { useId } from "react";
import styles from "./NycoLogo.module.css";

/* Logo do Nycolas Souza (nyco/logo-light.svg + logo-dark.svg). Usado APENAS
   no botão do site dele (nycocado.dev) na lista de participantes — a marca
   do portfólio é o SunLogo.

   Multicolor — corpo âmbar/degradê amarelo, pé oliva — por isso NÃO segue
   `currentColor` como um ícone monocromático faria. As duas variantes são
   desenhadas juntas e o CSS mostra a certa conforme o tema (ver
   NycoLogo.module.css). Escolha deliberada em vez de ler o ThemeContext: o
   estado do tema só sincroniza depois de montar, o que faria o logo aparecer
   na variante errada no primeiro paint e piscar a seguir.

   useId: o <mask> e o <radialGradient> precisam de ids únicos — o Nycolas
   participa em vários projetos, logo há várias instâncias na mesma página e
   ids fixos ficariam duplicados, com as máscaras a colidir entre si. */
export default function NycoLogo() {
  // useId devolve algo como ":r1:" — os dois pontos são válidos num id mas
  // partem seletores CSS e algumas ferramentas, por isso ficam de fora.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const holeId = `logo-hole-${uid}`;
  const gradId = `logo-grad-${uid}`;

  return (
    <svg
      viewBox="0 0 40 54"
      className={styles.logo}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={gradId} cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#ffd03a" />
          <stop offset="100%" stopColor="#fabd2f" />
        </radialGradient>
        <mask id={holeId}>
          <rect width="40" height="54" fill="#fff" />
          <circle cx="20" cy="33" r="9" fill="#000" />
        </mask>
      </defs>

      {/* Pé: igual nas duas variantes */}
      <path d="M21,4 C22,1 25,1 25.5,3.5 C25,5 22,5.5 21,4Z" fill="#98971a" />

      {/* Corpo: âmbar sólido no tema claro, degradê amarelo no escuro */}
      <path
        className={styles.bodyLight}
        d="M20,4 C25,4 38,13 38,29 C38,45 30,52 20,52 C10,52 2,45 2,29 C2,13 15,4 20,4Z"
        fill="#b57614"
        mask={`url(#${holeId})`}
      />
      <path
        className={styles.bodyDark}
        d="M20,4 C25,4 38,13 38,29 C38,45 30,52 20,52 C10,52 2,45 2,29 C2,13 15,4 20,4Z"
        fill={`url(#${gradId})`}
        mask={`url(#${holeId})`}
      />
    </svg>
  );
}
