import Anthropic from "@anthropic-ai/sdk";
import { categories } from "@/data/categories";
import { NextRequest, NextResponse } from "next/server";

const buildResourceContext = () => {
  return categories
    .map((cat) => {
      const resources = cat.sections
        .flatMap((sec) =>
          sec.resources.map(
            (r) =>
              `- [${r.tag || ""}] ${r.title}: ${r.description || ""} (${r.url})`
          )
        )
        .join("\n");
      return `## ${cat.emoji} ${cat.title}\n${cat.description}\n${resources}`;
    })
    .join("\n\n");
};

const SYSTEM_PROMPT = `당신은 스타트업 마케팅 전문가입니다. 사용자의 제품 정보를 분석하고, 아래 리소스 데이터베이스를 기반으로 맞춤형 마케팅 파이프라인을 제안합니다.

## 리소스 데이터베이스
${buildResourceContext()}

## 출력 규칙
1. 반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
2. 각 phase에 3~5개의 action을 포함하세요.
3. 각 action에는 반드시 리소스 데이터베이스에 있는 실제 URL을 포함하세요.
4. 제품의 특성, 타겟, 단계에 맞게 리소스를 선택하세요.
5. 한국어로 작성하세요.

## JSON 형식
{
  "summary": "제품에 대한 1줄 분석",
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
  "avoid": ["이 제품에는 맞지 않는 전략과 그 이유"]
}`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const { productName, productDescription, targetAudience, stage, userCount, budget } = body;

  if (!productName || !productDescription) {
    return NextResponse.json(
      { error: "제품 이름과 설명은 필수입니다" },
      { status: 400 }
    );
  }

  const userMessage = `제 제품을 분석하고 맞춤 마케팅 파이프라인을 만들어주세요.

제품명: ${productName}
제품 설명: ${productDescription}
타겟 고객: ${targetAudience || "미정"}
현재 단계: ${stage || "미정"}
현재 유저 수: ${userCount || "0"}
마케팅 예산: ${budget || "없음"}`;

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
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
      { status: 500 }
    );
  }
}
