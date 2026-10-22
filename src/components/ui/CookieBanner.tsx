"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "th_cookie_consent";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  function saveConsent(c: ConsentState) {
    localStorage.setItem(
      COOKIE_KEY,
      JSON.stringify({ ...c, savedAt: new Date().toISOString() })
    );
    // Inject GA4 if analytics accepted
    if (c.analytics && typeof window !== "undefined") {
      const gaId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
      if (gaId && !document.getElementById("gtag-script")) {
        const s = document.createElement("script");
        s.id = "gtag-script";
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(s);
        const s2 = document.createElement("script");
        s2.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`;
        document.head.appendChild(s2);
      }
    }
    setVisible(false);
  }

  function acceptAll() {
    const c = { necessary: true, analytics: true, marketing: true };
    setConsent(c);
    saveConsent(c);
  }

  function saveChoices() {
    saveConsent(consent);
  }

  function rejectAll() {
    const c = { necessary: true, analytics: false, marketing: false };
    setConsent(c);
    saveConsent(c);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[90]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-[#0b132b] border border-white/15 rounded-2xl shadow-2xl p-5 text-white">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-4 h-4 text-primary" />
                </div>
                <h2 className="font-bold text-sm">We use cookies</h2>
              </div>
              <button
                onClick={rejectAll}
                aria-label="Reject all and close"
                className="p-1 rounded-lg text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-200 leading-relaxed mb-4 font-normal">
              We use cookies to improve your experience, analyse traffic, and personalise content. You can manage your preferences or{" "}
              <Link href="/legal/cookies" className="text-[var(--primary)] underline hover:text-[var(--primary-light)] font-semibold transition-colors">
                read our cookie policy
              </Link>.
            </p>

            {/* Expandable preferences */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-medium transition-colors mb-3"
            >
              {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              Manage preferences
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2.5 mb-4 pb-4 border-b border-white/10">
                    {/* Necessary (always on) */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Necessary</p>
                        <p className="text-[10px] text-zinc-300 font-medium">Required for the site to function</p>
                      </div>
                      <div className="w-10 h-5 rounded-full bg-[var(--primary)] flex items-center justify-end pr-0.5 cursor-not-allowed opacity-80">
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </div>
                    </div>
                    {/* Analytics */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Analytics</p>
                        <p className="text-[10px] text-zinc-300 font-medium">Google Analytics 4 traffic insights</p>
                      </div>
                      <button
                        id="cookie-analytics-toggle"
                        onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                        className={`w-10 h-5 rounded-full flex items-center transition-colors ${consent.analytics ? "bg-[var(--primary)] justify-end pr-0.5" : "bg-white/20 justify-start pl-0.5"}`}
                        aria-pressed={consent.analytics}
                        aria-label="Toggle analytics cookies"
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                    {/* Marketing */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Marketing</p>
                        <p className="text-[10px] text-zinc-300 font-medium">Facebook Pixel, Meta Ads personalisation</p>
                      </div>
                      <button
                        id="cookie-marketing-toggle"
                        onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                        className={`w-10 h-5 rounded-full flex items-center transition-colors ${consent.marketing ? "bg-[var(--primary)] justify-end pr-0.5" : "bg-white/20 justify-start pl-0.5"}`}
                        aria-pressed={consent.marketing}
                        aria-label="Toggle marketing cookies"
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action buttons */}
            <div className="flex gap-2">
              {expanded ? (
                <button
                  id="cookie-save-choices-btn"
                  onClick={saveChoices}
                  className="flex-1 py-2.5 text-xs font-bold rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors shadow-sm"
                >
                  Save Choices
                </button>
              ) : (
                <button
                  id="cookie-reject-btn"
                  onClick={rejectAll}
                  className="flex-1 py-2.5 text-xs font-bold rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors shadow-sm"
                >
                  Reject All
                </button>
              )}
              <button
                id="cookie-accept-all-btn"
                onClick={acceptAll}
                className="flex-1 py-2.5 text-xs font-bold rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary-light)] transition-colors shadow-md"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
