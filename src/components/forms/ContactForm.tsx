"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
    _hp: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData._hp) {
      // Honeypot caught spam
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          service: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-[var(--text-main)]">
          Message Sent Successfully!
        </h3>
        <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
          Thank you for contacting Tenacious Hub. Our team will review your requirements and get back to you within 2 business hours.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
                consent: false,
                _hp: "",
              });
              setStatus("idle");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white text-sm font-bold rounded-full shadow-lg shadow-[var(--primary)]/20 hover:bg-[var(--primary-light)] transition-all cursor-pointer"
          >
            Send Another Message
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl glass-card border border-[var(--glass-border)] shadow-xl">
      <h2 className="text-2xl font-extrabold text-[var(--text-main)] mb-2">
        Send Us a Message
      </h2>
      <p className="text-sm text-[var(--text-muted)] mb-8 font-normal">
        Fill in the form and we&apos;ll get back to you within 2 business hours.
      </p>

      {status === "error" && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Submission Error</p>
            <p className="text-xs mt-0.5 opacity-90">{errorMessage}</p>
          </div>
        </div>
      )}

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        action="/api/contact"
        method="POST"
        className="space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="rahul@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
              Phone / WhatsApp
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
              Subject
            </label>
            <div className="relative">
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm cursor-pointer dark:bg-[#12131a] dark:text-white"
              >
                <option value="" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  Select a topic…
                </option>
                <option value="web-development" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  Website / App Development
                </option>
                <option value="seo-marketing" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  SEO & Digital Marketing
                </option>
                <option value="bpo-outsourcing" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  BPO / Outsourcing
                </option>
                <option value="pricing" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  Pricing Enquiry
                </option>
                <option value="careers" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  Careers
                </option>
                <option value="other" className="bg-white text-slate-900 dark:bg-[#161822] dark:text-white">
                  Other
                </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-bold text-[var(--text-main)] mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, goals, or question…"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-[var(--border-main)] bg-[var(--bg-main)] text-[var(--text-main)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-colors text-sm resize-none"
          />
        </div>

        {/* Honeypot (hidden — spam protection) */}
        <input
          type="text"
          name="_hp"
          value={formData._hp}
          onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="flex items-start gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-0.5 w-4 h-4 accent-[var(--primary)] rounded cursor-pointer"
          />
          <label htmlFor="contact-consent" className="text-xs text-[var(--text-muted)] leading-relaxed font-normal cursor-pointer select-none">
            I consent to Tenacious Hub storing my submitted information to respond to my enquiry, as described in the{" "}
            <Link href="/legal/privacy" className="text-[var(--primary)] underline hover:text-[var(--primary-light)] transition-colors">
              Privacy Policy
            </Link>.
          </label>
        </div>

        <button
          id="contact-submit-btn"
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white font-bold rounded-full shadow-xl shadow-[var(--primary)]/25 hover:bg-[var(--primary-light)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed transition-all text-sm cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
