"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import ThemeToggle from "./ThemeToggle";

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
        <Link
          href="/"
          className={`block px-3 py-2 text-sm rounded-md transition-all ${
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

        <div className="pt-3 pb-1 px-3">
          <span className="text-xs font-medium text-muted uppercase tracking-wider">
            카테고리
          </span>
        </div>

        {categories.map((cat) => {
          const isActive = pathname === `/category/${cat.slug}`;
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`block px-3 py-1.5 text-sm rounded-md transition-all ${
                isActive
                  ? "bg-accent/10 text-accent-light font-medium"
                  : "text-muted hover:text-foreground hover:bg-card-hover"
              }`}
            >
              {cat.emoji} {cat.title}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border shrink-0">
        <ThemeToggle />
      </div>
    </aside>
  );
}
