"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("launchmap-theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("launchmap-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("launchmap-theme", "light");
    }
  };

  if (!mounted) return <div className="h-8" />;

  return (
    <button
      onClick={toggle}
      className="w-full px-3 py-2 text-xs text-muted hover:text-foreground hover:bg-card-hover border border-border rounded-md transition-all text-center"
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      {dark ? "라이트 모드" : "다크 모드"}
    </button>
  );
}
