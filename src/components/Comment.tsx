'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

interface Comment {
  id: number
  text: string
  author: string
  date: string
}

export default function Comments({ }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [userName, setUserName] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !userName.trim()) return

    const comment: Comment = {
      id: Date.now(),
      text: newComment,
      author: userName,
      date: new Date().toLocaleDateString()
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  const handleEdit = (id: number) => {
    const commentToEdit = comments.find(comment => comment.id === id)
    if (commentToEdit) {
      setEditingId(id)
      setEditText(commentToEdit.text)
    }
  }

  const handleSaveEdit = () => {
    setComments(comments.map(comment => 
      comment.id === editingId ? { ...comment, text: editText } : comment
    ))
    setEditingId(null)
    setEditText('')
  }

  const handleDelete = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <div className="mt-16 bg-gray-50 p-2 rounded-lg">
      <h2 className="max-w-3xl mx-auto text-2xl font-bold text-foreground mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="bg-slate-100"
          required
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Leave a comment..."
          className="min-h-[100px] bg-slate-100"
          required
        />
        <Button className='bg-slate-100' type="submit">Post Comment</Button>
      </form>
      <div className="mt-8 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border rounded-lg p-4 bg-white">
            {editingId === comment.id ? (
              <>
                <Textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="min-h-[100px] bg-slate-100 mb-2"
                />
                <Button onClick={handleSaveEdit} className="mr-2 bg-slate-100">Save</Button>
                <Button onClick={() => setEditingId(null)} variant="outline" className='bg-slate-100'>Cancel</Button>
              </>
            ) : (
              <>
                <p className="text-foreground">{comment.text}</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span>{comment.author}</span>
                  <span className="mx-2">•</span>
                  <time>{comment.date}</time>
                </div>
                <div className="mt-4">
                  <Button onClick={() => handleEdit(comment.id)} variant="outline" size="sm" className="mr-3 bg-slate-100 p-2">Edit</Button>
                  <Button onClick={() => handleDelete(comment.id)} variant="outline" size="sm" className="bg-slate-100 p-2">Delete</Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

