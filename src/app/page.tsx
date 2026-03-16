import Link from "next/link";
import { categories, getTotalResourceCount } from "@/data/categories";

const phases = [
  {
    icon: "🌱",
    title: "0 → 10명",
    label: "검증",
    description: "아이디어가 돈이 되는지 확인하고, 첫 번째 유저를 직접 찾아가세요.",
    slugs: ["validation", "user-research", "sales"],
    color: "#22c55e",
  },
  {
    icon: "🚀",
    title: "10 → 100명",
    label: "런칭",
    description: "제품을 세상에 알리고, 유기적 채널로 초기 트랙션을 만드세요.",
    slugs: ["launch", "producthunt", "reddit", "social-media"],
    color: "#7c3aed",
  },
  {
    icon: "📈",
    title: "100 → 1,000명",
    label: "성장",
    description: "검증된 채널을 확장하고, 반복 가능한 성장 엔진을 구축하세요.",
    slugs: ["seo", "llm-seo", "content", "email", "ads"],
    color: "#f59e0b",
  },
  {
    icon: "🏗",
    title: "기반 다지기",
    label: "기반",
    description: "전환율, 가격, 포지셔닝 — 성장의 기반이 되는 요소들을 최적화하세요.",
    slugs: ["landing", "pricing", "cro", "free-tools"],
    color: "#6b7280",
  },
];

export default function Home() {
  const totalResources = getTotalResourceCount();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero — AI Plan CTA */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          마케팅, 어디서부터 시작해야 할지 모르겠다면
        </h1>
        <p className="text-lg text-muted mb-6 max-w-xl">
          제품 정보만 입력하세요. AI가{" "}
          <strong className="text-foreground">{totalResources}개</strong>의
          검증된 마케팅 리소스를 분석하고, 당신의 제품에 맞는 실행 계획을
          만들어 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/plan"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#7c3aed" }}
          >
            내 제품 마케팅 플랜 만들기
          </Link>
          <Link
            href="#roadmap"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-card-hover transition-all"
          >
            직접 둘러보기
          </Link>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mb-16">
        <h2 className="text-xl font-bold mb-6">성장 단계별 로드맵</h2>
        <div className="space-y-4">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">{phase.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4 ml-11">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2 ml-11">
                  {phase.slugs.map((slug) => {
                    const cat = categories.find((c) => c.slug === slug);
                    if (!cat) return null;
                    const count = cat.sections.reduce(
                      (t, s) => t + s.resources.length,
                      0
                    );
                    return (
                      <Link
                        key={slug}
                        href={`/category/${slug}`}
                        className="group flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-lg hover:border-accent/30 hover:bg-card-hover transition-all"
                      >
                        <span className="text-foreground group-hover:text-accent-light transition-colors">
                          {cat.title}
                        </span>
                        <span className="text-[10px] text-muted">
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick picks — most popular categories */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-2">지금 가장 많이 읽히는 주제</h2>
        <p className="text-sm text-muted mb-6">
          2025년 스타트업 마케팅에서 가장 주목받는 카테고리
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {["llm-seo", "reddit", "free-tools", "validation"].map((slug) => {
            const cat = categories.find((c) => c.slug === slug);
            if (!cat) return null;
            const count = cat.sections.reduce(
              (t, s) => t + s.resources.length,
              0
            );
            return (
              <Link
                key={slug}
                href={`/category/${slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:bg-card-hover hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{cat.emoji}</span>
                  <span className="text-xs text-muted">{count}개</span>
                </div>
                <h3 className="font-bold mb-1 group-hover:text-accent-light transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted">{cat.description.slice(0, 60)}...</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All categories — compact */}
      <section id="all">
        <h2 className="text-xl font-bold mb-4">전체 카테고리</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {categories.map((cat) => {
            const count = cat.sections.reduce(
              (t, s) => t + s.resources.length,
              0
            );
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
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
