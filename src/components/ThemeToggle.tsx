"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "mb-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label="Byt mellan mörkt och ljust tema"
      className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-1.5 text-muted transition-colors hover:text-accent"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <span className="relative h-4 w-7 rounded-full bg-border">
        <span
          className={`absolute top-0.5 h-3 w-3 rounded-full bg-accent transition-all ${
            isLight ? "left-3.5" : "left-0.5"
          }`}
        />
      </span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5a.6.6 0 0 0-.7-.8A9.5 9.5 0 1 0 21.3 15.4a.6.6 0 0 0-.8-.7Z" />
      </svg>
    </button>
  );
}
