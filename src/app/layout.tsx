import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { categories } from "@/data/categories";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaunchMap - 스타트업 마케팅 로드맵",
  description:
    "SaaS, 앱, 스타트업의 첫 10 / 100 / 1,000명 유저를 확보하기 위한 실전 마케팅 가이드",
  openGraph: {
    title: "LaunchMap - 스타트업 마케팅 로드맵",
    description:
      "예산 없이 초기 유저를 확보하는 실전 마케팅 전략 모음",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-xl">🗺️</span>
                <span className="font-bold text-lg text-foreground group-hover:text-accent-light transition-colors">
                  LaunchMap
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="px-3 py-1.5 text-sm text-muted hover:text-foreground hover:bg-card rounded-md transition-all"
                  >
                    {cat.emoji} {cat.title}
                  </Link>
                ))}
                <Link
                  href="/#all"
                  className="px-3 py-1.5 text-sm text-accent-light hover:text-accent hover:bg-card rounded-md transition-all"
                >
                  전체 보기
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-border py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted space-y-2">
              <p>
                Based on{" "}
                <a
                  href="https://github.com/EdoStra/Marketing-for-Founders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light hover:underline"
                >
                  Marketing for Founders
                </a>{" "}
                by Edoardo Stradella (CC BY-SA 4.0)
              </p>
              <p>
                LaunchMap — 스타트업 마케팅 로드맵 |{" "}
                <a
                  href="https://lpad.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light hover:underline"
                >
                  LaunchPad
                </a>{" "}
                패밀리
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
