"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { fetchPlan, getStageLabel, type SavedPlan } from "@/data/plans";
import PlanResult from "@/components/PlanResult";

export default function PlanDetailPage() {
  const params = useParams();
  const [plan, setPlan] = useState<SavedPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;
    fetchPlan(id).then((data) => {
      setPlan(data);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center text-muted">
        불러오는 중...
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <p className="text-muted mb-4">플랜을 찾을 수 없습니다.</p>
        <Link
          href="/plans"
          className="text-sm text-accent-light hover:underline"
        >
          저장 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const date = new Date(plan.createdAt);
  const dateStr = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          홈
        </Link>
        <span>/</span>
        <Link
          href="/plans"
          className="hover:text-foreground transition-colors"
        >
          저장된 플랜
        </Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-48">
          {plan.form.productName}
        </span>
      </nav>

      {/* Product Info */}
      <div className="rounded-xl border border-border bg-card p-6 mb-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold">{plan.form.productName}</h1>
          <span className="text-xs text-muted whitespace-nowrap">
            {dateStr}
          </span>
        </div>
        <p className="text-sm text-foreground/80 mb-4">
          {plan.form.productDescription}
        </p>
        <div className="flex items-center gap-3 flex-wrap text-xs">
          <span className="px-2 py-1 rounded-md border border-border text-muted">
            {getStageLabel(plan.form.stage)}
          </span>
          {plan.form.targetAudience && (
            <span className="px-2 py-1 rounded-md border border-border text-muted">
              {plan.form.targetAudience}
            </span>
          )}
          {plan.form.userCount && (
            <span className="text-muted">유저 {plan.form.userCount}명</span>
          )}
          <span className="text-muted">예산: {plan.form.budget}</span>
        </div>
      </div>

      <PlanResult data={plan} />
    </div>
  );
}
