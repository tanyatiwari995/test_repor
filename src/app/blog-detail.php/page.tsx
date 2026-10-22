import { notFound } from "next/navigation";
import { allBlogPosts } from "@/lib/blog-data";
import { BlogDetailView } from "@/components/blog/BlogDetailView";
import type { Metadata } from "next";

interface BlogDetailPhpProps {
  searchParams: Promise<{
    id?: string;
    action?: string;
  }>;
}

export async function generateMetadata({ searchParams }: BlogDetailPhpProps): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const numId = parseInt(resolvedParams.id || "39", 10);
  const post = allBlogPosts.find((p) => p.id === numId) || allBlogPosts[0];

  return {
    title: `${post.title} | Tenacious Hub Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPhpPage({ searchParams }: BlogDetailPhpProps) {
  const resolvedParams = await searchParams;
  const numId = parseInt(resolvedParams.id || "39", 10);
  const post = allBlogPosts.find((p) => p.id === numId);

  if (!post) {
    // If not found by exact ID, fallback to the latest post or notFound
    const fallback = allBlogPosts[0];
    if (fallback) {
      return <BlogDetailView post={fallback} />;
    }
    notFound();
  }

  return <BlogDetailView post={post} />;
}
