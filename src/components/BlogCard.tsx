import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card
      className="p-4 bg-gray-50 text-white rounded-lg shadow-lg hover:drop-shadow-xl transition-shadow duration-300"
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-gray-600">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p className="text-sm mb-2 text-slate-400">
          Publish on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className="w-full text-center px-8 text-white bg-blue-500 rounded hover:bg-blue-700 hover:text-white py-1 transition-colors duration-300">
          Read More
        </a>
      </div>
    </Card>
  );
}
