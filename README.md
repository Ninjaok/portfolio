# ninja0k.com — Portfólio

Portfólio pessoal de Luan Ribeiro (Engenharia Informática, IADE — Universidade
Europeia). Next.js 16 (App Router) + React 19, sem dependências de UI: todos os
componentes, ícones e o padrão de fundo são escritos à mão.

**Produção:** [www.ninja0k.com](https://www.ninja0k.com)

---

## Arrancar

```bash
npm install
npm run dev      # http://localhost:3000 → redireciona para /pt (ou o teu idioma)
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Serve o build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Só verificação de tipos, sem gerar ficheiros |

---

## Estrutura

```
app/
  [locale]/          Rota por idioma — layout (fontes, metadata, JSON-LD) e página
  globals.css        Tokens de tema (claro/escuro), auras, barra de progresso
  icon.svg           Favicon; muda de cor sozinho via prefers-color-scheme
  apple-icon.png     Ícone iOS
  robots.ts          robots.txt gerado
  sitemap.ts         sitemap.xml gerado — deriva de LOCALES
components/          Componentes + o seu CSS Module ao lado
  icons/             Ícones e logos (ver "Logos" abaixo); importar de "./icons"
context/             SidebarContext (compact/expanded/about), ThemeContext
lib/
  translations.ts    Todo o texto do site, por idioma
  imageDescriptions.ts  Legendas de hover das imagens
  penrose.ts         Gera o ladrilhado de Penrose do fundo
  slugify.ts         Títulos de projeto → âncoras
logo/                Marca do portfólio (SVG, favicons, PNGs)
nyco/                Logo do Nycolas — só o botão de nycocado.dev
modelo/              Referência de design — a FONTE da verdade visual
design-reference/    Capturas de ecrã do resultado pretendido
proxy.ts             Deteta o idioma e redireciona / → /{locale}
```

Ao mudar o visual, `modelo/` manda: `modelo/README.md` descreve o layout e
`modelo/TEMA.md` a paleta.

---

## Tema

Os tokens vivem em `app/globals.css`: `:root` para o tema claro, `.dark` para o
escuro. O `ThemeContext` alterna a classe no `<html>` e guarda a escolha em
`localStorage`; um script inline em `layout.tsx` (`beforeInteractive`) aplica-a
antes da hidratação para não haver flash de tema errado.

A paleta é oliva monocromática. A cor de marca é `--accent` (`#6b7a3f` no claro,
`#a8b57a` no escuro) — o logo herda-a via `var(--color-accent)`.

**A sidebar tem paleta própria** (`SIDEBAR_COLORS` em `Sidebar.tsx`, injetada
como `--sb-*`): oliva escura fixa, igual nos dois temas. Dentro dela, `--accent`
resolve para `--sb-accent` — por isso o logo usa `--color-accent`, que não é
redefinida ali e continua a seguir o tema da página.

> ⚠️ Nunca escrever `--x: var(--x)`. É um ciclo de custom property e invalida a
> variável — o Safari segue a spec à risca e o valor desaparece. Usar um nome
> distinto para o alias e um literal como fallback.

### Ícones e logos

Tudo em `components/icons/`, importado do barrel (`import { GitHubIcon } from
"./icons"`). `ui.tsx` e `social.tsx` agrupam os ícones simples; as marcas e o
QR têm ficheiro próprio.

Os ícones de `ui`/`social` desenham a **1em em `currentColor`** — tamanho e cor
vêm do contentor (ex.: `.participantIconBtn` define `font-size: 16px`). Antes
cada `<svg>` trazia o seu `width`/`height` fixo, e foi assim que o GitHub e o
LinkedIn acabaram com **paths diferentes** na sidebar e nos participantes: a
mesma marca desenhada de duas maneiras. Uma definição por marca evita isso.

**`SunLogo`** (`logo/`) é a marca do portfólio: monocromático, segue
`currentColor`, usado na sidebar (compacta e expandida), no favicon e no botão
de `ninja0k.com` na lista de participantes.

**`NycoLogo`** (`nyco/`) é a marca do Nycolas Souza e aparece **só** no botão
de `nycocado.dev` nos participantes. Por ser multicolor (degradê + pé oliva)
não pode seguir `currentColor`: as duas variantes são desenhadas juntas e o CSS
mostra a certa via `html.dark` — evita o flash que apareceria se o tema fosse
lido do `ThemeContext`, que só sincroniza depois de montar. Os `id` do `<mask>`
e do gradiente vêm de `useId()`, porque o Nycolas participa em vários projetos
e ids fixos colidiriam entre as instâncias.

O viewBox do `NycoLogo` é 40×54 (mais alto que largo): quem o dimensiona define
a **altura** e deixa a largura sair do `aspect-ratio`. Numa caixa quadrada o
desenho limita-se pela largura e fica menor que os ícones vizinhos.

---

## Idiomas

9 locales: `pt` (padrão), `en`, `fr`, `de`, `es`, `it`, `ru`, `tr`, `uk`.

`LOCALES` em `lib/translations.ts` é a fonte única — dela derivam o routing, o
sitemap, as hreflang e o seletor de idiomas. **Para acrescentar um idioma:**

1. Novo bloco em `translations` (as 47 chaves; o TypeScript acusa se faltar).
2. Novo `Lang` na union.
3. Nova entrada em `LOCALES`.
4. `DESCRIPTIONS` e `OG_LOCALES` em `app/[locale]/layout.tsx`.
5. `locales` em `proxy.ts`.

As legendas em `imageDescriptions.ts` são `Partial` de propósito: o que faltar
cai para inglês, para um idioma novo não exigir 19 legendas antes de compilar.

O `proxy.ts` lê o `Accept-Language` e redireciona `/` para o melhor locale. O seu
`matcher` **tem de excluir os ficheiros de metadata servidos na raiz**
(`icon.svg`, `apple-icon.png`, …) — senão são redirecionados para
`/{locale}/icon.svg` e dão 404.

---

## Notas de implementação

**Fundo Penrose** (`PentagonTexture.tsx`) — ladrilhado aperiódico, logo não pode
ser um `background` repetido em CSS. Cada secção desenha o seu pedaço em
coordenadas de *página*, para encaixarem sem costura entre secções. A camada tem
largura fixa em CSS (`calc(100vw + 44px)`) ancorada à direita: assim não muda de
tamanho depois da hidratação (isso contava como CLS) nem se mexe quando a sidebar
abre. O rato abre um "buraco" na textura via `mask-image` radial, com `--mx/--my`
registadas em `@property` para interpolarem suavemente.

**Sidebar** — três estados (`compact` / `expanded` / `about`). No desktop
`compact` é a faixa estreita; no mobile (`≤860px`) é a topbar, e `expanded` é o
menu de ecrã inteiro. Em `compact` o chevron não é renderizado: o próprio logo é
o botão de expandir.

**Performance** — o histórico está em `regras.md` (relatório PageSpeed e o que
foi corrigido). Em resumo: caixas de tamanho fixo desde o SSR para o CLS,
leituras de layout do scroll-spy agrupadas em `requestAnimationFrame`,
`imageSizes` afinados em `next.config.ts` e `browserslist` restrito a browsers
modernos para não enviar polyfills desnecessários.

**Ainda por fazer** — os GIFs em `public/images/` (~2,4 MB) deviam ser vídeo, e
`wot.mp4` (27,5 MB) precisa de recompressão; requer `ffmpeg`, que não estava
instalado na máquina de desenvolvimento.
