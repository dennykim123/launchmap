import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
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
    description: "예산 없이 초기 유저를 확보하는 실전 마케팅 전략 모음",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('launchmap-theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Mobile */}
        <MobileNav />

        {/* Desktop */}
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border py-8 mt-16">
              <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted space-y-2">
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
        </div>
      </body>
    </html>
  );
}
