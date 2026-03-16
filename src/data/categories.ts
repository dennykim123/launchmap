export interface Resource {
  title: string;
  url: string;
  description?: string;
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
          { title: "Betalist", url: "https://betalist.com/" },
          { title: "Fazier", url: "https://fazier.com/" },
          { title: "Uneed", url: "https://www.uneed.best/" },
          { title: "Microlaunch", url: "https://microlaunch.net/" },
          { title: "Peerlist", url: "https://peerlist.io/" },
          { title: "Indie Hackers", url: "https://www.indiehackers.com/products" },
          { title: "Hacker News (Show HN)", url: "https://news.ycombinator.com/show" },
          { title: "ProductHunt", url: "https://www.producthunt.com/" },
          { title: "SideProjectors", url: "https://www.sideprojectors.com/" },
          { title: "LaunchIgniter", url: "https://launchigniter.com/" },
          { title: "PeerPush", url: "https://peerpush.net/" },
        ],
      },
      {
        title: "소프트웨어 디렉토리",
        resources: [
          { title: "Toolfolio", url: "https://toolfolio.io/" },
          { title: "toools.design", url: "https://www.toools.design/" },
          { title: "OpenAlternative", url: "https://openalternative.co/" },
          { title: "LibHunt", url: "https://www.libhunt.com/" },
          { title: "SaaSHub", url: "https://www.saashub.com/" },
          { title: "SaaS Genius", url: "https://www.saasgenius.com/free-listing" },
          { title: "G2", url: "https://www.g2.com/" },
          { title: "TrustPilot", url: "https://www.trustpilot.com/" },
          { title: "Capterra", url: "https://www.capterra.com/" },
          { title: "There's an AI for that", url: "https://theresanaiforthat.com/" },
          { title: "AlternativeTo", url: "https://alternativeto.net/" },
          { title: "SourceForge", url: "https://sourceforge.net/" },
          { title: "Softonic", url: "https://softonic.com/" },
          { title: "TrustMRR", url: "https://trustmrr.com/" },
        ],
      },
      {
        title: "라이프타임 딜 플랫폼",
        resources: [
          { title: "AppSumo", url: "https://appsumo.com/" },
          { title: "RocketHub", url: "https://www.rockethub.com/" },
          { title: "StackSocial", url: "https://www.stacksocial.com/" },
          { title: "SaaS Mantra", url: "https://deals.saasmantra.com/" },
          { title: "Prime Club", url: "https://primeclub.co/" },
          { title: "SaasZilla", url: "https://saaszilla.co/" },
          { title: "SaaSPirate", url: "https://saaspirate.com/" },
          { title: "ProductCanyon", url: "https://productcanyon.com/" },
          { title: "Dealmirror", url: "https://dealmirror.com/" },
          { title: "Dealify", url: "https://dealify.com/" },
        ],
      },
      {
        title: "셀프 프로모션 가능한 서브레딧",
        note: "항상 서브레딧 규칙을 먼저 확인하세요!",
        resources: [
          { title: "r/SideProject", url: "https://www.reddit.com/r/SideProject/" },
          { title: "r/selfhosted", url: "https://www.reddit.com/r/selfhosted/", description: '"Product Announcement" 플레어 사용' },
          { title: "r/webdev", url: "https://www.reddit.com/r/webdev/", description: '"Showoff Saturday" 플레어 사용' },
          { title: "r/Startup_Ideas", url: "https://www.reddit.com/r/Startup_Ideas/" },
          { title: "r/indiehackers", url: "https://www.reddit.com/r/indiehackers/", description: '"Self Promotion" 플레어 사용' },
          { title: "r/InternetIsBeautiful", url: "https://www.reddit.com/r/InternetIsBeautiful/" },
          { title: "r/roastmystartup", url: "https://www.reddit.com/r/roastmystartup/" },
          { title: "r/alphaandbetausers", url: "https://www.reddit.com/r/alphaandbetausers/" },
          { title: "r/saasbuild", url: "https://www.reddit.com/r/saasbuild/" },
          { title: "r/buildinpublic", url: "https://www.reddit.com/r/buildinpublic/" },
          { title: "r/ShowMeYourSaaS", url: "https://www.reddit.com/r/ShowMeYourSaaS/" },
          { title: "r/MVPLaunch", url: "https://www.reddit.com/r/MVPLaunch/" },
          { title: "r/macapps", url: "https://www.reddit.com/r/macapps/" },
          { title: "r/LaunchMyStartup", url: "https://www.reddit.com/r/LaunchMyStartup/" },
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
          { title: "Product Hunt에서 1위 하는 궁극 가이드", url: "https://tibo-maker.notion.site/Ultimate-guide-on-how-to-rank-1-on-Product-Hunt-589c000cd56f4baf9c64988a52eb4b4e" },
          { title: "Product Hunt 성공 런칭 방법 (Lenny's Newsletter)", url: "https://www.lennysnewsletter.com/p/how-to-successfully-launch-on-product" },
          { title: "Product Hunt 런칭 단계별 가이드 + 템플릿", url: "https://genesysgrowth.com/resources/product-hunt-launch-step-by-step-guide" },
          { title: "Product Hunt Launch Workbook", url: "https://olenabomko.notion.site/Product-Hunt-Launch-Workbook-2bebf9c31de98158ba98e164f0bdc1a1" },
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
          { title: "창업자의 Building in Public 가이드", url: "https://www.failory.com/blog/building-in-public" },
          { title: "창업자를 위한 LinkedIn 가이드", url: "https://www.mrrunlocked.com/p/founder-led-linkedin-guide" },
          { title: "LinkedIn CEO/Founder 플레이북", url: "https://www.markepear.dev/blog/linkedin-ceo-founder-playbook" },
          { title: "199개 LinkedIn 포스트 예시", url: "https://miro.com/app/board/uXjVKUoKvTw=/" },
          { title: "LinkedIn 활용 극대화 6가지 핵", url: "https://web.archive.org/web/20250717160200/https://www.growthunhinged.com/p/guide-to-mastering-linkedin" },
          { title: "Building in Public을 가장 수익성 높은 GTM 채널로 만들기", url: "https://knowledge.gtmstrategist.com/p/turn-building-in-public-into-your" },
          { title: "개발자 대상 트위터 마케팅 방법", url: "https://www.markepear.dev/blog/developer-marketing-twitter" },
          { title: "SuperX Twitter Analytics 확장 프로그램", url: "https://chromewebstore.google.com/detail/superx-twitter-analytics/bjobgelaoehgbnklgcaaehdpckmhkplk", description: "다른 계정의 인기 트윗 분석 도구" },
        ],
      },
      {
        title: "소셜 리스닝",
        note: "온라인에서 제품 관련 대화를 추적하고 참여하여 유저와 연결하세요",
        resources: [
          { title: "소셜 리스닝으로 SaaS 성장시키기", url: "https://www.mrrunlocked.com/p/social-listening-guide" },
          { title: "Simple Analytics의 소셜 리스닝 설정 예시", url: "https://1millionarr.substack.com/p/part-1-how-to-get-your-first-100" },
          { title: "F5 Bot - HN과 Reddit 멘션 무료 추적 도구", url: "https://f5bot.com/" },
        ],
      },
      {
        title: "기타 소셜 미디어 가이드",
        resources: [
          { title: "TikTok & Instagram 유기적 성장 가이드", url: "https://www.post-bridge.com/growth-guide/start-here" },
          { title: "Pinterest 성장 가이드", url: "https://www.blogtopin.com/growth-guide/start-here" },
          { title: "유기적 UGC로 바이럴 앱 마케팅하는 법", url: "https://youtu.be/9r4kS9zZj9s" },
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
          { title: "ICP 구축 프레임워크", url: "https://www.mrrunlocked.com/p/framework-ideal-customer-profile" },
          { title: "이상적 고객 전에 초기 고객 프로필이 먼저", url: "https://knowledge.gtmstrategist.com/p/before-there-is-ideal-there-is-early" },
          { title: "PostHog의 ICP 팁", url: "https://posthog.com/newsletter/ideal-customer-profile-framework" },
          { title: "초기 고객 분석으로 ICP 검증하기", url: "https://www.mrrunlocked.com/p/analyze-your-icp" },
          { title: "B2B ICP 템플릿 (Miro)", url: "https://miro.com/miroverse/ideal-customer-profile-b2b-persona/" },
        ],
      },
      {
        title: "세일즈 전략 & 실행",
        resources: [
          { title: "경험 없이 스타트업 세일즈하기", url: "https://posthog.com/founders/startup-sales-strategy" },
          { title: "LinkedIn Sales Navigator 90분 마스터", url: "https://www.mrrunlocked.com/p/linkedin-sales-navigator-guide" },
          { title: "GTM 아웃리치 플레이북: 트리거부터 데모까지", url: "https://knowledge.gtmstrategist.com/p/the-gtm-outreach-playbook-from-triggers-to-demos" },
          { title: "세일즈 프로덕트 데모 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-guide-to-sales-product-demos" },
          { title: "고전환 세일즈 덱 만들기", url: "https://www.mrrunlocked.com/p/high-converting-sales-deck" },
          { title: "개발자에게 파는 법 (개발자 말고 보스에게 팔아라)", url: "https://www.markepear.dev/blog/selling-to-developers" },
          { title: "엔터프라이즈 세일즈 플레이북 - Lenny's Podcast", url: "https://youtu.be/37fKFWdrMyA" },
        ],
      },
      {
        title: "콜드 이메일 & 아웃바운드",
        resources: [
          { title: "SaaS 필수 이메일 템플릿 4가지", url: "https://www.mrrunlocked.com/p/the-4-must-have-sales-email-templates" },
          { title: "The Cold Outbound Handbook", url: "https://www.za-zu.com/handbook/intro" },
          { title: "콜드 이메일 성장 시스템 세팅 가이드", url: "https://coldstartblueprint.com/p/cold-email-setup" },
          { title: "초기 스타트업을 위한 최고의 아웃바운드 테크 스택", url: "https://www.mrrunlocked.com/p/the-best-outbound-tech-stack" },
          { title: "ConvertKit를 시작한 콜드 이메일", url: "https://x.com/natiakourdadze/status/1799848364042854856" },
          { title: "Tally의 초기 DM 전략", url: "https://knowledge.gtmstrategist.com/p/tallys-bootstrapped-journey-to-500000-users" },
          { title: "탑 회사들의 세일즈 이메일 예시", url: "https://goodsalesemails.com/" },
          { title: "검증된 세일즈 플레이 예시들", url: "https://www.elenaverna.com/p/examples-of-proven-sales-plays-to" },
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
          { title: "초기 SaaS를 위한 궁극의 SEO 가이드", url: "https://www.mrrunlocked.com/p/the-saas-seo-guide" },
          { title: "초기 스타트업에서 SEO 우선순위 정하기", url: "https://www.reddit.com/r/ycombinator/comments/1awnckg/comment/krkpxnu/" },
          { title: "Simple Analytics의 SEO 전략", url: "https://1millionarr.substack.com/p/part-2-how-to-get-your-first-1000" },
          { title: "스타트업을 위한 직관 깨는 SEO 조언 (PostHog)", url: "https://posthog.com/newsletter/seo-for-startups" },
          { title: "유스케이스 기반 SEO 전략", url: "https://playbooks.hypergrowthpartners.com/p/use-case-led-seo-a-strategy-for-organic" },
          { title: "SEO의 미래는 UGC (User Generated Content)", url: "https://www.elenaverna.com/p/the-future-of-seo-is-user-generated" },
          { title: "AI 기반 프로그래매틱 SEO 가이드", url: "https://playbooks.hypergrowthpartners.com/p/ai-powered-programmatic-seo" },
          { title: "Danny Postma의 SEO Blueprint (메이커를 위한 SEO 코스)", url: "https://www.dannypostma.com/seo-course" },
          { title: "SEO와 AEO를 위한 키워드 리서치 방법", url: "https://www.marketermilk.com/blog/how-to-do-keyword-research" },
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
          { title: "AEO 궁극 가이드: ChatGPT가 제품을 추천하게 만들기", url: "https://www.lennysnewsletter.com/p/the-ultimate-guide-to-aeo-ethan-smith" },
          { title: "ChatGPT에서 추천받는 방법", url: "https://web.archive.org/web/20250912043229/https://www.growthunhinged.com/p/get-recommended-by-chatgpt" },
          { title: "ChatGPT, Perplexity, Google AI 검색 랭킹 실전 가이드", url: "https://knowledge.gtmstrategist.com/p/how-to-win-the-new-seo-game-ai-search" },
          { title: "Vercel의 LLM SEO 적용 사례", url: "https://vercel.com/blog/how-were-adapting-seo-for-llms-and-ai-search" },
          { title: "Tally가 AI를 최고의 유저 획득 채널로 만든 방법", url: "https://justinhammond.substack.com/p/how-tally-turned-ai-into-their-top" },
          { title: "AI 검색 엔진 상위 랭킹을 위한 기업들의 전략", url: "https://knowledge.gtmstrategist.com/p/what-companies-are-doing-today-to" },
          { title: "AI 디스커버리를 최고의 리드 채널로 만드는 플레이북", url: "https://web.archive.org/web/20251011132541/https://www.growthunhinged.com/p/ai-discovery-playbook" },
          { title: "AI & LLM SEO 코스", url: "https://magicspace.agency/courses/ai-seo" },
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
          { title: "Reddit 마케팅 초보자 가이드", url: "https://redreach.ai/reddit-marketing-guide" },
          { title: "Reddit에서 MVP 홍보하는 법", url: "https://refined.so/blog/marketing-on-reddit" },
          { title: "제품 런칭/홍보용 Reddit 포스트 예시 모음", url: "https://it.pinterest.com/MarketingforFounders/marketing-on-reddit/" },
          { title: "Reddit 셀프 프로모션의 핵심", url: "https://marketingexamples.com/content/reddit" },
          { title: "OpenPhone: Reddit으로 첫 1,000 고객 확보한 방법", url: "https://readfoundertofounder.com/p/how-i-used-reddit-to-get-our-first-1-000-customers" },
          { title: "Lemlist의 Reddit 마케팅 팁", url: "https://www.linkedin.com/posts/erwanxgrowth_everyone-says-reddit-is-the-new-growth-channel-activity-7373324721553154048-Ny4M" },
          { title: "Reddit에서 10배 화제성을 만드는 스토리텔링 핵", url: "https://web.archive.org/web/20250319083601/https://www.marketingideas.com/p/the-storytelling-hack-for-10x-buzz" },
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
          { title: "The SaaS Email Marketing Playbook", url: "https://saasplaybook.co/" },
          { title: "SaaS 이메일 마케팅 101", url: "https://blog.beehiiv.com/p/email-marketing-for-saas" },
          { title: "SaaS 이메일 마케팅 전략 총정리", url: "https://userlist.com/blog/saas-email-marketing-strategies/" },
          { title: "라이프사이클 이메일 기획 워크시트", url: "https://userlist.com/worksheets/" },
          { title: "고전환 SaaS 온보딩 이메일 시퀀스 만들기", url: "https://www.reddit.com/r/SaaS/comments/1b7l04k/" },
          { title: "온보딩 이메일 콘셉트 25가지 (Figma)", url: "https://www.figma.com/community/file/1207279330099591674/onboarding-emails-25-concepts" },
          { title: "SaaS 이메일 예시 모음 (Userlist)", url: "https://userlist.com/blog/email-examples/" },
          { title: "이메일 예시 모음 (Encharge)", url: "https://encharge.io/?post_type=post&s=examples" },
          { title: "B2B SaaS 행동 기반 이메일 마케팅 코스", url: "https://encharge.notion.site/Course-Behavior-based-Email-Marketing-for-B2B-SaaS-18373064882b80ee84dffbe869883eab" },
          { title: "15가지 SaaS 이메일 플로우 아이디어", url: "https://www.mailmodo.com/email-flow/saas-email-flow/" },
          { title: "이메일 자동화 최적화 방법", url: "https://copyhackers.com/2025/03/how-to-optimize-an-email/" },
          { title: "PostHog의 온보딩 이메일 플로우 구축기", url: "https://posthog.com/blog/how-we-built-email-onboarding" },
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
          { title: "SaaS PR 확보하기", url: "https://1millionarr.substack.com/p/getting-pr-for-your-saas" },
          { title: "효과적인 오리지널 콘텐츠 작성법", url: "https://web.archive.org/web/20250621232540/https://www.growthunhinged.com/p/you-need-a-better-content-strategy" },
          { title: "SaaS 콘텐츠 마케팅 프로그램 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-content-marketing-guide" },
          { title: "개발자 대상 효과적인 콘텐츠 작성법", url: "https://www.markepear.dev/blog/developer-content-marketing" },
          { title: "MKT1의 콘텐츠 전략 비하인드 (Part 1)", url: "https://newsletter.mkt1.co/p/mkt1-content-strategy-part-1" },
          { title: "MKT1의 콘텐츠 전략 비하인드 (Part 2)", url: "https://newsletter.mkt1.co/p/mkt1-content-strategy-part-2" },
          { title: "내 콘텐츠 홍보하는 법 - Marketing Examples", url: "https://marketingexamples.com/content/sharing" },
          { title: "콘텐츠 배포 체크리스트 (Ross Simmonds)", url: "https://docs.google.com/spreadsheets/d/1XaqKmHnMcRRznR-JQJsktlzkZ2fRmszGWZTeLeRyYZk/edit" },
          { title: "강력한 SaaS 리드 마그넷 만들기 + 예시", url: "https://www.mrrunlocked.com/p/saas-lead-magnets" },
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
          { title: "초기 B2B SaaS를 위한 Google Ads 시작 가이드", url: "https://www.mrrunlocked.com/p/google-ads-guide" },
          { title: "LinkedIn Ads 실전 플레이북", url: "https://knowledge.gtmstrategist.com/p/the-no-fluff-linkedin-ads-playbook" },
          { title: "초기 B2B SaaS를 위한 LinkedIn Ads 가이드", url: "https://www.mrrunlocked.com/p/how-to-get-started-with-linkedin" },
          { title: "Facebook으로 SaaS 광고하기", url: "https://makerads.guide/" },
          { title: "무료 B2B 광고 코스 (AdConversion)", url: "https://www.adconversion.com/courses" },
          { title: "경쟁사 성공 광고 스파이하는 법", url: "https://www.marketingideas.com/p/track-competitor-tactics" },
          { title: "250+ DevTool 광고 예시", url: "https://www.reo.dev/devtools-ad-examples" },
          { title: "개발 도구 유료 광고에 돈 태운 경험담 (PostHog)", url: "https://posthog.com/founders/dev-marketing-paid-ads" },
          { title: "효과적인 Reddit 광고 운영법", url: "https://www.linkedin.com/posts/aayildirim_if-youre-running-reddit-ads-you-know-its-activity-7364309579888771073-tvTR" },
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
          { title: "인플루언서가 GTM 전략의 일부가 되어야 할까?", url: "https://knowledge.gtmstrategist.com/p/should-influencers-be-part-of-your" },
          { title: "Jenny AI의 숏폼 콘텐츠 플레이북", url: "https://www.starterstory.com/10m-playbook" },
          { title: "Clerk의 YouTube 개발자 커뮤니티 파트너십", url: "https://playbooks.hypergrowthpartners.com/p/how-clerk-partners-with-youtubes" },
          { title: "성공적인 인플루언서 마케팅의 5가지 기둥", url: "https://knowledge.gtmstrategist.com/p/5-pillars-of-successful-influencer-marketing-campaigns" },
          { title: "Lovable, Gamma, n8n의 B2B 인플루언서 마케팅 플레이북", url: "https://www.youtube.com/watch?v=f3wJ2LPlu3o" },
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
          { title: "훌륭한 레퍼럴 프로그램을 위한 10단계", url: "https://thegrowthmind.substack.com/p/10-steps-for-a-great-referral-program" },
          { title: "B2B 레퍼럴 가이드", url: "https://web.archive.org/web/20250523213447/https://www.growthunhinged.com/p/your-guide-to-b2b-referrals" },
          { title: "B2B SaaS 어필리에이트 레퍼럴 궁극 가이드", url: "https://www.mrrunlocked.com/p/your-ultimate-guide-to-affiliate-referrals" },
          { title: "8가지 어필리에이트 & 레퍼럴 이메일 예시", url: "https://pin.it/5BxRb4Zv4" },
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
          { title: "미니 도구는 무료 트라이얼보다 10배 강력하다", url: "https://www.marketingideas.com/p/mini-tools-are-10x-more-powerful" },
          { title: "사이드 프로젝트 마케팅이란? 어떻게 하나?", url: "https://www.failory.com/blog/side-project-marketing" },
          { title: "Engineering as Marketing (Hubspot, Shopify, Ahrefs 사례)", url: "https://thegrowthmind.substack.com/p/engineering-as-marketing" },
          { title: "마케팅(SEO)을 위한 무료 도구 만들기", url: "https://dmytrokrasun.com/posts/building-free-tools-for-marketing-seo/" },
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
          { title: "더 효과적인 홈페이지 만들기", url: "https://newsletter.mkt1.co/p/homepage-copy" },
          { title: "SaaS 홈페이지 프레임워크", url: "https://web.archive.org/web/20250919131318/https://www.growthunhinged.com/p/how-to-write-a-saas-homepage" },
          { title: "고전환 SaaS 홈페이지 만들기", url: "https://www.mrrunlocked.com/p/how-to-high-converting-saas-homepage" },
          { title: "ConversionFactory의 SaaS 홈페이지 프레임워크", url: "https://x.com/coreyhainesco/status/1948873434098028746" },
          { title: "SaaS 헤드라인 플레이북", url: "https://nicolasmerouze.notion.site/SaaS-Headline-Playbook-176830adbaa5477994946a3106473aba" },
        ],
      },
      {
        title: "포지셔닝 & 메시징",
        resources: [
          { title: "포지셔닝 퀵스타트 가이드 (Lenny)", url: "https://www.lennysnewsletter.com/p/positioning" },
          { title: "제품 포지셔닝 프레임워크 & 차별화 전략", url: "https://web.archive.org/web/20250814042615/https://www.growthunhinged.com/p/product-positioning-part-one" },
          { title: "개발자 도구 밸류 프로포지션 만들기", url: "https://www.markepear.dev/blog/value-proposition-developer-tools" },
          { title: "SaaS 메시징 프레임워크", url: "https://www.mrrunlocked.com/p/the-ultimate-saas-messaging-framework" },
          { title: "소셜 프루프로 GTM 전략 높이기", url: "https://knowledge.gtmstrategist.com/p/use-social-proof-to-elevate-gtm-strategy" },
          { title: "케이스 스터디 & 추천사 궁극 가이드", url: "https://www.mrrunlocked.com/p/guide-case-studies" },
        ],
      },
      {
        title: "프라이싱 페이지",
        resources: [
          { title: "훌륭한 프라이싱 페이지의 DNA", url: "https://www.elenaverna.com/p/the-dna-of-a-great-pricing-page" },
          { title: "프라이싱 페이지 최적화 방법", url: "https://web.archive.org/web/20250814043847/https://www.growthunhinged.com/p/how-to-optimize-your-pricing-page" },
          { title: "효과적인 프라이싱 페이지 만들기", url: "https://newsletter.mkt1.co/p/pricing-page-examples" },
          { title: "SaaS 프로덕트 페이지 만들기", url: "https://www.mrrunlocked.com/p/product-pages-for-saas" },
          { title: "SaaS 프라이싱 페이지 궁극 가이드 (실제 예시 포함)", url: "https://www.mrrunlocked.com/p/saas-pricing-page" },
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
          { title: "Pricing: WTF에서 WTP(지불 의향)까지", url: "https://knowledge.gtmstrategist.com/p/pricing-from-wtf-to-willingness-to-pay" },
          { title: "초기 스타트업을 위한 B2B SaaS 프라이싱 궁극 가이드", url: "https://www.mrrunlocked.com/p/the-ultimate-b2b-saas-pricing-guide" },
          { title: "가격 테스트 가이드", url: "https://web.archive.org/web/20250929073716/https://www.growthunhinged.com/p/your-guide-to-price-testing" },
          { title: "돈을 테이블 위에 너무 많이 남기고 있지 않나요?", url: "https://knowledge.gtmstrategist.com/p/are-you-leaving-too-much-money-on" },
          { title: "고객과 '프라이싱 대화'하는 법", url: "https://web.archive.org/web/20250717160702/https://www.growthunhinged.com/p/your-guide-to-finally-talking-to" },
          { title: "리버스 트라이얼 가이드", url: "https://web.archive.org/web/20250814071651/https://www.growthunhinged.com/p/your-guide-to-reverse-trials" },
          { title: "초기 PLG 스타트업의 무료 트라이얼 8가지 기본 원칙", url: "https://www.mrrunlocked.com/p/free-trials-fundamentals" },
          { title: "연간 플랜 판매를 위한 14가지 전술적 아이디어", url: "https://web.archive.org/web/20250725183608/https://www.growthunhinged.com/p/how-to-sell-annual-plans" },
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
          { title: "이 웹사이트 실수를 하고 있지 않나요?", url: "https://web.archive.org/web/20250210005430/https://www.marketingideas.com/p/are-you-making-this-website-mistake" },
          { title: "20,000번의 실험에서 얻은 놀라운 교훈들", url: "https://web.archive.org/web/20250821014350/https://www.growthunhinged.com/p/surprising-lessons-website-conversion" },
          { title: "가장 강력한 CTA는? 힌트: \"Book a Demo\"가 절대 아닙니다", url: "https://www.marketingideas.com/p/the-most-powerful-cta" },
          { title: "페이월 리디자인 후 트라이얼 가입 23% 증가", url: "https://marketingexamples.com/landing-page/blinkist" },
          { title: "블러 배경 하나로 전환율 94% 증가", url: "https://web.archive.org/web/20250319080954/https://www.marketingideas.com/p/my-weirdest-ab-test-blew-everyones" },
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
          { title: "2/20/200 아이디어 검증 프레임워크", url: "https://www.youtube.com/watch?v=d9uCqKEeJbY" },
          { title: "7일 비즈니스 아이디어 검증 프레임워크", url: "https://knowledge.gtmstrategist.com/p/7-day-business-idea-validation-framework" },
          { title: "제품 만들기 전 아이디어 검증하는 법", url: "https://www.mrrunlocked.com/p/how-to-validate-your-idea-before" },
          { title: "Reddit으로 고객이 돈을 내고 해결할 문제 찾기 (4부작)", url: "https://shavinpeiries.com/scratch-their-itch/" },
          { title: "프로덕트 디스커버리에서 하지 말아야 할 것", url: "https://demandmaven.substack.com/p/how-to-not-do-product-discovery" },
          { title: "$100M/yr 회사를 시작한 콜드 이메일", url: "https://marketingexamples.com/sales/jason-cohen" },
          { title: "디스커버리 단계 인터뷰 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-discovery-phase-i-e-before-you-ve-built-anything-415336" },
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
          { title: "엔지니어의 유저 인터뷰 가이드 (PostHog)", url: "https://posthog.com/newsletter/talk-to-users" },
          { title: "자동으로 인사이트 얻는 법", url: "https://growthroadmaps.beehiiv.com/p/unlock-power-user-feedback" },
          { title: "시간 없을 때 쓰는 3가지 고속 리서치 방법", url: "https://www.growthmates.news/p/no-time-for-research-3-high-speed" },
          { title: "좋은 프로덕트 서베이 질문 작성법 (예시 포함)", url: "https://posthog.com/product-engineers/product-survey-questions" },
          { title: "Superhuman의 Product-Market Fit 엔진", url: "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" },
          { title: "MaxDiff: 고객이 실제로 관심 있는 것을 알아내는 비밀", url: "https://demandmaven.substack.com/p/maxdiff-the-secret-to-getting-the" },
          { title: "온보딩 경험 분석을 위한 저니 매핑 인터뷰", url: "https://shili.substack.com/p/journey-mapping-interviews-dev-tools" },
          { title: "Jobs To Be Done 간단 소개", url: "https://valchanova.me/customer-development-jobs-to-be-done/" },
          { title: "고객에게 물어봐야 할 22가지 질문", url: "https://x.com/samanthalcc/status/1567859143926599681" },
          { title: "JTBD 이메일 초대 템플릿 & 인터뷰 질문", url: "https://forgetthefunnel.com/resources/jobs-to-be-done-interview-questions-email-script" },
          { title: "Maze 질문 뱅크: 350+ 리서치 질문", url: "https://mazedesign.notion.site/dd213d94bcf046738434f93ce8152ab6?v=d05d4225bd8142dbb990e047e6d2ab24" },
        ],
      },
      {
        title: "고객 인터뷰 스크립트 (Michele Hansen)",
        resources: [
          { title: "신규 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-template-relatively-new-customer-aka-jtbd-switch-interview-415338", description: "고객 여정의 초기 부분 파악" },
          { title: "만족 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-happy-customer-415341", description: "더 많이 원하는 고객 유형 파악" },
          { title: "이탈 고객 스크립트", url: "https://deployempathy.substack.com/p/customer-interview-script-churned-customer-415342", description: "이탈 문제 해결" },
          { title: "기능 요청 스크립트", url: "https://deployempathy.substack.com/p/turning-feature-requests-into-customer-research-450754", description: "기능 요청 깊이 파헤치기" },
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
          { title: "SaaS를 위한 100+ 그로스 핵", url: "https://mikestrives.notion.site/Growth-Hacks-for-SaaS-100-14252caf2e828076a1afefd80505b19e" },
          { title: "GitHub 레포 검색 최적화 (SEO)", url: "https://www.markepear.dev/blog/github-search-engine-optimization" },
          { title: "더 많은 GitHub Stars를 얻는 궁극 플레이북", url: "https://hackernoon.com/the-ultimate-playbook-for-getting-more-github-stars" },
          { title: "오늘날 가장 큰 컨슈머 프로덕트가 첫 1,000 유저를 얻은 방법", url: "https://www.lennysnewsletter.com/p/consumer-business-find-first-users" },
          { title: "초보자를 위한 B2B 스타트업 마케팅 (PostHog)", url: "https://posthog.com/newsletter/b2b-startup-marketing-strategy" },
          { title: "개발자 마케팅 가이드 (DevTool CMO 작성)", url: "https://www.markepear.dev/blog/developer-marketing-guide" },
          { title: "PostHog: 첫 1,000 유저 확보한 방법", url: "https://posthog.com/founders/first-1000-users" },
          { title: "SaaS 마케팅 퀵 윈 가이드", url: "https://web.archive.org/web/20250805230355/https://www.growthunhinged.com/p/your-guide-to-quick-wins-in-saas" },
          { title: "The Product-Market Fit Game", url: "https://posthog.com/founders/product-market-fit-game" },
          { title: "개발자 마케팅에서 배운 40가지", url: "https://newsletter.posthog.com/p/40-things-weve-learned-about-marketing" },
          { title: "좋은 GitHub README 만드는 법", url: "https://www.markepear.dev/blog/github-readme-guide" },
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
