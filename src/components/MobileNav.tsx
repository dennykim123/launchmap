"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import ThemeToggle from "./ThemeToggle";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-lg text-foreground"
            onClick={() => setOpen(false)}
          >
            LaunchMap
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1.5 text-sm text-muted hover:text-foreground border border-border rounded-md transition-all"
            aria-label="메뉴"
          >
            {open ? "닫기" : "메뉴"}
          </button>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="fixed inset-0 top-14 z-40 bg-background overflow-y-auto">
          <nav className="p-4 space-y-1">
            <Link
              href="/"
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm rounded-md font-medium text-white transition-all"
              style={{ backgroundColor: "#7c3aed" }}
            >
              AI 마케팅 플랜
            </Link>
            {categories.map((cat) => {
              const isActive = pathname === `/category/${cat.slug}`;
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-md transition-all ${
                    isActive
                      ? "bg-accent/10 text-accent-light font-medium"
                      : "text-muted hover:text-foreground hover:bg-card-hover"
                  }`}
                >
                  {cat.emoji} {cat.title}
                </Link>
              );
            })}
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
