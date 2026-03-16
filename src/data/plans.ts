export interface SavedPlan {
  id: string;
  createdAt: string;
  form: {
    productName: string;
    productDescription: string;
    targetAudience: string;
    stage: string;
    userCount: string;
    budget: string;
  };
  plan: {
    summary: string;
    phases: {
      title: string;
      period: string;
      description: string;
      actions: {
        task: string;
        why: string;
        resource_title: string;
        resource_url: string;
        priority: "high" | "medium" | "low";
      }[];
    }[];
    channels: string[];
    avoid: string[];
  };
}

const stageLabels: Record<string, string> = {
  idea: "아이디어",
  mvp: "MVP",
  launched: "런칭 완료",
  growing: "성장 중",
};

export function getStageLabel(stage: string): string {
  return stageLabels[stage] || stage;
}

// Server API helpers
export async function fetchPlans(): Promise<SavedPlan[]> {
  const res = await fetch("/api/plans");
  if (!res.ok) return [];
  return res.json();
}

export async function fetchPlan(id: string): Promise<SavedPlan | null> {
  const res = await fetch(`/api/plans/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export async function createPlan(
  form: SavedPlan["form"],
  plan: SavedPlan["plan"]
): Promise<SavedPlan> {
  const res = await fetch("/api/plans", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, plan }),
  });
  return res.json();
}

export async function removePlan(id: string): Promise<void> {
  await fetch(`/api/plans/${id}`, { method: "DELETE" });
}
