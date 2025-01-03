'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface Comment {
  id: number
  text: string
  author: string
  date: string
}

export default function Comments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now(),
      text: newComment,
      author: 'Anonymous User',
      date: new Date().toLocaleDateString()
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  return (
    <div className="mt-16 bg-gray-50">
      <h2 className="text-2xl font-bold text-foreground">Comments</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="min-h-[100px] bg-slate-100"
        />
        <Button className='bg-slate-100' type="submit">Post Comment</Button>
      </form>
      <div className="mt-8 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4">
            <p className="text-foreground">{comment.text}</p>
            <div className="mt-2 text-sm text-muted-foreground">
              <span>{comment.author}</span>
              <span className="mx-2">•</span>
              <time>{comment.date}</time>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

