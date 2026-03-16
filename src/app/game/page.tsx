import Link from "next/link";
import { gameCategories, getGameResourceCount } from "@/data/game-categories";

const phases = [
  {
    icon: "🎯",
    title: "개발 중",
    description: "출시 전부터 위시리스트를 모으고 커뮤니티를 만드세요.",
    slugs: ["game-community", "game-social", "game-trailer"],
    color: "#22c55e",
  },
  {
    icon: "🚀",
    title: "런칭 준비",
    description: "스토어 최적화, 프레스킷, 페스티벌 참가로 인지도를 극대화하세요.",
    slugs: ["game-store-optimization", "game-press", "game-wishlist", "game-festival"],
    color: "#7c3aed",
  },
  {
    icon: "📈",
    title: "출시 후 성장",
    description: "인플루언서, 광고, 라이브 서비스로 매출을 확장하세요.",
    slugs: ["game-influencer", "game-ua", "game-live-service"],
    color: "#f59e0b",
  },
  {
    icon: "🌍",
    title: "스케일",
    description: "퍼블리셔 파트너십, 글로벌 현지화로 시장을 넓히세요.",
    slugs: ["game-publisher", "game-localization"],
    color: "#2563eb",
  },
];

export default function GameHome() {
  const totalResources = getGameResourceCount();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">🎮</span>
          <h1 className="text-3xl font-bold">게임 마케팅</h1>
        </div>
        <p className="text-lg text-muted max-w-xl mb-4">
          인디 게임부터 모바일 게임까지 — 위시리스트 확보, 런칭, 성장을 위한
          게임 전용 마케팅 가이드{" "}
          <strong className="text-foreground">{totalResources}개</strong>
        </p>
        <Link
          href="/plan"
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#7c3aed" }}
        >
          내 게임 마케팅 플랜 만들기
        </Link>
      </section>

      {/* Roadmap */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">게임 개발 단계별 로드맵</h2>
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.icon}
                  </span>
                  <h3 className="font-bold text-lg">{phase.title}</h3>
                </div>
                <p className="text-sm text-muted mb-4 ml-11">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2 ml-11">
                  {phase.slugs.map((slug) => {
                    const cat = gameCategories.find((c) => c.slug === slug);
                    if (!cat) return null;
                    const count = cat.sections.reduce(
                      (t, s) => t + s.resources.length,
                      0
                    );
                    return (
                      <Link
                        key={slug}
                        href={`/game/${slug}`}
                        className="group flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-lg hover:border-accent/30 hover:bg-card-hover transition-all"
                      >
                        <span className="text-foreground group-hover:text-accent-light transition-colors">
                          {cat.title}
                        </span>
                        <span className="text-[10px] text-muted">{count}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">전체 카테고리</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {gameCategories.map((cat) => {
            const count = cat.sections.reduce(
              (t, s) => t + s.resources.length,
              0
            );
            return (
              <Link
                key={cat.slug}
                href={`/game/${cat.slug}`}
                className="group flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border hover:border-accent/30 hover:bg-card-hover transition-all"
              >
                <span>{cat.emoji}</span>
                <span className="text-sm text-foreground group-hover:text-accent-light transition-colors truncate">
                  {cat.title}
                </span>
                <span className="text-[10px] text-muted ml-auto shrink-0">
                  {count}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
