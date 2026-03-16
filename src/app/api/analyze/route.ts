import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
      "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
    },
    redirect: "follow",
    signal: AbortSignal.timeout(10000),
  });
  const html = await res.text();
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function searchWeb(query: string): Promise<string> {
  try {
    const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
      signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();
    // Extract search result snippets
    const snippets = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 4000);
    return snippets;
  } catch {
    return "";
  }
}

function detectSource(url: string) {
  if (url.includes("apps.apple.com")) return "appstore";
  if (url.includes("play.google.com")) return "playstore";
  if (url.includes("store.steampowered.com")) return "steam";
  return "website";
}

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

  const source = detectSource(url);

  // 1) Fetch main page
  let mainContent: string;
  try {
    mainContent = (await fetchPage(url)).slice(0, 10000);
  } catch {
    return NextResponse.json(
      { error: "URL을 가져올 수 없습니다. 직접 입력해주세요." },
      { status: 400 }
    );
  }

  // 2) Extract product name hint from content (first 500 chars)
  const nameHint = mainContent.slice(0, 500);

  // 3) Parallel: search for reviews, competitors, market data
  const [reviewSearch, competitorSearch, marketSearch] = await Promise.all([
    searchWeb(`${nameHint.slice(0, 80)} review 2024 2025`),
    searchWeb(`${nameHint.slice(0, 80)} alternatives competitors vs`),
    searchWeb(`${nameHint.slice(0, 80)} market size industry analysis`),
  ]);

  // 4) Build context
  const sourceLabel =
    source === "appstore"
      ? "App Store"
      : source === "playstore"
        ? "Google Play"
        : source === "steam"
          ? "Steam"
          : "웹사이트";

  const fullContext = `## 제품 페이지 (${sourceLabel})
URL: ${url}

${mainContent}

## 웹 검색: 리뷰 및 평판
${reviewSearch.slice(0, 3000)}

## 웹 검색: 경쟁 제품 및 대안
${competitorSearch.slice(0, 3000)}

## 웹 검색: 시장 및 산업 분석
${marketSearch.slice(0, 3000)}`;

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: `당신은 10년 경력의 스타트업 투자심사역이자 마케팅 컨설턴트입니다.
제품 페이지와 웹 검색 결과를 종합 분석하여 투자 보고서 수준의 제품 분석 리포트를 작성합니다.

반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
모든 필드를 한국어로 작성하세요. 웹 검색 결과에서 실제 데이터를 찾아 인용하세요.
추측할 때는 "[추정]"을 붙이세요.

{
  "productName": "제품/앱 이름",
  "productDescription": "제품이 하는 일 3~4문장으로 상세하게",
  "targetAudience": "주요 타겟 고객층",
  "stage": "idea | mvp | launched | growing",
  "detected": "App Store | Google Play | Steam | 랜딩페이지 | 기타",

  "analysis": {
    "oneLiner": "이 제품을 한 문장으로 요약",
    "category": "제품 카테고리",
    "businessModel": "수익 모델 (구체적으로)",
    "pricing": "가격 정보 (티어별로 가능하면)",

    "coreFeatures": ["핵심 기능 1", "...", "최대 7개"],
    "uniqueValue": "경쟁 제품 대비 차별화 포인트. 구체적으로 어떤 점이 다른지",

    "competitors": [
      {"name": "경쟁사1", "comparison": "이 제품 대비 어떤 점이 다른지 1문장"},
      {"name": "경쟁사2", "comparison": "비교"},
      {"name": "경쟁사3", "comparison": "비교"}
    ],
    "marketSize": "타겟 시장 규모 (구체적 수치가 있으면 인용)",
    "marketTrend": "이 시장의 현재 트렌드와 방향성 1~2문장",

    "positioning": {
      "current": "현재 포지셔닝 (누구를 위한 어떤 도구인지)",
      "ideal": "추천 포지셔닝 (이렇게 잡으면 더 효과적)",
      "tagline": "추천 태그라인/슬로건 (한국어 + 영어 각 1개)"
    },

    "branding": {
      "tone": "현재 브랜드 톤 (예: 전문적, 캐주얼, 테크, 친근한)",
      "visualStyle": "시각적 스타일 평가 (색상, 레이아웃, 전반적 인상)",
      "brandMaturity": "브랜드 성숙도 (초기/발전중/성숙) + 이유",
      "improvements": ["브랜딩 개선 제안 1", "제안 2", "제안 3"]
    },

    "appStoreData": {
      "rating": "별점 (있으면)",
      "reviewCount": "리뷰 수 (있으면)",
      "categoryRank": "카테고리 순위 (있으면)",
      "recentReviews": "최근 리뷰 요약 (긍정/부정 핵심 2~3개)",
      "updateFrequency": "업데이트 빈도 (있으면)"
    },

    "strengths": ["강점 1 (근거 포함)", "강점 2", "강점 3"],
    "weaknesses": ["약점 1 (근거 포함)", "약점 2", "약점 3"],
    "opportunities": ["기회 1", "기회 2"],
    "threats": ["위협 1", "위협 2"],

    "currentMarketing": ["현재 사용 중인 마케팅 채널 + 근거"],
    "missingMarketing": ["미활용 추천 채널 + 왜 효과적일지"],
    "contentStrategy": "이 제품에 맞는 콘텐츠 전략 제안 2~3문장",

    "quickWins": [
      "지금 바로 실행 가능한 마케팅 액션 1 (구체적으로)",
      "액션 2",
      "액션 3",
      "액션 4",
      "액션 5"
    ],

    "verdict": "종합 평가 3~4문장. 투자자/컨설턴트 관점에서 이 제품의 시장 기회, 가장 큰 리스크, 그리고 지금 집중해야 할 한 가지"
  }
}`,
    messages: [
      {
        role: "user",
        content: fullContext,
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
