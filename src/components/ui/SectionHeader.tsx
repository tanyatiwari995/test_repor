import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlightedText,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`space-y-5 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide 
          bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 shadow-sm
          dark:bg-white/10 dark:text-[var(--primary-light)] dark:border-white/15`}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--primary)] dark:bg-[var(--primary-light)] animate-gentle-pulse" />
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1]">
        {title}{" "}
        {highlightedText && (
          <span className="text-gradient">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-normal max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
