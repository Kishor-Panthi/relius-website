// SEO constants and metadata for migration pages

export type MigrationPageMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export const MIGRATION_URLS = {
  HUB: "/switch",
  PLANNING_CENTER: "/switch/planning-center",
  CHURCHTRAC: "/switch/churchtrac",
  TITHELY: "/switch/tithely",
} as const;

export const MIGRATION_PAGE_META: Record<string, MigrationPageMeta> = {
  hub: {
    title: "Switch to Relius | Easy Migration from Planning Center, ChurchTrac, Tithe.ly",
    description:
      "Bring your church data with you when you switch to Relius. Easy migration from Planning Center, ChurchTrac, and Tithe.ly in just a few hours. Free migration assistance available.",
    keywords: [
      "church software migration",
      "planning center alternative",
      "churchtrac alternative",
      "tithely alternative",
      "church management software",
      "switch church software",
    ],
  },
  "planning-center": {
    title: "Planning Center Alternative | Migrate to Relius in Hours",
    description:
      "Switch from Planning Center to Relius and get AI-powered features, simpler pricing, and an all-in-one platform. Import your people and donations in under 3 hours.",
    keywords: [
      "planning center alternative",
      "planning center migration",
      "switch from planning center",
      "planning center vs relius",
      "church software comparison",
    ],
  },
  churchtrac: {
    title: "ChurchTrac Alternative | Modern Church Management with AI",
    description:
      "Upgrade from ChurchTrac to Relius for a modern interface, cloud-based access, and AI-powered features. Easy migration preserves all your historical data.",
    keywords: [
      "churchtrac alternative",
      "churchtrac migration",
      "switch from churchtrac",
      "churchtrac vs relius",
      "modern church software",
    ],
  },
  tithely: {
    title: "Tithe.ly Alternative | All-in-One Church Platform with AI",
    description:
      "Move from Tithe.ly to Relius for complete church management beyond just giving. Import people, donations, tags, attendance, and more.",
    keywords: [
      "tithely alternative",
      "tithely migration",
      "switch from tithely",
      "tithely vs relius",
      "church management platform",
    ],
  },
};

// Contact form pre-population values
export const CONTACT_FROM_PLATFORMS = {
  "planning-center": "Planning Center",
  churchtrac: "ChurchTrac",
  tithely: "Tithe.ly",
} as const;

// Generate contact URL with platform pre-selected
export function getContactUrlForMigration(platformSlug: string): string {
  return `/contact?from=${platformSlug}&interest=migration-help`;
}
