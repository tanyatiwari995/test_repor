"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919105267000?text=Hi%20Tenacious%20Hub%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/35 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 px-3.5 py-1.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold rounded-xl shadow-xl border border-black/10 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
