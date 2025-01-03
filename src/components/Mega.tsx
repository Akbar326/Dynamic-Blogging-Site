import React from "react";
import BlogCard from "@/components/BlogCard";

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "First Blog",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
    {
      id: "2",
      title: "Second Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
    {
      id: "3",
      title: "Third Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
    {
      id: "4",
      title: "Fourth Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
    {
      id: "5",
      title: "Fifth Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
    {
      id: "6",
      title: "Sixth Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
      date: "2023-12-12",
      imageUrl: "../assets/PostImage.jpeg",
    },
  ];

  return (
    <div className="my-8 mx-3">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600">
        Exploring the World of AI Technology
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
