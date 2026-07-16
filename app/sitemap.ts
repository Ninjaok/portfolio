import type { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/translations';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l.code, `https://www.ninja0k.com/${l.code}`]),
  );

  return LOCALES.map((l) => ({
    url: `https://www.ninja0k.com/${l.code}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: { languages },
  }));
}
