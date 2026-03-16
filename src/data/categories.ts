export interface Resource {
  title: string;
  url: string;
  description?: string;
  tag?: "가이드" | "도구" | "템플릿" | "코스" | "사례" | "커뮤니티" | "영상" | "예시";
}

export interface SubSection {
  title: string;
  resources: Resource[];
  note?: string;
}

export interface Category {
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  sections: SubSection[];
  tips?: string[];
}

export const categories: Category[] = [
  {
    slug: "launch",
    emoji: "📣",
    title: "런칭 플랫폼",
    subtitle: "스타트업을 알릴 수 있는 곳",
    description:
      "런칭 플랫폼, 소프트웨어 디렉토리, 커뮤니티를 활용하면 초기 유저를 확보하고 꾸준한 트래픽을 만들 수 있습니다.",
    sections: [
      {
        title: "런칭 플랫폼",
        resources: [
          { title: "Betalist", url: "https://betalist.com/", tag: "도구", description: "초기 스타트업을 베타 유저에게 소개하는 디스커버리 플랫폼" },
          { title: "Fazier", url: "https://fazier.com/", tag: "도구", description: "스타트업 런칭과 피드백 수집을 돕는 플랫폼" },
          { title: "Uneed", url: "https://www.uneed.best/", tag: "도구", description: "매일 새로운 제품을 소개하는 런칭 플랫폼" },
          { title: "Microlaunch", url: "https://microlaunch.net/", tag: "도구", description: "인디 메이커를 위한 소규모 제품 런칭 플랫폼" },
          { title: "Peerlist", url: "https://peerlist.io/", tag: "도구", description: "개발자·디자이너 포트폴리오 및 프로젝트 공유 플랫폼" },
          { title: "Indie Hackers", url: "https://www.indiehackers.com/products", tag: "커뮤니티", description: "인디 메이커들이 제품을 공유하고 피드백을 주고받는 커뮤니티" },
          { title: "Hacker News (Show HN)", url: "https://news.ycombinator.com/show", tag: "커뮤니티", description: "기술 커뮤니티에 새 프로젝트를 소개하고 피드백 받는 공간" },
          { title: "ProductHunt", url: "https://www.producthunt.com/", tag: "도구", description: "세계 최대 신제품 디스커버리 플랫폼" },
          { title: "SideProjectors", url: "https://www.sideprojectors.com/", tag: "도구", description: "사이드 프로젝트를 사고팔 수 있는 마켓플레이스" },
          { title: "LaunchIgniter", url: "https://launchigniter.com/", tag: "도구", description: "스타트업 런칭을 도와주는 디렉토리 플랫폼" },
          { title: "PeerPush", url: "https://peerpush.net/", tag: "도구", description: "크리에이터들이 서로 제품을 홍보해주는 커뮤니티 플랫폼" },
        ],
      },
      {
        title: "소프트웨어 디렉토리",
        resources: [
          { title: "Toolfolio", url: "https://toolfolio.io/", tag: "도구", description: "소프트웨어 도구를 카테고리별로 정리한 디렉토리" },
          { title: "toools.design", url: "https://www.toools.design/", tag: "도구", description: "디자이너를 위한 도구 큐레이션 디렉토리" },
          { title: "OpenAlternative", url: "https://openalternative.co/", tag: "도구", description: "유료 소프트웨어의 오픈소스 대안을 찾아주는 디렉토리" },
          { title: "LibHunt", url: "https://www.libhunt.com/", tag: "도구", description: "프로그래밍 라이브러리와 도구를 비교·추천하는 디렉토리" },
          { title: "SaaSHub", url: "https://www.saashub.com/", tag: "도구", description: "SaaS 제품을 비교하고 대안을 찾을 수 있는 디렉토리" },
          { title: "SaaS Genius", url: "https://www.saasgenius.com/free-listing", tag: "도구", description: "SaaS 제품 무료 등록이 가능한 리뷰 디렉토리" },
          { title: "G2", url: "https://www.g2.com/", tag: "도구", description: "실제 사용자 리뷰 기반 B2B 소프트웨어 비교 플랫폼" },
          { title: "TrustPilot", url: "https://www.trustpilot.com/", tag: "도구", description: "소비자 리뷰를 수집·공유하는 글로벌 리뷰 플랫폼" },
          { title: "Capterra", url: "https://www.capterra.com/", tag: "도구", description: "비즈니스 소프트웨어를 비교·검색할 수 있는 리뷰 사이트" },
          { title: "There's an AI for that", url: "https://theresanaiforthat.com/", tag: "도구", description: "AI 도구를 용도별로 검색할 수 있는 디렉토리" },
          { title: "AlternativeTo", url: "https://alternativeto.net/", tag: "도구", description: "소프트웨어 대안을 크라우드소싱으로 추천하는 플랫폼" },
          { title: "SourceForge", url: "https://sourceforge.net/", tag: "도구", description: "오픈소스 소프트웨어 호스팅 및 다운로드 플랫폼" },
          { title: "Softonic", url: "https://softonic.com/", tag: "도구", description: "소프트웨어 리뷰와 다운로드를 제공하는 포털" },
          { title: "TrustMRR", url: "https://trustmrr.com/", tag: "도구", description: "SaaS MRR을 인증하여 신뢰도를 높여주는 플랫폼" },
        ],
      },
      {
        title: "라이프타임 딜 플랫폼",
        resources: [
          { title: "AppSumo", url: "https://appsumo.com/", tag: "도구", description: "SaaS 라이프타임 딜을 판매하는 세계 최대 마켓플레이스" },
          { title: "RocketHub", url: "https://www.rockethub.com/", tag: "도구", description: "스타트업 소프트웨어 라이프타임 딜 마켓플레이스" },
          { title: "StackSocial", url: "https://www.stacksocial.com/", tag: "도구", description: "소프트웨어·가젯 할인 딜을 제공하는 마켓플레이스" },
          { title: "SaaS Mantra", url: "https://deals.saasmantra.com/", tag: "도구", description: "SaaS 라이프타임 딜 전문 큐레이션 플랫폼" },
          { title: "Prime Club", url: "https://primeclub.co/", tag: "도구", description: "프리미엄 SaaS 라이프타임 딜 커뮤니티" },
          { title: "SaasZilla", url: "https://saaszilla.co/", tag: "도구", description: "초기 SaaS를 위한 라이프타임 딜 플랫폼" },
          { title: "SaaSPirate", url: "https://saaspirate.com/", tag: "도구", description: "SaaS 라이프타임 딜 리뷰와 판매 플랫폼" },
          { title: "ProductCanyon", url: "https://productcanyon.com/", tag: "도구", description: "디지털 제품 라이프타임 딜 마켓플레이스" },
          { title: "Dealmirror", url: "https://dealmirror.com/", tag: "도구", description: "SaaS·디지털 도구 할인 딜 플랫폼" },
          { title: "Dealify", url: "https://dealify.com/", tag: "도구", description: "스타트업을 위한 소프트웨어 딜 마켓플레이스" },
        ],
      },
      {
        title: "셀프 프로모션 가능한 서브레딧",
        note: "항상 서브레딧 규칙을 먼저 확인하세요!",
        resources: [
          { title: "r/SideProject", url: "https://www.reddit.com/r/SideProject/", tag: "커뮤니티", description: "사이드 프로젝트를 자유롭게 공유할 수 있는 서브레딧" },
          { title: "r/selfhosted", url: "https://www.reddit.com/r/selfhosted/", tag: "커뮤니티", description: '"Product Announcement" 플레어 사용' },
          { title: "r/webdev", url: "https://www.reddit.com/r/webdev/", tag: "커뮤니티", description: '"Showoff Saturday" 플레어 사용' },
          { title: "r/Startup_Ideas", url: "https://www.reddit.com/r/Startup_Ideas/", tag: "커뮤니티", description: "스타트업 아이디어를 공유하고 피드백 받는 서브레딧" },
          { title: "r/indiehackers", url: "https://www.reddit.com/r/indiehackers/", tag: "커뮤니티", description: '"Self Promotion" 플레어 사용' },
          { title: "r/InternetIsBeautiful", url: "https://www.reddit.com/r/InternetIsBeautiful/", tag: "커뮤니티", description: "흥미로운 웹사이트를 공유하는 대형 서브레딧" },
          { title: "r/roastmystartup", url: "https://www.reddit.com/r/roastmystartup/", tag: "커뮤니티", description: "스타트업에 대한 솔직한 피드백을 받을 수 있는 서브레딧" },
          { title: "r/alphaandbetausers", url: "https://www.reddit.com/r/alphaandbetausers/", tag: "커뮤니티", description: "알파·베타 테스터를 모집할 수 있는 서브레딧" },
          { title: "r/saasbuild", url: "https://www.reddit.com/r/saasbuild/", tag: "커뮤니티", description: "SaaS 제품 빌딩 과정을 공유하는 서브레딧" },
          { title: "r/buildinpublic", url: "https://www.reddit.com/r/buildinpublic/", tag: "커뮤니티", description: "빌딩 인 퍼블릭을 실천하는 메이커들의 서브레딧" },
          { title: "r/ShowMeYourSaaS", url: "https://www.reddit.com/r/ShowMeYourSaaS/", tag: "커뮤니티", description: "SaaS 제품을 보여주고 피드백 받는 서브레딧" },
          { title: "r/MVPLaunch", url: "https://www.reddit.com/r/MVPLaunch/", tag: "커뮤니티", description: "MVP를 런칭하고 초기 유저를 모집하는 서브레딧" },
          { title: "r/macapps", url: "https://www.reddit.com/r/macapps/", tag: "커뮤니티", description: "Mac 앱을 공유하고 추천받는 서브레딧" },
          { title: "r/LaunchMyStartup", url: "https://www.reddit.com/r/LaunchMyStartup/", tag: "커뮤니티", description: "스타트업 런칭을 알리고 홍보하는 서브레딧" },
        ],
      },
    ],
    tips: [
      "더 많은 런칭 사이트 목록: Sandra의 스프레드시트 참고",
      "AI 스타트업이라면 ai-directories 깃허브 레포도 확인",
      "좋은 런칭 포스트 작성 팁: markepear.dev 블로그 참고",
    ],
  },
  {
    slug: "producthunt",
    emoji: "😺",
    title: "Product Hunt 런칭",
    subtitle: "PH에서 1위 하는 법",
    description:
      "Product Hunt는 여전히 초기 유저를 확보하는 가장 효과적인 방법 중 하나입니다. 많은 준비가 필요하지만, 1위를 달성하면 솔직한 피드백, 다운로드, 유저, PR 효과를 얻을 수 있습니다.",
    sections: [
      {
        title: "런칭 가이드",
        resources: [
          { title: "Product Hunt에서 1위 하는 궁극 가이드", url: "https://tibo-maker.notion.site/Ultimate-guide-on-how-to-rank-1-on-Product-Hunt-589c000cd56f4baf9c64988a52eb4b4e", tag: "가이드", description: "PH 1위 달성을 위한 전략과 준비 과정 총정리" },
          { title: "Product Hunt 성공 런칭 방법 (Lenny's Newsletter)", url: "https://www.lennysnewsletter.com/p/how-to-successfully-launch-on-product", tag: "가이드", description: "PH 런칭 타이밍, 네트워킹, 실행 전략 안내" },
          { title: "Product Hunt 런칭 단계별 가이드 + 템플릿", url: "https://genesysgrowth.com/resources/product-hunt-launch-step-by-step-guide", tag: "템플릿", description: "PH 런칭 준비부터 실행까지 단계별 체크리스트와 템플릿" },
          { title: "Product Hunt Launch Workbook", url: "https://olenabomko.notion.site/Product-Hunt-Launch-Workbook-2bebf9c31de98158ba98e164f0bdc1a1", tag: "템플릿", description: "PH 런칭 계획을 정리할 수 있는 노션 워크북" },
        ],
      },
    ],
  },
  {
    slug: "social-media",
    emoji: "📷",
    title: "소셜 미디어 마케팅",
    subtitle: "Building in Public & 소셜 리스닝",
    description:
      "모든 소셜 미디어 플랫폼을 관리하는 건 풀타임 업무입니다. 하지만 'Building in Public'과 '소셜 리스닝' 두 가지 전략은 시도해볼 만합니다.",
    sections: [
      {
        title: "Building in Public",
        note: "개인 프로필로 전문성, 제품 업데이트, 비하인드 스토리를 공유하는 가장 쉬운 소셜 마케팅 전략",
        resources: [
          { title: "창업자의 Building in Public 가이드", url: "https://www.failory.com/blog/building-in-public", tag: "가이드", description: "빌딩 인 퍼블릭의 장단점과 실전 전략 정리" },
          { title: "창업자를 위한 LinkedIn 가이드", url: "https://www.mrrunlocked.com/p/founder-led-linkedin-guide", tag: "가이드", description: "창업자가 LinkedIn을 활용해 브랜드를 구축하는 방법" },
          { title: "LinkedIn CEO/Founder 플레이북", url: "https://www.markepear.dev/blog/linkedin-ceo-founder-playbook", tag: "가이드", description: "CEO/창업자의 LinkedIn 콘텐츠 전략 플레이북" },
          { title: "199개 LinkedIn 포스트 예시", url: "https://miro.com/app/board/uXjVKUoKvTw=/", tag: "예시", description: "참고할 수 있는 199개의 LinkedIn 포스트 모음 보드" },
          { title: "LinkedIn 활용 극대화 6가지 핵", url: "https://web.archive.org/web/20250717160200/https://www.growthunhinged.com/p/guide-to-mastering-linkedin", tag: "가이드", description: "LinkedIn 알고리즘과 성장 전략 6가지 핵심 팁" },
          { title: "Building in Public을 가장 수익성 높은 GTM 채널로 만들기", url: "https://knowledge.gtmstrategist.com/p/turn-building-in-public-into-your", tag: "가이드", description: "빌딩 인 퍼블릭을 GTM 채널로 전환하는 전략" },
          { title: "개발자 대상 트위터 마케팅 방법", url: "https://www.markepear.dev/blog/developer-marketing-twitter", tag: "가이드", description: "개발자 커뮤니티에서 트위터로 인지도를 높이는 방법" },
          { title: "SuperX Twitter Analytics 확장 프로그램", url: "https://chromewebstore.google.com/detail/superx-twitter-analytics/bjobgelaoehgbnklgcaaehdpckmhkplk", tag: "도구", description: "다른 계정의 인기 트윗 분석 도구" },
        ],
      },
      {
        title: "소셜 리스닝",
        note: "온라인에서 제품 관련 대화를 추적하고 참여하여 유저와 연결하세요",
        resources: [
          { title: "소셜 리스닝으로 SaaS 성장시키기", url: "https://www.mrrunlocked.com/p/social-listening-guide", tag: "가이드", description: "소셜 리스닝 설정부터 실행까지 단계별 가이드" },
          { title: "Simple Analytics의 소셜 리스닝 설정 예시", url: "https://1millionarr.substack.com/p/part-1-how-to-get-your-first-100", tag: "사례", description: "Simple Analytics가 소셜 리스닝으로 초기 유저를 확보한 방법" },
          { title: "F5 Bot - HN과 Reddit 멘션 무료 추적 도구", url: "https://f5bot.com/", tag: "도구", description: "HN·Reddit에서 키워드 멘션을 무료로 알려주는 봇" },
        ],
      },
      {
        title: "기타 소셜 미디어 가이드",
        resources: [
          { title: "TikTok & Instagram 유기적 성장 가이드", url: "https://www.post-bridge.com/growth-guide/start-here", tag: "가이드", description: "TikTok·Instagram 오가닉 성장 전략 단계별 가이드" },
          { title: "Pinterest 성장 가이드", url: "https://www.blogtopin.com/growth-guide/start-here", tag: "가이드", description: "Pinterest로 트래픽을 만드는 성장 전략 가이드" },
          { title: "유기적 UGC로 바이럴 앱 마케팅하는 법", url: "https://youtu.be/9r4kS9zZj9s", tag: "영상", description: "UGC를 활용한 앱 바이럴 마케팅 전략 영상" },
        ],
      },
    ],
  },
  {
    slug: "sales",
    emoji: "❄",
    title: "세일즈 & 콜드 아웃리치",
    subtitle: "ICP 설정부터 콜드 이메일까지",
    description:
      "콜드 아웃리치는 규모 확장이 어렵고 시간이 많이 들지만, 잠재 유저와 직접 소통하고 초기 피드백을 수집하며 첫 고객을 찾는 가장 직접적인 방법입니다.",
    sections: [
      {
        title: "ICP (이상적 고객 프로필) 정의",
        resources: [
          { title: "ICP 구축 프레임워크", url: "https://www.mrrunlocked.com/p/framework-ideal-customer-profile", tag: "가이드", description: "이상적 고객 프로필을 체계적으로 구축하는 프레임워크" },
          { title: "이상적 고객 전에 초기 고객 프로필이 먼저", url: "https://knowledge.gtmstrategist.com/p/before-there-is-ideal-there-is-early", tag: "가이드", description: "ICP 전에 초기 고객 프로필(ECP)을 먼저 정의해야 하는 이유" },
          { title: "PostHog의 ICP 팁", url: "https://posthog.com/newsletter/ideal-customer-profile-framework", tag: "사례", description: "PostHog가 ICP를 정의하고 활용한 실전 팁" },
          { title: "초기 고객 분석으로 ICP 검증하기", url: "https://www.mrrunlocked.com/p/analyze-your-icp", tag: "가이드", description: "기존 고객 데이터를 분석해 ICP를 검증하는 방법" },
          { title: "B2B ICP 템플릿 (Miro)", url: "https://miro.com/miroverse/ideal-customer-profile-b2b-persona/", tag: "템플릿", description: "B2B ICP와 페르소나를 정리하는 Miro 보드 템플릿" },
        ],
      },
      {
        title: "세일즈 전략 & 실행",
        resources: [
          { title: "경험 없이 스타트업 세일즈하기", url: "https://posthog.com/founders/startup-sales-strategy", tag: "가이드", description: "세일즈 경험 없는 창업자를 위한 실전 세일즈 전략" },
          { title: "LinkedIn Sales Navigator 90분 마스터", url: "https://www.mrrunlocked.com/p/linkedin-sales-navigator-guide", tag: "가이드", description: "Sales Navigator를 빠르게 마스터하는 실전 가이드" },
          { title: "GTM 아웃리치 플레이북: 트리거부터 데모까지", url: "https://knowledge.gtmstrategist.com/p/the-gtm-outreach-playbook-from-triggers-to-demos", tag: "가이드", description: "구매 신호 감지부터 데모 예약까지의 아웃리치 플레이북" },
          { title: "세일즈 프로덕트 데모 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-guide-to-sales-product-demos", tag: "가이드", description: "전환율 높은 프로덕트 데모를 만드는 방법" },
          { title: "고전환 세일즈 덱 만들기", url: "https://www.mrrunlocked.com/p/high-converting-sales-deck", tag: "가이드", description: "투자자·고객을 설득하는 세일즈 덱 작성법" },
          { title: "개발자에게 파는 법 (개발자 말고 보스에게 팔아라)", url: "https://www.markepear.dev/blog/selling-to-developers", tag: "가이드", description: "개발자 도구의 실제 구매 결정자를 공략하는 전략" },
          { title: "엔터프라이즈 세일즈 플레이북 - Lenny's Podcast", url: "https://youtu.be/37fKFWdrMyA", tag: "영상", description: "엔터프라이즈 세일즈의 핵심 전략을 다루는 팟캐스트" },
        ],
      },
      {
        title: "콜드 이메일 & 아웃바운드",
        resources: [
          { title: "SaaS 필수 이메일 템플릿 4가지", url: "https://www.mrrunlocked.com/p/the-4-must-have-sales-email-templates", tag: "템플릿", description: "SaaS 세일즈에 바로 쓸 수 있는 4가지 이메일 템플릿" },
          { title: "The Cold Outbound Handbook", url: "https://www.za-zu.com/handbook/intro", tag: "가이드", description: "콜드 아웃바운드의 기초부터 실전까지 핸드북" },
          { title: "콜드 이메일 성장 시스템 세팅 가이드", url: "https://coldstartblueprint.com/p/cold-email-setup", tag: "가이드", description: "콜드 이메일 인프라 세팅과 워밍업 방법" },
          { title: "초기 스타트업을 위한 최고의 아웃바운드 테크 스택", url: "https://www.mrrunlocked.com/p/the-best-outbound-tech-stack", tag: "가이드", description: "아웃바운드 세일즈에 필요한 도구 스택 추천" },
          { title: "ConvertKit를 시작한 콜드 이메일", url: "https://x.com/natiakourdadze/status/1799848364042854856", tag: "사례", description: "ConvertKit 창업자가 보낸 콜드 이메일로 첫 고객을 확보한 이야기" },
          { title: "Tally의 초기 DM 전략", url: "https://knowledge.gtmstrategist.com/p/tallys-bootstrapped-journey-to-500000-users", tag: "사례", description: "Tally가 DM 아웃리치로 50만 유저까지 성장한 여정" },
          { title: "탑 회사들의 세일즈 이메일 예시", url: "https://goodsalesemails.com/", tag: "예시", description: "유명 SaaS 회사들의 실제 세일즈 이메일 모음" },
          { title: "검증된 세일즈 플레이 예시들", url: "https://www.elenaverna.com/p/examples-of-proven-sales-plays-to", tag: "예시", description: "실전에서 검증된 세일즈 플레이 패턴 모음" },
        ],
      },
    ],
  },
  {
    slug: "seo",
    emoji: "📈",
    title: "SEO",
    subtitle: "초기 스타트업을 위한 검색 최적화",
    description:
      "초기에 SEO에 집중해야 할까요? 아마 아닐 겁니다. SEO는 시간이 걸립니다. 하지만 무시해서도 안 됩니다. SEO는 많은 스타트업의 성장 기반이며, 시간 투자만으로 꾸준한 트래픽을 만들 수 있습니다.",
    sections: [
      {
        title: "SEO 가이드",
        resources: [
          { title: "초기 SaaS를 위한 궁극의 SEO 가이드", url: "https://www.mrrunlocked.com/p/the-saas-seo-guide", tag: "가이드", description: "초기 SaaS가 SEO로 트래픽을 만드는 전략 총정리" },
          { title: "초기 스타트업에서 SEO 우선순위 정하기", url: "https://www.reddit.com/r/ycombinator/comments/1awnckg/comment/krkpxnu/", tag: "가이드", description: "리소스가 부족한 초기 스타트업의 SEO 우선순위 정하는 법" },
          { title: "Simple Analytics의 SEO 전략", url: "https://1millionarr.substack.com/p/part-2-how-to-get-your-first-1000", tag: "사례", description: "Simple Analytics가 SEO로 첫 1,000 유저를 확보한 전략" },
          { title: "스타트업을 위한 직관 깨는 SEO 조언 (PostHog)", url: "https://posthog.com/newsletter/seo-for-startups", tag: "사례", description: "PostHog가 공유하는 일반적 SEO 조언과 다른 실전 팁" },
          { title: "유스케이스 기반 SEO 전략", url: "https://playbooks.hypergrowthpartners.com/p/use-case-led-seo-a-strategy-for-organic", tag: "가이드", description: "제품 유스케이스별 키워드를 타겟하는 SEO 전략" },
          { title: "SEO의 미래는 UGC (User Generated Content)", url: "https://www.elenaverna.com/p/the-future-of-seo-is-user-generated", tag: "가이드", description: "사용자 생성 콘텐츠가 SEO의 미래인 이유와 활용법" },
          { title: "AI 기반 프로그래매틱 SEO 가이드", url: "https://playbooks.hypergrowthpartners.com/p/ai-powered-programmatic-seo", tag: "가이드", description: "AI를 활용한 대규모 프로그래매틱 SEO 페이지 생성 방법" },
          { title: "Danny Postma의 SEO Blueprint (메이커를 위한 SEO 코스)", url: "https://www.dannypostma.com/seo-course", tag: "코스", description: "인디 메이커를 위한 실전 SEO 코스" },
          { title: "SEO와 AEO를 위한 키워드 리서치 방법", url: "https://www.marketermilk.com/blog/how-to-do-keyword-research", tag: "가이드", description: "SEO·AEO를 위한 키워드 리서치 단계별 방법론" },
        ],
      },
    ],
    tips: [
      "SEO 초보라면 LearningSEO.io 에서 시작하세요",
      "프로그래매틱 SEO 가이드: withdaydream.com 참고",
      "iOS 앱이라면 App Store SEO(ASO)도 확인하세요",
    ],
  },
  {
    slug: "llm-seo",
    emoji: "🤖",
    title: "LLM SEO / AEO / GEO",
    subtitle: "AI가 당신의 제품을 추천하게 만들기",
    description:
      "ChatGPT, Claude, Perplexity, Gemini에서 추천받는 방법은 2025년 창업자들의 가장 핫한 질문입니다. AI 검색에서 당장 내일부터 노출될 수 있습니다.",
    sections: [
      {
        title: "AI 검색 최적화 가이드",
        resources: [
          { title: "AEO 궁극 가이드: ChatGPT가 제품을 추천하게 만들기", url: "https://www.lennysnewsletter.com/p/the-ultimate-guide-to-aeo-ethan-smith", tag: "가이드", description: "AI 검색 엔진 최적화(AEO)의 핵심 전략 총정리" },
          { title: "ChatGPT에서 추천받는 방법", url: "https://web.archive.org/web/20250912043229/https://www.growthunhinged.com/p/get-recommended-by-chatgpt", tag: "가이드", description: "ChatGPT 추천 결과에 포함되기 위한 실전 방법" },
          { title: "ChatGPT, Perplexity, Google AI 검색 랭킹 실전 가이드", url: "https://knowledge.gtmstrategist.com/p/how-to-win-the-new-seo-game-ai-search", tag: "가이드", description: "주요 AI 검색 엔진에서 상위 랭킹하는 전략" },
          { title: "Vercel의 LLM SEO 적용 사례", url: "https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search", tag: "사례", description: "Vercel이 LLM과 AI 검색에 맞춰 SEO를 조정한 사례" },
          { title: "Tally가 AI를 최고의 유저 획득 채널로 만든 방법", url: "https://justinhammond.substack.com/p/how-tally-turned-ai-into-their-top", tag: "사례", description: "Tally가 AI 검색을 1위 유저 획득 채널로 만든 전략" },
          { title: "AI 검색 엔진 상위 랭킹을 위한 기업들의 전략", url: "https://knowledge.gtmstrategist.com/p/what-companies-are-doing-today-to", tag: "가이드", description: "기업들이 AI 검색 상위 노출을 위해 실행 중인 전략" },
          { title: "AI 디스커버리를 최고의 리드 채널로 만드는 플레이북", url: "https://web.archive.org/web/20251011132541/https://www.growthunhinged.com/p/ai-discovery-playbook", tag: "가이드", description: "AI 디스커버리를 리드 생성 채널로 활용하는 플레이북" },
          { title: "AI & LLM SEO 코스", url: "https://magicspace.agency/courses/ai-seo", tag: "코스", description: "AI 시대의 SEO를 체계적으로 배우는 온라인 코스" },
        ],
      },
    ],
  },
  {
    slug: "reddit",
    emoji: "🦊",
    title: "Reddit 마케팅",
    subtitle: "밴 당하지 않고 제품 홍보하기",
    description:
      "Reddit은 초기 트랙션과 첫 유저를 얻기 위한 최고의 플랫폼이라고 합니다. 하지만 레딧 유저들은 마케팅을 감지하는 초능력이 있어서, 프로모션 콘텐츠는 다운보트 지옥에 빠지기 쉽습니다.",
    sections: [
      {
        title: "Reddit 마케팅 가이드",
        resources: [
          { title: "Reddit 마케팅 초보자 가이드", url: "https://redreach.ai/reddit-marketing-guide", tag: "가이드", description: "Reddit 마케팅의 기초와 규칙을 배우는 입문 가이드" },
          { title: "Reddit에서 MVP 홍보하는 법", url: "https://refined.so/blog/marketing-on-reddit", tag: "가이드", description: "밴 당하지 않고 Reddit에서 MVP를 홍보하는 전략" },
          { title: "제품 런칭/홍보용 Reddit 포스트 예시 모음", url: "https://it.pinterest.com/MarketingforFounders/marketing-on-reddit/", tag: "예시", description: "성공적인 Reddit 제품 홍보 포스트 예시 모음" },
          { title: "Reddit 셀프 프로모션의 핵심", url: "https://marketingexamples.com/content/reddit", tag: "가이드", description: "Reddit에서 자연스럽게 셀프 프로모션하는 핵심 원칙" },
          { title: "OpenPhone: Reddit으로 첫 1,000 고객 확보한 방법", url: "https://readfoundertofounder.com/p/how-i-used-reddit-to-get-our-first-1-000-customers", tag: "사례", description: "OpenPhone이 Reddit만으로 첫 1,000명 고객을 확보한 사례" },
          { title: "Lemlist의 Reddit 마케팅 팁", url: "https://www.linkedin.com/posts/erwanxgrowth_everyone-says-reddit-is-the-new-growth-channel-activity-7373324721553154048-Ny4M", tag: "가이드", description: "Lemlist가 공유하는 Reddit 마케팅 실전 팁" },
          { title: "Reddit에서 10배 화제성을 만드는 스토리텔링 핵", url: "https://web.archive.org/web/20250319083601/https://www.marketingideas.com/p/the-storytelling-hack-for-10x-buzz", tag: "가이드", description: "Reddit에서 스토리텔링으로 참여도를 10배 높이는 방법" },
        ],
      },
    ],
    tips: [
      "셀프 프로모션 가능한 서브레딧 목록은 '런칭 플랫폼' 카테고리 참고",
      "소셜 리스닝 설정 방법은 '소셜 미디어 마케팅' 카테고리 참고",
    ],
  },
  {
    slug: "email",
    emoji: "💌",
    title: "이메일 마케팅",
    subtitle: "온보딩부터 전환까지",
    description:
      "이메일 마케팅은 거의 모든 것을 도와줍니다: 신규 유저 온보딩, 무료→유료 전환율 향상, 어필리에이트/레퍼럴 프로그램 홍보, 피드백 수집. 프로덕트 밖에서 유저에게 닿을 수 있는 유일한 채널이기도 합니다.",
    sections: [
      {
        title: "이메일 마케팅 전략 & 가이드",
        resources: [
          { title: "The SaaS Email Marketing Playbook", url: "https://saasplaybook.co/", tag: "가이드", description: "SaaS 이메일 마케팅의 전략과 실행을 다루는 플레이북" },
          { title: "SaaS 이메일 마케팅 101", url: "https://blog.beehiiv.com/p/email-marketing-for-saas", tag: "가이드", description: "SaaS 이메일 마케팅의 기초부터 실전까지 입문 가이드" },
          { title: "SaaS 이메일 마케팅 전략 총정리", url: "https://userlist.com/blog/saas-email-marketing-strategies/", tag: "가이드", description: "SaaS에서 활용할 수 있는 이메일 마케팅 전략 모음" },
          { title: "라이프사이클 이메일 기획 워크시트", url: "https://userlist.com/worksheets/", tag: "템플릿", description: "유저 라이프사이클별 이메일 시퀀스를 기획하는 워크시트" },
          { title: "고전환 SaaS 온보딩 이메일 시퀀스 만들기", url: "https://www.reddit.com/r/SaaS/comments/1b7l04k/", tag: "가이드", description: "전환율 높은 온보딩 이메일 시퀀스 작성 노하우" },
          { title: "온보딩 이메일 콘셉트 25가지 (Figma)", url: "https://www.figma.com/community/file/1207279330099591674/onboarding-emails-25-concepts", tag: "템플릿", description: "참고할 수 있는 25가지 온보딩 이메일 디자인 콘셉트" },
          { title: "SaaS 이메일 예시 모음 (Userlist)", url: "https://userlist.com/blog/email-examples/", tag: "예시", description: "다양한 SaaS 회사들의 실제 이메일 예시 모음" },
          { title: "이메일 예시 모음 (Encharge)", url: "https://encharge.io/?post_type=post&s=examples", tag: "예시", description: "Encharge가 큐레이션한 이메일 마케팅 예시 모음" },
          { title: "B2B SaaS 행동 기반 이메일 마케팅 코스", url: "https://encharge.notion.site/Course-Behavior-based-Email-Marketing-for-B2B-SaaS-18373064882b80ee84dffbe869883eab", tag: "코스", description: "유저 행동에 기반한 이메일 자동화를 배우는 코스" },
          { title: "15가지 SaaS 이메일 플로우 아이디어", url: "https://www.mailmodo.com/email-flow/saas-email-flow/", tag: "가이드", description: "바로 적용할 수 있는 15가지 SaaS 이메일 자동화 플로우" },
          { title: "이메일 자동화 최적화 방법", url: "https://copyhackers.com/2025/03/how-to-optimize-an-email/", tag: "가이드", description: "이메일 자동화 시퀀스의 성과를 개선하는 최적화 방법" },
          { title: "PostHog의 온보딩 이메일 플로우 구축기", url: "https://posthog.com/blog/how-we-built-email-onboarding", tag: "사례", description: "PostHog가 온보딩 이메일 플로우를 구축한 과정과 결과" },
        ],
      },
    ],
  },
  {
    slug: "content",
    emoji: "🧲",
    title: "콘텐츠 마케팅",
    subtitle: "PR, 배포, 리드 마그넷",
    description:
      "SEO와 마찬가지로 콘텐츠 마케팅은 스타트업이 가장 먼저 당길 수 있는 성장 레버입니다. 검색 엔진이 아니라 타겟 오디언스가 있는 곳에 콘텐츠를 공유하고, 트렌드를 활용해 무료 노출을 얻으세요.",
    sections: [
      {
        title: "콘텐츠 마케팅 가이드",
        resources: [
          { title: "SaaS PR 확보하기", url: "https://1millionarr.substack.com/p/getting-pr-for-your-saas", tag: "가이드", description: "SaaS 스타트업이 미디어 PR을 확보하는 전략" },
          { title: "효과적인 오리지널 콘텐츠 작성법", url: "https://web.archive.org/web/20250621232540/https://www.growthunhinged.com/p/you-need-a-better-content-strategy", tag: "가이드", description: "차별화된 오리지널 콘텐츠를 기획·작성하는 방법" },
          { title: "SaaS 콘텐츠 마케팅 프로그램 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-content-marketing-guide", tag: "가이드", description: "SaaS 콘텐츠 마케팅 프로그램을 처음부터 구축하는 가이드" },
          { title: "개발자 대상 효과적인 콘텐츠 작성법", url: "https://www.markepear.dev/blog/developer-content-marketing", tag: "가이드", description: "개발자가 실제로 읽는 콘텐츠를 만드는 방법" },
          { title: "MKT1의 콘텐츠 전략 비하인드 (Part 1)", url: "https://newsletter.mkt1.co/p/mkt1-content-strategy-part-1", tag: "사례", description: "MKT1 뉴스레터의 콘텐츠 전략 수립 과정 Part 1" },
          { title: "MKT1의 콘텐츠 전략 비하인드 (Part 2)", url: "https://newsletter.mkt1.co/p/mkt1-content-strategy-part-2", tag: "사례", description: "MKT1 뉴스레터의 콘텐츠 전략 실행 과정 Part 2" },
          { title: "내 콘텐츠 홍보하는 법 - Marketing Examples", url: "https://marketingexamples.com/content/sharing", tag: "가이드", description: "작성한 콘텐츠를 효과적으로 배포·홍보하는 방법" },
          { title: "콘텐츠 배포 체크리스트 (Ross Simmonds)", url: "https://docs.google.com/spreadsheets/d/1XaqKmHnMcRRznR-JQJsktlzkZ2fRmszGWZTeLeRyYZk/edit", tag: "템플릿", description: "콘텐츠 배포 채널과 실행 항목을 정리한 체크리스트" },
          { title: "강력한 SaaS 리드 마그넷 만들기 + 예시", url: "https://www.mrrunlocked.com/p/saas-lead-magnets", tag: "가이드", description: "리드를 수집하는 효과적인 리드 마그넷 만드는 방법" },
        ],
      },
    ],
  },
  {
    slug: "ads",
    emoji: "💸",
    title: "유료 광고",
    subtitle: "Google, LinkedIn, Facebook Ads",
    description:
      "모든 스타트업은 조만간 유료 채널을 마케팅 전략에 추가하게 됩니다. 예산을 다 태우기 전에 수익을 내려면 이 가이드들을 참고하세요.",
    sections: [
      {
        title: "광고 가이드",
        resources: [
          { title: "초기 B2B SaaS를 위한 Google Ads 시작 가이드", url: "https://www.mrrunlocked.com/p/google-ads-guide", tag: "가이드", description: "B2B SaaS가 Google Ads를 시작할 때 알아야 할 핵심" },
          { title: "LinkedIn Ads 실전 플레이북", url: "https://knowledge.gtmstrategist.com/p/the-no-fluff-linkedin-ads-playbook", tag: "가이드", description: "LinkedIn Ads의 실전 세팅과 최적화 플레이북" },
          { title: "초기 B2B SaaS를 위한 LinkedIn Ads 가이드", url: "https://www.mrrunlocked.com/p/how-to-get-started-with-linkedin", tag: "가이드", description: "B2B SaaS가 LinkedIn Ads를 시작하는 단계별 가이드" },
          { title: "Facebook으로 SaaS 광고하기", url: "https://makerads.guide/", tag: "가이드", description: "인디 메이커를 위한 Facebook 광고 실전 가이드" },
          { title: "무료 B2B 광고 코스 (AdConversion)", url: "https://www.adconversion.com/courses", tag: "코스", description: "B2B 광고의 기초부터 고급까지 배우는 무료 코스" },
          { title: "경쟁사 성공 광고 스파이하는 법", url: "https://www.marketingideas.com/p/track-competitor-tactics", tag: "가이드", description: "경쟁사 광고 전략을 분석하고 인사이트를 얻는 방법" },
          { title: "250+ DevTool 광고 예시", url: "https://www.reo.dev/devtools-ad-examples", tag: "예시", description: "개발자 도구의 실제 광고 크리에이티브 250개 이상 모음" },
          { title: "개발 도구 유료 광고에 돈 태운 경험담 (PostHog)", url: "https://posthog.com/founders/dev-marketing-paid-ads", tag: "사례", description: "PostHog가 유료 광고에 투자하며 배운 교훈" },
          { title: "효과적인 Reddit 광고 운영법", url: "https://www.linkedin.com/posts/aayildirim_if-youre-running-reddit-ads-you-know-its-activity-7364309579888771073-tvTR", tag: "가이드", description: "Reddit 광고 플랫폼의 특성과 효과적인 운영 팁" },
        ],
      },
    ],
  },
  {
    slug: "influencer",
    emoji: "👩‍🏫",
    title: "인플루언서 마케팅",
    subtitle: "크리에이터 파트너십",
    description:
      "오디언스가 있는 곳으로 가는 것이 마케팅의 첫 번째 규칙입니다. 콘텐츠 크리에이터와 인플루언서와의 파트너십으로 고객과 직접 연결하세요.",
    sections: [
      {
        title: "인플루언서 마케팅 가이드",
        resources: [
          { title: "인플루언서가 GTM 전략의 일부가 되어야 할까?", url: "https://knowledge.gtmstrategist.com/p/should-influencers-be-part-of-your", tag: "가이드", description: "인플루언서 마케팅을 GTM에 포함할지 판단하는 기준" },
          { title: "Jenny AI의 숏폼 콘텐츠 플레이북", url: "https://www.starterstory.com/10m-playbook", tag: "사례", description: "Jenny AI가 숏폼 콘텐츠로 급성장한 플레이북" },
          { title: "Clerk의 YouTube 개발자 커뮤니티 파트너십", url: "https://playbooks.hypergrowthpartners.com/p/how-clerk-partners-with-youtubes", tag: "사례", description: "Clerk가 YouTube 개발자 크리에이터와 파트너십을 맺은 전략" },
          { title: "성공적인 인플루언서 마케팅의 5가지 기둥", url: "https://knowledge.gtmstrategist.com/p/5-pillars-of-successful-influencer-marketing-campaigns", tag: "가이드", description: "인플루언서 마케팅 캠페인 성공의 5가지 핵심 요소" },
          { title: "Lovable, Gamma, n8n의 B2B 인플루언서 마케팅 플레이북", url: "https://www.youtube.com/watch?v=f3wJ2LPlu3o", tag: "영상", description: "B2B 인플루언서 마케팅 실전 사례를 다루는 영상" },
        ],
      },
    ],
  },
  {
    slug: "affiliates",
    emoji: "💑",
    title: "어필리에이트 & 레퍼럴",
    subtitle: "입소문 프로그램",
    description:
      "입소문은 부트스트랩 스타트업의 핵심 성장 동력입니다. 설정이 쉽고, 전환 시에만 비용이 들며, 신뢰와 소셜 프루프를 동시에 쌓을 수 있습니다.",
    sections: [
      {
        title: "레퍼럴 & 어필리에이트 가이드",
        resources: [
          { title: "훌륭한 레퍼럴 프로그램을 위한 10단계", url: "https://thegrowthmind.substack.com/p/10-steps-for-a-great-referral-program", tag: "가이드", description: "레퍼럴 프로그램을 설계하고 운영하는 10단계 가이드" },
          { title: "B2B 레퍼럴 가이드", url: "https://web.archive.org/web/20250523213447/https://www.growthunhinged.com/p/your-guide-to-b2b-referrals", tag: "가이드", description: "B2B 환경에서 레퍼럴 프로그램을 구축하는 방법" },
          { title: "B2B SaaS 어필리에이트 레퍼럴 궁극 가이드", url: "https://www.mrrunlocked.com/p/your-ultimate-guide-to-affiliate-referrals", tag: "가이드", description: "SaaS 어필리에이트·레퍼럴 프로그램 설계 총정리" },
          { title: "8가지 어필리에이트 & 레퍼럴 이메일 예시", url: "https://pin.it/5BxRb4Zv4", tag: "예시", description: "어필리에이트·레퍼럴 프로그램에서 사용한 이메일 예시 모음" },
        ],
      },
    ],
  },
  {
    slug: "free-tools",
    emoji: "🛠",
    title: "무료 툴 마케팅",
    subtitle: "Engineering as Marketing",
    description:
      "무료 미니 도구는 바이럴, PR, 백링크, 대량 오가닉 트래픽을 만드는 최고의 방법입니다. 마케팅처럼 느껴지지 않는 것이 가장 큰 장점입니다.",
    sections: [
      {
        title: "무료 툴 마케팅 가이드",
        resources: [
          { title: "미니 도구는 무료 트라이얼보다 10배 강력하다", url: "https://www.marketingideas.com/p/mini-tools-are-10x-more-powerful", tag: "가이드", description: "무료 미니 도구가 트라이얼보다 효과적인 이유와 사례" },
          { title: "사이드 프로젝트 마케팅이란? 어떻게 하나?", url: "https://www.failory.com/blog/side-project-marketing", tag: "가이드", description: "사이드 프로젝트를 마케팅 도구로 활용하는 전략" },
          { title: "Engineering as Marketing (Hubspot, Shopify, Ahrefs 사례)", url: "https://thegrowthmind.substack.com/p/engineering-as-marketing", tag: "사례", description: "Hubspot·Shopify·Ahrefs가 무료 도구로 성장한 사례" },
          { title: "마케팅(SEO)을 위한 무료 도구 만들기", url: "https://dmytrokrasun.com/posts/building-free-tools-for-marketing-seo/", tag: "가이드", description: "SEO 트래픽을 위한 무료 도구를 기획·개발하는 방법" },
        ],
      },
    ],
  },
  {
    slug: "landing",
    emoji: "🎯",
    title: "랜딩 페이지 & 포지셔닝",
    subtitle: "메시지, 카피, 전환",
    description:
      "대부분의 스타트업 웹사이트는 비효율적입니다. 제품이 누구를 위한 것인지, 무엇을 하는지, 왜 더 나은지 전달하지 못합니다. 웹사이트를 세일즈 & 마케팅 자산으로 바꾸세요.",
    sections: [
      {
        title: "홈페이지 & 랜딩 페이지",
        resources: [
          { title: "더 효과적인 홈페이지 만들기", url: "https://newsletter.mkt1.co/p/homepage-copy", tag: "가이드", description: "전환율 높은 홈페이지 카피를 작성하는 방법" },
          { title: "SaaS 홈페이지 프레임워크", url: "https://web.archive.org/web/20250919131318/https://www.growthunhinged.com/p/how-to-write-a-saas-homepage", tag: "가이드", description: "SaaS 홈페이지의 구조와 카피를 잡는 프레임워크" },
          { title: "고전환 SaaS 홈페이지 만들기", url: "https://www.mrrunlocked.com/p/how-to-high-converting-saas-homepage", tag: "가이드", description: "전환율을 높이는 SaaS 홈페이지 설계 가이드" },
          { title: "ConversionFactory의 SaaS 홈페이지 프레임워크", url: "https://x.com/coreyhainesco/status/1948873434098028746", tag: "가이드", description: "검증된 SaaS 홈페이지 구성 프레임워크" },
          { title: "SaaS 헤드라인 플레이북", url: "https://nicolasmerouze.notion.site/SaaS-Headline-Playbook-176830adbaa5477994946a3106473aba", tag: "템플릿", description: "효과적인 SaaS 헤드라인을 작성하는 공식과 예시 모음" },
        ],
      },
      {
        title: "포지셔닝 & 메시징",
        resources: [
          { title: "포지셔닝 퀵스타트 가이드 (Lenny)", url: "https://www.lennysnewsletter.com/p/positioning", tag: "가이드", description: "제품 포지셔닝을 빠르게 정립하는 실전 가이드" },
          { title: "제품 포지셔닝 프레임워크 & 차별화 전략", url: "https://web.archive.org/web/20250814042615/https://www.growthunhinged.com/p/product-positioning-part-one", tag: "가이드", description: "경쟁 시장에서 제품을 차별화하는 포지셔닝 프레임워크" },
          { title: "개발자 도구 밸류 프로포지션 만들기", url: "https://www.markepear.dev/blog/value-proposition-developer-tools", tag: "가이드", description: "개발자 도구의 설득력 있는 가치 제안을 만드는 방법" },
          { title: "SaaS 메시징 프레임워크", url: "https://www.mrrunlocked.com/p/the-ultimate-saas-messaging-framework", tag: "가이드", description: "일관된 SaaS 메시징을 구축하는 프레임워크" },
          { title: "소셜 프루프로 GTM 전략 높이기", url: "https://knowledge.gtmstrategist.com/p/use-social-proof-to-elevate-gtm-strategy", tag: "가이드", description: "소셜 프루프를 GTM 전략에 효과적으로 활용하는 방법" },
          { title: "케이스 스터디 & 추천사 궁극 가이드", url: "https://www.mrrunlocked.com/p/guide-case-studies", tag: "가이드", description: "설득력 있는 케이스 스터디와 추천사를 만드는 방법" },
        ],
      },
      {
        title: "프라이싱 페이지",
        resources: [
          { title: "훌륭한 프라이싱 페이지의 DNA", url: "https://www.elenaverna.com/p/the-dna-of-a-great-pricing-page", tag: "가이드", description: "전환을 높이는 프라이싱 페이지의 핵심 요소 분석" },
          { title: "프라이싱 페이지 최적화 방법", url: "https://web.archive.org/web/20250814043847/https://www.growthunhinged.com/p/how-to-optimize-your-pricing-page", tag: "가이드", description: "프라이싱 페이지의 전환율을 개선하는 최적화 방법" },
          { title: "효과적인 프라이싱 페이지 만들기", url: "https://newsletter.mkt1.co/p/pricing-page-examples", tag: "가이드", description: "실제 예시와 함께 배우는 프라이싱 페이지 설계법" },
          { title: "SaaS 프로덕트 페이지 만들기", url: "https://www.mrrunlocked.com/p/product-pages-for-saas", tag: "가이드", description: "기능을 효과적으로 보여주는 SaaS 프로덕트 페이지 설계" },
          { title: "SaaS 프라이싱 페이지 궁극 가이드 (실제 예시 포함)", url: "https://www.mrrunlocked.com/p/saas-pricing-page", tag: "가이드", description: "SaaS 프라이싱 페이지의 모범 사례와 실제 예시 총정리" },
        ],
      },
    ],
  },
  {
    slug: "pricing",
    emoji: "🎰",
    title: "가격 전략",
    subtitle: "WTP 분석부터 트라이얼까지",
    description:
      "\"프로덕트는 고객에게 가치를 전달하고, 프라이싱은 그 가치를 회수하여 지속 가능한 비즈니스를 만듭니다.\" 프라이싱과 비즈니스 모델은 스타트업이 풀어야 할 가장 어려운 문제입니다.",
    sections: [
      {
        title: "가격 전략 가이드",
        resources: [
          { title: "Pricing: WTF에서 WTP(지불 의향)까지", url: "https://knowledge.gtmstrategist.com/p/pricing-from-wtf-to-willingness-to-pay", tag: "가이드", description: "지불 의향(WTP) 기반 가격 설정 전략 가이드" },
          { title: "초기 스타트업을 위한 B2B SaaS 프라이싱 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-b2b-saas-pricing-guide", tag: "가이드", description: "B2B SaaS 가격 모델 설계와 전략 총정리" },
          { title: "가격 테스트 가이드", url: "https://web.archive.org/web/20250929073716/https://www.growthunhinged.com/p/your-guide-to-price-testing", tag: "가이드", description: "가격 변경의 효과를 검증하는 테스트 방법론" },
          { title: "돈을 테이블 위에 너무 많이 남기고 있지 않나요?", url: "https://knowledge.gtmstrategist.com/p/are-you-leaving-too-much-money-on", tag: "가이드", description: "수익을 놓치지 않기 위한 가격 최적화 체크리스트" },
          { title: "고객과 '프라이싱 대화'하는 법", url: "https://web.archive.org/web/20250717160702/https://www.growthunhinged.com/p/your-guide-to-finally-talking-to", tag: "가이드", description: "고객에게 가격 민감도를 자연스럽게 파악하는 대화법" },
          { title: "리버스 트라이얼 가이드", url: "https://web.archive.org/web/20250814071651/https://www.growthunhinged.com/p/your-guide-to-reverse-trials", tag: "가이드", description: "프리미엄 기능을 먼저 체험시키는 리버스 트라이얼 전략" },
          { title: "초기 PLG 스타트업의 무료 트라이얼 8가지 기본 원칙", url: "https://www.mrrunlocked.com/p/free-trials-fundamentals", tag: "가이드", description: "PLG 스타트업의 무료 트라이얼 설계 8가지 핵심 원칙" },
          { title: "연간 플랜 판매를 위한 14가지 전술적 아이디어", url: "https://web.archive.org/web/20250725183608/https://www.growthunhinged.com/p/how-to-sell-annual-plans", tag: "가이드", description: "월간→연간 플랜 전환율을 높이는 14가지 전술" },
        ],
      },
    ],
  },
  {
    slug: "cro",
    emoji: "🔥",
    title: "전환율 최적화 (CRO)",
    subtitle: "작은 변화, 큰 임팩트",
    description:
      "작은 조정이 전환에 엄청난 영향을 미칠 수 있습니다. A/B 테스트할 준비가 된 아이디어들을 확인하세요.",
    sections: [
      {
        title: "CRO 인사이트",
        resources: [
          { title: "이 웹사이트 실수를 하고 있지 않나요?", url: "https://web.archive.org/web/20250210005430/https://www.marketingideas.com/p/are-you-making-this-website-mistake", tag: "가이드", description: "전환을 떨어뜨리는 흔한 웹사이트 실수와 해결법" },
          { title: "20,000번의 실험에서 얻은 놀라운 교훈들", url: "https://web.archive.org/web/20250821014350/https://www.growthunhinged.com/p/surprising-lessons-website-conversion", tag: "가이드", description: "2만 건 A/B 테스트에서 발견한 전환율 인사이트" },
          { title: "가장 강력한 CTA는? 힌트: \"Book a Demo\"가 절대 아닙니다", url: "https://www.marketingideas.com/p/the-most-powerful-cta", tag: "가이드", description: "전환율이 가장 높은 CTA 유형과 활용법" },
          { title: "페이월 리디자인 후 트라이얼 가입 23% 증가", url: "https://marketingexamples.com/landing-page/blinkist", tag: "사례", description: "Blinkist가 페이월 리디자인으로 트라이얼 23% 증가시킨 사례" },
          { title: "블러 배경 하나로 전환율 94% 증가", url: "https://web.archive.org/web/20250319080954/https://www.marketingideas.com/p/my-weirdest-ab-test-blew-everyones", tag: "사례", description: "블러 배경 A/B 테스트로 전환율 94% 올린 실험 결과" },
        ],
      },
    ],
  },
  {
    slug: "validation",
    emoji: "💡",
    title: "아이디어 검증",
    subtitle: "만들기 전에 수요 확인",
    description:
      "가장 흔하고 고통스러운 실수는 아이디어가 떠오르자마자 수요 검증 없이 바로 제품 개발에 올인하는 것입니다. 대부분의 아이디어는 시간 투자할 가치가 없습니다.",
    sections: [
      {
        title: "아이디어 검증 프레임워크",
        resources: [
          { title: "2/20/200 아이디어 검증 프레임워크", url: "https://www.youtube.com/watch?v=d9uCqKEeJbY", tag: "영상", description: "2명→20명→200명 단계로 아이디어를 검증하는 프레임워크" },
          { title: "7일 비즈니스 아이디어 검증 프레임워크", url: "https://knowledge.gtmstrategist.com/p/7-day-business-idea-validation-framework", tag: "가이드", description: "7일 안에 비즈니스 아이디어의 수요를 검증하는 방법" },
          { title: "제품 만들기 전 아이디어 검증하는 법", url: "https://www.mrrunlocked.com/p/how-to-validate-your-idea-before", tag: "가이드", description: "코딩 전에 아이디어의 시장 수요를 확인하는 방법" },
          { title: "Reddit으로 고객이 돈을 내고 해결할 문제 찾기 (4부작)", url: "https://shavinpeiries.com/scratch-their-itch/", tag: "가이드", description: "Reddit에서 유료 수요가 있는 문제를 발견하는 4단계 방법" },
          { title: "프로덕트 디스커버리에서 하지 말아야 할 것", url: "https://demandmaven.substack.com/p/how-to-not-do-product-discovery", tag: "가이드", description: "프로덕트 디스커버리 과정에서 흔히 하는 실수와 해결법" },
          { title: "$100M/yr 회사를 시작한 콜드 이메일", url: "https://marketingexamples.com/sales/jason-cohen", tag: "사례", description: "WP Engine 창업자가 콜드 이메일로 $100M 회사를 시작한 이야기" },
          { title: "디스커버리 단계 인터뷰 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-discovery-phase-i-e-before-you-ve-built-anything-415336", tag: "템플릿", description: "제품 개발 전 고객 인터뷰에 사용할 스크립트 템플릿" },
        ],
      },
    ],
  },
  {
    slug: "user-research",
    emoji: "⚗",
    title: "유저 리서치",
    subtitle: "고객의 진짜 목소리 듣기",
    description:
      "\"고객과 대화하세요! 뭘 만들고, 뭘 개선하고, 뭘 그냥 두면 될지 알려줄 거예요!\" 맞는 말이지만, SaaS를 운영하다 보면 고객이 직접 연락하는 경우는 도움이 필요할 때뿐입니다.",
    sections: [
      {
        title: "유저 리서치 방법론",
        resources: [
          { title: "엔지니어의 유저 인터뷰 가이드 (PostHog)", url: "https://posthog.com/newsletter/talk-to-users", tag: "가이드", description: "엔지니어가 유저 인터뷰를 효과적으로 진행하는 방법" },
          { title: "자동으로 인사이트 얻는 법", url: "https://growthroadmaps.beehiiv.com/p/unlock-power-user-feedback", tag: "가이드", description: "유저 피드백에서 자동으로 인사이트를 추출하는 방법" },
          { title: "시간 없을 때 쓰는 3가지 고속 리서치 방법", url: "https://www.growthmates.news/p/no-time-for-research-3-high-speed", tag: "가이드", description: "빠르게 유저 인사이트를 얻는 3가지 리서치 방법" },
          { title: "좋은 프로덕트 서베이 질문 작성법 (예시 포함)", url: "https://posthog.com/product-engineers/product-survey-questions", tag: "가이드", description: "답변율 높은 프로덕트 서베이 질문을 작성하는 방법" },
          { title: "Superhuman의 Product-Market Fit 엔진", url: "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/", tag: "사례", description: "Superhuman이 PMF를 체계적으로 측정·개선한 방법" },
          { title: "MaxDiff: 고객이 실제로 관심 있는 것을 알아내는 비밀", url: "https://demandmaven.substack.com/p/maxdiff-the-secret-to-getting-the", tag: "가이드", description: "MaxDiff 분석으로 고객의 진짜 우선순위를 파악하는 방법" },
          { title: "온보딩 경험 분석을 위한 저니 매핑 인터뷰", url: "https://shili.substack.com/p/journey-mapping-interviews-dev-tools", tag: "가이드", description: "온보딩 경험을 저니 맵으로 분석하는 인터뷰 방법" },
          { title: "Jobs To Be Done 간단 소개", url: "https://valchanova.me/customer-development-jobs-to-be-done/", tag: "가이드", description: "JTBD 프레임워크의 핵심 개념과 활용법 입문" },
          { title: "고객에게 물어봐야 할 22가지 질문", url: "https://x.com/samanthalcc/status/1567859143926599681", tag: "템플릿", description: "고객 인터뷰에서 바로 쓸 수 있는 22가지 질문 목록" },
          { title: "JTBD 이메일 초대 템플릿 & 인터뷰 질문", url: "https://forgetthefunnel.com/resources/jobs-to-be-done-interview-questions-email-script", tag: "템플릿", description: "JTBD 인터뷰 초대 이메일과 질문 스크립트 템플릿" },
          { title: "Maze 질문 뱅크: 350+ 리서치 질문", url: "https://mazedesign.notion.site/dd213d94bcf046738434f93ce8152ab6?v=d05d4225bd8142dbb990e047e6d2ab24", tag: "템플릿", description: "350개 이상의 유저 리서치 질문을 모아놓은 질문 뱅크" },
        ],
      },
      {
        title: "고객 인터뷰 스크립트 (Michele Hansen)",
        resources: [
          { title: "신규 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-template-relatively-new-customer-aka-jtbd-switch-interview-415338", tag: "템플릿", description: "고객 여정의 초기 부분 파악" },
          { title: "만족 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-happy-customer-415341", tag: "템플릿", description: "더 많이 원하는 고객 유형 파악" },
          { title: "이탈 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-churned-customer-415342", tag: "템플릿", description: "이탈 문제 해결" },
          { title: "기능 요청 스크립트", url: "https://deployempathy.substack.com/p/turning-feature-requests-into-customer-research-450754", tag: "템플릿", description: "기능 요청 깊이 파헤치기" },
        ],
      },
    ],
  },
  {
    slug: "misc",
    emoji: "🧨",
    title: "기타 리소스",
    subtitle: "그 외 유용한 마케팅 자료",
    description:
      "특정 카테고리에 속하지 않지만 스타트업 성장에 도움이 되는 다양한 리소스 모음입니다.",
    sections: [
      {
        title: "종합 가이드 & 사례",
        resources: [
          { title: "SaaS를 위한 100+ 그로스 핵", url: "https://mikestrives.notion.site/Growth-Hacks-for-SaaS-100-14252caf2e828076a1afefd80505b19e", tag: "가이드", description: "SaaS 성장에 바로 적용할 수 있는 100개 이상의 그로스 핵" },
          { title: "GitHub 레포 검색 최적화 (SEO)", url: "https://www.markepear.dev/blog/github-search-engine-optimization", tag: "가이드", description: "GitHub 레포의 검색 노출을 높이는 최적화 방법" },
          { title: "더 많은 GitHub Stars를 얻는 궁극 플레이북", url: "https://hackernoon.com/the-ultimate-playbook-for-getting-more-github-stars", tag: "가이드", description: "GitHub Stars를 늘리기 위한 전략과 전술 총정리" },
          { title: "오늘날 가장 큰 컨슈머 프로덕트가 첫 1,000 유저를 얻은 방법", url: "https://www.lennysnewsletter.com/p/consumer-business-find-first-users", tag: "사례", description: "대형 컨슈머 프로덕트들의 초기 유저 확보 전략 모음" },
          { title: "초보자를 위한 B2B 스타트업 마케팅 (PostHog)", url: "https://posthog.com/newsletter/b2b-startup-marketing-strategy", tag: "가이드", description: "B2B 스타트업 마케팅의 기초를 다루는 입문 가이드" },
          { title: "개발자 마케팅 가이드 (DevTool CMO 작성)", url: "https://www.markepear.dev/blog/developer-marketing-guide", tag: "가이드", description: "DevTool CMO가 작성한 개발자 마케팅 전략 종합 가이드" },
          { title: "PostHog: 첫 1,000 유저 확보한 방법", url: "https://posthog.com/founders/first-1000-users", tag: "사례", description: "PostHog가 첫 1,000명 유저를 확보한 구체적 방법" },
          { title: "SaaS 마케팅 퀵 윈 가이드", url: "https://web.archive.org/web/20250805230355/https://www.growthunhinged.com/p/your-guide-to-quick-wins-in-saas", tag: "가이드", description: "바로 실행 가능한 SaaS 마케팅 퀵 윈 전략 모음" },
          { title: "The Product-Market Fit Game", url: "https://posthog.com/founders/product-market-fit-game", tag: "도구", description: "PMF를 게임처럼 체험하며 배우는 인터랙티브 도구" },
          { title: "개발자 마케팅에서 배운 40가지", url: "https://newsletter.posthog.com/p/40-things-weve-learned-about-marketing", tag: "사례", description: "PostHog가 개발자 마케팅에서 배운 40가지 교훈" },
          { title: "좋은 GitHub README 만드는 법", url: "https://www.markepear.dev/blog/github-readme-guide", tag: "가이드", description: "기여자와 유저를 끌어들이는 GitHub README 작성법" },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTotalResourceCount(): number {
  return categories.reduce(
    (total, cat) =>
      total +
      cat.sections.reduce((secTotal, sec) => secTotal + sec.resources.length, 0),
    0
  );
}
