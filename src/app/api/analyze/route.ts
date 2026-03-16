import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const { url } = await req.json();
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  // Fetch the page content
  let pageContent: string;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
        "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
      },
      redirect: "follow",
    });
    const html = await res.text();
    pageContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 12000);
  } catch {
    return NextResponse.json(
      { error: "URL을 가져올 수 없습니다. 직접 입력해주세요." },
      { status: 400 }
    );
  }

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 3000,
    system: `당신은 스타트업 분석 전문가입니다. URL에서 가져온 웹페이지를 심층 분석하여 제품 리포트를 작성합니다.
반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
모든 필드를 한국어로 작성하세요. 페이지에서 정보를 추출할 수 없는 필드는 추론하여 작성하세요.

{
  "productName": "제품/앱 이름",
  "productDescription": "제품이 하는 일 3~4문장으로 상세 설명",
  "targetAudience": "주요 타겟 고객층 (예: B2B SaaS 스타트업, 20대 게이머)",
  "stage": "idea | mvp | launched | growing",
  "detected": "App Store | Google Play | Steam | 랜딩페이지 | 기타",

  "analysis": {
    "oneLiner": "이 제품을 한 문장으로 요약",
    "category": "제품 카테고리 (예: 생산성 도구, 게임, 이커머스, 교육, 헬스케어)",
    "businessModel": "수익 모델 추정 (예: 구독, 프리미엄, 광고, 원타임 결제, 미확인)",
    "pricing": "가격 정보 (있으면 구체적으로, 없으면 '미확인')",

    "coreFeatures": ["핵심 기능 1", "핵심 기능 2", "핵심 기능 3", "핵심 기능 4", "핵심 기능 5"],
    "uniqueValue": "경쟁 제품 대비 차별화 포인트 1~2문장",

    "competitors": ["경쟁/유사 제품 1", "경쟁/유사 제품 2", "경쟁/유사 제품 3"],
    "marketSize": "타겟 시장 규모 추정 (예: 글로벌 프로젝트 관리 툴 시장 $7.6B)",

    "strengths": ["강점 1", "강점 2", "강점 3"],
    "weaknesses": ["약점/리스크 1", "약점/리스크 2"],

    "currentMarketing": ["현재 사용 중인 것으로 보이는 마케팅 채널 1", "채널 2"],
    "missingMarketing": ["아직 활용하지 않는 추천 마케팅 채널 1", "채널 2", "채널 3"],

    "quickWins": [
      "지금 바로 실행 가능한 마케팅 액션 1",
      "지금 바로 실행 가능한 마케팅 액션 2",
      "지금 바로 실행 가능한 마케팅 액션 3"
    ],

    "verdict": "이 제품의 마케팅 관점에서의 종합 평가 2~3문장. 가장 큰 기회와 주의할 점"
  }
}`,
    messages: [
      {
        role: "user",
        content: `URL: ${url}\n\n페이지 내용:\n${pageContent}`,
      },
    ],
  });

  const text =
    message.content[0].type === "text" ? message.content[0].text : "";

  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON");
    const result = JSON.parse(jsonMatch[0]);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "분석 결과를 파싱할 수 없습니다" },
      { status: 500 }
    );
  }
}
