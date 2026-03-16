import Anthropic from "@anthropic-ai/sdk";
import { categories } from "@/data/categories";
import { gameCategories } from "@/data/game-categories";
import { NextRequest, NextResponse } from "next/server";
import type { Category } from "@/data/categories";

export const maxDuration = 60;

const buildResourceContext = (cats: Category[]) => {
  return cats
    .map((cat) => {
      const resources = cat.sections
        .flatMap((sec) =>
          sec.resources.map(
            (r) =>
              `- [${r.tag || ""}] ${r.title}: ${r.description || ""} (${r.url})`,
          ),
        )
        .join("\n");
      return `## ${cat.emoji} ${cat.title}\n${cat.description}\n${resources}`;
    })
    .join("\n\n");
};

function isGameProduct(analysis: Record<string, unknown> | null, description: string): boolean {
  if (!analysis) {
    const gameKeywords = ["게임", "game", "steam", "플레이", "play store", "app store", "인디 게임", "모바일 게임", "위시리스트"];
    const lower = description.toLowerCase();
    return gameKeywords.some((k) => lower.includes(k));
  }
  const category = String(analysis.category || "").toLowerCase();
  const detected = String(analysis.detected || "").toLowerCase();
  return (
    category.includes("게임") ||
    category.includes("game") ||
    detected.includes("steam") ||
    detected.includes("play") ||
    !!analysis.gameConsulting
  );
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 },
    );
  }

  const body = await req.json();
  const {
    productName,
    productDescription,
    targetAudience,
    stage,
    userCount,
    budget,
    analysis,
  } = body;

  if (!productName || !productDescription) {
    return NextResponse.json(
      { error: "제품 이름과 설명은 필수입니다" },
      { status: 400 },
    );
  }

  const isGame = isGameProduct(analysis, productDescription);

  // Use the right resource database
  const resourceDb = isGame
    ? buildResourceContext(gameCategories)
    : buildResourceContext(categories);

  const gameInstructions = isGame
    ? `
## 중요: 이 제품은 게임입니다!
게임 마케팅 리소스 데이터베이스를 사용하여 게임에 특화된 플랜을 만드세요.
- Steam 위시리스트 전략, 트레일러, 커뮤니티(Discord), 인플루언서/스트리머, Steam Next Fest 등 게임 전용 채널을 우선 추천
- 일반 SaaS 마케팅 채널(SEO, 콜드 이메일 등)은 게임에 적합하지 않으므로 avoid에 포함
- Phase 1에는 반드시 게임 마케팅 특화 액션을 넣으세요 (스토어 페이지 최적화, 트레일러, 커뮤니티 구축 등)
`
    : "";

  const systemPrompt = `당신은 ${isGame ? "게임 마케팅" : "스타트업 마케팅"} 전문가이자 투자를 100번 이상 거절해본 시리얼 창업자입니다.
솔직하고 날카롭게 말합니다. 좋은 말만 하지 않습니다.

사용자의 제품 정보를 분석하고, 아래 리소스 데이터베이스를 기반으로 맞춤형 마케팅 파이프라인을 제안합니다.

## ${isGame ? "게임 마케팅" : "스타트업 마케팅"} 리소스 데이터베이스
${resourceDb}
${gameInstructions}

## 출력 규칙
1. 반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
2. 각 phase에 3~5개의 action을 포함하세요.
3. 각 action에는 반드시 리소스 데이터베이스에 있는 실제 URL을 포함하세요.
4. 제품의 특성, 타겟, 단계에 맞게 리소스를 선택하세요.
5. 한국어로 작성하세요.
6. avoid에는 구체적인 이유와 함께 "지금 하면 안 되는 것"을 3개 이상 포함하세요.

## JSON 형식
{
  "summary": "제품 현재 상황 진단 2~3문장. 날카롭게.",
  "phases": [
    {
      "title": "Phase 1: 단계 이름",
      "period": "1~2주",
      "description": "이 단계에서 해야 할 것 요약",
      "actions": [
        {
          "task": "구체적인 실행 항목",
          "why": "왜 이것을 해야 하는지",
          "resource_title": "리소스 제목",
          "resource_url": "https://...",
          "priority": "high" | "medium" | "low"
        }
      ]
    }
  ],
  "channels": ["추천 채널 1", "추천 채널 2"],
  "avoid": ["지금 절대 하면 안 되는 것 1 + 이유", "2 + 이유", "3 + 이유"]
}`;

  let analysisContext = "";
  if (analysis) {
    const gameConsultingContext = analysis.gameConsulting
      ? `\n- 트레일러 조언: ${analysis.gameConsulting.trailerAdvice || ""}\n- 위시리스트 전략: ${analysis.gameConsulting.wishlistStrategy || ""}\n- 커뮤니티 조언: ${analysis.gameConsulting.communityAdvice || ""}\n- 출시 타이밍: ${analysis.gameConsulting.launchTiming || ""}`
      : "";

    analysisContext = `

## 사전 분석 결과 (이 정보를 반드시 반영하여 더 정확한 플랜을 만드세요)
- 한줄 요약: ${analysis.oneLiner || ""}
- 카테고리: ${analysis.category || ""}
- 비즈니스 모델: ${analysis.businessModel || ""}
- 가격: ${analysis.pricing || ""}
- 핵심 기능: ${(analysis.coreFeatures || []).join(", ")}
- 차별화 포인트: ${analysis.uniqueValue || ""}
- 경쟁 제품: ${(analysis.competitors || []).join(", ")}
- 시장 규모: ${analysis.marketSize || ""}
- 강점: ${(analysis.strengths || []).join(", ")}
- 약점/리스크: ${(analysis.weaknesses || []).join(", ")}
- 현재 마케팅 채널: ${(analysis.currentMarketing || []).join(", ")}
- 미활용 추천 채널: ${(analysis.missingMarketing || []).join(", ")}
- 즉시 실행 가능 액션: ${(analysis.quickWins || []).join(", ")}
- 불편한 진실: ${analysis.hardTruth || ""}
- 하면 안 되는 것: ${(analysis.doNotDo || []).join(", ")}
- 종합 평가: ${analysis.verdict || ""}${gameConsultingContext}

중요: 미활용 추천 채널과 즉시 실행 가능 액션을 Phase 1에 우선적으로 반영하세요. 약점/리스크와 하면 안 되는 것은 avoid에 반영하세요.`;
  }

  const userMessage = `제 ${isGame ? "게임" : "제품"}을 분석하고 맞춤 마케팅 파이프라인을 만들어주세요.

제품명: ${productName}
제품 설명: ${productDescription}
타겟 고객: ${targetAudience || "미정"}
현재 단계: ${stage || "미정"}
현재 유저 수: ${userCount || "0"}
마케팅 예산: ${budget || "없음"}${analysisContext}`;

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON found");
    const plan = JSON.parse(jsonMatch[0]);
    return NextResponse.json(plan);
  } catch {
    return NextResponse.json(
      { error: "AI 응답 파싱 실패", raw: text },
      { status: 500 },
    );
  }
}
