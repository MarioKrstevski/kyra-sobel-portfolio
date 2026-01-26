import Image from 'next/image'
import { BlogPost } from '../data/blog-posts'

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      {post.featuredImage && (
        <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span className="px-3 py-1 bg-gray-100 rounded-full">
            {post.category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>
      </header>
      <div className="prose prose-lg max-w-none">
        <div
          className="text-gray-700 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: post.content
              .split('\n')
              .map((line) => {
                if (line.startsWith('# ')) {
                  return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.substring(2)}</h1>`
                }
                if (line.startsWith('## ')) {
                  return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.substring(3)}</h2>`
                }
                if (line.startsWith('### ')) {
                  return `<h3 class="text-xl font-semibold text-gray-900 mt-4 mb-2">${line.substring(4)}</h3>`
                }
                if (line.trim() === '') {
                  return '<br />'
                }
                if (line.startsWith('*') && line.endsWith('*')) {
                  return `<p class="italic text-gray-600 mt-4">${line.substring(1, line.length - 1)}</p>`
                }
                return `<p class="mb-4">${line}</p>`
              })
              .join(''),
          }}
        />
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
