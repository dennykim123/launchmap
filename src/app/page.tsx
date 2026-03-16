import Link from "next/link";
import { categories, getTotalResourceCount } from "@/data/categories";
import { communityInsights } from "@/data/insights";

export default function Home() {
  const totalResources = getTotalResourceCount();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-accent-light">Launch</span>Map
        </h1>
        <p className="text-xl text-muted mb-2">스타트업 마케팅 로드맵</p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
          SaaS, 앱, 스타트업의 첫{" "}
          <span className="text-accent-light font-semibold">10</span> /{" "}
          <span className="text-accent-light font-semibold">100</span> /{" "}
          <span className="text-accent-light font-semibold">1,000</span>명
          유저를 확보하기 위한 실전 마케팅 가이드
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            📂 <strong className="text-foreground">{categories.length}</strong>{" "}
            카테고리
          </span>
          <span className="flex items-center gap-1.5">
            🔗 <strong className="text-foreground">{totalResources}</strong>{" "}
            리소스
          </span>
          <span className="flex items-center gap-1.5">🌍 한국어 + 글로벌</span>
        </div>
      </section>

      {/* Journey Map */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="text-3xl mb-2">🌱</div>
            <h3 className="font-bold text-lg mb-1">0 → 10명</h3>
            <p className="text-sm text-muted">
              아이디어 검증, 콜드 아웃리치, 커뮤니티 참여
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-3">
              {["validation", "sales", "reddit"].map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                return cat ? (
                  <Link
                    key={slug}
                    href={`/category/${slug}`}
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent-light hover:bg-accent/20 transition-colors"
                  >
                    {cat.emoji} {cat.title}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
          <div className="rounded-xl border border-accent/30 bg-card p-6 text-center ring-1 ring-accent/20">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-bold text-lg mb-1">10 → 100명</h3>
            <p className="text-sm text-muted">
              런칭 플랫폼, SEO, 콘텐츠 마케팅, 소셜 미디어
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-3">
              {["launch", "producthunt", "seo", "social-media"].map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                return cat ? (
                  <Link
                    key={slug}
                    href={`/category/${slug}`}
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent-light hover:bg-accent/20 transition-colors"
                  >
                    {cat.emoji} {cat.title}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-bold text-lg mb-1">100 → 1,000명</h3>
            <p className="text-sm text-muted">
              유료 광고, 이메일 마케팅, 레퍼럴, 전환 최적화
            </p>
            <div className="flex flex-wrap gap-1.5 justify-center mt-3">
              {["ads", "email", "affiliates", "cro"].map((slug) => {
                const cat = categories.find((c) => c.slug === slug);
                return cat ? (
                  <Link
                    key={slug}
                    href={`/category/${slug}`}
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent-light hover:bg-accent/20 transition-colors"
                  >
                    {cat.emoji} {cat.title}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Community Insights */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          💬 커뮤니티 인사이트
          <span className="text-xs font-normal text-muted bg-card px-2 py-0.5 rounded-full border border-border">
            HN
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {communityInsights.map((insight, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-4 hover:border-accent/30 transition-colors"
            >
              <h3 className="font-semibold text-sm mb-2 text-accent-light">
                {insight.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* All Categories Grid */}
      <section id="all">
        <h2 className="text-2xl font-bold mb-6">📚 전체 카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const resourceCount = cat.sections.reduce(
              (total, sec) => total + sec.resources.length,
              0
            );
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group rounded-xl border border-border bg-card p-5 hover:bg-card-hover hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  <span className="text-xs text-muted bg-background px-2 py-0.5 rounded-full">
                    {resourceCount}개
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-accent-light transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted">{cat.subtitle}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
