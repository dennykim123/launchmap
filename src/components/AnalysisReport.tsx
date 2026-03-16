/* eslint-disable @typescript-eslint/no-explicit-any */

export default function AnalysisReport({ data }: { data: any }) {
  const a = data.analysis;
  if (!a) return null;

  const competitors = a.competitors || [];
  const positioning = a.positioning || {};
  const branding = a.branding || {};
  const appStore = a.appStoreData || {};
  const hasAppStoreData =
    appStore.rating || appStore.reviewCount || appStore.categoryRank;
  const gameConsulting = a.gameConsulting || null;

  return (
    <div className="rounded-xl border border-accent/30 bg-card mb-8 overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
          >
            {data.detected}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted">
            {a.category}
          </span>
        </div>
        <h2 className="text-xl font-bold mb-1">{data.productName}</h2>
        <p className="text-sm text-muted">{a.oneLiner}</p>
      </div>

      {/* Hard Truth — callout box */}
      {a.hardTruth && (
        <div
          className="p-5 border-t border-border"
          style={{ backgroundColor: "rgba(245, 158, 11, 0.06)" }}
        >
          <div
            className="rounded-lg border-2 p-4"
            style={{ borderColor: "#f59e0b" }}
          >
            <h3
              className="text-xs font-semibold mb-2 uppercase tracking-wider"
              style={{ color: "#d97706" }}
            >
              불편한 진실
            </h3>
            <p className="text-sm leading-relaxed">{a.hardTruth}</p>
          </div>
        </div>
      )}

      {/* Do Not Do — red list */}
      {(a.doNotDo || []).length > 0 && (
        <div className="p-5 border-t border-border">
          <div
            className="rounded-lg border-2 p-4"
            style={{ borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.03)" }}
          >
            <h3
              className="text-xs font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "#dc2626" }}
            >
              지금 절대 하면 안 되는 것
            </h3>
            <ul className="space-y-2">
              {a.doNotDo.map((item: string, i: number) => (
                <li key={i} className="text-sm flex gap-2">
                  <span style={{ color: "#ef4444" }} className="shrink-0">
                    ✕
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Vanity vs Real Metrics — 2 columns */}
      {((a.vanityMetrics || []).length > 0 ||
        (a.realMetrics || []).length > 0) && (
        <div className="p-5 border-t border-border">
          <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
            허상 지표 vs 진짜 지표
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              className="rounded-lg border p-4"
              style={{ borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.03)" }}
            >
              <p
                className="text-[10px] font-semibold mb-2 uppercase tracking-wider"
                style={{ color: "#dc2626" }}
              >
                의미 없는 지표
              </p>
              <ul className="space-y-1.5">
                {(a.vanityMetrics || []).map((m: string, i: number) => (
                  <li key={i} className="text-sm text-muted flex gap-2">
                    <span style={{ color: "#ef4444" }}>✕</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-lg border p-4"
              style={{ borderColor: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.03)" }}
            >
              <p
                className="text-[10px] font-semibold mb-2 uppercase tracking-wider"
                style={{ color: "#16a34a" }}
              >
                봐야 하는 지표
              </p>
              <ul className="space-y-1.5">
                {(a.realMetrics || []).map((m: string, i: number) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span style={{ color: "#22c55e" }}>✓</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Business + Market */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
        <div className="p-5">
          <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
            비즈니스 모델
          </h3>
          <p className="text-sm font-medium">{a.businessModel}</p>
          <p className="text-xs text-muted mt-1">{a.pricing}</p>
        </div>
        <div className="p-5">
          <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
            시장
          </h3>
          <p className="text-sm">{a.marketSize}</p>
          {a.marketTrend && (
            <p className="text-xs text-muted mt-1">{a.marketTrend}</p>
          )}
        </div>
      </div>

      {/* App Store Data */}
      {hasAppStoreData && (
        <div className="border-t border-border">
          <div className="p-5">
            <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
              스토어 데이터
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {appStore.rating && (
                <div>
                  <p className="text-lg font-bold">{appStore.rating}</p>
                  <p className="text-[10px] text-muted">평점</p>
                </div>
              )}
              {appStore.reviewCount && (
                <div>
                  <p className="text-lg font-bold">{appStore.reviewCount}</p>
                  <p className="text-[10px] text-muted">리뷰 수</p>
                </div>
              )}
              {appStore.categoryRank && (
                <div>
                  <p className="text-lg font-bold">{appStore.categoryRank}</p>
                  <p className="text-[10px] text-muted">카테고리 순위</p>
                </div>
              )}
              {appStore.updateFrequency && (
                <div>
                  <p className="text-lg font-bold">
                    {appStore.updateFrequency}
                  </p>
                  <p className="text-[10px] text-muted">업데이트 주기</p>
                </div>
              )}
            </div>
            {appStore.recentReviews && (
              <p className="text-xs text-muted mt-3">
                {appStore.recentReviews}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Core Features */}
      <div className="p-5 border-t border-border">
        <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
          핵심 기능
        </h3>
        <div className="flex flex-wrap gap-2">
          {(a.coreFeatures || []).map((f: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-lg border border-border text-foreground"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Unique Value */}
      <div className="p-5 border-t border-border">
        <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
          차별화 포인트
        </h3>
        <p className="text-sm">{a.uniqueValue}</p>
      </div>

      {/* Competitors — rich format */}
      <div className="p-5 border-t border-border">
        <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
          경쟁 제품 비교
        </h3>
        <div className="space-y-2">
          {competitors.map((c: any, i: number) => {
            const name = typeof c === "string" ? c : c.name;
            const comparison = typeof c === "string" ? "" : c.comparison;
            return (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg border border-border"
              >
                <span className="text-sm font-medium shrink-0 min-w-20">
                  {name}
                </span>
                {comparison && (
                  <span className="text-xs text-muted">{comparison}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Positioning */}
      {positioning.current && (
        <div className="p-5 border-t border-border">
          <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
            포지셔닝
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg border border-border">
              <p className="text-[10px] text-muted mb-1">현재</p>
              <p className="text-sm">{positioning.current}</p>
            </div>
            {positioning.ideal && (
              <div
                className="p-3 rounded-lg border"
                style={{
                  borderColor: "#7c3aed",
                  backgroundColor: "rgba(124,58,237,0.03)",
                }}
              >
                <p className="text-[10px] mb-1" style={{ color: "#7c3aed" }}>
                  추천
                </p>
                <p className="text-sm">{positioning.ideal}</p>
              </div>
            )}
            {positioning.tagline && (
              <p className="text-sm text-muted italic">
                &ldquo;{positioning.tagline}&rdquo;
              </p>
            )}
          </div>
        </div>
      )}

      {/* Branding */}
      {branding.tone && (
        <div className="p-5 border-t border-border">
          <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
            브랜딩 분석
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
            <div className="p-3 rounded-lg border border-border">
              <p className="text-[10px] text-muted mb-1">톤 & 매너</p>
              <p className="text-sm">{branding.tone}</p>
            </div>
            <div className="p-3 rounded-lg border border-border">
              <p className="text-[10px] text-muted mb-1">비주얼 스타일</p>
              <p className="text-sm">{branding.visualStyle}</p>
            </div>
            <div className="p-3 rounded-lg border border-border">
              <p className="text-[10px] text-muted mb-1">브랜드 성숙도</p>
              <p className="text-sm">{branding.brandMaturity}</p>
            </div>
          </div>
          {(branding.improvements || []).length > 0 && (
            <div>
              <p className="text-[10px] text-muted mb-2">개선 제안</p>
              <ul className="space-y-1">
                {branding.improvements.map((imp: string, i: number) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span style={{ color: "#7c3aed" }}>→</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* SWOT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
        <div className="p-5">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#16a34a" }}
          >
            강점 (S)
          </h3>
          <ul className="space-y-1.5">
            {(a.strengths || []).map((s: string, i: number) => (
              <li key={i} className="text-sm flex gap-2">
                <span style={{ color: "#16a34a" }}>+</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#dc2626" }}
          >
            약점 (W)
          </h3>
          <ul className="space-y-1.5">
            {(a.weaknesses || []).map((w: string, i: number) => (
              <li key={i} className="text-sm flex gap-2">
                <span style={{ color: "#dc2626" }}>-</span> {w}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
        <div className="p-5">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#2563eb" }}
          >
            기회 (O)
          </h3>
          <ul className="space-y-1.5">
            {(a.opportunities || []).map((o: string, i: number) => (
              <li key={i} className="text-sm flex gap-2">
                <span style={{ color: "#2563eb" }}>◆</span> {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#d97706" }}
          >
            위협 (T)
          </h3>
          <ul className="space-y-1.5">
            {(a.threats || []).map((t: string, i: number) => (
              <li key={i} className="text-sm flex gap-2">
                <span style={{ color: "#d97706" }}>▲</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marketing Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
        <div className="p-5">
          <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">
            현재 마케팅
          </h3>
          <ul className="space-y-1.5">
            {(a.currentMarketing || []).map((m: string, i: number) => (
              <li key={i} className="text-sm text-muted">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#7c3aed" }}
          >
            미활용 채널 (추천)
          </h3>
          <ul className="space-y-1.5">
            {(a.missingMarketing || []).map((m: string, i: number) => (
              <li key={i} className="text-sm" style={{ color: "#7c3aed" }}>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Strategy */}
      {a.contentStrategy && (
        <div className="p-5 border-t border-border">
          <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
            콘텐츠 전략 제안
          </h3>
          <p className="text-sm">{a.contentStrategy}</p>
        </div>
      )}

      {/* Quick Wins */}
      <div className="p-5 border-t border-border">
        <h3
          className="text-xs font-semibold mb-3 uppercase tracking-wider"
          style={{ color: "#f59e0b" }}
        >
          지금 바로 실행 가능한 액션
        </h3>
        <ol className="space-y-2">
          {(a.quickWins || []).map((w: string, i: number) => (
            <li key={i} className="text-sm flex gap-2">
              <span
                className="font-bold text-xs mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "#f59e0b", color: "white" }}
              >
                {i + 1}
              </span>
              {w}
            </li>
          ))}
        </ol>
      </div>

      {/* Game Consulting */}
      {gameConsulting && (
        <div className="p-5 border-t border-border">
          <h3
            className="text-xs font-semibold mb-3 uppercase tracking-wider"
            style={{ color: "#7c3aed" }}
          >
            게임 마케팅 컨설팅
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {gameConsulting.trailerAdvice && (
              <div className="p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted mb-1">트레일러 조언</p>
                <p className="text-sm">{gameConsulting.trailerAdvice}</p>
              </div>
            )}
            {gameConsulting.wishlistStrategy && (
              <div className="p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted mb-1">
                  위시리스트 전략
                </p>
                <p className="text-sm">{gameConsulting.wishlistStrategy}</p>
              </div>
            )}
            {gameConsulting.communityAdvice && (
              <div className="p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted mb-1">커뮤니티 구축</p>
                <p className="text-sm">{gameConsulting.communityAdvice}</p>
              </div>
            )}
            {gameConsulting.launchTiming && (
              <div className="p-3 rounded-lg border border-border">
                <p className="text-[10px] text-muted mb-1">출시 타이밍</p>
                <p className="text-sm">{gameConsulting.launchTiming}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Verdict */}
      <div
        className="p-5 border-t border-border"
        style={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}
      >
        <h3
          className="text-xs font-semibold mb-2 uppercase tracking-wider"
          style={{ color: "#7c3aed" }}
        >
          종합 평가
        </h3>
        <p className="text-sm leading-relaxed">{a.verdict}</p>
      </div>

      {/* Two Week Test — purple callout at bottom */}
      {a.twoWeekTest && (
        <div
          className="p-5 border-t border-border"
          style={{ backgroundColor: "rgba(124, 58, 237, 0.08)" }}
        >
          <div
            className="rounded-lg border-2 p-4"
            style={{ borderColor: "#7c3aed" }}
          >
            <h3
              className="text-xs font-semibold mb-2 uppercase tracking-wider"
              style={{ color: "#7c3aed" }}
            >
              2주 안에 검증하세요
            </h3>
            <p className="text-sm leading-relaxed">{a.twoWeekTest}</p>
          </div>
        </div>
      )}
    </div>
  );
}
