export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Exploring Next.js 15: What's New and Exciting?",
    description:
      "Next.js 15, the latest iteration of the popular React framework, continues to elevate the web development experience by introducing powerful features and improvements. Here’s a quick dive into what makes Next.js 15 stand out.",
    content: `Next.js 15 introduces several powerful features that elevate web development. The enhanced App Router ensures faster rendering and improved routing for complex applications. Optimized server-side rendering (SSR) and static site generation (SSG) deliver even better performance. Middleware capabilities are expanded, offering more flexibility for handling authentication, logging, and requests. TypeScript integration has been refined with improved error handling and faster compilation. The edge runtime is more robust, enabling ultra-fast APIs and dynamic content closer to users. Additionally, reusable layout components simplify application structuring and improve UI consistency. Next.js 15 focuses on productivity, scalability, and performance, making it an essential upgrade for modern developers.`,
    date: "2025-01-03",
    author: "Akbar Ali",
    category: "Next.js",
    image: "/assets/NextJs.jpeg",
  },
  {
    id: "2",
    title: "The Future of AI in Web Development",
    description:
      "How artificial intelligence is reshaping the way we build and maintain web applications.",
    content: `Artificial Intelligence is revolutionizing web development in unprecedented ways. From code generation to automated testing, AI tools are becoming indispensable in a developer's toolkit.
  
      AI-powered code completion tools like GitHub Copilot have already transformed how developers write code. These tools not only increase productivity but also help maintain consistency in coding patterns.
  
      In the realm of testing, AI systems can now generate test cases automatically, identify potential edge cases, and even predict where bugs might occur. This predictive capability helps developers address issues before they impact users.
  
      Looking ahead, we can expect AI to play an even larger role in web development. Automated design systems, self-healing applications, and AI-driven performance optimization are just the beginning.`,
    date: "2025-01-02",
    author: "Akbar Ali",
    category: "AI",
    image: "/assets/AI.jpeg",
  },
  {
    id: "3",
    title: "React Server Components Explained",
    description:
      "A comprehensive guide to understanding and implementing React Server Components.",
    content: `React Server Components represent a paradigm shift in how we build React applications. They enable us to render components on the server while maintaining the interactivity we expect from React applications.
  
      The key advantage of Server Components is their ability to access server-side resources directly. This means you can query databases or access the filesystem without additional API endpoints.
  
      Performance benefits are significant - Server Components reduce the JavaScript bundle size by keeping server-only code on the server. This results in faster page loads and better core web vitals.
  
      Understanding when to use Server vs Client Components is crucial. Server Components are ideal for data fetching and static content, while Client Components are necessary for interactive features.`,
    date: "2025-01-01",
    author: "Akbar Ali",
    category: "React",
    image: "/assets/React.jpeg",
  },
];
