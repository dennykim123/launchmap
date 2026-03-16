import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
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
    // Strip HTML tags, keep text content (limit to 8000 chars)
    pageContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 8000);
  } catch {
    return NextResponse.json(
      { error: "URL을 가져올 수 없습니다. 직접 입력해주세요." },
      { status: 400 }
    );
  }

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: `URL에서 가져온 웹페이지 내용을 분석하여 제품 정보를 추출합니다.
반드시 아래 JSON 형식으로만 응답하세요. 다른 텍스트 없이 JSON만 출력하세요.
정보가 불확실하면 빈 문자열로 두세요. 한국어로 작성하세요.

{
  "productName": "제품/앱 이름",
  "productDescription": "제품이 하는 일 2~3문장 설명",
  "targetAudience": "타겟 고객 (예: B2B SaaS, 게이머, 소상공인)",
  "stage": "idea | mvp | launched | growing",
  "detected": "App Store | Google Play | Steam | 랜딩페이지 | 기타"
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
