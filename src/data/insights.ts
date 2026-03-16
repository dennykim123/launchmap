export interface Insight {
  title: string;
  description: string;
  source: string;
}

export const communityInsights: Insight[] = [
  {
    title: "AI 시대, 마케팅 난이도 상승",
    description:
      "AI 이후 모든 채널이 노이즈로 포화되면서 전통적인 디렉토리 전략의 효과가 감소하고 있습니다. 차별화된 접근이 필수입니다.",
    source: "Hacker News",
  },
  {
    title: "LLM 신뢰 신호 이해하기",
    description:
      '출처 권위성, 엔티티 일관성, 인용 경로를 이해해야 AI 검색에서 추천받을 수 있습니다. "AI가 신뢰할 수 있는 출처"가 되는 것이 핵심입니다.',
    source: "Hacker News",
  },
  {
    title: "커뮤니티 깊이 > 넓이",
    description:
      "여러 플랫폼에 얕게 참여하는 것보다 한두 커뮤니티에 깊이 관여하는 것이 훨씬 효과적입니다.",
    source: "Hacker News",
  },
  {
    title: "기능보다 문제의 비용을 먼저",
    description:
      '기능 설명보다 "문제의 비용과 불편함"을 먼저 설득하세요. 공감에서 시작하는 콘텐츠가 전환율이 높습니다.',
    source: "Hacker News",
  },
  {
    title: "진정성 있는 Reddit > 수십 개 디렉토리",
    description:
      "진정성 있는 Reddit 스레드 하나가 수십 개 디렉토리 등록보다 더 효과적입니다. 광고와 유기적 성장을 병행하세요.",
    source: "Hacker News",
  },
];
