"use client";

import Link from "next/link";
import { Users, FileText, TrendingUp, Search, MessageSquare, CheckCircle, Clock, ArrowRight, Shield } from "lucide-react";

const stats = [
  { label: "New Leads (This Week)", value: "28", icon: Users, change: "+14%" },
  { label: "Quote Requests", value: "12", icon: FileText, change: "+8%" },
  { label: "SEO Audit Requests", value: "45", icon: Search, change: "+32%" },
  { label: "Conversion Rate", value: "4.8%", icon: TrendingUp, change: "+1.2%" },
];

const recentLeads = [
  { id: "LD-1092", name: "Rahul Sharma", company: "Aura Retail Solutions", service: "Website & E-Commerce", budget: "₹50,000 - ₹1,00,000", status: "New", date: "Today 2:15 PM" },
  { id: "LD-1091", name: "Sunita Verma", company: "Verma Healthcare", service: "SEO & Growth Marketing", budget: "₹25,000 - ₹50,000", status: "Contacted", date: "Today 11:30 AM" },
  { id: "LD-1090", name: "Amit Patel", company: "Patel Logistics", service: "Back Office Outsourcing", budget: "Custom Proposal", status: "Qualified", date: "Yesterday" },
  { id: "LD-1089", name: "Karan Mehta", company: "Mehta Capital", service: "Lead Management CRM", budget: "₹25,000", status: "Won", date: "2 days ago" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-6 sm:p-10 space-y-8 transition-colors">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-main)] pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-[var(--text-main)]">CRM & CMS Dashboard</h1>
          <p className="text-xs text-[var(--text-muted)] font-medium">Tenacious Hub Private Limited Portal</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="px-4 py-2 bg-[var(--primary)] text-white font-semibold text-xs rounded-xl shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] transition-all"
          >
            Lead CRM Pipeline
          </Link>
          <Link
            href="/admin/blog"
            className="px-4 py-2 glass-card hover:bg-[var(--glass-bg-hover)] text-[var(--text-main)] font-semibold text-xs rounded-xl border border-[var(--border-main)] transition-all shadow-sm"
          >
            Manage Blog Posts
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="glass-card border border-[var(--border-main)] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)] font-medium">{s.label}</span>
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
                <s.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-[var(--text-main)]">{s.value}</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads Table */}
      <div className="glass-card border border-[var(--border-main)] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[var(--text-main)]">Recent Inbound Leads</h2>
          <Link href="/admin/leads" className="text-xs font-bold text-[var(--primary)] hover:underline flex items-center gap-1">
            View All Pipeline
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--border-main)] text-xs text-[var(--text-muted)] uppercase">
              <tr>
                <th className="py-3 px-4">Lead ID</th>
                <th className="py-3 px-4">Contact</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Budget</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-main)]">
              {recentLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[var(--glass-bg-hover)] transition-colors">
                  <td className="py-4 px-4 font-mono text-xs text-[var(--primary)] font-bold">{lead.id}</td>
                  <td className="py-4 px-4 font-semibold text-[var(--text-main)]">{lead.name}</td>
                  <td className="py-4 px-4 text-[var(--text-main)] font-medium">{lead.company}</td>
                  <td className="py-4 px-4 text-[var(--text-main)]">{lead.service}</td>
                  <td className="py-4 px-4 text-[var(--text-muted)]">{lead.budget}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      lead.status === 'New' ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/25' :
                      lead.status === 'Contacted' ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25' :
                      lead.status === 'Qualified' ? 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/25' :
                      'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-xs text-[var(--text-muted)] font-medium">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
