import { blogPosts } from '@/data/blog-posts'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Comments from '@/components/Comment'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{post.title}</h1>
          <div className="mt-4 text-muted-foreground">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <time>{post.date}</time>
          </div>
        </div>
        <div className="mt-8">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full h-[200px] sm:h-[300px] md:h-[400px]"
          />
        </div>
        <div className="mt-8 text-base sm:text-lg md:text-2xl max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <Comments postId={post.id} />
      </div>
    </article>
  )
}

