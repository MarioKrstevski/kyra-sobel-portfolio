import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kyrasobel.com'

export default function sitemap (): MetadataRoute.Sitemap {
  // Blog URLs: re-add when app/_archived/blog is moved back to app/blog/

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: '2026-03-24',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: '2026-03-24',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  return staticPages
}
