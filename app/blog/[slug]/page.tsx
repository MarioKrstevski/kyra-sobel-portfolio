import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogPostComponent from '../../components/BlogPost'
import { getBlogPostBySlug, getAllBlogPosts } from '../../data/blog-posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams () {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata ({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kyrasobelmedia.com'
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.featuredImage ? [{ url: post.featuredImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `${siteUrl}/blog/${post.slug}` },
  }
}

export default async function BlogPostPage ({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          <BlogPostComponent post={post} />
        </div>
      </main>
      <Footer />
    </>
  )
}
