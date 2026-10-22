import { notFound } from "next/navigation";
import { allBlogPosts } from "@/lib/blog-data";
import { BlogDetailView } from "@/components/blog/BlogDetailView";
import type { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugParams = allBlogPosts.map((post) => ({ slug: post.slug }));
  const idParams = allBlogPosts.map((post) => ({ slug: post.id.toString() }));
  return [...slugParams, ...idParams];
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const numId = parseInt(resolvedParams.slug, 10);
  const post =
    allBlogPosts.find((p) => p.slug === resolvedParams.slug) ||
    allBlogPosts.find((p) => !isNaN(numId) && p.id === numId);

  if (!post) {
    return {
      title: "Article Not Found | Tenacious Hub",
    };
  }

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

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const numId = parseInt(resolvedParams.slug, 10);
  const post =
    allBlogPosts.find((p) => p.slug === resolvedParams.slug) ||
    allBlogPosts.find((p) => !isNaN(numId) && p.id === numId);

  if (!post) notFound();

  return <BlogDetailView post={post} />;
}
