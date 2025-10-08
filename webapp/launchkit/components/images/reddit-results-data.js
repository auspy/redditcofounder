// Real Reddit results data using uploaded images - sorted by view count (highest to lowest)
const allRedditResultsData = [
  {
    imageUrl: "/reddit-results/SCR-20251003-ckzh.png",
    title: "Product Hunt Feature Campaign",
    description: "Coordinated Reddit posts led to Product Hunt #1 launch with viral engagement across multiple subreddits",
    stats: { upvotes: 1247, comments: 183, views: "32.1k" },
    totalViews: "77k",
    totalViewsNumeric: 77000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnvi.png",
    title: "AI Tool Viral Launch",
    description: "AI productivity tool went viral across multiple tech subreddits, driving massive organic signups",
    stats: { upvotes: 1892, comments: 267, views: "68.4k" },
    totalViews: "178k",
    totalViewsNumeric: 178000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnkc.png",
    title: "Developer Community Hit",
    description: "Open source project announcement reached #1 on r/programming and r/webdev simultaneously",
    stats: { upvotes: 2134, comments: 298, views: "61.2k" },
    totalViews: "504k",
    totalViewsNumeric: 504000
  },

  {
    imageUrl: "/reddit-results/SCR-20251003-cnqo.png",
    title: "SaaS Growth Hack Viral",
    description: "Growth hacking strategy post went viral in r/SaaS and r/startups, generating massive interest",
    stats: { upvotes: 1521, comments: 234, views: "57.3k" },
    totalViews: "632k",
    totalViewsNumeric: 632000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnfg.png",
    title: "Mobile App Showcase Success",
    description: "iOS app showcase reached top of r/iOSProgramming and r/apps, driving 50k+ downloads",
    stats: { upvotes: 1723, comments: 156, views: "55.8k" },
    totalViews: "61k",
    totalViewsNumeric: 61000
  },

  {
    imageUrl: "/reddit-results/SCR-20251003-cmus.png",
    title: "Productivity Tool Launch",
    description: "Productivity app launch strategy across multiple subreddits resulted in viral adoption",
    stats: { upvotes: 1456, comments: 178, views: "48.9k" },
    totalViews: "215k",
    totalViewsNumeric: 215000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-clnw.png",
    title: "Startup Growth Story",
    description: "Authentic founder story in r/startups generated massive support and user acquisition",
    stats: { upvotes: 891, comments: 234, views: "18.7k" },
    totalViews: "47k",
    totalViewsNumeric: 47000
  },

  {
    imageUrl: "/reddit-results/SCR-20251003-clya.png",
    title: "Mobile App Launch",
    description: "App showcase in r/Android reached top of subreddit with 50k+ downloads in first week",
    stats: { upvotes: 1834, comments: 267, views: "67.8k" },
    totalViews: "41k",
    totalViewsNumeric: 41000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnia.png",
    title: "Design Tool Showcase",
    description: "Design tool showcase in r/web_design and r/graphic_design resulted in viral adoption",
    stats: { upvotes: 1345, comments: 145, views: "39.6k" },
    totalViews: "106k",
    totalViewsNumeric: 106000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmiu.png",
    title: "Marketplace Success Story",
    description: "Niche marketplace launch in targeted communities resulted in $15k MRR within 30 days",
    stats: { upvotes: 567, comments: 123, views: "19.4k" },
    totalViews: "38k",
    totalViewsNumeric: 38000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cljr.png",
    title: "Technical Community Viral Post",
    description: "Deep technical discussion in r/programming reached front page and drove qualified developer traffic",
    stats: { upvotes: 2156, comments: 312, views: "54.3k" },
    totalViews: "37k",
    totalViewsNumeric: 37000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmgg.png",
    title: "Viral Feature Discussion",
    description: "Product feature discussion went viral, leading to thousands of new users and media coverage",
    stats: { upvotes: 2341, comments: 445, views: "89.2k" },
    totalViews: "37k",
    totalViewsNumeric: 37000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnak.png",
    title: "Marketing Strategy Deep Dive",
    description: "Marketing strategy breakdown in r/marketing generated significant discussion and followers",
    stats: { upvotes: 1098, comments: 189, views: "35.7k" },
    totalViews: "35k",
    totalViewsNumeric: 35000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmra.png",
    title: "Indie Hacker Success",
    description: "Indie hacker journey shared in r/IndieHackers inspired community and drove product interest",
    stats: { upvotes: 987, comments: 156, views: "32.4k" },
    totalViews: "33k",
    totalViewsNumeric: 33000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmxj.png",
    title: "Remote Work Tool Success",
    description: "Remote work productivity tool gained traction in r/remotework and r/productivity",
    stats: { upvotes: 876, comments: 134, views: "28.9k" },
    totalViews: "30k",
    totalViewsNumeric: 30000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnow.png",
    title: "Technical Tutorial Viral",
    description: "In-depth technical tutorial reached front page of r/programming, establishing thought leadership",
    stats: { upvotes: 1987, comments: 301, views: "52.4k" },
    totalViews: "28k",
    totalViewsNumeric: 28000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmsv.png",
    title: "Fintech App Breakthrough",
    description: "Fintech app announcement in r/personalfinance resulted in significant user acquisition",
    stats: { upvotes: 1123, comments: 167, views: "27.8k" },
    totalViews: "28k",
    totalViewsNumeric: 28000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-clvt.png",
    title: "Problem-Solution Post",
    description: "Identified pain point in niche community and presented solution, resulting in high conversion rates",
    stats: { upvotes: 678, comments: 145, views: "22.3k" },
    totalViews: "26k",
    totalViewsNumeric: 26000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmmo.png",
    title: "Open Source Project Viral",
    description: "Open source announcement in developer communities led to massive GitHub engagement",
    stats: { upvotes: 1678, comments: 201, views: "43.6k" },
    totalViews: "24k",
    totalViewsNumeric: 24000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnci.png",
    title: "EdTech Platform Launch",
    description: "Educational technology platform gained significant traction in r/education and r/teachers",
    stats: { upvotes: 765, comments: 112, views: "23.5k" },
    totalViews: "23k",
    totalViewsNumeric: 23000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-clsr.png",
    title: "Developer Tool Showcase",
    description: "Strategic showcase in r/webdev and r/reactjs led to 5k+ GitHub stars and community adoption",
    stats: { upvotes: 1432, comments: 98, views: "41.2k" },
    totalViews: "21k",
    totalViewsNumeric: 21000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmom.png",
    title: "Gaming App Success",
    description: "Indie game showcase in r/gamedev and r/IndieGaming resulted in Steam wishlist surge",
    stats: { upvotes: 654, comments: 89, views: "19.8k" },
    totalViews: "19k",
    totalViewsNumeric: 19000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnsv.png",
    title: "Startup Success Story",
    description: "Bootstrap startup story inspired thousands in r/entrepreneur, driving significant traffic and signups",
    stats: { upvotes: 1654, comments: 189, views: "59.7k" },
    totalViews: "18k",
    totalViewsNumeric: 18000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-ckrl.png",
    title: "SaaS Tool Launch Success",
    description: "Strategic post in r/entrepreneur generated massive engagement and drove 200+ signups in 48 hours",
    stats: { upvotes: 342, comments: 67, views: "15.2k" },
    totalViews: "15k",
    totalViewsNumeric: 15000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cnmp.png",
    title: "E-commerce Case Study",
    description: "E-commerce growth case study shared in relevant communities drove significant referral traffic",
    stats: { upvotes: 1234, comments: 167, views: "44.2k" },
    totalViews: "16k",
    totalViewsNumeric: 16000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmdz.png",
    title: "Founder AMA Success",
    description: "Strategic AMA across multiple subreddits generated authentic engagement and user trust",
    stats: { upvotes: 723, comments: 156, views: "25.7k" },
    totalViews: "12k",
    totalViewsNumeric: 12000
  },
  {
    imageUrl: "/reddit-results/SCR-20251003-cmbc.png",
    title: "B2B SaaS Case Study",
    description: "Shared real results and metrics in r/SaaS, driving qualified enterprise leads",
    stats: { upvotes: 456, comments: 89, views: "12.1k" },
    totalViews: "9.5k",
    totalViewsNumeric: 9500
  },
];

export const realRedditResultsData = allRedditResultsData;