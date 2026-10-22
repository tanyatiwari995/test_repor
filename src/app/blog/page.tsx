"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  User,
  MessageSquare,
  ChevronRight,
  Home,
  Search,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { allBlogPosts, blogCategories } from "@/lib/blog-data";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Articles" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-10 sm:pt-36 sm:pb-12 hero-gradient text-[var(--text-main)] overflow-hidden transition-colors duration-500 border-b border-[var(--border-main)]/60">
        <div className="container-custom relative z-10 text-center space-y-5">
          {/* Breadcrumb Pill matching live site */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-[var(--border-main)] text-xs sm:text-sm font-semibold text-[var(--text-main)] shadow-sm">
            <Home className="w-3.5 h-3.5 text-[var(--primary)]" />
            <Link href="/" className="hover:text-[var(--primary)] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            <span className="text-[var(--primary)] font-bold">Blog Grid</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight leading-tight">
            Latest Digital Marketing &amp;{" "}
            <span className="text-gradient">Tech Insights</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto font-normal leading-relaxed">
            Stay ahead with actionable insights on SEO, Artificial Intelligence, Web Engineering, and Business Growth from Tenacious Hub.
          </p>

          {/* Quick Search */}
          <div className="max-w-md mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles by topic or keyword..."
                className="w-full pl-11 pr-4 py-3 rounded-full glass-surface border border-[var(--border-main)] text-sm text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] shadow-sm transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-12 sm:py-16">
        <div className="container-custom space-y-10">
          {/* Category Filter Pills (Exact from tenacioushub.com/blog.php) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {blogCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/25 scale-[1.02]"
                      : "glass-card text-[var(--text-muted)] border border-[var(--border-main)] hover:border-[var(--primary)]/40 hover:text-[var(--text-main)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Post Count Indicator */}
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[var(--text-muted)] border-b border-[var(--border-main)]/60 pb-4">
            <span>
              Showing {paginatedPosts.length} of {filteredPosts.length} articles
            </span>
            {selectedCategory !== "All Articles" && (
              <span className="text-[var(--primary)]">
                Category: <strong>{selectedCategory}</strong>
              </span>
            )}
          </div>

          {/* Blog Cards Grid */}
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <BookOpen className="w-12 h-12 text-[var(--text-muted)] mx-auto opacity-50" />
              <h3 className="text-lg font-bold text-[var(--text-main)]">No articles found</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Try selecting a different category or clearing your search.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Articles");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-[var(--primary)] text-white text-xs font-bold rounded-full shadow-md hover:bg-[var(--primary-light)] transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedPosts.map((post, idx) => (
                <article
                  key={post.slug + idx}
                  className="rounded-2xl overflow-hidden glass-card border border-[var(--border-main)] hover:shadow-2xl hover:border-[var(--primary)]/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Thumbnail Image with Top-Left Badge */}
                    <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                      {/* Live site blue badge indicator */}
                      <div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-lg bg-[var(--primary)] text-white text-xs font-black flex items-center justify-center shadow-md shadow-black/30">
                        1
                      </div>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.endsWith("/images/slider-01.jpg")) {
                            target.src = "/images/slider-01.jpg";
                          } else {
                            target.style.display = "none";
                          }
                        }}
                      />

                      {/* Fallback pattern if image is hidden */}
                      <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center text-white/80 bg-gradient-to-br from-[#0c1322] to-[#122b39]">
                        <Sparkles className="w-8 h-8 text-cyan-400 mb-2 opacity-60" />
                        <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 space-y-3.5">
                      {/* Meta: Admin & Comments */}
                      <div className="flex items-center gap-4 text-xs font-medium text-[var(--text-muted)] border-b border-[var(--border-main)]/50 pb-3">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[var(--primary)]" />
                          <span>Admin : {post.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-[var(--primary)]" />
                          <span>Comments ({post.comments})</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-base sm:text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors duration-200 line-clamp-2 leading-snug">
                        <Link href={`/blog-detail.php?action=detail&id=${post.id}`}>{post.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed font-normal">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/blog-detail.php?action=detail&id=${post.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] group-hover:text-[var(--primary-light)] transition-colors"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl border border-[var(--border-main)] text-xs font-bold text-[var(--text-main)] hover:bg-[var(--primary)]/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      currentPage === pageNum
                        ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/25"
                        : "glass-card text-[var(--text-muted)] border border-[var(--border-main)] hover:border-[var(--primary)]/40 hover:text-[var(--text-main)]"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl border border-[var(--border-main)] text-xs font-bold text-[var(--text-main)] hover:bg-[var(--primary)]/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
