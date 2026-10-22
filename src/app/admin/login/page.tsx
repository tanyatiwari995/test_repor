"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Shield, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate secure login redirection to admin dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md glass-card border border-[var(--border-main)] rounded-3xl p-8 space-y-6 shadow-2xl">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-3 shadow-md">
            T
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-main)]">Tenacious Admin CMS</h1>
          <p className="text-xs text-[var(--text-muted)] font-medium">Protected portal for Content & Lead Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Admin Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tenacioushub.com"
                className="w-full pl-10 pr-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] text-sm placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text-main)] mb-2">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[var(--text-subtle)] absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-3 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-[var(--text-main)] text-sm placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[var(--primary)] text-white font-bold text-sm rounded-xl hover:bg-[var(--primary-light)] hover:shadow-lg hover:shadow-[var(--primary)]/25 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            Sign In to Portal
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-[11px] text-[var(--text-muted)] border-t border-[var(--border-main)] pt-4 flex items-center justify-center gap-1.5 font-medium">
          <Shield className="w-3.5 h-3.5 text-[var(--primary)]" />
          <span>Role-based access control & rate limited</span>
        </div>
      </div>
    </div>
  );
}
