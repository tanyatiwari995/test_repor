import { redirect } from "next/navigation";
import { allBlogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

interface BlogDetailPhpProps {
  searchParams: Promise<{
    id?: string;
    action?: string;
  }>;
}

export async function generateMetadata({ searchParams }: BlogDetailPhpProps): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const numId = parseInt(resolvedParams.id || "13", 10);
  const post = allBlogPosts.find((p) => p.id === numId) || allBlogPosts[0];

  return {
    title: `${post.title} | Tenacious Hub Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPhpPage({ searchParams }: BlogDetailPhpProps) {
  const resolvedParams = await searchParams;
  const numId = parseInt(resolvedParams.id || "", 10);
  const post = allBlogPosts.find((p) => p.id === numId);

  if (post) {
    redirect(`/blog/${post.slug}`);
  }

  // If ID not matched, redirect to main blog page
  redirect("/blog");
}
