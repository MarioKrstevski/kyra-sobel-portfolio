// Blog posts data - dummy content for now

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readingTime: string
  category: string
  tags: string[]
  featuredImage?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'behind-the-lens-capturing-authentic-stories',
    title: 'Behind the Lens: Capturing Authentic Stories in Chicago',
    excerpt: 'Exploring the art of storytelling through photography and how authenticity shapes meaningful narratives in journalism and media.',
    content: `
# Behind the Lens: Capturing Authentic Stories in Chicago

As a freelance journalist and photographer based in Chicago, I've learned that the most powerful stories aren't the ones that are perfectly staged or meticulously planned. They're the moments of genuine connection, the raw emotions, and the authentic experiences that unfold naturally.

## The Power of Authenticity

In an age where social media is saturated with curated content, there's something refreshing about capturing real moments. Whether I'm photographing a community event, conducting an interview, or creating social media content, my approach is always rooted in authenticity.

## Finding Stories in Everyday Moments

Some of my most impactful work has come from simply being present and observant. A conversation at a local coffee shop, a community gathering, or a quiet moment during an event—these are the spaces where real stories live.

## The Intersection of Photography and Journalism

My background in journalism has taught me to look beyond the surface, to ask questions, and to seek out the deeper narrative. When I pick up my camera, I'm not just capturing an image—I'm documenting a story, preserving a moment, and giving voice to experiences that might otherwise go unnoticed.

## Building Trust Through Storytelling

Authentic storytelling requires trust. Whether I'm working with clients like the Paulson Institute or covering local Philadelphia neighborhoods, building genuine relationships is at the core of everything I do. People open up when they feel heard and respected, and that's when the most compelling stories emerge.

## Looking Forward

As I continue to grow in this field, I'm constantly reminded that the best work comes from staying true to my values: authenticity, integrity, and a commitment to highlighting stories that matter. Chicago's vibrant communities offer endless opportunities to capture meaningful narratives, and I'm grateful to be part of this storytelling journey.

---

*Kyra Sobel is a Chicago-based freelance journalist, photographer, and social media manager. She holds a Bachelor of Arts in Journalism from Temple University and is passionate about authentic storytelling and community-focused narratives.*
    `,
    author: 'Kyra Sobel',
    date: '2024-01-15',
    readingTime: '5 min read',
    category: 'Photography',
    tags: ['Photography', 'Journalism', 'Storytelling', 'Chicago'],
    featuredImage: '/resources/Website Assets & Logos/Website Photography Samples/DSC_0547.jpg',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
