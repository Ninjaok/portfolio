/* QR de https://www.ninja0k.com, gerado offline (npx qrcode, ECC M,
   margem 2) e embutido como SVG estático — sem dependência de runtime.
   viewBox 29 = 25 módulos + 2 de zona de silêncio por lado.

   Ficheiro próprio porque o path é grande e não tem nada em comum com os
   restantes ícones: mudar o URL implica regenerar o código todo, não editar
   o desenho à mão. */
export default function QrCode() {
  return (
    <svg viewBox="0 0 29 29" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
      <path
        stroke="currentColor"
        d="M2 2.5h7m7 0h1m3 0h7M2 3.5h1m5 0h1m3 0h1m4 0h2m1 0h1m5 0h1M2 4.5h1m1 0h3m1 0h1m1 0h1m3 0h1m2 0h1m2 0h1m1 0h3m1 0h1M2 5.5h1m1 0h3m1 0h1m1 0h4m1 0h3m2 0h1m1 0h3m1 0h1M2 6.5h1m1 0h3m1 0h1m1 0h1m3 0h2m2 0h1m1 0h1m1 0h3m1 0h1M2 7.5h1m5 0h1m1 0h6m1 0h1m2 0h1m5 0h1M2 8.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 9.5h1m5 0h1M2 10.5h1m1 0h5m2 0h1m1 0h3m4 0h5M3 11.5h2m4 0h1m2 0h1m1 0h2m2 0h2m1 0h1m3 0h1M2 12.5h1m1 0h2m2 0h2m1 0h2m2 0h3m1 0h5m1 0h2M3 13.5h3m3 0h3m1 0h1m4 0h2m1 0h1m4 0h1M2 14.5h2m2 0h1m1 0h1m2 0h1m2 0h3m2 0h4m1 0h3M2 15.5h2m1 0h1m1 0h1m1 0h4m5 0h2m1 0h1m1 0h1m1 0h1M2 16.5h1m5 0h2m2 0h4m1 0h7m1 0h2M2 17.5h1m3 0h2m1 0h1m2 0h2m2 0h2m1 0h1m1 0h2m3 0h1M2 18.5h1m1 0h3m1 0h1m4 0h1m1 0h2m1 0h5m1 0h1M10 19.5h1m1 0h1m1 0h2m1 0h2m3 0h2M2 20.5h7m2 0h2m2 0h2m1 0h1m1 0h1m1 0h1m1 0h3M2 21.5h1m5 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h2m1 0h1M2 22.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h9m1 0h3M2 23.5h1m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m1 0h2m1 0h1m1 0h5M2 24.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h1m1 0h1m4 0h2m1 0h1M2 25.5h1m5 0h1m2 0h3m2 0h4m1 0h3m2 0h1M2 26.5h7m1 0h5m6 0h6"
      />
    </svg>
  );
}
