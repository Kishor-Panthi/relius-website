import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function MinistryMomentsIllustration({
  className,
  title,
  primaryColor,
  accentColor,
  neutralColor,
  lineColor,
}: IllustrationProps) {
  const primary = primaryColor ?? defaultPalette.primary;
  const accent = accentColor ?? defaultPalette.accent;
  const neutral = neutralColor ?? defaultPalette.neutral;
  const line = lineColor ?? defaultPalette.line;

  return (
    <svg
      viewBox="0 0 320 240"
      className={cn("w-full h-auto", className)}
      role={title ? "img" : undefined}
      aria-label={title ?? undefined}
      aria-hidden={title ? undefined : "true"}
    >
      <rect
        x="32"
        y="28"
        width="256"
        height="184"
        rx="32"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <path
        d="M68 80c24-16 52-16 80 0"
        fill="none"
        stroke={neutral}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M172 80c24-16 52-16 80 0"
        fill="none"
        stroke={neutral}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="120" cy="116" r="30" fill={neutral} opacity="0.6" />
      <circle cx="200" cy="116" r="30" fill={accent} opacity="0.2" />
      <circle
        cx="120"
        cy="112"
        r="18"
        fill="white"
        stroke={line}
        strokeWidth="2.5"
      />
      <circle
        cx="200"
        cy="112"
        r="18"
        fill="white"
        stroke={line}
        strokeWidth="2.5"
      />
      <path
        d="M100 160c4-18 16-28 20-28h40c4 0 16 10 20 28"
        fill="none"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M152 74v-24"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M136 62h32"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M176 156l20 8-8 20"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="216" cy="160" r="12" fill={primary} opacity="0.15" />
      <circle cx="96" cy="160" r="12" fill={accent} opacity="0.2" />
      <rect
        x="84"
        y="172"
        width="152"
        height="32"
        rx="16"
        fill={primary}
        opacity="0.08"
      />
      <path
        d="M160 184l-14 12h28z"
        fill={accent}
        opacity="0.6"
      />
    </svg>
  );
}
