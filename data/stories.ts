export type StoryIllustrationKey = "community" | "ministry" | "volunteer" | "worship" | "growth" | "care";

export type Story = {
  slug: string;
  church: string;
  location: string;
  size: string;
  sizeCategory: "Small (under 250)" | "Mid-size (250-800)" | "Growing (800-1500)" | "Multi-site (1500+)";
  denomination?: string;
  attendance: number;
  useCase: string;
  challenge: string;
  outcome: string;
  summary: string;
  highlight: string;
  illustration: StoryIllustrationKey;
  focus: string[];
  quote: {
    text: string;
    person: string;
    role: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  background: string;
  challengeDetail: string;
  whyRelius: string[];
  implementation: string[];
  results: string[];
  advice: string;
};

export const stories: Story[] = [
  {
    slug: "grace-river-church",
    church: "Grace River Church",
    location: "Knoxville, TN",
    size: "150 people",
    sizeCategory: "Small (under 250)",
    denomination: "Non-denominational",
    attendance: 150,
    useCase: "Volunteer coordination",
    challenge: "Volunteers were scheduled with texts, spreadsheets, and sticky notes.",
    challengeDetail: "Every Thursday night turned into a scramble of text threads to see who was still serving Sunday. Last-minute changes meant the same three families were carrying most of the load.",
    outcome: "Coordinated volunteer rotations with one-click confirmations.",
    summary: "A small but growing church now confirms every volunteer by Friday afternoon and has a depth chart when someone needs rest.",
    highlight: "87% of volunteers now serve every 3-4 weeks instead of weekly.",
    illustration: "volunteer",
    focus: ["Volunteers", "Scheduling"],
    quote: {
      text: "Our people feel seen because Relius reminds us when they need a break or a thank-you note. It's like having a volunteer care pastor in the system.",
      person: "Lydia Hayes",
      role: "Ministry Coordinator",
    },
    metrics: [
      { label: "Coordinated teams", value: "6 ministries" },
      { label: "Response time", value: "< 2 hours" },
      { label: "Volunteer retention", value: "+22%" },
    ],
    background: "Grace River relaunched after the pandemic with one staff member wearing six hats. They needed structure without feeling corporate.",
    whyRelius: [
      "One shared calendar for services, rehearsals, and special events",
      "Volunteer preferences and limits tracked per person",
      "Gentle reminders and prayer requests woven into communication",
    ],
    implementation: [
      "Imported people from three different spreadsheets",
      "Mapped serving rotations and blackout dates",
      "Launched volunteer confirmations via email + text",
    ],
    results: [
      "Every team confirmed by Friday at 5 p.m.",
      "Leaders now see who is over-scheduled before burnout happens",
      "New volunteers are onboarded with a simple welcome workflow",
    ],
    advice: "Start small. Pick one ministry team, build the workflow in Relius, and celebrate the quick win.",
  },
  {
    slug: "midtown-fellowship",
    church: "Midtown Fellowship",
    location: "Columbus, OH",
    size: "700 people",
    sizeCategory: "Growing (800-1500)",
    denomination: "Baptist",
    attendance: 700,
    useCase: "From spreadsheets to organized ministry",
    challenge: "Every department tracked families differently, making pastoral follow-up guesswork.",
    challengeDetail: "Kids ministry used a clipboard, students had a Google Sheet, and pastoral care lived in someone's inbox. Families told the same story three times.",
    outcome: "Unified profiles, shared notes, and real-time care updates for the entire staff.",
    summary: "A mid-size church gave every staff member a trusted view of people's stories and current needs.",
    highlight: "Pastoral follow-ups logged within 24 hours of a request.",
    illustration: "community",
    focus: ["Pastoral Care", "People"],
    quote: {
      text: "When a family calls now, we actually know the last time we checked in. Relius keeps our care rooted in real relationships.",
      person: "Aaron Wells",
      role: "Executive Pastor",
    },
    metrics: [
      { label: "Families supported", value: "312 this year" },
      { label: "Care notes captured", value: "1,140" },
      { label: "Missed follow-ups", value: "0 flagged" },
    ],
    background: "The staff wanted software that felt pastoral, not corporate. Relius let them keep their tone and process while removing duplicate work.",
    whyRelius: [
      "Shared profiles show groups, giving, milestones, and notes at a glance",
      "Prayer requests and pastoral care tickets route to the right leader",
      "Mobile notes mean visits get logged before anyone forgets the details",
    ],
    implementation: [
      "Hosted a half-day staff lab to map their care workflow",
      "Migrated key data during a predictable off-week",
      "Enabled AI-generated visit summaries to speed up reporting",
    ],
    results: [
      "Leaders reach out within hours instead of days",
      "Families repeat their story once, not three times",
      "Staff trust data because it feels like their language",
    ],
    advice: "Name a care coordinator who owns data health. Relius makes it easy, but ownership keeps it meaningful.",
  },
  {
    slug: "renew-family-church",
    church: "Renew Family Church",
    location: "Phoenix, AZ",
    size: "1,200 people",
    sizeCategory: "Growing (800-1500)",
    denomination: "Assemblies of God",
    attendance: 1200,
    useCase: "Scaled without adding admin staff",
    challenge: "Growth outpaced admin capacity, and events overlapped constantly.",
    challengeDetail: "They were adding services and campuses without a planning backbone. Conflicts meant tech crews were setting up two stages at once.",
    outcome: "Relius became the shared planning space for weekend services, events, and volunteer rotations.",
    summary: "A rapidly growing church coordinated calendars, volunteers, and communication without adding new hires.",
    highlight: "Saved 15 admin hours per week by centralizing planning.",
    illustration: "growth",
    focus: ["Planning", "Volunteers"],
    quote: {
      text: "Relius helped us plan a quarter at a time. Teams show up knowing exactly where they're needed and what's changing.",
      person: "Nicolette Alvarez",
      role: "Operations Pastor",
    },
    metrics: [
      { label: "Conflicts resolved", value: "42 per quarter" },
      { label: "Admin hours saved", value: "15 hrs/week" },
      { label: "Volunteers onboarded", value: "96 in 6 months" },
    ],
    background: "Renew launched a second campus and needed clarity fast. Their team was hungry for a single calendar and quick communication loops.",
    whyRelius: [
      "Shared calendar with conflict warnings and setup timelines",
      "Volunteer waitlists and preferred serving rhythms built in",
      "Auto-reminders for service plans, rehearsals, and follow-ups",
    ],
    implementation: [
      "Mapped every recurring service and rehearsal",
      "Synced Relius with their staff calendars",
      "Trained campus coordinators on schedule approvals",
    ],
    results: [
      "Teams know three weeks ahead when they serve",
      "Campus leads share the same view of events and resources",
      "New service launches feel planned, not panicked",
    ],
    advice: "Use Relius tags for equipment and rooms. It saved us from double-booking our only baptistry.",
  },
  {
    slug: "harborlight-community",
    church: "Harborlight Community Church",
    location: "Seattle, WA",
    size: "3,500 people",
    sizeCategory: "Multi-site (1500+)",
    denomination: "Non-denominational",
    attendance: 3500,
    useCase: "Unified multi-site planning",
    challenge: "Each campus used different tools. Reporting was manual and late.",
    challengeDetail: "Campus pastors tracked attendance separately, and nobody trusted the weekly dashboard. Teams duplicated efforts on communication and volunteer asks.",
    outcome: "Relius unified people data, volunteer rosters, and engagement dashboards across four campuses.",
    summary: "A multi-site church finally trusted one source of truth for people, giving, and engagement.",
    highlight: "Campus reports ready Monday by 10 a.m. without spreadsheets.",
    illustration: "worship",
    focus: ["Multi-site", "Analytics"],
    quote: {
      text: "For the first time we can coach campus pastors on the same metrics. Relius made multi-site ministry feel collaborative again.",
      person: "Marcus Owen",
      role: "Lead Pastor",
    },
    metrics: [
      { label: "Campuses unified", value: "4" },
      { label: "Reporting time saved", value: "8 hrs/week" },
      { label: "Follow-up rate", value: "92% within 48 hrs" },
    ],
    background: "Harborlight wanted healthy campuses, not just more services. Consistent reporting felt impossible until Relius.",
    whyRelius: [
      "Campus tagging keeps people, volunteers, and events in context",
      "Dashboards reveal drift early with suggested next steps",
      "Shared templates for welcome flows and giving thank-yous",
    ],
    implementation: [
      "Piloted at one campus before rolling out to all",
      "Built shared KPIs and automated Monday morning reports",
      "Enabled permissions so campus staff own their data",
    ],
    results: [
      "Campus pastors coach from the same dashboard weekly",
      "Executive team plans using real numbers, not estimates",
      "Volunteers can serve across campuses without re-onboarding",
    ],
    advice: "Use Relius dashboards during staff meetings. It keeps the conversation grounded in people, not gut feelings.",
  },
  {
    slug: "oak-hills-community",
    church: "Oak Hills Community Church",
    location: "Grand Rapids, MI",
    size: "450 people",
    sizeCategory: "Mid-size (250-800)",
    denomination: "Christian Reformed",
    attendance: 450,
    useCase: "Care & follow-up",
    challenge: "Prayer requests were tucked in bulletins and never made it to the right person.",
    challengeDetail: "Congregants filled cards on Sunday but rarely heard back. Staff felt guilty and overwhelmed.",
    outcome: "Relius routes every care request to a shepherding team with clear ownership.",
    summary: "A care team now knows exactly who is praying, visiting, and following up.",
    highlight: "Care responses within 12 hours for urgent needs.",
    illustration: "care",
    focus: ["Care", "Prayer"],
    quote: {
      text: "Relius helps us love people in the details. No more lost cards or forgotten follow-ups.",
      person: "Bethany Kim",
      role: "Care Pastor",
    },
    metrics: [
      { label: "Requests logged", value: "580 / year" },
      { label: "Average follow-up", value: "11 hours" },
      { label: "Care team members", value: "24 active" },
    ],
    background: "Oak Hills treats prayer and visitation like sacraments. They needed a system that honored that weight.",
    whyRelius: [
      "Care tickets with confidentiality levels",
      "Templates for prayer responses and hospital visits",
      "Tagging that surfaces people who might need ongoing support",
    ],
    implementation: [
      "Digitized prayer cards with QR codes and mobile forms",
      "Assigned shepherding routes to elders",
      "Connected Relius reminders to the care team's group chat",
    ],
    results: [
      "Leaders know when every request is acknowledged",
      "Families feel pursued even weeks after the crisis",
      "Pastors plan sermons knowing what the church is carrying",
    ],
    advice: "Give volunteers language templates. Relius stores them so every message feels pastoral.",
  },
  {
    slug: "river-city-youth",
    church: "River City Church",
    location: "Austin, TX",
    size: "900 people",
    sizeCategory: "Mid-size (250-800)",
    denomination: "Non-denominational",
    attendance: 900,
    useCase: "Next-gen ministry planning",
    challenge: "Youth ministry ran parallel systems, so families missed communication.",
    challengeDetail: "Parents got emails from three platforms and still didn't know when camp payments were due.",
    outcome: "Relius centralized youth rosters, payments, and messaging alongside the rest of the church.",
    summary: "Next-gen ministry finally speaks the same language as the rest of the church office.",
    highlight: "Parent response rate jumped to 82% within 24 hours.",
    illustration: "ministry",
    focus: ["Youth", "Communication"],
    quote: {
      text: "Parents stopped asking, 'Which app are we using now?' Relius keeps every age group synced with the wider church.",
      person: "Devin Parker",
      role: "Family Pastor",
    },
    metrics: [
      { label: "Camp registrations", value: "310" },
      { label: "Late payments", value: "-65%" },
      { label: "Message open rate", value: "82%" },
    ],
    background: "River City's youth ministry grew fast, and they needed credibility with parents who already trusted the main church tools.",
    whyRelius: [
      "Shared people records between main and youth ministry",
      "Automated payment reminders with clear messaging",
      "Broadcast + targeted messages from one inbox",
    ],
    implementation: [
      "Embedded Relius forms on the website",
      "Segmented lists for parents, students, and leaders",
      "Used AI to draft camp follow-up notes",
    ],
    results: [
      "Parents know where to pay, sign, and show up",
      "Leaders spend less time copying data between systems",
      "Students feel personally invited to midweek groups",
    ],
    advice: "Bring parents into the rollout. Once they saw the clarity, adoption was instant.",
  },
];

export type StoryFilterOptions = {
  sizes: string[];
  useCases: string[];
  denominations: string[];
};

export const storyFilters: StoryFilterOptions = {
  sizes: [
    "Small (under 250)",
    "Mid-size (250-800)",
    "Growing (800-1500)",
    "Multi-site (1500+)",
  ],
  useCases: [
    "Volunteer coordination",
    "From spreadsheets to organized ministry",
    "Scaled without adding admin staff",
    "Unified multi-site planning",
    "Care & follow-up",
    "Next-gen ministry planning",
  ],
  denominations: [
    "Non-denominational",
    "Baptist",
    "Assemblies of God",
    "Christian Reformed",
  ],
};

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
