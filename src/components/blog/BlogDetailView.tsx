"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  User,
  Calendar,
  MessageSquare,
  Search,
  Folder,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";
import { BlogPost, allBlogPosts, blogCategories } from "@/lib/blog-data";

interface BlogDetailViewProps {
  post: BlogPost;
}

export function BlogDetailView({ post }: BlogDetailViewProps) {
  const [commentText, setCommentText] = useState("");
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");

  const recentPosts = allBlogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentSubmitted(true);
    setCommentText("");
    setTimeout(() => {
      setCommentSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Banner with Integrated Breadcrumb */}
      <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-12 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500 border-b border-[var(--border-main)]/60">
        <div className="container-custom relative z-10 text-center space-y-5 max-w-4xl mx-auto">
          {/* Breadcrumb Pill matching live tenacioushub.com */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-[var(--border-main)] text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm">
            <Home className="w-3.5 h-3.5 text-[var(--primary)]" />
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="text-[var(--primary)] font-bold truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* 2. Main Article Section (2 Columns matching live site) */}
      <div className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (8 cols): Main Article & Comments */}
            <div className="lg:col-span-8 space-y-8">
              <div className="glass-card rounded-3xl p-6 sm:p-10 border border-[var(--border-main)] shadow-sm">
                {/* Main Featured Image with Live Site Blue Badge */}
                <div className="relative overflow-hidden mb-6 rounded-2xl shadow-sm max-h-[440px] bg-slate-900 flex items-center justify-center">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-[var(--primary)] text-white text-xs font-black shadow-md shadow-black/30">
                    1
                  </div>

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith("/images/slider-01.jpg")) {
                        target.src = "/images/slider-01.jpg";
                      } else {
                        target.style.display = "none";
                      }
                    }}
                  />

                  {/* Fallback pattern */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-8 text-center text-white/80 bg-gradient-to-br from-[#0c1322] to-[#122b39]">
                    <Sparkles className="w-10 h-10 text-cyan-400 mb-2 opacity-60" />
                    <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[var(--text-muted)] py-3.5 mb-6 border-y border-[var(--border-main)]/60 font-medium">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[var(--primary)]" />
                    <span>Posted by <strong className="text-[var(--text-main)]">{post.author}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--primary)]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[var(--primary)]" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Article Sub-heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-6 leading-snug">
                  {post.title}
                </h2>

                {/* Main Article Content with Dark Mode High Contrast Overrides */}
                <div
                  className="blog-content-body prose dark:prose-invert max-w-none text-[var(--text-main)] leading-relaxed text-sm sm:text-base space-y-4
                  prose-p:leading-relaxed
                  prose-table:w-full prose-table:border prose-table:border-[var(--border-main)] prose-table:my-6
                  prose-th:bg-[var(--primary)]/10 prose-th:p-3 prose-th:text-[var(--text-main)] prose-th:font-bold prose-th:border prose-th:border-[var(--border-main)]
                  prose-td:p-3 prose-td:border prose-td:border-[var(--border-main)] prose-td:text-[var(--text-muted)]
                  prose-a:text-[var(--primary)] prose-a:font-bold hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Interactive Comment Box */}
                <div className="p-6 sm:p-8 rounded-2xl glass-surface border border-[var(--border-main)] mt-10 space-y-4">
                  <h3 className="font-extrabold text-base sm:text-lg text-[var(--text-main)] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[var(--primary)]" />
                    Leave a Comment
                  </h3>

                  {commentSubmitted ? (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Thank you! Your comment has been submitted for moderation.
                    </div>
                  ) : (
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        rows={4}
                        placeholder="Write your thoughts on this article..."
                        required
                        className="w-full p-4 rounded-xl glass-card border border-[var(--border-main)] text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-all resize-none"
                      />
                      <button
                        type="submit"
                        className="px-7 py-3 bg-[var(--primary)] text-white text-xs sm:text-sm font-bold rounded-full shadow-md shadow-[var(--primary)]/20 hover:bg-[var(--primary-light)] hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <span>Submit Comment</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Sidebar matching live site */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Search Widget */}
              <div className="glass-card p-6 rounded-2xl border border-[var(--border-main)] shadow-sm space-y-3">
                <h3 className="font-bold text-sm text-[var(--text-main)] uppercase tracking-wider">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    value={sidebarSearch}
                    onChange={(e) => setSidebarSearch(e.target.value)}
                    placeholder="Type keyword..."
                    className="w-full pl-4 pr-10 py-2.5 rounded-full glass-surface border border-[var(--border-main)] text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)]"
                  />
                  <Link
                    href={`/blog?search=${encodeURIComponent(sidebarSearch)}`}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--primary-light)] transition-colors"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="glass-card p-6 rounded-2xl border border-[var(--border-main)] shadow-sm space-y-3">
                <h3 className="font-bold text-sm text-[var(--text-main)] uppercase tracking-wider">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {blogCategories
                    .filter((c) => c !== "All Articles")
                    .map((cat) => (
                      <li key={cat}>
                        <Link
                          href={`/blog`}
                          className="py-2.5 px-3 rounded-xl flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/8 transition-all"
                        >
                          <div className="flex items-center gap-2.5">
                            <Folder className="w-4 h-4 text-[var(--primary)]" />
                            <span>{cat}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Recent Posts Widget */}
              <div className="glass-card p-6 rounded-2xl border border-[var(--border-main)] shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-[var(--text-main)] uppercase tracking-wider">
                  Recent Articles
                </h3>
                <div className="space-y-3.5">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/blog-detail.php?action=detail&id=${rPost.id}`}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-[var(--primary)]/8 transition-all"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={rPost.image}
                          alt={rPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.endsWith("/images/slider-01.jpg")) {
                              target.src = "/images/slider-01.jpg";
                            } else {
                              target.style.display = "none";
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] line-clamp-2 leading-snug transition-colors">
                          {rPost.title}
                        </h4>
                        <span className="text-[11px] text-[var(--text-muted)] font-mono block">
                          {rPost.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Need Help CTA Banner */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-[var(--primary)]/20 via-cyan-500/10 to-transparent border border-[var(--primary)]/30 text-center space-y-3">
                <h4 className="text-base font-extrabold text-[var(--text-main)]">
                  Need Expert Digital Strategy?
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Partner with Tenacious Hub to scale your organic rankings, brand reach, and back-office efficiency.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+919105267000"
                    className="w-full py-2.5 px-4 bg-[var(--primary)] text-white text-xs font-bold rounded-full shadow-md hover:bg-[var(--primary-light)] transition-all flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call +91 9105267000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
