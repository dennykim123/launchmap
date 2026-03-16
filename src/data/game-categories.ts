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
          {
            title: "Steam 스토어 페이지 최적화 완벽 가이드",
            url: "https://howtomarketagame.com/2021/11/01/how-to-optimize-your-steam-page/",
            description: "Chris Zukowski의 스토어 페이지 전환율 향상 가이드",
            tag: "가이드",
          },
          {
            title: "Steamworks 문서: 스토어 자산 가이드",
            url: "https://partner.steamgames.com/doc/store/assets",
            description:
              "Steam 공식 캡슐 이미지, 스크린샷, 트레일러 규격 가이드",
            tag: "가이드",
          },
          {
            title: "Steam 캡슐 이미지 디자인 베스트 프랙티스",
            url: "https://howtomarketagame.com/2022/01/17/how-to-design-a-steam-capsule/",
            description: "클릭률 높은 캡슐 이미지 디자인 원칙",
            tag: "가이드",
          },
          {
            title: "Steam 태그 전략: 검색 노출 극대화",
            url: "https://howtomarketagame.com/2022/06/20/how-to-pick-tags-for-your-steam-game/",
            description: "Steam 태그 시스템 이해와 최적 태그 조합",
            tag: "가이드",
          },
          {
            title: "SteamDB - 게임 데이터 분석",
            url: "https://steamdb.info/",
            description:
              "Steam 게임의 플레이어 수, 가격 이력, 리뷰 트렌드 분석 도구",
            tag: "도구",
          },
          {
            title: "Steam 스토어 페이지 A/B 테스트 사례",
            url: "https://newsletter.gamediscover.co/",
            description: "GameDiscoverCo의 데이터 기반 스토어 최적화 인사이트",
            tag: "사례",
          },
          {
            title: "Steamworks Marketing Best Practices",
            url: "https://partner.steamgames.com/doc/marketing/bestpractices",
            description:
              "Steam 공식 마케팅 베스트 프랙티스 문서로, 스토어 페이지 최적화의 기본을 다룬다.",
            tag: "가이드",
          },
          {
            title: "Steamworks Visibility on Steam",
            url: "https://partner.steamgames.com/doc/marketing/visibility",
            description:
              "Steam이 게임을 노출시키는 알고리즘과 가시성 메커니즘을 공식 설명한 문서.",
            tag: "가이드",
          },
          {
            title: "Steamworks Store Page Description Guide",
            url: "https://partner.steamgames.com/doc/store/page/description",
            description:
              "Steam 스토어 페이지 설명 작성법에 대한 공식 가이드라인.",
            tag: "가이드",
          },
          {
            title: "Steamworks Marketing Features & Tools",
            url: "https://partner.steamgames.com/doc/marketing/tools",
            description:
              "Steam이 제공하는 마케팅 도구와 기능(위시리스트, 이벤트, 업데이트 라운드 등)을 정리한 공식 문서.",
            tag: "도구",
          },
          {
            title: "Steam Page Analyzer - Optimization Guide",
            url: "https://www.steampageanalyzer.com/blog/steam-optimization-guide",
            description:
              "Steam 스토어 페이지를 데이터 기반으로 분석하고 최적화하는 완전 가이드.",
            tag: "도구",
          },
          {
            title:
              "The Game Marketer - Steam Page Optimization (Revenue-First)",
            url: "https://www.thegamemarketer.com/insight-posts/steam-page-optimization",
            description:
              "매출 중심의 Steam 페이지 최적화 전략을 다루는 심층 가이드.",
            tag: "가이드",
          },
          {
            title: "Indie Game Joe - Above-the-Fold Best Practices",
            url: "https://indiegamejoe.com/steam-store-page-optimization-above-the-fold-best-practices/",
            description:
              "Steam 스토어 페이지 상단 영역(Above-the-fold) 최적화 실전 팁.",
            tag: "가이드",
          },
          {
            title: "SplitMetrics - Ultimate App Marketer's Guide to Steam",
            url: "https://splitmetrics.com/blog/the-ultimate-app-marketers-guide-to-steam/",
            description:
              "모바일 ASO 전문가 관점에서 본 Steam 마케팅 최적화 가이드.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "모바일 ASO (App Store Optimization)",
        resources: [
          {
            title: "모바일 게임 ASO 완벽 가이드",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/aso-for-games",
            description: "모바일 게임 앱스토어 최적화 전략 A to Z",
            tag: "가이드",
          },
          {
            title: "App Annie / data.ai - 모바일 시장 인텔리전스",
            url: "https://www.data.ai/",
            description: "모바일 게임 순위, 다운로드, 매출 데이터 분석 플랫폼",
            tag: "도구",
          },
          {
            title: "Sensor Tower - ASO 키워드 도구",
            url: "https://sensortower.com/",
            description: "앱스토어 키워드 순위, 경쟁사 분석 도구",
            tag: "도구",
          },
          {
            title: "App Store 스크린샷 & 프리뷰 최적화",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/app-store-screenshots",
            description: "전환율을 높이는 스크린샷 디자인 전략",
            tag: "가이드",
          },
          {
            title: "Udonis - Complete ASO Guide 2025",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-apps/complete-guide-to-app-store-optimization",
            description:
              "App Store와 Google Play의 모바일 게임 ASO 전략을 포괄적으로 다룬 가이드.",
            tag: "가이드",
          },
          {
            title: "AppTweak - ASO Strategy Step-by-Step 2026",
            url: "https://www.apptweak.com/en/aso-blog/aso-strategy",
            description: "2026년 최신 ASO 전략 수립을 위한 단계별 가이드.",
            tag: "가이드",
          },
          {
            title: "App Radar - ASO for Games",
            url: "https://appradar.com/blog/app-store-optimization-for-games",
            description:
              "모바일 게임 특화 ASO 전략과 스크린샷, 아이콘, 키워드 최적화 방법.",
            tag: "가이드",
          },
          {
            title: "GameBiz Consulting - ASO Best Practices for Mobile Games",
            url: "https://www.gamebizconsulting.com/blog/app-store-optimization-mobile-games-aso-guide",
            description:
              "모바일 게임 개발자를 위한 ASO 베스트 프랙티스와 실전 팁 모음.",
            tag: "가이드",
          },
          {
            title: "AppsFlyer - How to ASO Like a Pro",
            url: "https://www.appsflyer.com/blog/measurement-analytics/aso/",
            description:
              "프로 수준의 ASO를 구축하는 방법론과 측정 지표를 다룬 심층 가이드.",
            tag: "가이드",
          },
          {
            title: "Business of Apps - Top ASO Tools 2026",
            url: "https://www.businessofapps.com/marketplace/app-store-optimization/aso-tools/",
            description: "2026년 최고의 ASO 도구들을 비교 분석한 마켓 리포트.",
            tag: "도구",
          },
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
          {
            title: "인디 게임 Discord 서버 구축 가이드",
            url: "https://howtomarketagame.com/2021/03/15/how-to-build-a-discord-server-for-your-indie-game/",
            description: "초기 멤버 확보부터 활성화까지 Discord 서버 운영법",
            tag: "가이드",
          },
          {
            title: "Victoria Tran: 게임 커뮤니티 매니지먼트 GDC 토크",
            url: "https://www.youtube.com/watch?v=mMfY1-VsEE4",
            description: "Innersloth(Among Us) CM의 커뮤니티 관리 노하우",
            tag: "영상",
          },
          {
            title: "Discord에서 위시리스트 전환시키는 법",
            url: "https://howtomarketagame.com/2023/01/09/how-to-use-discord-to-sell-your-game/",
            description: "Discord 멤버를 실제 구매자로 전환하는 전략",
            tag: "가이드",
          },
          {
            title:
              "The Game Marketer - Discord Community Management for Indie Devs",
            url: "https://www.thegamemarketer.com/insight-posts/how-to-manage-your-discord-community-as-an-indie-game-dev",
            description:
              "인디 게임 개발자를 위한 Discord 커뮤니티 관리 실전 가이드.",
            tag: "가이드",
          },
          {
            title: "The Game Marketer - Crafting an Engaging Discord Server",
            url: "https://www.thegamemarketer.com/insight-posts/crafting-an-engaging-discord-server-for-your-indie-game-a-comprehensive-guide",
            description:
              "인디 게임을 위한 매력적인 Discord 서버 구축 종합 가이드.",
            tag: "가이드",
          },
          {
            title: "Xsolla - Discord Servers Game Devs Should Join",
            url: "https://accelerator.xsolla.com/blog/discord-servers-that-game-devs-should-join",
            description:
              "게임 개발자가 반드시 가입해야 할 Discord 서버 목록과 각 서버의 특징.",
            tag: "커뮤니티",
          },
          {
            title: "Game Dev Essentials - Top 8 Game Dev Discord Servers",
            url: "https://gamedevessentials.com/top-8-game-dev-discord-servers/",
            description:
              "게임 개발자를 위한 최고의 Discord 커뮤니티 서버 8곳을 선별 소개.",
            tag: "커뮤니티",
          },
          {
            title:
              "Game Developer Marketing - 20 Must-Join Discords for Indie Dev",
            url: "https://gamedevelopermarketing.com/indie-game-dev-discords/",
            description:
              "인디 게임 개발 성공을 위해 가입해야 할 Discord 서버 20곳 목록.",
            tag: "커뮤니티",
          },
        ],
      },
      {
        title: "Reddit & 포럼",
        resources: [
          {
            title: "r/gamedev 커뮤니티 활용법",
            url: "https://www.reddit.com/r/gamedev/",
            description: "게임 개발자 대상 셀프 프로모션 및 피드백 수집",
            tag: "커뮤니티",
          },
          {
            title: "r/indiegaming - 인디 게임 전용",
            url: "https://www.reddit.com/r/indiegaming/",
            description: "인디 게임 홍보 및 커뮤니티",
            tag: "커뮤니티",
          },
          {
            title: "r/gaming - 일반 게이머 대상",
            url: "https://www.reddit.com/r/gaming/",
            description: "대형 게이머 커뮤니티, 바이럴 가능성 높음",
            tag: "커뮤니티",
          },
          {
            title: "Reddit에서 게임 홍보하기 (밴 안 당하고)",
            url: "https://howtomarketagame.com/2022/08/15/how-to-promote-your-game-on-reddit/",
            description: "레딧 게임 마케팅 전략과 주의사항",
            tag: "가이드",
          },
          {
            title: "인디 게임 포럼 & 커뮤니티 리스트",
            url: "https://www.game-if-you-are.com/resources",
            description: "인디 게임 개발자를 위한 커뮤니티 모음",
            tag: "도구",
          },
        ],
      },
      {
        title: "커뮤니티 관리 전략",
        resources: [
          {
            title: "YoYoFuMedia - Indie Community Management Guide",
            url: "https://yoyofumedia.com/indie-community-management/",
            description:
              "Discord, Reddit, Twitch를 아우르는 인디 게임 커뮤니티 관리 종합 가이드.",
            tag: "가이드",
          },
          {
            title: "Enjin - Step-by-Step Community Building for Indie Games",
            url: "https://enjin.io/blog/indie-game-community-building",
            description:
              "인디 게임 커뮤니티를 처음부터 단계별로 구축하는 방법론.",
            tag: "가이드",
          },
          {
            title: "Fungies.io - Engaging the Indie Game Community",
            url: "https://fungies.io/engaging-the-indie-game-community-maximizing-social-media-impact-and-establishing-a-thriving-discord-server/",
            description:
              "소셜 미디어와 Discord를 활용한 인디 게임 커뮤니티 참여 극대화 전략.",
            tag: "가이드",
          },
          {
            title:
              "Generalist Programmer - Game Community Management Guide 2025",
            url: "https://generalistprogrammer.com/tutorials/game-community-management-complete-engagement-guide-2025",
            description: "2025년 게임 커뮤니티 관리의 완전한 참여 가이드.",
            tag: "가이드",
          },
          {
            title: "Victoria Tran - Community Management Portfolio",
            url: "https://www.victoriatran.com/portfolio",
            description:
              "Among Us 커뮤니티 디렉터 Victoria Tran의 포트폴리오와 커뮤니티 관리 전문 자료.",
            tag: "사례",
          },
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
          {
            title: "presskit() - 게임 프레스킷 생성 도구",
            url: "https://dopresskit.com/",
            description: "전문적인 게임 프레스킷을 빠르게 만드는 무료 도구",
            tag: "도구",
          },
          {
            title: "인디 게임 PR 완벽 가이드",
            url: "https://www.game-if-you-are.com/blog/indie-game-pr-guide",
            description: "게임 미디어 리스트 구축부터 피칭까지",
            tag: "가이드",
          },
          {
            title: "게임 기자에게 이메일 보내는 법",
            url: "https://howtomarketagame.com/2021/06/14/how-to-email-the-press-about-your-game/",
            description: "기자가 실제로 열어보는 PR 이메일 작성법",
            tag: "가이드",
          },
          {
            title: "Games Press - 프레스 릴리즈 배포",
            url: "https://www.gamespress.com/",
            description: "게임 프레스 릴리즈 배포 플랫폼",
            tag: "도구",
          },
          {
            title: "Keymailer - 리뷰 키 배포 관리",
            url: "https://www.keymailer.co/",
            description:
              "인플루언서/기자에게 리뷰 키를 효율적으로 배포하는 플랫폼",
            tag: "도구",
          },
          {
            title: "IMPRESS - Press Kitty (Free Press Kit Tool)",
            url: "https://impress.games/press-kitty",
            description:
              "무료로 전문적인 게임 프레스킷을 생성할 수 있는 Press Kitty 도구.",
            tag: "도구",
          },
          {
            title: "IMPRESS - Video Game Press Kit Examples",
            url: "https://impress.games/video-game-press-kit-examples",
            description:
              "실제 게임 프레스킷 예시 모음으로, 좋은 프레스킷이 어떻게 생겼는지 참고할 수 있다.",
            tag: "예시",
          },
          {
            title: "Indieformer - Press Kit Guide for Indie Games",
            url: "https://www.indieformer.com/press-kit-guide",
            description:
              "인디 게임 프레스킷 작성에 필요한 모든 요소를 정리한 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Disobey - How to Make a Video Game Press Kit (Ultimate Guide)",
            url: "https://www.disobey.gg/blog/how-to-make-a-video-game-press-kit-the-ultimate-guide-for-indie-devs",
            description:
              "인디 개발자를 위한 비디오 게임 프레스킷 제작 완전 가이드.",
            tag: "가이드",
          },
          {
            title: "Acorn Games - Indie Dev's Guide to the Perfect Press Kit",
            url: "https://acorngames.gg/blog/2024/6/12/the-indie-devs-guide-to-assembling-the-perfect-press-kit",
            description:
              "완벽한 인디 게임 프레스킷을 조립하는 방법에 대한 실전 가이드.",
            tag: "가이드",
          },
          {
            title: "Frowns Marketing - Press Kit Template for Indie Devs",
            url: "https://frownsmarketing.com/creating-your-press-kit-as-an-indie-game-developer/",
            description:
              "인디 게임 개발자를 위한 프레스킷 템플릿과 작성 가이드.",
            tag: "템플릿",
          },
          {
            title: "Jaleo PR - How to Create a Good Press Kit",
            url: "https://jaleopr.com/blog/create-good-press-kit-indie-game/",
            description:
              "PR 에이전시 관점에서 본 좋은 인디 게임 프레스킷 제작법.",
            tag: "가이드",
          },
          {
            title: "Loopr - Free Video Game Press Release Template",
            url: "https://www.loopr.gg/blogs/free-video-game-press-release-template-for-game-developers",
            description:
              "게임 개발자를 위한 무료 프레스 릴리스 템플릿과 작성 가이드.",
            tag: "템플릿",
          },
        ],
      },
      {
        title: "게임 미디어 & 포스트모템",
        resources: [
          {
            title: "Game Developer (Gamasutra) - Marketing & Business Articles",
            url: "https://www.gamedeveloper.com/business",
            description:
              "Gamasutra(현 Game Developer)의 게임 비즈니스와 마케팅 관련 아카이브 기사 모음.",
            tag: "가이드",
          },
          {
            title:
              "Game Developer - 10 Seminal Postmortems Every Dev Should Read",
            url: "https://www.gamedeveloper.com/audio/10-seminal-game-postmortems-every-developer-should-read",
            description:
              "모든 개발자가 읽어야 할 10가지 핵심 포스트모템으로, 마케팅 실패와 성공 사례를 포함.",
            tag: "사례",
          },
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
          {
            title: "게임 유튜버/스트리머에게 컨택하는 법",
            url: "https://howtomarketagame.com/2021/08/02/how-to-get-youtubers-to-play-your-game/",
            description: "인디 게임을 플레이해줄 크리에이터 찾고 연락하는 전략",
            tag: "가이드",
          },
          {
            title: "Keymailer - 인플루언서 매칭",
            url: "https://www.keymailer.co/",
            description: "게임에 맞는 인플루언서를 찾아 키를 배포하는 플랫폼",
            tag: "도구",
          },
          {
            title: "Lurkit - 게임 인플루언서 분석",
            url: "https://lurkit.com/",
            description: "게임 스트리머/유튜버 검색 및 성과 분석 도구",
            tag: "도구",
          },
          {
            title: "No More Robots: 인디 퍼블리셔의 인플루언서 전략",
            url: "https://www.youtube.com/watch?v=2W5gMKcgMlI",
            description: "Mike Rose의 인디 게임 인플루언서 마케팅 GDC 토크",
            tag: "영상",
          },
          {
            title: "트위치 스트리머와 협업하는 베스트 프랙티스",
            url: "https://howtomarketagame.com/2022/03/07/how-to-work-with-twitch-streamers/",
            description: "트위치 카테고리, 타이밍, 커뮤니케이션 전략",
            tag: "가이드",
          },
          {
            title: "Keymailer - Influencer Marketing Platform",
            url: "https://keymailer.co/",
            description:
              "50,000명 이상의 인플루언서와 연결하여 게임 키를 배포하고 캠페인을 관리하는 플랫폼.",
            tag: "도구",
          },
          {
            title: "Lurkit - Game Key Campaigns",
            url: "https://www.lurkit.gg/solutions/key-campaigns",
            description:
              "게임 키 배포와 크리에이터 캠페인 관리를 위한 인플루언서 마케팅 플랫폼.",
            tag: "도구",
          },
          {
            title:
              "Cloutboost - Ultimate Guide to Gaming Influencer Marketing 2025",
            url: "https://www.cloutboost.com/blog/the-ultimate-guide-to-gaming-influencer-marketing-in-2024",
            description:
              "게임 인플루언서 마케팅의 전략, 예산 책정, ROI 측정을 포괄하는 완전 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Cloutboost - KeyMailer vs Lurkit vs Terminals vs Woovit Comparison",
            url: "https://www.cloutboost.com/blog/keymailer-vs-lurkit-vs-terminals-vs-woovit-whats-the-best-key-distribution-service-for-game-publishers",
            description:
              "주요 게임 키 배포 서비스 4종을 비교 분석한 리뷰 기사.",
            tag: "가이드",
          },
          {
            title:
              "Game Developer - 6 Ways Indie Devs Find Success with Influencers",
            url: "https://www.gamedeveloper.com/business/six-ways-indie-game-developers-find-success-with-youtube-and-twitch-influencers",
            description:
              "인디 개발자가 YouTube와 Twitch 인플루언서와 성공적으로 협업하는 6가지 방법.",
            tag: "사례",
          },
          {
            title:
              "Famesters - Indie Dev's Guide to YouTube Influencer Marketing",
            url: "https://famesters.com/blog/how-to-promote-indie-games-on-youtube/",
            description:
              "인디 게임을 YouTube 인플루언서를 통해 홍보하는 실전 전략 가이드.",
            tag: "가이드",
          },
          {
            title:
              "TwitchMetrics - Mastering Indie Game Marketing with Influencers",
            url: "https://blog.twitchmetrics.net/indie-game-marketing/",
            description:
              "Twitch 데이터 기반으로 인디 게임 인플루언서 마케팅을 마스터하는 방법.",
            tag: "가이드",
          },
          {
            title:
              "Enjin - Twitch Influencer Marketing Guide for Game Developers",
            url: "https://enjin.io/blog/twitch-influencer-marketing-guide-for-game-developers",
            description:
              "게임 개발자를 위한 Twitch 인플루언서 마케팅 종합 가이드.",
            tag: "가이드",
          },
          {
            title:
              "GameDev.net - Ultimate Guide for Promoting with Twitch Influencers",
            url: "https://www.gamedev.net/articles/business/business-and-law/the-ultimate-guide-for-promoting-your-game-with-twitch-influencers-r4897/",
            description:
              "Twitch 인플루언서를 활용한 게임 프로모션 완전 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Mega Cat Studios - Mastering Influencer Marketing for Game Devs",
            url: "https://megacatstudios.com/blogs/game-development/mastering-influencer-marketing-game-developers-guide",
            description:
              "게임 개발자가 인플루언서 마케팅을 마스터하기 위한 실전 전략 가이드.",
            tag: "가이드",
          },
          {
            title: "inBeat Agency - Influencer Marketing for Video Games",
            url: "https://inbeat.agency/blog/video-game-influencer-marketing",
            description:
              "비디오 게임 인플루언서 마케팅의 A-Z를 다루는 에이전시 관점 가이드.",
            tag: "가이드",
          },
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
          {
            title: "Derek Lieu: 게임 트레일러의 과학",
            url: "https://www.derek-lieu.com/blog",
            description: "AAA 게임 트레일러 제작자의 인디 게임 트레일러 팁",
            tag: "가이드",
          },
          {
            title: "처음 3초: 게임 트레일러 후킹 전략",
            url: "https://howtomarketagame.com/2021/09/13/how-to-make-a-game-trailer/",
            description: "스크롤을 멈추게 하는 트레일러 첫 장면 구성법",
            tag: "가이드",
          },
          {
            title: "인디 게임 트레일러 제작 GDC 토크",
            url: "https://www.youtube.com/watch?v=4CSYA9R70R8",
            description: "저예산으로 임팩트 있는 트레일러를 만드는 방법",
            tag: "영상",
          },
          {
            title: "DaVinci Resolve - 무료 영상 편집",
            url: "https://www.blackmagicdesign.com/products/davinciresolve/",
            description: "프로 수준 무료 영상 편집 도구",
            tag: "도구",
          },
          {
            title: "Derek Lieu - How to Make a Trailer (Start Here)",
            url: "https://www.derek-lieu.com/start-here",
            description:
              "Among Us, Spelunky 2 등의 트레일러를 만든 Derek Lieu의 게임 트레일러 제작 입문 가이드.",
            tag: "가이드",
          },
          {
            title: "Derek Lieu - Trailer Editing Essays",
            url: "https://www.derek-lieu.com/essays",
            description:
              "게임 트레일러 편집에 대한 분석적 에세이 모음으로, 실제 트레일러를 샷별로 분석.",
            tag: "가이드",
          },
          {
            title: "Derek Lieu - The Business of Indie Game Trailers",
            url: "https://www.derek-lieu.com/blog/2022/5/31/the-business-of-indie-game-trailers",
            description:
              "인디 게임 트레일러의 비즈니스 측면(비용, 타이밍, ROI)을 다룬 실전 가이드.",
            tag: "사례",
          },
          {
            title: "Video Game Trailer Academy (VGTA)",
            url: "https://vgta.teachable.com/",
            description:
              "게임 트레일러 제작의 계획부터 편집까지 체계적으로 배울 수 있는 온라인 코스.",
            tag: "코스",
          },
          {
            title: "Berke Sayil - Ultimate Guide to Indie Video Game Trailers",
            url: "https://berkedev.itch.io/ultimate-guide-for-indie-vide-game-trailers",
            description:
              "인디 비디오 게임 트레일러 제작을 위한 종합 가이드 (itch.io 전자책).",
            tag: "가이드",
          },
          {
            title: "Picotion - Game Trailer 101: Complete Guide",
            url: "https://picotion.com/blog/game-trailer-complete-guide/",
            description:
              "게임 트레일러 제작의 기초부터 고급 기법까지 다루는 종합 가이드.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "스크린샷 & GIF",
        resources: [
          {
            title: "Steam 스크린샷 베스트 프랙티스",
            url: "https://howtomarketagame.com/2022/02/14/how-to-take-screenshots-for-your-game/",
            description: "위시리스트 전환을 높이는 스크린샷 촬영 기법",
            tag: "가이드",
          },
          {
            title: "ScreenToGif - GIF 캡처 도구",
            url: "https://www.screentogif.com/",
            description: "게임 플레이 GIF를 쉽게 만드는 무료 도구",
            tag: "도구",
          },
          {
            title: "소셜 미디어용 게임 GIF 만드는 팁",
            url: "https://howtomarketagame.com/2021/12/06/how-to-make-gifs-for-your-indie-game/",
            description: "트위터/Reddit에서 주목받는 GIF 제작 전략",
            tag: "가이드",
          },
          {
            title:
              "Game Developer - How To Record and Post GIFs Showing Your Game",
            url: "https://www.gamedeveloper.com/business/how-to-record-and-post-gifs-showing-your-game",
            description:
              "게임 홍보용 GIF를 녹화하고 게시하는 방법에 대한 실전 가이드.",
            tag: "가이드",
          },
          {
            title: "Game Developer - Promoting Your Game With Animated GIFs",
            url: "https://www.gamedeveloper.com/business/promoting-your-game-with-animated-gifs",
            description:
              "애니메이션 GIF를 활용한 게임 프로모션 전략과 제작 팁.",
            tag: "가이드",
          },
          {
            title: "Arimia - 5 Free Tools for Indie Game Marketing",
            url: "https://arimiadev.com/5-free-tools-for-indie-game-marketing-bonus/",
            description:
              "인디 게임 마케팅을 위한 5가지 무료 도구 소개(GIF, 스크린샷, 트레일러 등).",
            tag: "도구",
          },
          {
            title: "IMPRESS - Steam Wishlists Sales Calculator",
            url: "https://impress.games/steam-wishlists-sales-calculator",
            description:
              "Steam 위시리스트 수로 예상 판매량을 계산하는 무료 도구.",
            tag: "도구",
          },
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
          {
            title: "Steam 위시리스트 7,000개 = 첫 주 판매량 예측",
            url: "https://howtomarketagame.com/2021/01/11/how-many-wishlists-do-you-need/",
            description: "위시리스트→판매 전환율 데이터와 목표 설정",
            tag: "가이드",
          },
          {
            title: "위시리스트를 모으는 24가지 방법",
            url: "https://howtomarketagame.com/2020/10/26/24-ways-to-wishlist/",
            description: "검증된 위시리스트 확보 채널 총정리",
            tag: "가이드",
          },
          {
            title: "GameDiscoverCo - 위시리스트 벤치마크",
            url: "https://newsletter.gamediscover.co/",
            description: "장르별 위시리스트 전환율, 판매 벤치마크 데이터",
            tag: "도구",
          },
          {
            title: "How To Market A Game - Do Wishlists Get Old?",
            url: "https://howtomarketagame.com/2025/01/27/do-wishlists-get-old/",
            description:
              "오래된 위시리스트도 전환이 되는지에 대한 데이터 기반 분석.",
            tag: "가이드",
          },
          {
            title: "Game Oracle - Steam Wishlist to Sales Ratio 2025",
            url: "https://www.game-oracle.com/blog/wishlist-to-sales-2025",
            description:
              "2025년 Steam 위시리스트 대비 판매 전환율 데이터와 분석.",
            tag: "가이드",
          },
          {
            title:
              "GameDiscoverCo - State of Steam Wishlist Conversions 2024-2025",
            url: "https://newsletter.gamediscover.co/p/the-state-of-steam-wishlist-conversions",
            description:
              "Simon Carless의 Steam 위시리스트 전환율 현황 분석 뉴스레터.",
            tag: "가이드",
          },
          {
            title:
              "Cloutboost - Ultimate Guide to Steam Wishlists & Influencers",
            url: "https://www.cloutboost.com/blog/the-ultimate-guide-to-steam-wishlists-and-gaming-influencers",
            description:
              "인플루언서를 활용한 Steam 위시리스트 극대화 전략 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Game World Observer - What Devs Should Do Before Launching Steam Page",
            url: "https://gameworldobserver.com/2025/03/11/steam-page-launch-guide-wishlists-zukowski",
            description:
              "Steam 페이지 론칭 전 개발자가 반드시 해야 할 위시리스트 준비 사항.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "런칭 전략",
        resources: [
          {
            title: "인디 게임 런칭 체크리스트",
            url: "https://howtomarketagame.com/2022/09/26/the-indie-game-launch-checklist/",
            description: "런칭 6개월 전부터 D-day까지 단계별 체크리스트",
            tag: "템플릿",
          },
          {
            title: "얼리 액세스 vs 풀 런칭: 언제 어떤 걸?",
            url: "https://howtomarketagame.com/2022/04/11/early-access-vs-full-launch/",
            description: "얼리 액세스의 장단점과 적합한 게임 유형",
            tag: "가이드",
          },
          {
            title: "Steam 세일 & 할인 전략",
            url: "https://howtomarketagame.com/2021/07/12/how-to-price-and-discount-your-game/",
            description: "가격 설정, 할인 타이밍, 번들 전략",
            tag: "가이드",
          },
          {
            title: "런칭일 선택: 피해야 할 날짜들",
            url: "https://howtomarketagame.com/2022/05/16/when-to-launch-your-game/",
            description: "대작 출시일, 세일 기간을 피하는 런칭 타이밍 전략",
            tag: "가이드",
          },
          {
            title: "How To Market A Game (Chris Zukowski) - Blog",
            url: "https://howtomarketagame.com/blog/",
            description:
              "Chris Zukowski의 게임 마케팅 블로그로, Steam 위시리스트와 런칭 전략의 바이블.",
            tag: "가이드",
          },
          {
            title: "How To Market A Game - Courses",
            url: "https://howtomarketagame.com/courses/",
            description:
              "Chris Zukowski의 유료 게임 마케팅 코스(Steam 페이지, 위시리스트, 런칭 전략 등).",
            tag: "코스",
          },
          {
            title: "Cloutboost - How to Market Games on Steam in 2025",
            url: "https://www.cloutboost.com/blog/how-to-market-games-on-steam-in-2025-5-things-every-developer-should-know",
            description:
              "2025년 Steam 게임 마케팅에서 알아야 할 5가지 핵심 전략.",
            tag: "가이드",
          },
          {
            title:
              "Indie Game Business - Marketing Strategies for Indie Game Success",
            url: "https://indiegamebusiness.com/marketing-strategies-for-indie-game/",
            description: "인디 게임 성공을 위한 검증된 마케팅 전략과 팁 모음.",
            tag: "가이드",
          },
          {
            title: "GAM3S.GG - How to Market Your Game in 2026",
            url: "https://gam3s.gg/news/how-to-market-your-game-2026/",
            description:
              "2026년 게임 마케팅 트렌드와 전략을 종합 정리한 완전 가이드.",
            tag: "가이드",
          },
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
          {
            title: "Steam Next Fest 완벽 가이드",
            url: "https://howtomarketagame.com/2022/10/03/steam-next-fest-guide/",
            description: "Next Fest 참가 신청, 데모 준비, 스트리밍 전략",
            tag: "가이드",
          },
          {
            title: "Steam Next Fest 결과 분석 (2025)",
            url: "https://howtomarketagame.com/2025/10/20/steam-next-fest-october-2025-checking-in-on-the-games-that-broke-through/",
            description: "성공한 게임들의 공통점 분석",
            tag: "사례",
          },
          {
            title: "Steamworks: Next Fest 참가 가이드",
            url: "https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest",
            description: "Steam 공식 Next Fest 참가 요건 및 일정",
            tag: "가이드",
          },
          {
            title: "Steamworks - Steam Sales and Events Schedule 2026",
            url: "https://steamcommunity.com/groups/steamworks/announcements/detail/532102384016426892",
            description: "2026년 상반기 Steam 세일 및 이벤트 공식 일정표.",
            tag: "가이드",
          },
          {
            title: "Steam Next Fest Official Page",
            url: "https://store.steampowered.com/sale/nextfest",
            description:
              "Steam Next Fest 공식 페이지로, 참가 방법과 일정을 확인할 수 있다.",
            tag: "도구",
          },
          {
            title:
              "Big Games Machine - Steam Next Fest Marketing: 11 Strategies",
            url: "https://www.biggamesmachine.com/steam-next-fest-marketing-strategies/",
            description:
              "Steam Next Fest에서 성공하기 위한 11가지 마케팅 전략.",
            tag: "가이드",
          },
          {
            title: "GameDiscoverCo - Who Won February 2026 Steam Next Fest?",
            url: "https://newsletter.gamediscover.co/p/who-won-february-2026s-steam-next",
            description:
              "2026년 2월 Steam Next Fest 우승 게임 분석과 데이터 리포트.",
            tag: "사례",
          },
          {
            title: "GamesRadar - Steam Next Fest 2026 Complete Guide",
            url: "https://www.gamesradar.com/games/steam-next-fest-guide/",
            description:
              "Steam Next Fest의 모든 날짜, 세부 정보, 참가 방법을 정리한 종합 가이드.",
            tag: "가이드",
          },
          {
            title:
              "IndieGame.com - Battle of 3,500 Demos (Steam Next Fest 2026)",
            url: "https://indiegame.com/en/archives/22704",
            description:
              "2026년 Steam Next Fest에서 3,500개 데모 중 어떤 인디 게임이 성공했는지 분석.",
            tag: "사례",
          },
          {
            title: "Steamworks - Update Visibility Rounds",
            url: "https://partner.steamgames.com/doc/marketing/visibility/update_rounds",
            description:
              "업데이트 가시성 라운드를 활용한 출시 후 마케팅 전략 공식 문서.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "오프라인 & 쇼케이스",
        resources: [
          {
            title: "인디 게임 이벤트 캘린더",
            url: "https://www.game-if-you-are.com/events",
            description: "전 세계 인디 게임 페스티벌, 쇼케이스 일정 모음",
            tag: "도구",
          },
          {
            title: "게임쇼 부스 운영 팁 (GDC, PAX)",
            url: "https://howtomarketagame.com/2022/03/21/how-to-run-a-booth-at-a-game-convention/",
            description: "컨벤션 부스 설치부터 유저 동선 설계까지",
            tag: "가이드",
          },
          {
            title: "인디 쇼케이스 신청 리스트",
            url: "https://docs.google.com/spreadsheets/d/11ij0PFGVmAhoaM3OYm5H-jYLGKT_j7lYRHqSjyMHnXE/",
            description: "주요 인디 게임 쇼케이스/큐레이터 신청 링크 모음",
            tag: "템플릿",
          },
          {
            title: "GDC Festival of Gaming - Official Site",
            url: "https://gdconf.com/",
            description: "세계 최대 게임 개발자 컨퍼런스 GDC 공식 사이트.",
            tag: "커뮤니티",
          },
          {
            title: "GDC Vault - Free Talks",
            url: "https://gdcvault.com/free",
            description:
              "GDC 강연을 무료로 시청할 수 있는 GDC Vault 무료 섹션.",
            tag: "영상",
          },
          {
            title: "GDC Vault - Free GDC 2024 Content",
            url: "https://gdcvault.com/free/gdc-24/",
            description: "2024년 GDC 무료 공개 세션 모음(마케팅 트랙 포함).",
            tag: "영상",
          },
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
          {
            title: "모바일 게임 UA 가이드 2025",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-marketing",
            description: "모바일 게임 유저 획득 전략 종합 가이드",
            tag: "가이드",
          },
          {
            title: "Unity Ads - 게임 광고 네트워크",
            url: "https://unity.com/products/unity-ads",
            description: "게임에 최적화된 광고 네트워크 및 수익화 플랫폼",
            tag: "도구",
          },
          {
            title: "AppLovin - 모바일 마케팅 플랫폼",
            url: "https://www.applovin.com/",
            description: "모바일 게임 UA 및 수익화 올인원 플랫폼",
            tag: "도구",
          },
          {
            title: "광고 소재(크리에이티브) 제작 베스트 프랙티스",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-ad-creatives",
            description: "CTR/IPM 높은 게임 광고 소재 제작 전략",
            tag: "가이드",
          },
          {
            title: "ROAS vs CPI vs LTV: 모바일 게임 지표 가이드",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/mobile-game-metrics",
            description: "UA 핵심 지표 이해와 최적화 방법",
            tag: "가이드",
          },
          {
            title: "Udonis - Mobile Game User Acquisition Strategy 2025",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/user-acquisition-strategy-mobile-games",
            description:
              "2025년 모바일 게임 유저 획득 전략의 완전 가이드(CPI, LTV, ROAS 포함).",
            tag: "가이드",
          },
          {
            title: "Upptic - Mobile Game UA Growth Guide",
            url: "https://upptic.com/mobile-game-user-acquisition-growth-guide/",
            description:
              "모바일 게임 유저 획득과 성장을 위한 종합 전략 가이드.",
            tag: "가이드",
          },
          {
            title: "Segwise - Understanding User Acquisition in Mobile Gaming",
            url: "https://segwise.ai/blog/user-acquisition-mobile-ua-gaming",
            description:
              "모바일 게임 UA의 기본 개념부터 고급 전략까지 이해하는 가이드.",
            tag: "가이드",
          },
          {
            title: "Segwise - Creative Testing for Mobile Game UA",
            url: "https://segwise.ai/blog/creative-testing-mobile-game-user-acquisition-guide",
            description:
              "모바일 게임 UA를 위한 크리에이티브 테스팅 완전 가이드.",
            tag: "가이드",
          },
          {
            title: "TyrAds - Ultimate Mobile Game UA Strategy 2025",
            url: "https://tyrads.com/mobile-game-user-acquisition-strategy/",
            description: "2025년 모바일 게임 UA의 궁극적 전략 가이드.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "UA 트렌드 & 리포트",
        resources: [
          {
            title:
              "Press For Play - Best Practices in UA for Mobile Games 2025",
            url: "https://pressforplay.com/marketing/best-practices-in-user-acquisition-for-mobile-games-2025/",
            description: "2025년 모바일 게임 UA 베스트 프랙티스와 최신 트렌드.",
            tag: "가이드",
          },
          {
            title: "Business of Apps - Mobile Gaming Marketing Trends 2026",
            url: "https://www.businessofapps.com/insights/mobile-gaming-marketing-trends-whitepaper-2026",
            description: "2026년 모바일 게임 마케팅 트렌드 백서.",
            tag: "가이드",
          },
          {
            title: "PocketGamer - 2025 Mobile Game UA Landscape Report",
            url: "https://www.pocketgamer.biz/the-2025-mobile-game-ua-landscape-inside-xmp-and-insightrackrs-newest-report-7532736/",
            description:
              "2025년 모바일 게임 UA 환경에 대한 XMP & Insightrackr의 최신 리포트.",
            tag: "가이드",
          },
          {
            title: "Adjoe - Optimize UA Campaigns with Playtime 2025",
            url: "https://adjoe.io/blog/5-ways-to-optimize-your-user-acquisition-campaigns-with-playtime/",
            description: "플레이타임 기반 UA 캠페인 최적화 5가지 방법.",
            tag: "가이드",
          },
          {
            title: "Adjust - Live-ops for Mobile Games Strategy",
            url: "https://www.adjust.com/blog/what-is-live-ops/",
            description:
              "모바일 게임 라이브옵스 전략과 베스트 프랙티스 가이드.",
            tag: "가이드",
          },
          {
            title: "Adjust - App Store Optimization Guide",
            url: "https://www.adjust.com/resources/guides/app-store-optimization/",
            description: "Adjust의 앱 스토어 최적화(ASO) 기본 가이드.",
            tag: "가이드",
          },
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
          {
            title: "게임 개발자의 트위터/X 마케팅 가이드",
            url: "https://howtomarketagame.com/2021/04/12/how-to-use-twitter-to-market-your-indie-game/",
            description: "#indiedev #gamedev 해시태그와 devlog 공유 전략",
            tag: "가이드",
          },
          {
            title: "TikTok 게임 마케팅: 바이럴 공식",
            url: "https://howtomarketagame.com/2022/11/14/how-to-use-tiktok-to-market-your-indie-game/",
            description: "짧은 게임 플레이 클립으로 수백만 뷰 만드는 법",
            tag: "가이드",
          },
          {
            title: "Victoria Tran: 게임 소셜 미디어 마스터",
            url: "https://www.youtube.com/watch?v=JhwuXNnBSBI",
            description: "Among Us CM의 소셜 미디어 운영 철학과 전략",
            tag: "영상",
          },
          {
            title: "#screenshotsaturday 활용법",
            url: "https://howtomarketagame.com/2021/05/10/screenshot-saturday/",
            description: "매주 토요일 스크린샷을 공유하는 인디 게임 전통 활용",
            tag: "가이드",
          },
          {
            title: "Imgur & Reddit에서 게임 GIF 바이럴 만들기",
            url: "https://howtomarketagame.com/2021/12/06/how-to-make-gifs-for-your-indie-game/",
            description: "Reddit 프론트페이지에 올라간 인디 게임 GIF 사례",
            tag: "사례",
          },
          {
            title: "How To Market A Game - 7 Tips for Marketing on TikTok",
            url: "https://howtomarketagame.com/2022/02/07/seven-great-tips-for-marketing-your-indie-game-on-tiktok/",
            description:
              "Chris Zukowski의 인디 게임 TikTok 마케팅 7가지 실전 팁.",
            tag: "가이드",
          },
          {
            title: "5W PR - Game Marketing on Social Media 2025",
            url: "https://www.5wpr.com/new/game-marketing-on-social-media-in-2025-building-interactive-campaigns-for-indie-success/",
            description:
              "2025년 소셜 미디어에서 인디 게임을 위한 인터랙티브 캠페인 구축 전략.",
            tag: "가이드",
          },
          {
            title:
              "Acorn Games - Using Social Media as an Indie Game Developer",
            url: "https://acorngames.gg/blog/2024/1/11/using-social-media-as-an-indie-game-developer",
            description: "인디 게임 개발자의 소셜 미디어 활용 실전 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Battenhall - Guide to Social Media for Indie Game Publishers",
            url: "https://www.battenhall.com/blog/a-guide-to-social-media-for-indie-game-publishers",
            description: "인디 게임 퍼블리셔를 위한 소셜 미디어 전략 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Enjin - 10 Social Media Marketing Tips for Indie Game Developers",
            url: "https://enjin.io/blog/10-social-media-marketing-tips-for-indie-game-developers",
            description:
              "인디 게임 개발자를 위한 소셜 미디어 마케팅 10가지 핵심 팁.",
            tag: "가이드",
          },
          {
            title: "Mister Morris Games - Build an Audience on Social Media",
            url: "https://mister-morris-games.medium.com/how-to-build-an-audience-for-your-game-as-an-indie-developer-on-social-media-625721401886",
            description:
              "인디 개발자가 소셜 미디어에서 게임 오디언스를 구축하는 방법론.",
            tag: "가이드",
          },
          {
            title:
              "Kevin Scolaro - Ultimate Guide: Top Indie Game Marketing Strategies",
            url: "https://kevinscolaro.com/ultimate-guide-top-indie-game-marketing-strategies",
            description:
              "인디 게임 마케팅 전략의 종합 가이드(소셜 미디어 중심).",
            tag: "가이드",
          },
          {
            title:
              "OnlySocial - Practical Social Media Strategies for Indie Devs",
            url: "https://onlysocial.io/practical-social-media-strategies-for-indie-game-developers/",
            description:
              "인디 게임 개발자를 위한 실용적인 소셜 미디어 전략과 도구.",
            tag: "가이드",
          },
          {
            title: "ClearTap - How to Market an Indie Game: 10-Step Strategy",
            url: "https://clevertap.com/blog/indie-game-marketing/",
            description:
              "인디 게임 마케팅을 위한 10단계 전략 가이드(소셜 미디어 포함).",
            tag: "가이드",
          },
          {
            title: "Victoria Tran - About (Community & Social Expert)",
            url: "https://www.victoriatran.com/about",
            description:
              "Among Us의 커뮤케이션 디렉터 Victoria Tran의 소셜 미디어 및 커뮤니티 전문 프로필.",
            tag: "사례",
          },
          {
            title: "Victoria Tran - Medium Blog",
            url: "https://thevtran.medium.com/",
            description:
              "Victoria Tran의 게임 커뮤니티 관리와 소셜 미디어 전략에 대한 개인 블로그.",
            tag: "가이드",
          },
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
          {
            title: "Steam 업데이트 포스트 작성 가이드",
            url: "https://howtomarketagame.com/2023/03/06/how-to-write-steam-update-posts/",
            description: "플레이어가 돌아오게 만드는 업데이트 공지 작성법",
            tag: "가이드",
          },
          {
            title: "출시 후 첫 30일 마케팅 전략",
            url: "https://howtomarketagame.com/2022/12/05/what-to-do-after-you-launch-your-game/",
            description: "런칭 직후 매출 유지를 위한 액션 플랜",
            tag: "가이드",
          },
          {
            title: "시즌/배틀패스 설계: 수익화 + 리텐션",
            url: "https://www.deconstructoroffun.com/",
            description: "F2P 게임 수익화와 리텐션 설계 전문 블로그",
            tag: "가이드",
          },
          {
            title: "GameAnalytics - 무료 게임 분석",
            url: "https://gameanalytics.com/",
            description: "리텐션, 세션, 수익 등 게임 핵심 지표 무료 분석 도구",
            tag: "도구",
          },
          {
            title:
              "InAppStory - Live Service Games: Strategic Marketing Playbook",
            url: "https://inappstory.com/blog/live-service-games",
            description:
              "라이브 서비스 게임의 마케팅 전략 플레이북으로, 시즌과 이벤트 기획을 포함.",
            tag: "가이드",
          },
          {
            title:
              "AMT Lab - Live Service Games: Consumer Engagement & Retention",
            url: "https://amt-lab.org/blog/2025/3/live-service-games-part-ii",
            description:
              "라이브 서비스 게임의 소비자 참여와 리텐션에 대한 학술적 분석.",
            tag: "가이드",
          },
          {
            title: "GameAnalytics - Player-Centric LiveOps Lessons",
            url: "https://www.gameanalytics.com/blog/player-centric-liveops",
            description:
              "성공적인 라이브 서비스 게임 운영에서 배운 플레이어 중심 라이브옵스 전략.",
            tag: "사례",
          },
          {
            title: "Magic Media - What Are Live Service Games? (2026 Guide)",
            url: "https://magicmedia.studio/news-insights/what-are-live-service-games/",
            description:
              "2026년 라이브 서비스 게임의 정의, 현황, 전략을 종합 정리한 가이드.",
            tag: "가이드",
          },
          {
            title: "Thundercloud Studio - GaaS Model and Future of Gaming",
            url: "https://thundercloud-studio.com/article/what-are-live-service-games-and-how-game-as-a-service-gaas-model-can-shift-the-future-of-gaming-industry/",
            description:
              "GaaS(Games as a Service) 모델이 게임 산업의 미래를 어떻게 바꾸는지 분석.",
            tag: "가이드",
          },
          {
            title: "Adjoe - Mobile Gamer Seasonality for UA Strategy",
            url: "https://adjoe.io/blog/leverage-mobile-gamer-seasonality-ua-strategy/",
            description: "모바일 게이머의 시즌성을 활용한 UA 전략 가이드.",
            tag: "가이드",
          },
          {
            title: "Game Wisdom - Design Variety with Live Service Games",
            url: "https://game-wisdom.com/critical/live-service-games",
            description:
              "라이브 서비스 게임의 디자인 다양성과 콘텐츠 업데이트 전략 분석.",
            tag: "가이드",
          },
          {
            title: "Devolver Digital Blog",
            url: "https://www.devolverdigital.com/blog",
            description:
              "Devolver Digital의 공식 블로그로, 출시 후 마케팅과 지속적 운영 사례를 포함.",
            tag: "사례",
          },
          {
            title: "Game Developer - Devolver Digital's Marketing Advice",
            url: "https://www.gamedeveloper.com/marketing/devolver-digital-s-marketing-advice-let-the-people-play",
            description:
              "사람들에게 플레이하게 하라 - Devolver Digital의 마케팅 철학과 전략.",
            tag: "사례",
          },
          {
            title: "Prolific Studio - What Makes Live Service Games In-Demand",
            url: "https://prolificstudio.co/blog/live-service-games/",
            description:
              "라이브 서비스 게임이 인기를 끄는 이유와 핵심 성공 요인 분석.",
            tag: "가이드",
          },
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
          {
            title: "인디 게임 퍼블리셔 찾기: 체크리스트",
            url: "https://howtomarketagame.com/2022/07/11/how-to-find-a-publisher-for-your-indie-game/",
            description: "퍼블리셔 조사, 피칭, 계약 시 주의사항",
            tag: "가이드",
          },
          {
            title: "인디 게임 퍼블리셔 리스트 (2025)",
            url: "https://docs.google.com/spreadsheets/d/15AN1IGEfH_x0Dc6a3bNwBFyJUiyOo_dVaEP2VY4E5FU/",
            description: "200+ 인디 게임 퍼블리셔 연락처 스프레드시트",
            tag: "템플릿",
          },
          {
            title: "퍼블리셔 계약에서 주의할 점 (GDC 토크)",
            url: "https://www.youtube.com/watch?v=wFYYKk5v3Os",
            description: "법적 함정과 협상 전략",
            tag: "영상",
          },
          {
            title: "FirstLook.gg - 50+ Indie Game Publishers That Fund Games",
            url: "https://firstlook.gg/blog/indie-game-publishers/",
            description:
              "독립 게임에 투자하는 50개 이상의 인디 게임 퍼블리셔 목록.",
            tag: "가이드",
          },
          {
            title: "Indie Game Business - 2026 Video Game Publisher List",
            url: "https://indiegamebusiness.com/publisher-list/",
            description: "2026년 비디오 게임 퍼블리셔 종합 목록과 연락처 정보.",
            tag: "도구",
          },
          {
            title: "Udonis - 50+ Indie Game Publishers Accepting Submissions",
            url: "https://www.blog.udonis.co/mobile-marketing/mobile-games/indie-game-publishers",
            description:
              "현재 제출을 받고 있는 50개 이상의 인디 게임 퍼블리셔 목록과 특징.",
            tag: "가이드",
          },
          {
            title:
              "Indie Game Business - How to Get Your Game Funded & Published",
            url: "https://indiegamebusiness.com/how-to-get-your-indie-game-funded-and-published-peter-kojesta/",
            description:
              "인디 게임 펀딩과 퍼블리싱을 받는 방법에 대한 Peter Kojesta의 실전 가이드.",
            tag: "가이드",
          },
          {
            title:
              "Entalto Studios - How to Find the Right Publisher (2026 Guide)",
            url: "https://entaltostudios.com/find-right-publisher-indie-game/",
            description:
              "2026년 인디 게임에 맞는 퍼블리셔를 찾는 방법 종합 가이드.",
            tag: "가이드",
          },
          {
            title:
              "GameFromScratch - Indie Game Publishing and Funding Resources",
            url: "https://gamefromscratch.com/indie-game-publishing-and-funding-resources/",
            description: "인디 게임 퍼블리싱과 펀딩 관련 리소스 종합 모음.",
            tag: "가이드",
          },
          {
            title:
              "GameMaker - Indie Game Publishing 2025: Tips from Akupara Games",
            url: "https://gamemaker.io/en/blog/indie-game-publishing-2025",
            description: "Akupara Games의 인디 게임 퍼블리싱 팁과 조언 (2025).",
            tag: "사례",
          },
          {
            title: "Devolver Digital - Game Pitch Submission",
            url: "https://pitch.devolverdigital.com/",
            description:
              "Devolver Digital에 게임 피치를 제출할 수 있는 공식 페이지.",
            tag: "도구",
          },
          {
            title:
              "Game Developer - No More Robots on State of Indie Publishing",
            url: "https://www.gamedeveloper.com/business/-this-is-just-a-death-cycle-no-more-robots-gets-candid-about-the-state-of-indie-publishing",
            description:
              "No More Robots가 솔직하게 말하는 인디 퍼블리싱의 현실과 과제.",
            tag: "사례",
          },
          {
            title: "Polydin - Top 10 Indie Game Publishers 2025",
            url: "https://polydin.com/indie-game-publishers-in-2025/",
            description:
              "2025년 최고의 인디 게임 퍼블리셔 10곳을 선정하고 특징을 비교 분석.",
            tag: "가이드",
          },
          {
            title: "Xsolla Accelerator - How to Market a Game (Chris Zukowski)",
            url: "https://accelerator.xsolla.com/blog/howtomarketagame",
            description:
              "Xsolla Accelerator에서 정리한 Chris Zukowski의 게임 마케팅 핵심 요약.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "크라우드펀딩",
        resources: [
          {
            title: "킥스타터 게임 캠페인 가이드",
            url: "https://howtomarketagame.com/2022/01/31/how-to-run-a-kickstarter-for-your-game/",
            description: "성공적인 킥스타터 캠페인 기획과 실행",
            tag: "가이드",
          },
          {
            title: "킥스타터 성공 인디 게임 사례 분석",
            url: "https://www.kickstarter.com/discover/advanced?category_id=35&sort=most_funded",
            description: "가장 많이 펀딩된 게임 프로젝트 모음",
            tag: "사례",
          },
          {
            title:
              "Wardrome - Navigating the Indie Game Funding Landscape 2025",
            url: "https://wardrome.com/navigating-the-indie-game-funding-landscape-in-2025/",
            description:
              "2025년 인디 게임 펀딩 환경을 탐색하는 방법(킥스타터, 투자자, 보조금 등).",
            tag: "가이드",
          },
          {
            title: "Outersloth - Contract Terms & Game Funding Lessons",
            url: "https://www.gamedeveloper.com/production/outersloth-shares-contract-terms-and-game-funding-lessons-for-sickos",
            description:
              "Among Us 제작사의 인디 게임 펀딩 브랜드 Outersloth의 계약 조건과 펀딩 교훈.",
            tag: "사례",
          },
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
          {
            title: "인디 게임 현지화 우선순위 가이드",
            url: "https://howtomarketagame.com/2022/08/29/should-i-localize-my-game/",
            description: "어떤 언어를 먼저 지원할지 데이터 기반 판단",
            tag: "가이드",
          },
          {
            title: "Steam 지역별 매출 데이터",
            url: "https://steamdb.info/",
            description: "장르별, 지역별 매출 비중 분석",
            tag: "도구",
          },
          {
            title: "중국 시장 진출 가이드",
            url: "https://howtomarketagame.com/2022/10/17/how-to-market-your-game-in-china/",
            description: "중국 게임 시장 특성과 진입 전략",
            tag: "가이드",
          },
          {
            title: "일본 시장 인디 게임 마케팅",
            url: "https://howtomarketagame.com/2023/02/06/japanese-game-market/",
            description: "일본 게이머 특성과 현지화 팁",
            tag: "가이드",
          },
          {
            title: "LocalizeDirect - 게임 번역 플랫폼",
            url: "https://www.localizedirect.com/",
            description: "게임 특화 번역 관리 플랫폼",
            tag: "도구",
          },
          {
            title: "Lokalise - Game Localization Guide",
            url: "https://lokalise.com/blog/game-localization/",
            description:
              "게임 로컬라이제이션의 정의, 중요성, Lokalise 도구를 활용한 방법론.",
            tag: "가이드",
          },
          {
            title: "Lokalise - Game Localization Solution",
            url: "https://lokalise.com/solutions/game-localization/",
            description:
              "게임 로컬라이제이션을 위한 Lokalise 플랫폼 소개 및 기능 설명.",
            tag: "도구",
          },
          {
            title: "LocalizeDirect - 4 Best Practices for Indie Developers",
            url: "https://www.localizedirect.com/posts/indie-game-localization-best-practices",
            description:
              "인디 개발자를 위한 게임 로컬라이제이션 4가지 베스트 프랙티스.",
            tag: "가이드",
          },
          {
            title:
              "XTM Cloud - Gaming Localization: Definition, Benefits, How to Start",
            url: "https://xtm.cloud/blog/gaming-localization/",
            description:
              "게임 로컬라이제이션의 정의, 장점, 시작 방법, 그리고 흔한 실수들.",
            tag: "가이드",
          },
          {
            title:
              "Language Connections - 4 Ways Localization Helps Indie Games",
            url: "https://www.languageconnections.com/blog/4-ways-indie-games-benefit-from-game-localization/",
            description:
              "인디 게임이 로컬라이제이션을 통해 얻는 4가지 핵심 이점.",
            tag: "가이드",
          },
          {
            title: "Terra Localizations",
            url: "https://terralocalizations.com/",
            description:
              "게임 전문 로컬라이제이션 서비스 업체 Terra Localizations 공식 사이트.",
            tag: "도구",
          },
          {
            title:
              "Pangea Global - How Indie Games Achieve Global Fame Through Localization",
            url: "https://www.pangea.global/blog/how-indie-games-achieve-global-fame-through-localization/",
            description:
              "인디 게임이 로컬라이제이션을 통해 글로벌 명성을 얻는 방법과 사례.",
            tag: "사례",
          },
          {
            title: "VerboLabs - How Game Localization Boosts Indie Games",
            url: "https://www.verbolabs.com/how-game-localization-boosts-indie-games/",
            description:
              "게임 로컬라이제이션이 인디 게임의 다운로드와 매출을 증가시키는 방법.",
            tag: "가이드",
          },
          {
            title: "GAMES.GG - Mobile Game Localization for Global Audiences",
            url: "https://games.gg/news/mobile-game-localization-how-to-adapt-games-for-global-audiences/",
            description:
              "모바일 게임을 글로벌 오디언스에 맞게 적응시키는 로컬라이제이션 가이드.",
            tag: "가이드",
          },
          {
            title: "BLEND - Gaming Localization Services",
            url: "https://www.getblend.com/gaming-localization/",
            description: "게임 산업을 위한 전문 로컬라이제이션 서비스 소개.",
            tag: "도구",
          },
        ],
      },
    ],
  },
  {
    slug: "game-resources",
    emoji: "📚",
    title: "종합 학습 허브",
    subtitle: "게임 마케팅 전문 사이트 & 코스",
    description:
      "게임 마케팅을 체계적으로 배울 수 있는 전문 사이트, 코스, 뉴스레터 모음입니다.",
    sections: [
      {
        title: "전문 사이트 & 블로그",
        resources: [
          {
            title: "How To Market A Game (Chris Zukowski) - Main Site",
            url: "https://howtomarketagame.com/",
            description:
              "게임 마케팅의 바이블로, Steam 알고리즘, 위시리스트, 이메일 마케팅 전문.",
            tag: "커뮤니티",
          },
          {
            title: "Game If You Are - Indie Game Marketing 101",
            url: "https://gameifyouare.com/2019/05/15/indie-game-marketing-101-part-1-a-beginners-guide-to-games-marketing/",
            description: "인디 게임 마케팅 입문자를 위한 단계별 가이드 시리즈.",
            tag: "가이드",
          },
          {
            title: "Derek Lieu Creative - Main Site",
            url: "https://www.derek-lieu.com",
            description:
              "게임 트레일러 전문 에디터 Derek Lieu의 메인 사이트(가이드, 에세이, 케이스 스터디).",
            tag: "가이드",
          },
          {
            title: "Pro Game Marketing",
            url: "https://www.progamemarketing.com/",
            description: "전문 게임 마케팅 리소스와 서비스를 제공하는 사이트.",
            tag: "가이드",
          },
        ],
      },
      {
        title: "강연 & 코스",
        resources: [
          {
            title:
              "GDC Podcast - Super Practical Indie Game Marketing (Chris Zukowski)",
            url: "https://www.gamedeveloper.com/marketing/super-practical-indie-game-marketing-with-chris-zukowski---gdc-podcast-ep-24",
            description:
              "GDC 팟캐스트에서 Chris Zukowski와 나눈 실전 인디 게임 마케팅 대화.",
            tag: "영상",
          },
          {
            title: "Victoria Tran - GDC Speaker Profile",
            url: "https://schedule.gdconf.com/speaker/tran-victoria/51355",
            description:
              "Victoria Tran의 GDC 강연 이력과 프로필(커뮤니티 관리, 마케팅 실수).",
            tag: "영상",
          },
          {
            title:
              "GDC - Improve Community Strategies (Victoria Tran 2021 Talk)",
            url: "https://gdconf.com/news/improve-your-community-strategies-victoria-tran%E2%80%99s-gdc-2021-talk",
            description:
              "Victoria Tran의 GDC 2021 커뮤니티 전략 개선 강연 안내.",
            tag: "영상",
          },
          {
            title: "Lumi Consulting - Games Marketing Course",
            url: "https://www.lumiconsulting.com/games-marketing-course/",
            description: "게임 마케팅 전문 컨설팅 업체의 체계적인 온라인 코스.",
            tag: "코스",
          },
          {
            title: "Udemy - Game Marketing Courses Collection",
            url: "https://www.udemy.com/topic/game-marketing/",
            description: "Udemy의 게임 마케팅 관련 온라인 코스 모음 페이지.",
            tag: "코스",
          },
        ],
      },
      {
        title: "사례 연구",
        resources: [
          {
            title: "PC Gamer - How Devolver Digital is Redefining Publishing",
            url: "https://www.pcgamer.com/how-devolver-digital-is-redefining-videogame-publishing/",
            description:
              "Devolver Digital이 비디오 게임 퍼블리싱을 어떻게 재정의하고 있는지 분석한 기사.",
            tag: "사례",
          },
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
      cat.sections.reduce(
        (secTotal, sec) => secTotal + sec.resources.length,
        0,
      ),
    0,
  );
}
