"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 active:scale-95 ${
        theme === "dark"
          ? "bg-white/10 hover:bg-white/20 text-amber-300 border border-white/20 shadow-md shadow-black/20"
          : "bg-white hover:bg-zinc-100 text-indigo-600 border border-zinc-300/90 shadow-sm hover:shadow"
      } ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/10" />
        )}
      </motion.div>
    </button>
  );
}
