"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Search, Filter, Phone, Mail, CheckCircle2, Clock, UserCheck, AlertCircle } from "lucide-react";

const initialLeads = [
  { id: "LD-1092", name: "Rahul Sharma", email: "rahul@auraretail.com", phone: "+91 98765 12345", company: "Aura Retail Solutions", service: "Website & E-Commerce", budget: "₹50,000 - ₹1,00,000", status: "New", notes: "Requested call back regarding custom payment gateway." },
  { id: "LD-1091", name: "Sunita Verma", email: "sunita@vermahealth.com", phone: "+91 91052 00000", company: "Verma Healthcare", service: "SEO & Growth Marketing", budget: "₹25,000 - ₹50,000", status: "Contacted", notes: "Sent proposal draft; awaiting follow-up." },
  { id: "LD-1090", name: "Amit Patel", email: "amit@patellogistics.in", phone: "+91 94120 11111", company: "Patel Logistics", service: "Back Office Outsourcing", budget: "Custom Proposal", status: "Qualified", notes: "Req 5 virtual assistants for night shifts." },
  { id: "LD-1089", name: "Karan Mehta", email: "karan@mehtacapital.com", phone: "+91 99999 88888", company: "Mehta Capital", service: "Lead Management CRM", budget: "₹25,000", status: "Won", notes: "Signed agreement. Project kick-off started." },
];

const statuses = ["All", "New", "Contacted", "Qualified", "Won", "Lost"];

export default function LeadCrmPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState(initialLeads);

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = filterStatus === "All" || l.status === filterStatus;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase()) ||
      l.service.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateStatus = (id: string, newStatus: string) => {
    setLeads(
      leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-6 sm:p-10 space-y-8 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[var(--border-main)] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/admin/dashboard" className="text-xs text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Dashboard
            </Link>
          </div>
          <h1 className="text-3xl font-extrabold text-[var(--text-main)]">Lead CRM Pipeline</h1>
        </div>
        <button
          type="button"
          onClick={() => alert("CSV Export feature initialized.")}
          className="px-4 py-2 glass-card hover:bg-[var(--glass-bg-hover)] text-[var(--text-main)] font-semibold text-xs rounded-xl border border-[var(--border-main)] transition-all shadow-sm"
        >
          Export CSV
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card border border-[var(--border-main)] rounded-2xl p-4 shadow-sm">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[var(--text-subtle)] absolute left-3 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by name or company..."
            className="w-full pl-9 pr-4 py-2 bg-[var(--bg-main)]/60 border border-[var(--border-main)] rounded-xl text-xs text-[var(--text-main)] placeholder-[var(--text-subtle)] focus:outline-none focus:border-[var(--primary)]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterStatus === s
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] hover:bg-[var(--glass-bg-hover)] hover:text-[var(--text-main)] border border-[var(--border-main)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Pipeline Table */}
      <div className="glass-card border border-[var(--border-main)] rounded-3xl p-6 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--border-main)] text-xs text-[var(--text-muted)] uppercase">
              <tr>
                <th className="py-3 px-4">Lead ID</th>
                <th className="py-3 px-4">Name & Contact</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Service</th>
                <th className="py-3 px-4">Budget</th>
                <th className="py-3 px-4">Notes</th>
                <th className="py-3 px-4">Status Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-main)]">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[var(--glass-bg-hover)] transition-colors">
                  <td className="py-4 px-4 font-mono text-xs text-[var(--primary)] font-bold">{lead.id}</td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="font-bold text-[var(--text-main)]">{lead.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{lead.email} | {lead.phone}</div>
                  </td>
                  <td className="py-4 px-4 text-[var(--text-main)] font-medium">{lead.company}</td>
                  <td className="py-4 px-4 text-[var(--text-main)]">{lead.service}</td>
                  <td className="py-4 px-4 text-[var(--text-muted)]">{lead.budget}</td>
                  <td className="py-4 px-4 text-xs text-[var(--text-muted)] max-w-xs">{lead.notes}</td>
                  <td className="py-4 px-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className="bg-[var(--bg-main)] border border-[var(--border-main)] rounded-lg px-2.5 py-1 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] font-medium"
                    >
                      <option value="New" className="bg-[var(--bg-card)] text-[var(--text-main)]">New</option>
                      <option value="Contacted" className="bg-[var(--bg-card)] text-[var(--text-main)]">Contacted</option>
                      <option value="Qualified" className="bg-[var(--bg-card)] text-[var(--text-main)]">Qualified</option>
                      <option value="Won" className="bg-[var(--bg-card)] text-[var(--text-main)]">Won</option>
                      <option value="Lost" className="bg-[var(--bg-card)] text-[var(--text-main)]">Lost</option>
                    </select>
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
