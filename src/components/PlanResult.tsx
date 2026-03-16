"use client";

import { useState } from "react";
import type { SavedPlan } from "@/data/plans";

export default function PlanResult({ data }: { data: SavedPlan }) {
  const { plan } = data;
  const [pipelineOpen, setPipelineOpen] = useState(false);

  // Extract top 3 HIGH priority actions from phase 1
  const phase1 = plan.phases[0];
  const topActions = phase1
    ? phase1.actions
        .filter((a) => a.priority === "high")
        .slice(0, 3)
    : [];

  // If we don't have 3 high-priority actions, fill from medium
  if (topActions.length < 3 && phase1) {
    const mediumActions = phase1.actions
      .filter((a) => a.priority === "medium")
      .slice(0, 3 - topActions.length);
    topActions.push(...mediumActions);
  }

  // Remaining phases (all after phase 1)
  const remainingPhases = plan.phases.slice(1);

  return (
    <div className="space-y-8">
      {/* 1. 진단 */}
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
        <h2 className="font-bold text-lg mb-2">현재 상황 진단</h2>
        <p className="text-sm text-foreground/80 leading-relaxed">
          {plan.summary}
        </p>
        {plan.channels.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {plan.channels.map((ch, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full border border-border text-muted"
              >
                {ch}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 2. 이번 주 집중할 3가지 */}
      <div>
        <h3 className="font-bold text-lg mb-4">이번 주 집중할 3가지</h3>
        <div className="space-y-3">
          {topActions.map((action, i) => (
            <div
              key={i}
              className="rounded-xl border-2 bg-card p-5"
              style={{ borderColor: "#7c3aed" }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: "#7c3aed" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">{action.task}</h4>
                  <p className="text-xs text-muted mb-3">{action.why}</p>
                  <a
                    href={action.resource_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-accent-light hover:underline"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${(() => {
                        try {
                          return new URL(action.resource_url).hostname;
                        } catch {
                          return "";
                        }
                      })()}&sz=16`}
                      alt=""
                      width={12}
                      height={12}
                      className="rounded"
                    />
                    {action.resource_title} ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 하지 마세요 */}
      {plan.avoid && plan.avoid.length > 0 && (
        <div
          className="rounded-xl border-2 p-6"
          style={{ borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.03)" }}
        >
          <h3
            className="font-bold text-lg mb-4"
            style={{ color: "#dc2626" }}
          >
            지금 하면 안 되는 것
          </h3>
          <ul className="space-y-3">
            {plan.avoid.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span
                  className="text-lg shrink-0 mt-[-2px]"
                  style={{ color: "#ef4444" }}
                >
                  ✕
                </span>
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 4. 허상 지표 vs 진짜 지표 */}
      <div>
        <h3 className="font-bold text-lg mb-4">허상 지표 vs 진짜 지표</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className="rounded-xl border-2 p-5"
            style={{ borderColor: "#ef4444", backgroundColor: "rgba(239, 68, 68, 0.03)" }}
          >
            <h4
              className="text-xs font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "#dc2626" }}
            >
              보면 안 되는 지표
            </h4>
            <ul className="space-y-2">
              {["페이지뷰", "팔로워 수", "좋아요", "앱 다운로드 수"].map(
                (metric, i) => (
                  <li key={i} className="text-sm text-muted flex gap-2">
                    <span style={{ color: "#ef4444" }}>✕</span>
                    {metric}
                  </li>
                )
              )}
            </ul>
          </div>
          <div
            className="rounded-xl border-2 p-5"
            style={{ borderColor: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.03)" }}
          >
            <h4
              className="text-xs font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "#16a34a" }}
            >
              봐야 하는 지표
            </h4>
            <ul className="space-y-2">
              {[
                "Activation Rate (첫 핵심 액션 완료율)",
                "Retention (주간 재방문율)",
                "NPS (추천 의향 점수)",
                "재구매율 / 구독 유지율",
              ].map((metric, i) => (
                <li key={i} className="text-sm text-foreground flex gap-2">
                  <span style={{ color: "#22c55e" }}>✓</span>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 5. 2주 뒤 판단 기준 */}
      <div
        className="rounded-xl border-2 p-6"
        style={{ borderColor: "#7c3aed", backgroundColor: "rgba(124, 58, 237, 0.05)" }}
      >
        <h3
          className="font-bold text-lg mb-4"
          style={{ color: "#7c3aed" }}
        >
          2주 후 이 질문에 답하세요
        </h3>
        <ol className="space-y-3">
          {[
            "타겟 유저 5명과 직접 대화했나?",
            "1개 채널에서 반복 가능한 결과를 봤나?",
            "계속할 근거가 데이터로 있나?",
          ].map((q, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ backgroundColor: "#7c3aed" }}
              >
                {i + 1}
              </span>
              <span className="text-foreground/90 pt-0.5">{q}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* 6. 전체 파이프라인 */}
      {remainingPhases.length > 0 && (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <button
            type="button"
            onClick={() => setPipelineOpen(!pipelineOpen)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-card-hover transition-all"
          >
            <div>
              <h3 className="font-bold text-sm">전체 파이프라인</h3>
              <p className="text-xs text-muted mt-0.5">
                {remainingPhases.length}개 추가 단계
              </p>
            </div>
            <span
              className="text-muted text-lg transition-transform"
              style={{
                transform: pipelineOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              ▼
            </span>
          </button>

          {pipelineOpen && (
            <div className="border-t border-border p-5 space-y-6">
              {remainingPhases.map((phase, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: "#6b7280" }}
                    >
                      {i + 2}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm">{phase.title}</h4>
                      <span className="text-[10px] text-muted">
                        {phase.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-muted mb-3 ml-10">
                    {phase.description}
                  </p>
                  <ul className="space-y-2 ml-10">
                    {phase.actions.map((action, j) => (
                      <li
                        key={j}
                        className="rounded-lg border border-border p-3"
                      >
                        <div className="flex items-start gap-2 mb-1">
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded-full font-medium border shrink-0 mt-0.5"
                            style={
                              action.priority === "high"
                                ? { borderColor: "#ef4444", color: "#dc2626" }
                                : action.priority === "medium"
                                  ? { borderColor: "#f59e0b", color: "#d97706" }
                                  : { borderColor: "#6b7280", color: "#6b7280" }
                            }
                          >
                            {action.priority === "high"
                              ? "필수"
                              : action.priority === "medium"
                                ? "추천"
                                : "선택"}
                          </span>
                          <span className="text-xs font-medium">
                            {action.task}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted ml-9">
                          {action.why}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
