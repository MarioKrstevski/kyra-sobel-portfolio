import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../data/blog-posts'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group cursor-pointer"
    >
      <article className="bg-background border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {post.featuredImage && (
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-caption mb-3">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span className="px-2 py-1 bg-card rounded-full">
              {post.category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-heading mb-3 group-hover:text-muted-foreground transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-card text-muted-foreground rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
