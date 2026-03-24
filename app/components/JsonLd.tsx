const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kyrasobel.com'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kyra Sobel',
  url: siteUrl,
  jobTitle: 'Social Media Manager & Multimedia Journalist',
  description: 'Chicago-based freelance journalist, photographer, editor, and social media manager.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chicago',
    addressRegion: 'IL',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/kyra-sobel-742162174/',
    'https://www.instagram.com/ksobesphotos',
  ],
  image: `${siteUrl}/resources/WebsiteAssetsAndLogos/LOGO-7.png`,
}

export default function JsonLd () {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}
