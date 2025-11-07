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
          "During beta, we track how many clicks it takes to do pastoral notes. If it creeps up, we change the UI.",
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
  },
  {
    slug: "welcome-first-time-guests",
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
  },
  {
    slug: "running-church-200-vs-2000",
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
  },
  {
    slug: "ai-in-ministry-helper-or-hype",
    title: "AI in ministry: helper or hype? (our honest take)",
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
  },
];

export type BlogFilterOptions = {
  topics: string[];
  sizes: string[];
  types: string[];
};

export const blogFilters: BlogFilterOptions = {
  topics: ["Volunteers", "Pastoral Care", "Operations", "Leadership", "Guests", "Systems", "Scaling", "AI", "Communication"],
  sizes: ["Small", "Mid-size", "Growing", "Multi-site", "All"],
  types: ["Guide", "Opinion", "Playbook", "Interview"],
};

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
