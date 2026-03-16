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

const STORAGE_KEY = "launchmap-plans";

export function getPlans(): SavedPlan[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function savePlan(form: SavedPlan["form"], plan: SavedPlan["plan"]): SavedPlan {
  const plans = getPlans();
  const saved: SavedPlan = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    createdAt: new Date().toISOString(),
    form,
    plan,
  };
  plans.unshift(saved);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
  return saved;
}

export function getPlanById(id: string): SavedPlan | undefined {
  return getPlans().find((p) => p.id === id);
}

export function deletePlan(id: string): void {
  const plans = getPlans().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
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
