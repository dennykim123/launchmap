"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";

const phases = [
  {
    label: "검증",
    icon: "🌱",
    slugs: ["validation", "user-research"],
  },
  {
    label: "첫 유저 확보",
    icon: "🎯",
    slugs: ["launch", "producthunt", "sales", "reddit"],
  },
  {
    label: "성장",
    icon: "🚀",
    slugs: ["seo", "llm-seo", "social-media", "content", "email", "free-tools"],
  },
  {
    label: "스케일",
    icon: "📈",
    slugs: ["ads", "influencer", "affiliates", "cro"],
  },
  {
    label: "기반",
    icon: "🏗",
    slugs: ["landing", "pricing", "misc"],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-border bg-card h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-4 h-14 flex items-center border-b border-border shrink-0">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-lg text-foreground group-hover:text-accent-light transition-colors">
            LaunchMap
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {/* Search */}
        <div className="px-1 pb-2">
          <Search />
        </div>

        <Link
          href="/"
          className={`block px-3 py-1.5 text-sm rounded-md transition-all ${
            pathname === "/"
              ? "bg-accent/10 text-accent-light font-medium"
              : "text-muted hover:text-foreground hover:bg-card-hover"
          }`}
        >
          홈
        </Link>

        <Link
          href="/plan"
          className={`block px-3 py-2 text-sm rounded-md font-medium transition-all ${
            pathname === "/plan" ? "text-white" : "text-white hover:opacity-90"
          }`}
          style={{ backgroundColor: "#7c3aed" }}
        >
          AI 마케팅 플랜
        </Link>

        <Link
          href="/plans"
          className={`block px-3 py-1.5 text-sm rounded-md transition-all ${
            pathname.startsWith("/plans")
              ? "bg-accent/10 text-accent-light font-medium"
              : "text-muted hover:text-foreground hover:bg-card-hover"
          }`}
        >
          저장된 플랜
        </Link>

        {/* Phase-grouped categories */}
        {phases.map((phase) => (
          <div key={phase.label}>
            <div className="pt-3 pb-1 px-3 flex items-center gap-1.5">
              <span className="text-xs">{phase.icon}</span>
              <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">
                {phase.label}
              </span>
            </div>
            {phase.slugs.map((slug) => {
              const cat = categories.find((c) => c.slug === slug);
              if (!cat) return null;
              const isActive = pathname === `/category/${slug}`;
              return (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  className={`block px-3 py-1.5 text-sm rounded-md transition-all ${
                    isActive
                      ? "bg-accent/10 text-accent-light font-medium"
                      : "text-muted hover:text-foreground hover:bg-card-hover"
                  }`}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border shrink-0">
        <ThemeToggle />
      </div>
    </aside>
  );
}
