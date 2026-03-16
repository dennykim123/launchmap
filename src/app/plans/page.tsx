"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPlans, removePlan, getStageLabel, type SavedPlan } from "@/data/plans";

export default function PlansPage() {
  const [plans, setPlans] = useState<SavedPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans().then((data) => {
      setPlans(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`"${name}" 플랜을 삭제하시겠습니까?`)) return;
    await removePlan(id);
    setPlans((prev) => prev.filter((p) => p.id !== id));
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center text-muted">
        불러오는 중...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-foreground">저장된 플랜</span>
      </nav>

      <header className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">저장된 플랜</h1>
          <p className="text-muted text-sm">
            {plans.length}개의 마케팅 플랜이 저장되어 있습니다.
          </p>
        </div>
        <Link
          href="/plan"
          className="px-4 py-2 text-sm font-medium rounded-lg text-white shrink-0"
          style={{ backgroundColor: "#7c3aed" }}
        >
          새 플랜 만들기
        </Link>
      </header>

      {plans.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">📋</p>
          <p className="text-muted mb-4">아직 저장된 플랜이 없습니다.</p>
          <Link
            href="/plan"
            className="inline-block px-4 py-2 text-sm font-medium rounded-lg text-white"
            style={{ backgroundColor: "#7c3aed" }}
          >
            첫 번째 플랜 만들기
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {plans.map((p) => {
            const date = new Date(p.createdAt);
            const dateStr = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
            const phaseCount = p.plan.phases.length;
            const actionCount = p.plan.phases.reduce(
              (sum, ph) => sum + ph.actions.length,
              0
            );

            return (
              <div
                key={p.id}
                className="rounded-xl border border-border bg-card hover:bg-card-hover transition-all overflow-hidden"
              >
                <Link href={`/plans/${p.id}`} className="block p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="min-w-0">
                      <h2 className="font-bold text-lg truncate">
                        {p.form.productName}
                      </h2>
                      <p className="text-sm text-muted line-clamp-1">
                        {p.form.productDescription}
                      </p>
                    </div>
                    <span className="text-xs text-muted whitespace-nowrap shrink-0">
                      {dateStr}
                    </span>
                  </div>

                  <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
                    {p.plan.summary}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs px-2 py-1 rounded-md border border-border text-muted">
                      {getStageLabel(p.form.stage)}
                    </span>
                    {p.form.targetAudience && (
                      <span className="text-xs px-2 py-1 rounded-md border border-border text-muted">
                        {p.form.targetAudience}
                      </span>
                    )}
                    <span className="text-xs text-muted">
                      {phaseCount} 단계 · {actionCount} 액션
                    </span>
                    <div className="flex gap-1 ml-auto">
                      {p.plan.channels.slice(0, 3).map((ch, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-1.5 py-0.5 rounded-full font-medium border"
                          style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="border-t border-border px-5 py-2 flex justify-end">
                  <button
                    onClick={() => handleDelete(p.id, p.form.productName)}
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
