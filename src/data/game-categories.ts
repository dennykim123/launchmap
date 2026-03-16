import type { Category } from "./categories";

export const gameCategories: Category[] = [
  {
    slug: "game-store-optimization",
    emoji: "🏪",
    title: "스토어 페이지 최적화",
    subtitle: "Steam, App Store, Google Play 스토어 전환율 높이기",
    description:
      "스토어 페이지는 게임의 첫인상입니다. 캡슐 이미지, 스크린샷 배치, 설명문 작성, 태그 설정까지 — 위시리스트 전환율을 결정하는 모든 요소를 최적화하세요.",
    sections: [
      {
        title: "Steam 스토어 페이지",
        resources: [
          { title: "Steam 스토어 페이지 최적화 완벽 가이드", url: "https://howtomarketagame.com/2021/11/01/how-to-optimize-your-steam-page/", description: "Chris Zukowski의 스토어 페이지 전환율 향상 가이드", tag: "가이드" },
          { title: "Steamworks 문서: 스토어 자산 가이드", url: "https://partner.steamgames.com/doc/store/assets", description: "Steam 공식 캡슐 이미지, 스크린샷, 트레일러 규격 가이드", tag: "가이드" },
          { title: "Steam 캡슐 이미지 디자인 베스트 프랙티스", url: "https://howtomarketagame.com/2022/01/17/how-to-design-a-steam-capsule/", description: "클릭률 높은 캡슐 이미지 디자인 원칙", tag: "가이드" },
          { title: "Steam 태그 전략: 검색 노출 극대화", url: "https://howtomarketagame.com/2022/06/20/how-to-pick-tags-for-your-steam-game/", description: "Steam 태그 시스템 이해와 최적 태그 조합", tag: "가이드" },
          { title: "SteamDB - 게임 데이터 분석", url: "https://steamdb.info/", description: "Steam 게임의 플레이어 수, 가격 이력, 리뷰 트렌드 분석 도구", tag: "도구" },
          { title: "Steam 스토어 페이지 A/B 테스트 사례", url: "https://newsletter.gamediscover.co/", description: "GameDiscoverCo의 데이터 기반 스토어 최적화 인사이트", tag: "사례" },
        ],
      },
      {
        title: "모바일 ASO (App Store Optimization)",
        resources: [
          { title: "모바일 게임 ASO 완벽 가이드", url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/aso-for-games", description: "모바일 게임 앱스토어 최적화 전략 A to Z", tag: "가이드" },
          { title: "App Annie / data.ai - 모바일 시장 인텔리전스", url: "https://www.data.ai/", description: "모바일 게임 순위, 다운로드, 매출 데이터 분석 플랫폼", tag: "도구" },
          { title: "Sensor Tower - ASO 키워드 도구", url: "https://sensortower.com/", description: "앱스토어 키워드 순위, 경쟁사 분석 도구", tag: "도구" },
          { title: "App Store 스크린샷 & 프리뷰 최적화", url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/app-store-screenshots", description: "전환율을 높이는 스크린샷 디자인 전략", tag: "가이드" },
        ],
      },
    ],
  },
  {
    slug: "game-community",
    emoji: "💬",
    title: "커뮤니티 빌딩",
    subtitle: "Discord, Reddit, 포럼에서 팬덤 구축",
    description:
      "게임의 성패는 커뮤니티가 결정합니다. 출시 전부터 팬을 모으고, 피드백을 받고, 입소문을 만드는 커뮤니티 빌딩 전략입니다.",
    sections: [
      {
        title: "Discord 커뮤니티",
        resources: [
          { title: "인디 게임 Discord 서버 구축 가이드", url: "https://howtomarketagame.com/2021/03/15/how-to-build-a-discord-server-for-your-indie-game/", description: "초기 멤버 확보부터 활성화까지 Discord 서버 운영법", tag: "가이드" },
          { title: "Victoria Tran: 게임 커뮤니티 매니지먼트 GDC 토크", url: "https://www.youtube.com/watch?v=mMfY1-VsEE4", description: "Innersloth(Among Us) CM의 커뮤니티 관리 노하우", tag: "영상" },
          { title: "Discord에서 위시리스트 전환시키는 법", url: "https://howtomarketagame.com/2023/01/09/how-to-use-discord-to-sell-your-game/", description: "Discord 멤버를 실제 구매자로 전환하는 전략", tag: "가이드" },
        ],
      },
      {
        title: "Reddit & 포럼",
        resources: [
          { title: "r/gamedev 커뮤니티 활용법", url: "https://www.reddit.com/r/gamedev/", description: "게임 개발자 대상 셀프 프로모션 및 피드백 수집", tag: "커뮤니티" },
          { title: "r/indiegaming - 인디 게임 전용", url: "https://www.reddit.com/r/indiegaming/", description: "인디 게임 홍보 및 커뮤니티", tag: "커뮤니티" },
          { title: "r/gaming - 일반 게이머 대상", url: "https://www.reddit.com/r/gaming/", description: "대형 게이머 커뮤니티, 바이럴 가능성 높음", tag: "커뮤니티" },
          { title: "Reddit에서 게임 홍보하기 (밴 안 당하고)", url: "https://howtomarketagame.com/2022/08/15/how-to-promote-your-game-on-reddit/", description: "레딧 게임 마케팅 전략과 주의사항", tag: "가이드" },
          { title: "인디 게임 포럼 & 커뮤니티 리스트", url: "https://www.game-if-you-are.com/resources", description: "인디 게임 개발자를 위한 커뮤니티 모음", tag: "도구" },
        ],
      },
    ],
  },
  {
    slug: "game-press",
    emoji: "📰",
    title: "게임 미디어 & PR",
    subtitle: "프레스킷, 기자 컨택, 미디어 커버리지",
    description:
      "게임 미디어 커버리지는 위시리스트와 인지도에 직접적인 영향을 줍니다. 프레스킷 작성부터 기자 컨택, 리뷰 코드 배포까지 게임 PR 전략입니다.",
    sections: [
      {
        title: "프레스킷 & PR",
        resources: [
          { title: "presskit() - 게임 프레스킷 생성 도구", url: "https://dopresskit.com/", description: "전문적인 게임 프레스킷을 빠르게 만드는 무료 도구", tag: "도구" },
          { title: "인디 게임 PR 완벽 가이드", url: "https://www.game-if-you-are.com/blog/indie-game-pr-guide", description: "게임 미디어 리스트 구축부터 피칭까지", tag: "가이드" },
          { title: "게임 기자에게 이메일 보내는 법", url: "https://howtomarketagame.com/2021/06/14/how-to-email-the-press-about-your-game/", description: "기자가 실제로 열어보는 PR 이메일 작성법", tag: "가이드" },
          { title: "Games Press - 프레스 릴리즈 배포", url: "https://www.gamespress.com/", description: "게임 프레스 릴리즈 배포 플랫폼", tag: "도구" },
          { title: "Keymailer - 리뷰 키 배포 관리", url: "https://www.keymailer.co/", description: "인플루언서/기자에게 리뷰 키를 효율적으로 배포하는 플랫폼", tag: "도구" },
        ],
      },
    ],
  },
  {
    slug: "game-influencer",
    emoji: "🎮",
    title: "게임 인플루언서 & 스트리머",
    subtitle: "유튜버, 트위치 스트리머 협업",
    description:
      "게임 인플루언서와 스트리머는 가장 강력한 마케팅 채널 중 하나입니다. 적합한 크리에이터를 찾고, 관계를 구축하고, 효과적으로 협업하는 방법입니다.",
    sections: [
      {
        title: "인플루언서 마케팅",
        resources: [
          { title: "게임 유튜버/스트리머에게 컨택하는 법", url: "https://howtomarketagame.com/2021/08/02/how-to-get-youtubers-to-play-your-game/", description: "인디 게임을 플레이해줄 크리에이터 찾고 연락하는 전략", tag: "가이드" },
          { title: "Keymailer - 인플루언서 매칭", url: "https://www.keymailer.co/", description: "게임에 맞는 인플루언서를 찾아 키를 배포하는 플랫폼", tag: "도구" },
          { title: "Lurkit - 게임 인플루언서 분석", url: "https://lurkit.com/", description: "게임 스트리머/유튜버 검색 및 성과 분석 도구", tag: "도구" },
          { title: "No More Robots: 인디 퍼블리셔의 인플루언서 전략", url: "https://www.youtube.com/watch?v=2W5gMKcgMlI", description: "Mike Rose의 인디 게임 인플루언서 마케팅 GDC 토크", tag: "영상" },
          { title: "트위치 스트리머와 협업하는 베스트 프랙티스", url: "https://howtomarketagame.com/2022/03/07/how-to-work-with-twitch-streamers/", description: "트위치 카테고리, 타이밍, 커뮤니케이션 전략", tag: "가이드" },
        ],
      },
    ],
  },
  {
    slug: "game-trailer",
    emoji: "🎬",
    title: "트레일러 & 비주얼 에셋",
    subtitle: "게임 트레일러, 스크린샷, GIF 제작",
    description:
      "트레일러는 게임의 얼굴입니다. 처음 3초에 시선을 사로잡고, 30초 안에 구매 욕구를 불러일으키는 트레일러와 비주얼 에셋 제작 전략입니다.",
    sections: [
      {
        title: "트레일러 제작",
        resources: [
          { title: "Derek Lieu: 게임 트레일러의 과학", url: "https://www.derek-lieu.com/blog", description: "AAA 게임 트레일러 제작자의 인디 게임 트레일러 팁", tag: "가이드" },
          { title: "처음 3초: 게임 트레일러 후킹 전략", url: "https://howtomarketagame.com/2021/09/13/how-to-make-a-game-trailer/", description: "스크롤을 멈추게 하는 트레일러 첫 장면 구성법", tag: "가이드" },
          { title: "인디 게임 트레일러 제작 GDC 토크", url: "https://www.youtube.com/watch?v=4CSYA9R70R8", description: "저예산으로 임팩트 있는 트레일러를 만드는 방법", tag: "영상" },
          { title: "DaVinci Resolve - 무료 영상 편집", url: "https://www.blackmagicdesign.com/products/davinciresolve/", description: "프로 수준 무료 영상 편집 도구", tag: "도구" },
        ],
      },
      {
        title: "스크린샷 & GIF",
        resources: [
          { title: "Steam 스크린샷 베스트 프랙티스", url: "https://howtomarketagame.com/2022/02/14/how-to-take-screenshots-for-your-game/", description: "위시리스트 전환을 높이는 스크린샷 촬영 기법", tag: "가이드" },
          { title: "ScreenToGif - GIF 캡처 도구", url: "https://www.screentogif.com/", description: "게임 플레이 GIF를 쉽게 만드는 무료 도구", tag: "도구" },
          { title: "소셜 미디어용 게임 GIF 만드는 팁", url: "https://howtomarketagame.com/2021/12/06/how-to-make-gifs-for-your-indie-game/", description: "트위터/Reddit에서 주목받는 GIF 제작 전략", tag: "가이드" },
        ],
      },
    ],
  },
  {
    slug: "game-wishlist",
    emoji: "⭐",
    title: "위시리스트 & 런칭 전략",
    subtitle: "Steam 위시리스트 확보, 런칭 타이밍, 얼리 액세스",
    description:
      "위시리스트 수는 게임의 상업적 성공을 예측하는 가장 강력한 지표입니다. 위시리스트를 모으고, 최적의 타이밍에 런칭하는 전략입니다.",
    sections: [
      {
        title: "위시리스트 전략",
        resources: [
          { title: "Steam 위시리스트 7,000개 = 첫 주 판매량 예측", url: "https://howtomarketagame.com/2021/01/11/how-many-wishlists-do-you-need/", description: "위시리스트→판매 전환율 데이터와 목표 설정", tag: "가이드" },
          { title: "위시리스트를 모으는 24가지 방법", url: "https://howtomarketagame.com/2020/10/26/24-ways-to-wishlist/", description: "검증된 위시리스트 확보 채널 총정리", tag: "가이드" },
          { title: "GameDiscoverCo - 위시리스트 벤치마크", url: "https://newsletter.gamediscover.co/", description: "장르별 위시리스트 전환율, 판매 벤치마크 데이터", tag: "도구" },
        ],
      },
      {
        title: "런칭 전략",
        resources: [
          { title: "인디 게임 런칭 체크리스트", url: "https://howtomarketagame.com/2022/09/26/the-indie-game-launch-checklist/", description: "런칭 6개월 전부터 D-day까지 단계별 체크리스트", tag: "템플릿" },
          { title: "얼리 액세스 vs 풀 런칭: 언제 어떤 걸?", url: "https://howtomarketagame.com/2022/04/11/early-access-vs-full-launch/", description: "얼리 액세스의 장단점과 적합한 게임 유형", tag: "가이드" },
          { title: "Steam 세일 & 할인 전략", url: "https://howtomarketagame.com/2021/07/12/how-to-price-and-discount-your-game/", description: "가격 설정, 할인 타이밍, 번들 전략", tag: "가이드" },
          { title: "런칭일 선택: 피해야 할 날짜들", url: "https://howtomarketagame.com/2022/05/16/when-to-launch-your-game/", description: "대작 출시일, 세일 기간을 피하는 런칭 타이밍 전략", tag: "가이드" },
        ],
      },
    ],
  },
  {
    slug: "game-festival",
    emoji: "🎪",
    title: "게임 페스티벌 & 이벤트",
    subtitle: "Steam Next Fest, 인디 쇼케이스, 게임쇼",
    description:
      "게임 페스티벌은 수천 명의 잠재 플레이어에게 데모를 보여줄 수 있는 최고의 기회입니다. Next Fest, 인디 쇼케이스 참가 전략입니다.",
    sections: [
      {
        title: "온라인 페스티벌",
        resources: [
          { title: "Steam Next Fest 완벽 가이드", url: "https://howtomarketagame.com/2022/10/03/steam-next-fest-guide/", description: "Next Fest 참가 신청, 데모 준비, 스트리밍 전략", tag: "가이드" },
          { title: "Steam Next Fest 결과 분석 (2025)", url: "https://howtomarketagame.com/2025/10/20/steam-next-fest-october-2025-checking-in-on-the-games-that-broke-through/", description: "성공한 게임들의 공통점 분석", tag: "사례" },
          { title: "Steamworks: Next Fest 참가 가이드", url: "https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest", description: "Steam 공식 Next Fest 참가 요건 및 일정", tag: "가이드" },
        ],
      },
      {
        title: "오프라인 & 쇼케이스",
        resources: [
          { title: "인디 게임 이벤트 캘린더", url: "https://www.game-if-you-are.com/events", description: "전 세계 인디 게임 페스티벌, 쇼케이스 일정 모음", tag: "도구" },
          { title: "게임쇼 부스 운영 팁 (GDC, PAX)", url: "https://howtomarketagame.com/2022/03/21/how-to-run-a-booth-at-a-game-convention/", description: "컨벤션 부스 설치부터 유저 동선 설계까지", tag: "가이드" },
          { title: "인디 쇼케이스 신청 리스트", url: "https://docs.google.com/spreadsheets/d/11ij0PFGVmAhoaM3OYm5H-jYLGKT_j7lYRHqSjyMHnXE/", description: "주요 인디 게임 쇼케이스/큐레이터 신청 링크 모음", tag: "템플릿" },
        ],
      },
    ],
  },
  {
    slug: "game-ua",
    emoji: "📱",
    title: "모바일 UA & 광고",
    subtitle: "유저 획득, 광고 소재, ROAS 최적화",
    description:
      "모바일 게임의 성장은 UA(User Acquisition)에 달려 있습니다. 광고 소재 제작, 네트워크 선택, ROAS 최적화 전략입니다.",
    sections: [
      {
        title: "UA 전략",
        resources: [
          { title: "모바일 게임 UA 가이드 2025", url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-marketing", description: "모바일 게임 유저 획득 전략 종합 가이드", tag: "가이드" },
          { title: "Unity Ads - 게임 광고 네트워크", url: "https://unity.com/products/unity-ads", description: "게임에 최적화된 광고 네트워크 및 수익화 플랫폼", tag: "도구" },
          { title: "AppLovin - 모바일 마케팅 플랫폼", url: "https://www.applovin.com/", description: "모바일 게임 UA 및 수익화 올인원 플랫폼", tag: "도구" },
          { title: "광고 소재(크리에이티브) 제작 베스트 프랙티스", url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-ad-creatives", description: "CTR/IPM 높은 게임 광고 소재 제작 전략", tag: "가이드" },
          { title: "ROAS vs CPI vs LTV: 모바일 게임 지표 가이드", url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-metrics", description: "UA 핵심 지표 이해와 최적화 방법", tag: "가이드" },
        ],
      },
    ],
  },
  {
    slug: "game-social",
    emoji: "📲",
    title: "게임 소셜 미디어",
    subtitle: "Twitter/X, TikTok, Instagram 게임 마케팅",
    description:
      "소셜 미디어는 게임의 바이럴 잠재력이 가장 큰 채널입니다. 개발 과정 공유, GIF/클립 마케팅, 해시태그 전략으로 오가닉 팔로워를 확보하세요.",
    sections: [
      {
        title: "소셜 미디어 전략",
        resources: [
          { title: "게임 개발자의 트위터/X 마케팅 가이드", url: "https://howtomarketagame.com/2021/04/12/how-to-use-twitter-to-market-your-indie-game/", description: "#indiedev #gamedev 해시태그와 devlog 공유 전략", tag: "가이드" },
          { title: "TikTok 게임 마케팅: 바이럴 공식", url: "https://howtomarketagame.com/2022/11/14/how-to-use-tiktok-to-market-your-indie-game/", description: "짧은 게임 플레이 클립으로 수백만 뷰 만드는 법", tag: "가이드" },
          { title: "Victoria Tran: 게임 소셜 미디어 마스터", url: "https://www.youtube.com/watch?v=JhwuXNnBSBI", description: "Among Us CM의 소셜 미디어 운영 철학과 전략", tag: "영상" },
          { title: "#screenshotsaturday 활용법", url: "https://howtomarketagame.com/2021/05/10/screenshot-saturday/", description: "매주 토요일 스크린샷을 공유하는 인디 게임 전통 활용", tag: "가이드" },
          { title: "Imgur & Reddit에서 게임 GIF 바이럴 만들기", url: "https://howtomarketagame.com/2021/12/06/how-to-make-gifs-for-your-indie-game/", description: "Reddit 프론트페이지에 올라간 인디 게임 GIF 사례", tag: "사례" },
        ],
      },
    ],
  },
  {
    slug: "game-live-service",
    emoji: "🔄",
    title: "라이브 서비스 & 리텐션",
    subtitle: "시즌, 이벤트, 업데이트 마케팅",
    description:
      "출시 이후가 진짜 시작입니다. 시즌 업데이트, 인게임 이벤트, 커뮤니티 이벤트로 플레이어를 유지하고 되돌아오게 만드는 전략입니다.",
    sections: [
      {
        title: "리텐션 & 라이브 서비스",
        resources: [
          { title: "Steam 업데이트 포스트 작성 가이드", url: "https://howtomarketagame.com/2023/03/06/how-to-write-steam-update-posts/", description: "플레이어가 돌아오게 만드는 업데이트 공지 작성법", tag: "가이드" },
          { title: "출시 후 첫 30일 마케팅 전략", url: "https://howtomarketagame.com/2022/12/05/what-to-do-after-you-launch-your-game/", description: "런칭 직후 매출 유지를 위한 액션 플랜", tag: "가이드" },
          { title: "시즌/배틀패스 설계: 수익화 + 리텐션", url: "https://www.deconstructoroffun.com/", description: "F2P 게임 수익화와 리텐션 설계 전문 블로그", tag: "가이드" },
          { title: "GameAnalytics - 무료 게임 분석", url: "https://gameanalytics.com/", description: "리텐션, 세션, 수익 등 게임 핵심 지표 무료 분석 도구", tag: "도구" },
        ],
      },
    ],
  },
  {
    slug: "game-publisher",
    emoji: "🤝",
    title: "퍼블리셔 & 펀딩",
    subtitle: "퍼블리셔 찾기, 킥스타터, 투자 유치",
    description:
      "혼자 다 할 수 없다면 퍼블리셔나 펀딩을 고려하세요. 적합한 퍼블리셔를 찾고, 좋은 딜을 만들고, 크라우드펀딩으로 커뮤니티까지 얻는 전략입니다.",
    sections: [
      {
        title: "퍼블리셔",
        resources: [
          { title: "인디 게임 퍼블리셔 찾기: 체크리스트", url: "https://howtomarketagame.com/2022/07/11/how-to-find-a-publisher-for-your-indie-game/", description: "퍼블리셔 조사, 피칭, 계약 시 주의사항", tag: "가이드" },
          { title: "인디 게임 퍼블리셔 리스트 (2025)", url: "https://docs.google.com/spreadsheets/d/15AN1IGEfH_x0Dc6a3bNwBFyJUiyOo_dVaEP2VY4E5FU/", description: "200+ 인디 게임 퍼블리셔 연락처 스프레드시트", tag: "템플릿" },
          { title: "퍼블리셔 계약에서 주의할 점 (GDC 토크)", url: "https://www.youtube.com/watch?v=wFYYKk5v3Os", description: "법적 함정과 협상 전략", tag: "영상" },
        ],
      },
      {
        title: "크라우드펀딩",
        resources: [
          { title: "킥스타터 게임 캠페인 가이드", url: "https://howtomarketagame.com/2022/01/31/how-to-run-a-kickstarter-for-your-game/", description: "성공적인 킥스타터 캠페인 기획과 실행", tag: "가이드" },
          { title: "킥스타터 성공 인디 게임 사례 분석", url: "https://www.kickstarter.com/discover/advanced?category_id=35&sort=most_funded", description: "가장 많이 펀딩된 게임 프로젝트 모음", tag: "사례" },
        ],
      },
    ],
  },
  {
    slug: "game-localization",
    emoji: "🌍",
    title: "현지화 & 글로벌 마케팅",
    subtitle: "다국어 대응, 지역별 마케팅 전략",
    description:
      "Steam 매출의 60% 이상은 영어권 외 지역에서 발생합니다. 현지화는 비용이 아니라 투자입니다. 언어, 문화, 지역별 마케팅 전략입니다.",
    sections: [
      {
        title: "현지화 전략",
        resources: [
          { title: "인디 게임 현지화 우선순위 가이드", url: "https://howtomarketagame.com/2022/08/29/should-i-localize-my-game/", description: "어떤 언어를 먼저 지원할지 데이터 기반 판단", tag: "가이드" },
          { title: "Steam 지역별 매출 데이터", url: "https://steamdb.info/", description: "장르별, 지역별 매출 비중 분석", tag: "도구" },
          { title: "중국 시장 진출 가이드", url: "https://howtomarketagame.com/2022/10/17/how-to-market-your-game-in-china/", description: "중국 게임 시장 특성과 진입 전략", tag: "가이드" },
          { title: "일본 시장 인디 게임 마케팅", url: "https://howtomarketagame.com/2023/02/06/japanese-game-market/", description: "일본 게이머 특성과 현지화 팁", tag: "가이드" },
          { title: "LocalizeDirect - 게임 번역 플랫폼", url: "https://www.localizedirect.com/", description: "게임 특화 번역 관리 플랫폼", tag: "도구" },
        ],
      },
    ],
  },
];

export function getGameCategoryBySlug(slug: string): Category | undefined {
  return gameCategories.find((c) => c.slug === slug);
}

export function getGameResourceCount(): number {
  return gameCategories.reduce(
    (total, cat) =>
      total +
      cat.sections.reduce((secTotal, sec) => secTotal + sec.resources.length, 0),
    0
  );
}
