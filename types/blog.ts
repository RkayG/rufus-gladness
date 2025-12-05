export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  slug: string;
  // Detailed fields for blog post detail page
  featuredImage?: string;
  featuredImageAlt?: string;
  content?: string;
  readTime?: string;
  author?: {
    name: string;
    bio: string;
    avatar: string;
    twitter?: string;
    github?: string;
  };
  comments?: Comment[];
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

export type BlogCategory = "All Posts" | "Blockchain" | "Smart Contracts" | "Web Development" | "Career" | "Tutorials";

