"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Search, Edit3, Trash2, Eye, CheckCircle2 } from "lucide-react";

const initialPosts = [
  { id: "1", title: "The Future of AI SEO: How Generative Engines Are Redefining Organic Rankings", category: "SEO", status: "Published", date: "Oct 1, 2026" },
  { id: "2", title: "Scaling BPO Operations: 5 Key Metrics Every Growing Company Must Track", category: "BPO", status: "Published", date: "Sep 28, 2026" },
  { id: "3", title: "Why Next.js & React Server Components Dominate E-Commerce Performance", category: "Engineering", status: "Draft", date: "Oct 2, 2026" },
];

export default function AdminBlogCmsPage() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-6 sm:p-10 space-y-8 transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-main)] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-xs text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Dashboard
            </Link>
          </div>
          <h1 className="text-3xl font-extrabold text-[var(--text-main)]">CMS Article Manager</h1>
        </div>
        <button
          type="button"
          onClick={() => alert("Tiptap Rich-Text Editor initialized for new article.")}
          className="px-4 py-2 bg-[var(--primary)] text-white font-bold text-xs rounded-xl shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-4 h-4" />
          Create New Article
        </button>
      </div>

      <div className="glass-card border border-[var(--border-main)] rounded-3xl p-6 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--border-main)] text-xs text-[var(--text-muted)] uppercase">
              <tr>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-main)]">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-[var(--glass-bg-hover)] transition-colors">
                  <td className="py-4 px-4 font-bold text-[var(--text-main)] max-w-md">{post.title}</td>
                  <td className="py-4 px-4 text-[var(--text-muted)] font-medium">{post.category}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      post.status === 'Published' ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25' : 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-xs text-[var(--text-muted)]">{post.date}</td>
                  <td className="py-4 px-4 flex items-center gap-2">
                    <button className="p-2 glass-card hover:bg-[var(--glass-bg-hover)] border border-[var(--border-main)] rounded-lg text-[var(--text-main)] transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
