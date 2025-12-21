export type UseCaseIllustrationKey = "community" | "ministry" | "volunteer" | "worship" | "growth" | "care";

export type UseCase = {
  slug: string;
  title: string;
  subtitle: string;
  churchSize: string;
  sizeCategory: "Small (under 250)" | "Mid-size (250-800)" | "Growing (800-1500)" | "Multi-site (1500+)";
  category: string;
  challenge: string;
  solution: string;
  illustration: UseCaseIllustrationKey;
  focus: string[];
  capabilities: string[];
  outcomes: string[];
  implementation: string[];
  keyFeatures: {
    label: string;
    description: string;
  }[];
};

export const useCases: UseCase[] = [
  {
    slug: "volunteer-coordination",
    title: "Volunteer Coordination",
    subtitle: "How a small church could streamline volunteer scheduling",
    churchSize: "Under 250 people",
    sizeCategory: "Small (under 250)",
    category: "Volunteer Management",
    challenge: "Many small churches rely on text threads, spreadsheets, and last-minute phone calls to coordinate volunteers. This leads to the same few families carrying most of the load while others want to help but don't know when they're needed.",
    solution: "Relius provides a central place to manage volunteer preferences, availability, and rotations. Automated reminders and one-click confirmations take the guesswork out of scheduling.",
    illustration: "volunteer",
    focus: ["Volunteers", "Scheduling"],
    capabilities: [
      "Track volunteer preferences and availability",
      "Set up recurring schedules with automatic rotations",
      "Send confirmation requests via email or text",
      "See who's serving too often (burnout prevention)",
      "Manage multiple ministry teams from one dashboard"
    ],
    outcomes: [
      "Volunteers know their schedule weeks in advance",
      "Leaders can identify when someone needs a break",
      "New volunteers get onboarded with clear expectations",
      "Less time spent coordinating, more time connecting"
    ],
    implementation: [
      "Import your current volunteer list",
      "Set up ministry teams and roles",
      "Configure scheduling preferences per person",
      "Launch automated reminders"
    ],
    keyFeatures: [
      { label: "Smart scheduling", description: "Automatic rotation suggestions" },
      { label: "Burnout detection", description: "Alerts when volunteers are over-scheduled" },
      { label: "Easy confirmations", description: "One-click responses via text or email" }
    ]
  },
  {
    slug: "pastoral-care-tracking",
    title: "Pastoral Care Tracking",
    subtitle: "How a mid-size church could unify people care across departments",
    churchSize: "250-800 people",
    sizeCategory: "Mid-size (250-800)",
    category: "Pastoral Care",
    challenge: "When different departments track families separately, pastoral follow-up becomes guesswork. Kids ministry uses one system, students another, and pastoral care lives in someone's inbox. Families end up telling the same story multiple times.",
    solution: "Relius gives every staff member a trusted view of people's stories and current needs. Shared profiles, pastoral notes, and care request routing ensure nothing falls through the cracks.",
    illustration: "care",
    focus: ["Pastoral Care", "People"],
    capabilities: [
      "Unified profiles showing groups, milestones, and notes",
      "Route prayer requests and care tickets to the right leader",
      "Log pastoral visits and follow-ups from mobile",
      "Set reminders for ongoing care situations",
      "Track family relationships and household connections"
    ],
    outcomes: [
      "Leaders can respond to needs within hours, not days",
      "Families share their story once, not three times",
      "Nothing gets lost between departments",
      "Pastors know what the congregation is carrying"
    ],
    implementation: [
      "Set up staff permissions and care workflows",
      "Import existing member data",
      "Configure care request routing rules",
      "Train team on mobile note-taking"
    ],
    keyFeatures: [
      { label: "Shared profiles", description: "One view of each person across ministries" },
      { label: "Care routing", description: "Requests go to the right person automatically" },
      { label: "Mobile notes", description: "Log visits before you forget the details" }
    ]
  },
  {
    slug: "scaling-operations",
    title: "Scaling Operations",
    subtitle: "How a growing church could coordinate without adding admin staff",
    churchSize: "800-1500 people",
    sizeCategory: "Growing (800-1500)",
    category: "Operations",
    challenge: "Rapid growth often outpaces admin capacity. Events overlap, tech crews get double-booked, and nobody has visibility into the full calendar. Adding more services or campuses without a planning backbone creates chaos.",
    solution: "Relius becomes the shared planning space for weekend services, events, and volunteer rotations. Conflict detection and centralized calendars keep everyone aligned.",
    illustration: "growth",
    focus: ["Planning", "Volunteers"],
    capabilities: [
      "Shared calendar with conflict warnings",
      "Room and equipment booking",
      "Volunteer waitlists and preferred serving rhythms",
      "Auto-reminders for service plans and rehearsals",
      "Cross-campus visibility for multi-site churches"
    ],
    outcomes: [
      "Teams know weeks ahead when they serve",
      "No more double-booked rooms or equipment",
      "New service launches feel planned, not panicked",
      "Campus coordinators share the same information"
    ],
    implementation: [
      "Map all recurring services and events",
      "Set up room and equipment resources",
      "Configure volunteer scheduling rules",
      "Connect with staff calendars"
    ],
    keyFeatures: [
      { label: "Conflict detection", description: "Automatic warnings for overlapping events" },
      { label: "Resource booking", description: "Rooms, equipment, and spaces in one place" },
      { label: "Quarterly planning", description: "See the big picture across ministries" }
    ]
  },
  {
    slug: "multi-site-unity",
    title: "Multi-Site Unity",
    subtitle: "How a multi-site church could unify operations across campuses",
    churchSize: "1500+ people",
    sizeCategory: "Multi-site (1500+)",
    category: "Multi-Site",
    challenge: "When each campus uses different tools, reporting becomes manual and late. Campus pastors track attendance separately, and nobody trusts the weekly dashboard. Teams duplicate efforts on communication and volunteer coordination.",
    solution: "Relius unifies people data, volunteer rosters, and engagement dashboards across all campuses. One source of truth means everyone works from the same information.",
    illustration: "worship",
    focus: ["Multi-site", "Analytics"],
    capabilities: [
      "Campus tagging for people, volunteers, and events",
      "Unified dashboards with per-campus breakdowns",
      "Shared templates for welcome flows and communications",
      "Cross-campus volunteer serving",
      "Consistent metrics for all locations"
    ],
    outcomes: [
      "Campus pastors coach from the same dashboard",
      "Executive team plans using real numbers",
      "Volunteers can serve across campuses seamlessly",
      "Monday reports ready without spreadsheet wrangling"
    ],
    implementation: [
      "Configure campus structure and permissions",
      "Migrate data with campus tags preserved",
      "Set up unified reporting dashboards",
      "Train campus coordinators on shared workflows"
    ],
    keyFeatures: [
      { label: "Campus tagging", description: "Keep context while sharing data" },
      { label: "Unified dashboards", description: "One view across all locations" },
      { label: "Cross-campus serving", description: "Volunteers move freely between sites" }
    ]
  },
  {
    slug: "prayer-and-care",
    title: "Prayer & Care Ministry",
    subtitle: "How a church could ensure every prayer request gets a response",
    churchSize: "Any size",
    sizeCategory: "Mid-size (250-800)",
    category: "Care Ministry",
    challenge: "Prayer requests often get tucked in bulletins and never make it to the right person. Congregants fill out cards on Sunday but rarely hear back. Care teams feel guilty and overwhelmed trying to keep track of everyone.",
    solution: "Relius routes every care request to a shepherding team with clear ownership. Digital prayer cards, mobile logging, and follow-up reminders ensure nobody is forgotten.",
    illustration: "care",
    focus: ["Care", "Prayer"],
    capabilities: [
      "Digital prayer request submission (QR codes, mobile forms)",
      "Care tickets with confidentiality levels",
      "Templates for prayer responses and hospital visits",
      "Reminders for ongoing care situations",
      "Tagging for people who may need long-term support"
    ],
    outcomes: [
      "Every request gets acknowledged promptly",
      "Families feel pursued even weeks after a crisis",
      "Care team has clear visibility into who needs attention",
      "Pastors can plan sermons knowing what the church is carrying"
    ],
    implementation: [
      "Set up care request forms with appropriate routing",
      "Assign shepherding responsibilities",
      "Configure confidentiality and permission levels",
      "Create response templates for common situations"
    ],
    keyFeatures: [
      { label: "Digital prayer cards", description: "QR codes and mobile-friendly forms" },
      { label: "Care routing", description: "Requests go to the right team automatically" },
      { label: "Follow-up reminders", description: "Never forget to check in again" }
    ]
  },
  {
    slug: "family-ministry",
    title: "Family Ministry Integration",
    subtitle: "How a church could unify kids, youth, and parent communication",
    churchSize: "Any size",
    sizeCategory: "Growing (800-1500)",
    category: "Next-Gen Ministry",
    challenge: "Youth and kids ministries often run parallel systems, so families get emails from three platforms and still miss important information. Parents ask 'Which app are we using now?' and registration becomes a maze.",
    solution: "Relius centralizes family records, event registrations, and messaging alongside the rest of the church. One platform for everyone means parents always know where to look.",
    illustration: "ministry",
    focus: ["Youth", "Communication"],
    capabilities: [
      "Shared people records between main church and ministries",
      "Unified event registration with payment processing",
      "Segmented messaging for parents, students, and leaders",
      "Attendance tracking across all age groups",
      "Family dashboard showing all household activity"
    ],
    outcomes: [
      "Parents know where to register, pay, and get updates",
      "Leaders spend less time copying data between systems",
      "Students feel personally invited to events",
      "Families see the church as coordinated, not chaotic"
    ],
    implementation: [
      "Set up family relationships and household connections",
      "Configure ministry-specific communication segments",
      "Create unified registration workflows",
      "Train ministry leaders on the shared platform"
    ],
    keyFeatures: [
      { label: "Family profiles", description: "See the whole household at a glance" },
      { label: "Unified registration", description: "One place for all events and payments" },
      { label: "Smart messaging", description: "Reach parents, students, or leaders separately" }
    ]
  }
];

export type UseCaseFilterOptions = {
  sizes: string[];
  categories: string[];
};

export const useCaseFilters: UseCaseFilterOptions = {
  sizes: [
    "Small (under 250)",
    "Mid-size (250-800)",
    "Growing (800-1500)",
    "Multi-site (1500+)"
  ],
  categories: [
    "Volunteer Management",
    "Pastoral Care",
    "Operations",
    "Multi-Site",
    "Care Ministry",
    "Next-Gen Ministry"
  ]
};

export function getUseCase(slug: string) {
  return useCases.find((useCase) => useCase.slug === slug);
}
