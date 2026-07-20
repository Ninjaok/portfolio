/* Ponto único de importação dos ícones e logos.

   Marcas (SunLogo/NycoLogo) e QR ficam em ficheiros próprios — têm arte ou
   regras próprias. Os restantes agrupam-se por família em `ui` e `social`,
   porque são one-liners e um ficheiro por ícone seria mais cerimónia que
   conteúdo.

   Convenção: os ícones de `ui`/`social` desenham a 1em e em currentColor —
   tamanho e cor vêm do contentor. Os logos têm regras próprias, ver cada um. */

export { default as SunLogo } from "./SunLogo";
export { default as NycoLogo } from "./NycoLogo";
export { default as QrCode } from "./QrCode";

export {
  ChevronLeftIcon,
  MenuIcon,
  LocationIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
} from "./ui";

export {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  GlobeIcon,
} from "./social";
