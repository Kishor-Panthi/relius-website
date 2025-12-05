export type ResourceItem = {
  title: string;
  description: string;
  type: "Guide" | "Checklist" | "Template" | "Update" | "Playbook";
  link: string;
  tags: string[];
};

export type ResourceCategory = {
  name: string;
  description: string;
  items: ResourceItem[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    name: "Getting Started Guides",
    description: "Everything you need to set up Relius and bring your team with you.",
    items: [
      {
        title: "Switching from another system",
        description: "A step-by-step migration workbook plus questions to ask your previous provider.",
        type: "Guide",
        link: "/resources/switching-from-another-system",
        tags: ["Migration", "Data health"],
      },
      {
        title: "Migration checklist template",
        description: "A printable checklist covering data export, field mapping, team communication, and go-live day tasks.",
        type: "Checklist",
        link: "/resources/migration-checklist",
        tags: ["Migration", "Planning"],
      },
      {
        title: "Data cleanup guide before switching",
        description: "How to audit and clean your member data before migration. Remove duplicates, fix formatting, and archive inactive records.",
        type: "Guide",
        link: "/resources/data-cleanup-guide",
        tags: ["Migration", "Data health"],
      },
      {
        title: "Staff communication template for platform changes",
        description: "Email templates and talking points to announce the switch, explain the 'why', and set expectations for your team.",
        type: "Template",
        link: "/resources/staff-communication-template",
        tags: ["Migration", "Change management"],
      },
      {
        title: "Setting up your church in Relius",
        description: "Map your people, groups, services, and permissions in one afternoon workshop.",
        type: "Checklist",
        link: "/resources/setting-up-your-church",
        tags: ["Setup", "Teams"],
      },
      {
        title: "Training your team",
        description: "Session outlines and talking points to help every ministry adopt Relius with confidence.",
        type: "Template",
        link: "/resources/training-your-team",
        tags: ["People", "Change management"],
      },
    ],
  },
  {
    name: "Best Practices",
    description: "Field-tested ministry playbooks built alongside churches we serve.",
    items: [
      {
        title: "Volunteer recruitment strategies",
        description: "Campaign ideas, scripts, and Relius workflows that keep volunteer pipelines full.",
        type: "Playbook",
        link: "/resources/volunteer-recruitment-strategies",
        tags: ["Volunteers", "Communication"],
      },
      {
        title: "Improving Sunday check-in flow",
        description: "From signage to kiosk layout, here's how to create a calm check-in experience.",
        type: "Guide",
        link: "/resources/improving-sunday-check-in-flow",
        tags: ["Check-in", "Kids"],
      },
      {
        title: "Year-end giving campaigns",
        description: "Email copy, thank-you scripts, and dashboards to celebrate generosity with integrity.",
        type: "Template",
        link: "/resources/year-end-giving-campaigns",
        tags: ["Giving", "Stewardship"],
      },
    ],
  },
  {
    name: "Ministry Insights",
    description: "Long-form articles that unpack trends and practical responses.",
    items: [
      {
        title: "Preventing volunteer burnout",
        description: "Real rhythms churches use to keep serving sustainable (not heroic).",
        type: "Guide",
        link: "/blog/prevent-volunteer-burnout",
        tags: ["Volunteers", "Health"],
      },
      {
        title: "Improving engagement metrics",
        description: "What to track, how to interpret it, and what to do when numbers dip.",
        type: "Guide",
        link: "/blog/church-200-vs-2000",
        tags: ["Engagement", "Analytics"],
      },
      {
        title: "Communication strategies for churches",
        description: "Segmented messaging that still feels personal.",
        type: "Guide",
        link: "/blog/first-time-guests-welcome",
        tags: ["Communication", "Guests"],
      },
      {
        title: "Why churches are switching from Planning Center",
        description: "What church leaders are telling us about making the switch in 2025.",
        type: "Guide",
        link: "/blog/why-churches-switching-planning-center-2025",
        tags: ["Migration", "Planning Center"],
      },
      {
        title: "Planning Center vs Relius: honest comparison",
        description: "A transparent look at what each platform does well.",
        type: "Guide",
        link: "/blog/planning-center-vs-relius-honest-comparison",
        tags: ["Migration", "Comparison"],
      },
      {
        title: "How to evaluate church management software",
        description: "A practical framework for making the right choice without sales pressure.",
        type: "Playbook",
        link: "/blog/evaluate-church-management-software-checklist",
        tags: ["Migration", "Evaluation"],
      },
    ],
  },
  {
    name: "Product Updates",
    description: "The latest releases, roadmap previews, and transparent status notes.",
    items: [
      {
        title: "October release notes",
        description: "Volunteer health dashboards, refreshed check-in UI, and easier prayer tags.",
        type: "Update",
        link: "/docs/releases/october",
        tags: ["Product", "Release notes"],
      },
      {
        title: "Feature announcements",
        description: "See what shipped across AI tools, reporting, and messaging.",
        type: "Update",
        link: "/docs/releases",
        tags: ["Product", "Roadmap"],
      },
      {
        title: "Roadmap transparency",
        description: "What we're actively building with churches today.",
        type: "Guide",
        link: "/resources/roadmap-transparency",
        tags: ["Roadmap", "Feedback"],
      },
    ],
  },
];

export const commonQuestions = [
  {
    question: "Where can I find technical documentation?",
    answer: "Visit the Relius Help Center for installation guides, APIs, and release details. Every article uses plain, ministry-friendly language.",
  },
  {
    question: "Do you have migration support?",
    answer: "Yes. We provide a migration workbook, live coaching, and a sandbox environment so you can test before switching.",
  },
  {
    question: "Can Relius work alongside Planning Center or other tools?",
    answer: "Many churches run Relius with existing systems. Use our integrations guide to sync people, giving, and calendars at your pace.",
  },
  {
    question: "How do I ask questions or request features?",
    answer: "Email care@relius.com or message us in-app. We host monthly roadmap calls and reply with realistic timelines.",
  },
];
