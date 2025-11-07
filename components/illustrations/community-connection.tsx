import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function CommunityConnectionIllustration({
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
        x="20"
        y="24"
        width="280"
        height="192"
        rx="28"
        fill={neutral}
        opacity="0.5"
      />
      <rect
        x="40"
        y="44"
        width="240"
        height="152"
        rx="24"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <circle cx="120" cy="98" r="22" fill={primary} opacity="0.15" />
      <circle cx="200" cy="98" r="22" fill={accent} opacity="0.15" />
      <circle
        cx="120"
        cy="98"
        r="18"
        fill="white"
        stroke={line}
        strokeWidth="2.5"
      />
      <circle
        cx="200"
        cy="98"
        r="18"
        fill="white"
        stroke={line}
        strokeWidth="2.5"
      />
      <circle cx="120" cy="92" r="8" fill={primary} />
      <circle cx="200" cy="92" r="8" fill={accent} />
      <path
        d="M102 138c3-14 14-24 18-24h40c4 0 15 10 18 24"
        fill="none"
        stroke={line}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M84 162c5-22 22-36 28-36h96c6 0 23 14 28 36"
        fill="none"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M64 186c6-30 28-52 36-52h120c8 0 30 22 36 52"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="86" cy="84" r="12" fill={accent} opacity="0.4" />
      <circle cx="234" cy="86" r="12" fill={primary} opacity="0.4" />
      <path
        d="M160 72l10-10 10 10"
        fill="none"
        stroke={line}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="160" cy="150" r="6" fill={accent} />
      <circle cx="180" cy="150" r="6" fill={primary} opacity="0.6" />
      <circle cx="140" cy="150" r="6" fill={primary} />
    </svg>
  );
}
