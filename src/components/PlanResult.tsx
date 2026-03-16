import type { SavedPlan } from "@/data/plans";

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

export default function PlanResult({ data }: { data: SavedPlan }) {
  const { plan } = data;

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
        <h2 className="font-bold text-lg mb-2">분석 결과</h2>
        <p className="text-sm text-foreground/80">{plan.summary}</p>
      </div>

      {/* Recommended Channels */}
      <div>
        <h3 className="font-bold text-sm text-muted mb-2">추천 채널</h3>
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
          <p className="text-sm text-muted mb-4 ml-11">{phase.description}</p>
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
                <p className="text-xs text-muted mb-2 ml-10">{action.why}</p>
                <a
                  href={action.resource_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-10 inline-flex items-center gap-1.5 text-xs text-accent-light hover:underline"
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
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Avoid */}
      {plan.avoid && plan.avoid.length > 0 && (
        <div className="rounded-xl border border-border p-6">
          <h3
            className="font-bold text-sm mb-3"
            style={{ color: "#dc2626" }}
          >
            이 제품에는 맞지 않는 전략
          </h3>
          <ul className="space-y-2">
            {plan.avoid.map((item, i) => (
              <li key={i} className="text-sm text-muted flex gap-2">
                <span>✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
