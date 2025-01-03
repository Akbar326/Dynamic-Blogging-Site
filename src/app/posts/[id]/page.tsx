"use client";
import React from "react";
import { useParams } from "next/navigation";
import CommentSection from "@/components/CommentSection";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    title: "First Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
  {
    id: "2",
    title: "Second Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
  {
    id: "3",
    title: "Third Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
  {
    id: "4",
    title: "Fourth Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
  {
    id: "5",
    title: "Fifth Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
  {
    id: "6",
    title: "Sixth Blog",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.",
    date: "2023-12-12",
    image: "../assets/PostImage.jpeg",
  },
];

export default function Post() {
  const params = useParams() as { id: string };
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((paragraph, index) => (
      <p key={index} className="mt-4 text-justify">
        {paragraph.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="mt-5 w-full h-auto rounded-lg"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
