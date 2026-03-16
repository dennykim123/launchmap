"use client";

import { useState } from "react";
import Link from "next/link";
import { createPlan, type SavedPlan } from "@/data/plans";
import PlanResult from "@/components/PlanResult";

interface Analysis {
  oneLiner: string;
  category: string;
  businessModel: string;
  pricing: string;
  coreFeatures: string[];
  uniqueValue: string;
  competitors: string[];
  marketSize: string;
  strengths: string[];
  weaknesses: string[];
  currentMarketing: string[];
  missingMarketing: string[];
  quickWins: string[];
  verdict: string;
}

interface AnalyzeData {
  productName: string;
  productDescription: string;
  targetAudience: string;
  stage: string;
  detected: string;
  analysis: Analysis;
}

export default function PlanPage() {
  const [form, setForm] = useState({
    productName: "",
    productDescription: "",
    targetAudience: "",
    stage: "mvp",
    userCount: "",
    budget: "없음",
  });
  const [analyzeUrl, setAnalyzeUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState<AnalyzeData | null>(null);
  const [saved, setSaved] = useState<SavedPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!analyzeUrl.trim()) return;
    setAnalyzing(true);
    setAnalysisData(null);
    setError("");
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: analyzeUrl.trim() }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setForm((prev) => ({
          ...prev,
          productName: data.productName || prev.productName,
          productDescription:
            data.productDescription || prev.productDescription,
          targetAudience: data.targetAudience || prev.targetAudience,
          stage: data.stage || prev.stage,
        }));
        setAnalysisData(data);
      }
    } catch {
      setError("링크 분석 중 오류가 발생했습니다");
    } finally {
      setAnalyzing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSaved(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        const result = await createPlan(form, data);
        setSaved(result);
      }
    } catch {
      setError("요청 중 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const a = analysisData?.analysis;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-foreground">마케팅 플랜 생성</span>
      </nav>

      <header className="mb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">마케팅 플랜 생성</h1>
          <Link
            href="/plans"
            className="text-sm text-accent-light hover:underline"
          >
            저장된 플랜 보기
          </Link>
        </div>
        <p className="text-muted">
          제품 정보를 입력하면 AI가 216개 리소스를 분석하여 맞춤 마케팅
          파이프라인을 제안합니다.
        </p>
      </header>

      {/* Link Analyzer */}
      <div className="rounded-xl border border-border bg-card p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium">링크로 자동 분석</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border text-muted">
            선택
          </span>
        </div>
        <p className="text-xs text-muted mb-3">
          App Store / Google Play / Steam / 랜딩페이지 링크를 넣으면 AI가 제품을
          심층 분석하고 정보를 자동으로 채워줍니다.
        </p>
        <div className="flex gap-2">
          <input
            type="url"
            value={analyzeUrl}
            onChange={(e) => setAnalyzeUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAnalyze())}
            placeholder="https://apps.apple.com/... 또는 제품 URL"
            className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
          />
          <button
            type="button"
            onClick={handleAnalyze}
            disabled={analyzing || !analyzeUrl.trim()}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-card-hover transition-all disabled:opacity-50 shrink-0"
          >
            {analyzing ? "분석 중..." : "분석"}
          </button>
        </div>
      </div>

      {/* Analysis Report */}
      {a && (
        <div className="rounded-xl border border-accent/30 bg-card mb-8 overflow-hidden">
          {/* Header */}
          <div className="p-5 border-b border-border">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: "#7c3aed", color: "#7c3aed" }}>
                {analysisData.detected}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted">
                {a.category}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-1">{analysisData.productName}</h2>
            <p className="text-sm text-muted">{a.oneLiner}</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="p-5">
              <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">비즈니스 모델</h3>
              <p className="text-sm font-medium">{a.businessModel}</p>
              <p className="text-xs text-muted mt-1">{a.pricing}</p>
            </div>
            <div className="p-5">
              <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">시장 규모</h3>
              <p className="text-sm">{a.marketSize}</p>
            </div>
          </div>

          {/* Core Features */}
          <div className="p-5 border-t border-border">
            <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">핵심 기능</h3>
            <div className="flex flex-wrap gap-2">
              {a.coreFeatures.map((f, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-lg border border-border text-foreground">
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Unique Value */}
          <div className="p-5 border-t border-border">
            <h3 className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">차별화 포인트</h3>
            <p className="text-sm">{a.uniqueValue}</p>
          </div>

          {/* Competitors */}
          <div className="p-5 border-t border-border">
            <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">경쟁 제품</h3>
            <div className="flex flex-wrap gap-2">
              {a.competitors.map((c, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-lg border border-border text-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths / Weaknesses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
            <div className="p-5">
              <h3 className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "#16a34a" }}>강점</h3>
              <ul className="space-y-1.5">
                {a.strengths.map((s, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span style={{ color: "#16a34a" }}>+</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5">
              <h3 className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "#dc2626" }}>약점 / 리스크</h3>
              <ul className="space-y-1.5">
                {a.weaknesses.map((w, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <span style={{ color: "#dc2626" }}>-</span> {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marketing Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
            <div className="p-5">
              <h3 className="text-xs font-semibold text-muted mb-3 uppercase tracking-wider">현재 마케팅</h3>
              <ul className="space-y-1.5">
                {a.currentMarketing.map((m, i) => (
                  <li key={i} className="text-sm text-muted">{m}</li>
                ))}
              </ul>
            </div>
            <div className="p-5">
              <h3 className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "#7c3aed" }}>미활용 채널 (추천)</h3>
              <ul className="space-y-1.5">
                {a.missingMarketing.map((m, i) => (
                  <li key={i} className="text-sm" style={{ color: "#7c3aed" }}>{m}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Wins */}
          <div className="p-5 border-t border-border">
            <h3 className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "#f59e0b" }}>지금 바로 실행 가능한 액션</h3>
            <ol className="space-y-2">
              {a.quickWins.map((w, i) => (
                <li key={i} className="text-sm flex gap-2">
                  <span className="font-bold text-xs mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f59e0b", color: "white" }}>
                    {i + 1}
                  </span>
                  {w}
                </li>
              ))}
            </ol>
          </div>

          {/* Verdict */}
          <div className="p-5 border-t border-border" style={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}>
            <h3 className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "#7c3aed" }}>종합 평가</h3>
            <p className="text-sm leading-relaxed">{a.verdict}</p>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 mb-12">
        {analysisData && (
          <p className="text-xs text-muted -mb-2">
            아래 정보를 확인/수정한 후 마케팅 플랜을 생성하세요.
          </p>
        )}
        <div>
          <label className="block text-sm font-medium mb-1.5">
            제품 이름 <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <input
            type="text"
            required
            value={form.productName}
            onChange={(e) => update("productName", e.target.value)}
            placeholder="예: LaunchPad"
            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5">
            제품 설명 <span style={{ color: "#dc2626" }}>*</span>
          </label>
          <textarea
            required
            rows={3}
            value={form.productDescription}
            onChange={(e) => update("productDescription", e.target.value)}
            placeholder="예: 소상공인을 위한 AI 마케팅 자동화 플랫폼."
            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">타겟 고객</label>
            <input
              type="text"
              value={form.targetAudience}
              onChange={(e) => update("targetAudience", e.target.value)}
              placeholder="예: B2B SaaS, 마케팅 에이전시"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">현재 단계</label>
            <select
              value={form.stage}
              onChange={(e) => update("stage", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            >
              <option value="idea">아이디어만 있음</option>
              <option value="mvp">MVP / 프로토타입</option>
              <option value="launched">런칭 완료</option>
              <option value="growing">성장 중 (유저 있음)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">현재 유저 수</label>
            <input
              type="text"
              value={form.userCount}
              onChange={(e) => update("userCount", e.target.value)}
              placeholder="예: 0, 50, 500"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">마케팅 예산</label>
            <select
              value={form.budget}
              onChange={(e) => update("budget", e.target.value)}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            >
              <option value="없음">없음 (시간만 투자)</option>
              <option value="월 10만원 이하">월 10만원 이하</option>
              <option value="월 10~50만원">월 10~50만원</option>
              <option value="월 50~200만원">월 50~200만원</option>
              <option value="월 200만원 이상">월 200만원 이상</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-sm font-medium rounded-lg transition-all disabled:opacity-50"
          style={{
            backgroundColor: loading ? "#71717a" : "#7c3aed",
            color: "white",
          }}
        >
          {loading
            ? "AI가 분석 중... (30초 정도 걸립니다)"
            : "마케팅 플랜 생성하기"}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div
          className="rounded-lg border p-4 mb-8 text-sm"
          style={{ borderColor: "#ef4444", color: "#dc2626" }}
        >
          {error}
        </div>
      )}

      {/* Saved notice + Result */}
      {saved && (
        <>
          <div className="rounded-lg border border-accent/30 bg-accent/5 p-3 mb-8 flex items-center justify-between">
            <span className="text-sm text-foreground/80">
              플랜이 자동 저장되었습니다.
            </span>
            <Link
              href="/plans"
              className="text-sm text-accent-light hover:underline"
            >
              저장 목록 보기
            </Link>
          </div>
          <PlanResult data={saved} />
        </>
      )}
    </div>
  );
}
