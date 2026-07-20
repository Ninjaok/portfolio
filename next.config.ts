import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Breakpoints extra (220/260) para o avatar da Sidebar (--sb-avatar):
    // sem eles, um pedido de ~260px cai no próximo tamanho da lista padrão
    // (384px), servindo ~45% mais bytes do que o necessário — era o caso
    // apontado no PageSpeed (profile.jpeg pedido a 384×384, exibido a
    // 220×220).
    imageSizes: [16, 32, 48, 64, 96, 110, 128, 220, 260, 384],
  },
};

export default nextConfig;
