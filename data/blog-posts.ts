export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: "Ministry Insight" | "Best Practice" | "Product" | "Perspective";
  topics: string[];
  churchSizeFocus: string[];
  contentType: "Guide" | "Opinion" | "Playbook" | "Interview";
  content: {
    heading: string;
    body: string[];
  }[];
  takeaway: string[];
  quote?: string;
  image?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prevent-volunteer-burnout",
    title: "5 ways to prevent volunteer burnout (from churches doing it well)",
    excerpt: "We asked churches of different sizes how they keep volunteers energized. Here are the rhythms they practice every month.",
    author: "Marissa Cole",
    role: "Ministry Partner Coach",
    date: "2025-01-12",
    readTime: "7 min",
    category: "Ministry Insight",
    contentType: "Guide",
    topics: ["Volunteers", "Pastoral Care"],
    churchSizeFocus: ["Small", "Mid-size"],
    content: [
      {
        heading: "Start with honest rhythms",
        body: [
          "Grace River (150 people) treats every volunteer role like a rotating position. That means they can say 'rest this month' without guilt.",
          "Create a dashboard inside Relius that highlights people serving more than twice a month. Tag them for a check-in and a 'thank you' note.",
        ],
      },
      {
        heading: "Normalize release and relief",
        body: [
          "Healthy teams celebrate when someone pauses a role. One church literally built a 'Sabbath rotation' into Relius so everyone expects breaks.",
          "Capture a short exit interview in Relius. It becomes a searchable note for future leaders.",
        ],
      },
      {
        heading: "Make appreciation specific",
        body: [
          "Generic thank-yous fade. Use Relius to log stories tied to an event or person and call those out in your note.",
          "Pair the note with small acts: coffee gift cards, a recorded prayer, or five minutes on stage from a pastor.",
        ],
      },
    ],
    takeaway: [
      "Watch rotations like you watch giving trends.",
      "Celebrate rest, not just service hours.",
      "Thank people with stories, not stats.",
    ],
    quote: "When volunteers know there's an exit ramp, they stay longer because they trust you'll notice before they're exhausted.",
    image: "/images/blog/prevent-volunteer-burnout.png",
  },
  {
    slug: "why-church-software-fails",
    title: "Why most church software fails (and how to pick better)",
    excerpt: "Many platforms promise clarity and end up creating more spreadsheets. Here's how to evaluate software through a pastoral lens.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2025-01-05",
    readTime: "6 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership"],
    churchSizeFocus: ["Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Start with ministry language",
        body: [
          'Ask, "Does this system describe people the way we do?" If not, your team will drag their feet. Relius was designed with pastoral vocabulary.',
          "Demo the pastoral care flow before the finance module. If it feels cold there, it will feel cold everywhere.",
        ],
      },
      {
        heading: "Measure burden, not features",
        body: [
          "Feature checklists reward complexity. Ministry rewards clarity. Map the top five things you actually do each week and see if the workflow is lighter.",
          "We track how many clicks it takes to do pastoral notes. If it creeps up, we change the UI.",
        ],
      },
      {
        heading: "Look for partners, not platforms",
        body: [
          "Who will you email when something breaks? Ask for names. Meet them. Reliable software comes with honest humans.",
          "Transparent roadmaps matter. A trustworthy vendor admits what isn't built yet.",
        ],
      },
    ],
    takeaway: [
      "Adoption beats feature lists.",
      "People vocab should lead priorities.",
      "Choose relationship over hype.",
    ],
    image: "/images/blog/why-church-software-fails.png",
  },
  {
    slug: "first-time-guests-welcome",
    title: "Making first-time guests feel welcome: practical tips",
    excerpt: "A warm lobby is great. A thoughtful follow-up is better. Here's how churches are building guest pathways with Relius.",
    author: "Joel Reyes",
    role: "Friend of Relius / Connections Pastor",
    date: "2024-12-18",
    readTime: "8 min",
    category: "Best Practice",
    contentType: "Guide",
    topics: ["Guests", "Systems"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Map the first seven days",
        body: [
          "Set a Relius automation that assigns a champion the second someone checks in as a guest.",
          "Send a same-day text from a real leader with a real invite, not a generic template.",
        ],
      },
      {
        heading: "Follow up with next steps, not flattery",
        body: [
          "Create a 'next invite' library inside Relius-family meal, serve tour, Alpha night-so you can send an option that fits the story you heard.",
          "Stop guessing about preferences. Tag guests with interests during check-in and let Relius route the right follow-up.",
        ],
      },
      {
        heading: "Close the loop in staff meeting",
        body: [
          "Pull the Relius guest dashboard every Monday. Celebrate, assign, and pray for the names on the screen.",
          "If someone hasn't been contacted within 48 hours, the system escalates it to a pastor.",
        ],
      },
    ],
    takeaway: [
      "Speed matters more than swag.",
      "Personal invitations beat general ones.",
      "Shared dashboards keep teams accountable.",
    ],
    image: "/images/blog/first-time-guests-welcome.png",
  },
  {
    slug: "church-200-vs-2000",
    title: "Running a church of 200 vs 2,000: what actually changes",
    excerpt: "We pulled insights from churches in both lanes to show what truly shifts in systems, staffing, and soul care.",
    author: "Mika Thompson",
    role: "Lead Implementation Guide",
    date: "2024-12-05",
    readTime: "9 min",
    category: "Perspective",
    contentType: "Playbook",
    topics: ["Leadership", "Scaling"],
    churchSizeFocus: ["Small", "Growing", "Multi-site"],
    content: [
      {
        heading: "Care stays personal-or people leave",
        body: [
          "Churches that scale well keep a 'people to pastor' ratio they can name.",
          "Use Relius segments to make sure nobody is shepherding more than they should.",
        ],
      },
      {
        heading: "Communication complexity multiplies",
        body: [
          "What was once 'send an email' becomes 'segment by campus, language, and kids ages.' Relius handles that segmentation so your voice stays consistent.",
        ],
      },
      {
        heading: "Data helps you spot drift early",
        body: [
          "Growing churches log their instincts. If you sense engagement is down, check the Relius insights tab for signals before it becomes a problem.",
        ],
      },
    ],
    takeaway: [
      "Pastoral ratios matter more than attendance numbers.",
      "Segment communication as you grow.",
      "Log instincts so you can measure them later.",
    ],
    image: "/images/blog/church-200-vs-2000.png",
  },
  {
    slug: "ai-changing-church-administration",
    title: "How AI is changing church administration",
    excerpt: "AI is not a pastor. But it can be a thoughtful assistant. Here's how we coach churches to use it without losing their voice.",
    author: "Caleb Morris",
    role: "Head of Product",
    date: "2024-11-20",
    readTime: "7 min",
    category: "Product",
    contentType: "Opinion",
    topics: ["AI", "Communication"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "Treat AI like an intern",
        body: [
          "AI can draft, but humans decide. Churches using Relius AI well always layer pastoral review on top.",
          "Store your favorite prompts in Relius so your style stays consistent.",
        ],
      },
      {
        heading: "Protect the pastoral voice",
        body: [
          "Never send AI output straight to your people. Pair AI drafting with your theology, tone, and story.",
        ],
      },
      {
        heading: "Use it to multiply care, not automation",
        body: [
          "Let AI summarize meetings, prep notes, and surface pastoral needs faster, then have a human step in.",
        ],
      },
    ],
    takeaway: [
      "AI drafts, pastors decide.",
      "Your voice is part of your theology.",
      "Use AI to remove admin work, not to replace humans.",
    ],
    image: "/images/blog/ai-changing-church-administration.png",
  },
  {
    slug: "why-churches-switching-planning-center-2025",
    title: "Why churches are switching from Planning Center in 2025",
    excerpt: "Planning Center built the category. But the category has evolved. Here's what church leaders are telling us about why they're making the switch.",
    author: "Aaron Wells",
    role: "Executive Pastor in Residence",
    date: "2025-01-18",
    readTime: "8 min",
    category: "Perspective",
    contentType: "Opinion",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing"],
    content: [
      {
        heading: "Planning Center got churches organized. Now they want more.",
        body: [
          "For years, Planning Center was the answer to 'How do we get organized?' And it worked. Teams could schedule volunteers. Services could be planned. Data lived somewhere findable.",
          "But organization was never the end goal. Ministry was. And as churches have matured in their digital fluency, they're asking new questions: 'Can we catch people before they drift?' 'Can we turn sermon prep into a week of content?' 'Can we actually see engagement trends, not just attendance?'",
          "Those are AI-shaped questions. And Planning Center wasn't built to answer them.",
        ],
      },
      {
        heading: "The modular model creates hidden friction",
        body: [
          "Planning Center's strength-separate apps for People, Groups, Giving, Check-Ins, Services-becomes a pain point at scale. Each app has its own logic. Data doesn't always flow between them the way you'd expect.",
          "One executive pastor told us: 'I realized I was logging into five apps to prep for one staff meeting. That's when I knew something had to change.'",
          "A unified platform means your people data, giving history, group attendance, and care notes live in one place. You don't stitch context together-you see it.",
        ],
      },
      {
        heading: "AI is changing what's possible",
        body: [
          "Relius was built from the ground up with AI at the core-not bolted on afterward. That means features like Content Studio (turn one sermon into a week of social posts), Pastoral Care AI (surface members who might be drifting), and Sermon Planner (map a teaching calendar with AI-suggested themes) aren't add-ons. They're native.",
          "The churches switching to Relius aren't anti-Planning Center. They're pro-future. They see where ministry technology is headed, and they want a platform that's already there.",
        ],
      },
      {
        heading: "Migration is easier than you think",
        body: [
          "This is the biggest fear we hear. 'We've been on Planning Center for eight years. All our data is there.'",
          "Here's the truth: Planning Center exports cleanly. People records, giving history-it all comes over. Our migration wizard maps your data in under three hours for most churches.",
          "And your team doesn't have to learn a new system from scratch. If they've used any modern church platform, Relius feels familiar. Most teams are comfortable within a week.",
        ],
      },
    ],
    takeaway: [
      "Planning Center solved organization. Relius solves outcomes.",
      "Modular apps create context-switching. Unified platforms create clarity.",
      "AI isn't a feature-it's a foundation.",
      "Migration takes hours, not months.",
    ],
    quote: "I was nervous about the switch. Then I realized I'd spent more time worrying about migration than the migration actually took.",
    image: "/images/blog/why-churches-switching-planning-center-2025.png",
  },
  {
    slug: "planning-center-vs-relius-honest-comparison",
    title: "Planning Center vs Relius: an honest comparison",
    excerpt: "We're not going to pretend we're unbiased. But we will be fair. Here's a transparent look at what each platform does well.",
    author: "Caleb Morris",
    role: "Head of Product",
    date: "2025-01-10",
    readTime: "10 min",
    category: "Product",
    contentType: "Guide",
    topics: ["Operations", "Migration"],
    churchSizeFocus: ["Small", "Mid-size", "Growing", "Multi-site"],
    content: [
      {
        heading: "Where Planning Center shines",
        body: [
          "Let's start with what Planning Center does well, because ignoring it would be dishonest.",
          "Services Planning: Planning Center Services is mature, polished, and deeply adopted by worship teams. If your primary pain is scheduling bands and building setlists, it's excellent.",
          "Check-Ins: Their check-in system is reliable and widely used. It's a known quantity for children's ministry.",
          "Ecosystem: They've been around since 2006. There's a large community, tons of tutorials, and most church staff have used it before.",
        ],
      },
      {
        heading: "Where Relius leads",
        body: [
          "AI-Native Features: Content Studio, Sermon Planner, Pastoral Care AI, Translation-these aren't available in Planning Center. If you want AI that understands ministry context, Relius is built for it.",
          "Unified Platform: Everything in one system. No app-switching, no data fragmentation, no wondering if the Groups app is synced with the People app.",
          "Pastoral Care Tools: Relius was designed with soul care at the center. Care requests, prayer follow-ups, at-risk detection-these are first-class features, not afterthoughts.",
          "Modern UX: Relius was designed in 2024, not 2006. It feels like the software your team uses everywhere else in their lives.",
        ],
      },
      {
        heading: "Pricing comparison",
        body: [
          "Planning Center uses a per-app, per-size pricing model. If you use multiple apps at scale, costs add up quickly. A church of 500 using People, Giving, Groups, and Check-Ins might pay $150-200/month.",
          "Relius uses a simple tiered model: $29/month for small churches, $99/month for most mid-size churches, and custom pricing for enterprise. All features included at each tier-no app bundles to calculate.",
        ],
      },
      {
        heading: "The honest verdict",
        body: [
          "If you're happy with Planning Center and your team is productive, switching has a cost. Change is hard.",
          "But if you're feeling the friction-app-switching, missing AI tools, fragmented data, clunky pastoral care-Relius is worth a demo. We're not trying to be the loudest voice in the room. We're trying to be the most useful.",
        ],
      },
    ],
    takeaway: [
      "Planning Center: mature ecosystem, great for Services and Check-Ins.",
      "Relius: AI-native, unified, built for pastoral care.",
      "Pricing: Relius is simpler and often cheaper at scale.",
      "Switching cost is real-but so is staying stuck.",
    ],
    image: "/images/blog/planning-center-vs-relius-honest-comparison.png",
  },
  {
    slug: "evaluate-church-management-software-checklist",
    title: "How to evaluate church management software (complete checklist)",
    excerpt: "Buying church software is a big decision. Here's a practical framework for making the right choice-without the sales pressure.",
    author: "Mika Thompson",
    role: "Lead Implementation Guide",
    date: "2025-01-02",
    readTime: "12 min",
    category: "Best Practice",
    contentType: "Playbook",
    topics: ["Operations", "Leadership", "Migration"],
    churchSizeFocus: ["All"],
    content: [
      {
        heading: "Step 1: Define your core workflows",
        body: [
          "Before looking at any platform, write down the five things your team does every week. Not what you wish you did-what you actually do.",
          "Common examples: volunteer scheduling, guest follow-up, giving reports, group sign-ups, event registrations, pastoral care notes.",
          "Now rank them. Which ones cause the most friction? Which ones take the most time? Those are your evaluation priorities.",
        ],
      },
      {
        heading: "Step 2: Identify your deal-breakers",
        body: [
          "Every church has non-negotiables. Maybe it's text messaging. Maybe it's Spanish language support. Maybe it's a specific check-in workflow for kids.",
          "Write these down before you see a demo. It's easy to get distracted by shiny features. Your deal-breakers keep you grounded.",
        ],
      },
      {
        heading: "Step 3: Evaluate adoption, not just features",
        body: [
          "A feature your team won't use is worse than no feature at all. It creates guilt and clutter.",
          "During demos, watch for: How many clicks does it take to do your core tasks? Does the vocabulary match how your church talks? Is the mobile experience usable by volunteers who aren't tech-savvy?",
          "Ask to speak with a church similar to yours in size and context. Real feedback beats sales pitches.",
        ],
      },
      {
        heading: "Step 4: Understand the true cost",
        body: [
          "Sticker price isn't total cost. Factor in: Setup time (how long until you're productive?), training hours (how many staff need to learn it?), migration complexity (will you need to hire someone?), and ongoing admin burden.",
          "Also ask about hidden costs: Are there per-text fees? Per-user limits? Add-on modules you'll need later?",
        ],
      },
      {
        heading: "Step 5: Test the support relationship",
        body: [
          "During the trial, submit a support ticket. See how fast they respond. See if the answer is helpful or scripted.",
          "Ask about their roadmap. A good vendor is transparent about what's coming and honest about what's not built yet.",
          "The software relationship is a long-term partnership. You want partners who care about your context, not just your contract.",
        ],
      },
      {
        heading: "The evaluation checklist",
        body: [
          "Use this checklist when comparing platforms:",
          "[ ] Does it handle my top 3 weekly workflows with fewer steps?",
          "[ ] Does my team's least technical person find it usable?",
          "[ ] Is pricing transparent and predictable?",
          "[ ] Can I talk to a real human within 24 hours if something breaks?",
          "[ ] Does the platform have AI features I'll actually use?",
          "[ ] Is data portable if I ever need to leave?",
          "[ ] Does the company share my values around privacy and ministry ethics?",
        ],
      },
    ],
    takeaway: [
      "Define your workflows before you demo.",
      "Adoption matters more than features.",
      "Total cost includes time, not just price.",
      "Test support before you commit.",
      "Use the checklist to stay objective.",
    ],
    quote: "The best church software is the one your team actually uses. Everything else is just potential.",
    image: "/images/blog/evaluate-church-management-software-checklist.png",
  },
];

export type BlogFilterOptions = {
  topics: string[];
  sizes: string[];
  types: string[];
};

export const blogFilters: BlogFilterOptions = {
  topics: ["Volunteers", "Pastoral Care", "Operations", "Leadership", "Guests", "Systems", "Scaling", "AI", "Communication", "Migration"],
  sizes: ["Small", "Mid-size", "Growing", "Multi-site", "All"],
  types: ["Guide", "Opinion", "Playbook", "Interview"],
};

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
