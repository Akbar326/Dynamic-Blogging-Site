import { blogPosts } from '@/data/blog-posts'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Latest Blog Posts</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Explore our latest articles about web development and technology
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-card p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {post.category}
                  </p>
                  <Link href={`/blog/${post.id}`} className="mt-2 block">
                    <p className="text-xl font-semibold text-foreground">{post.title}</p>
                    <p className="mt-3 text-muted-foreground">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                  </div>
                  <div className="text-sm">
                    <p className="text-foreground">{post.author}</p>
                    <time className="text-muted-foreground">{post.date}</time>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

