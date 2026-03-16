"use client";

import { useState, useRef, useEffect } from "react";
import { categories, type Resource } from "@/data/categories";

interface SearchResult {
  resource: Resource;
  categoryTitle: string;
  sectionTitle: string;
  categorySlug: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    const lower = q.toLowerCase();
    const found: SearchResult[] = [];

    for (const cat of categories) {
      for (const sec of cat.sections) {
        for (const res of sec.resources) {
          const match =
            res.title.toLowerCase().includes(lower) ||
            (res.description || "").toLowerCase().includes(lower) ||
            (res.tag || "").includes(lower);
          if (match) {
            found.push({
              resource: res,
              categoryTitle: cat.title,
              sectionTitle: sec.title,
              categorySlug: cat.slug,
            });
          }
          if (found.length >= 8) break;
        }
        if (found.length >= 8) break;
      }
      if (found.length >= 8) break;
    }

    setResults(found);
    setOpen(found.length > 0);
  };

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        placeholder="리소스 검색..."
        className="w-full px-3 py-1.5 text-xs border border-border rounded-md bg-background text-foreground focus:outline-none focus:border-accent placeholder:text-muted"
      />
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 rounded-lg border border-border bg-card shadow-lg z-50 max-h-80 overflow-y-auto">
          {results.map((r, i) => (
            <a
              key={i}
              href={r.resource.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 hover:bg-card-hover transition-colors border-b border-border last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-foreground line-clamp-1">
                  {r.resource.title}
                </span>
                {r.resource.tag && (
                  <span className="text-[9px] px-1 py-0.5 rounded border border-border text-muted shrink-0">
                    {r.resource.tag}
                  </span>
                )}
              </div>
              {r.resource.description && (
                <p className="text-[11px] text-muted mt-0.5 line-clamp-1">
                  {r.resource.description}
                </p>
              )}
              <p className="text-[10px] text-muted/50 mt-0.5">
                {r.categoryTitle} &gt; {r.sectionTitle}
              </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
