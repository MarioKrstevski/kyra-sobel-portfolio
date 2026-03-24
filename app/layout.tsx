import type { Metadata } from 'next'
import { Fraunces, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import './styles/animations.css'

// Body: Source Sans 3 — clear, warm, professional on screen
const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

// Headings: Fraunces — soft editorial serif (journalism / storytelling)
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kyrasobelmedia.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kyra Sobel Media | Social Media Manager | Multimedia Journalist | Photographer',
    template: '%s | Kyra Sobel Media',
  },
  description: 'Chicago-based freelance journalist, photographer, editor, and social media manager. Specializing in authentic storytelling and creative communications.',
  keywords: ['Kyra Sobel', 'social media manager', 'multimedia journalist', 'freelance photographer', 'Chicago journalist', 'content creator', 'Paulson Institute'],
  authors: [{ name: 'Kyra Sobel', url: siteUrl }],
  creator: 'Kyra Sobel Media',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kyra Sobel Media',
    title: 'Kyra Sobel Media | Social Media Manager | Multimedia Journalist | Photographer',
    description: 'Chicago-based freelance journalist, photographer, editor, and social media manager. Specializing in authentic storytelling and creative communications.',
    images: [
      {
        url: '/resources/WebsiteAssetsAndLogos/LOGO-7.png',
        width: 512,
        height: 512,
        alt: 'Kyra Sobel Media',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyra Sobel Media | Social Media Manager | Multimedia Journalist | Photographer',
    description: 'Chicago-based freelance journalist, photographer, editor, and social media manager.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/resources/WebsiteAssetsAndLogos/LOGO-7.png',
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${fraunces.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
