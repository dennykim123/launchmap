"use client";

import { useState } from "react";
import Link from "next/link";

interface Action {
  task: string;
  why: string;
  resource_title: string;
  resource_url: string;
  priority: "high" | "medium" | "low";
}

interface Phase {
  title: string;
  period: string;
  description: string;
  actions: Action[];
}

interface Plan {
  summary: string;
  phases: Phase[];
  channels: string[];
  avoid: string[];
}

const priorityStyles: Record<string, React.CSSProperties> = {
  high: { borderColor: "#ef4444", color: "#dc2626" },
  medium: { borderColor: "#f59e0b", color: "#d97706" },
  low: { borderColor: "#6b7280", color: "#6b7280" },
};

const priorityLabels: Record<string, string> = {
  high: "필수",
  medium: "추천",
  low: "선택",
};

export default function PlanPage() {
  const [form, setForm] = useState({
    productName: "",
    productDescription: "",
    targetAudience: "",
    stage: "mvp",
    userCount: "",
    budget: "없음",
  });
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setPlan(null);

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
        setPlan(data);
      }
    } catch {
      setError("요청 중 오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

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
        <h1 className="text-3xl font-bold mb-2">마케팅 플랜 생성</h1>
        <p className="text-muted">
          제품 정보를 입력하면 AI가 216개 리소스를 분석하여 맞춤 마케팅
          파이프라인을 제안합니다.
        </p>
      </header>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 mb-12">
        <div>
          <label className="block text-sm font-medium mb-1.5">
            제품 이름 <span className="text-red-500">*</span>
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
            제품 설명 <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={form.productDescription}
            onChange={(e) => update("productDescription", e.target.value)}
            placeholder="예: 소상공인을 위한 AI 마케팅 자동화 플랫폼. 하나의 입력으로 20개 이상의 채널에 맞춤 콘텐츠를 자동 생성하고 배포합니다."
            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent resize-none"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">
              타겟 고객
            </label>
            <input
              type="text"
              value={form.targetAudience}
              onChange={(e) => update("targetAudience", e.target.value)}
              placeholder="예: B2B SaaS, 마케팅 에이전시"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              현재 단계
            </label>
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
            <label className="block text-sm font-medium mb-1.5">
              현재 유저 수
            </label>
            <input
              type="text"
              value={form.userCount}
              onChange={(e) => update("userCount", e.target.value)}
              placeholder="예: 0, 50, 500"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-card text-foreground focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">
              마케팅 예산
            </label>
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
          {loading ? "AI가 분석 중... (30초 정도 걸립니다)" : "마케팅 플랜 생성하기"}
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

      {/* Plan Result */}
      {plan && (
        <div className="space-y-8">
          {/* Summary */}
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <h2 className="font-bold text-lg mb-2">분석 결과</h2>
            <p className="text-sm text-foreground/80">{plan.summary}</p>
          </div>

          {/* Recommended Channels */}
          <div>
            <h3 className="font-bold text-sm text-muted mb-2">
              추천 채널
            </h3>
            <div className="flex flex-wrap gap-2">
              {plan.channels.map((ch, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full border border-border text-foreground"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Phases */}
          {plan.phases.map((phase, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: "#7c3aed" }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg">{phase.title}</h3>
                  <span className="text-xs text-muted">{phase.period}</span>
                </div>
              </div>
              <p className="text-sm text-muted mb-4 ml-11">
                {phase.description}
              </p>
              <ul className="space-y-2 ml-11">
                {phase.actions.map((action, j) => (
                  <li
                    key={j}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex items-start gap-2 mb-1">
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-medium border shrink-0 mt-0.5"
                        style={priorityStyles[action.priority] || {}}
                      >
                        {priorityLabels[action.priority] || action.priority}
                      </span>
                      <span className="text-sm font-medium">{action.task}</span>
                    </div>
                    <p className="text-xs text-muted mb-2 ml-10">
                      {action.why}
                    </p>
                    <a
                      href={action.resource_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-10 inline-flex items-center gap-1.5 text-xs text-accent-light hover:underline"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${(() => { try { return new URL(action.resource_url).hostname; } catch { return ""; } })()}&sz=16`}
                        alt=""
                        width={12}
                        height={12}
                        className="rounded"
                      />
                      {action.resource_title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Avoid */}
          {plan.avoid && plan.avoid.length > 0 && (
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-bold text-sm mb-3" style={{ color: "#dc2626" }}>
                이 제품에는 맞지 않는 전략
              </h3>
              <ul className="space-y-2">
                {plan.avoid.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted flex gap-2"
                  >
                    <span>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
