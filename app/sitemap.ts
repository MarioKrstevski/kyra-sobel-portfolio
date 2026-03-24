import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kyrasobelmedia.com'

export default function sitemap (): MetadataRoute.Sitemap {
  // Blog URLs: re-add when app/_archived/blog is moved back to app/blog/

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  return staticPages
}
