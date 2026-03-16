"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-border hover:bg-card-hover transition-colors text-lg"
        aria-label="메뉴"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="absolute top-14 left-0 right-0 border-b border-border bg-background z-50 p-4">
          <nav className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-card rounded-md transition-all"
              >
                {cat.emoji} {cat.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
