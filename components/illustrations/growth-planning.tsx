import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function GrowthPlanningIllustration({
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
        y="32"
        width="256"
        height="176"
        rx="24"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <rect
        x="60"
        y="64"
        width="200"
        height="40"
        rx="12"
        fill={neutral}
        opacity="0.6"
      />
      {[0, 1, 2].map((index) => (
        <circle
          key={index}
          cx={92 + index * 56}
          cy="84"
          r="12"
          fill={index === 1 ? accent : primary}
          opacity={index === 2 ? 0.4 : 0.9}
        />
      ))}
      <rect
        x="60"
        y="120"
        width="200"
        height="72"
        rx="12"
        fill="none"
        stroke={line}
        strokeWidth="2"
      />
      <path
        d="M80 172l24-36 32 24 36-44 28 32 40-56"
        fill="none"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="104" cy="136" r="8" fill={primary} />
      <circle cx="136" cy="160" r="8" fill={accent} />
      <circle cx="172" cy="122" r="8" fill={primary} opacity="0.7" />
      <circle cx="200" cy="154" r="8" fill={accent} opacity="0.7" />
      <circle cx="232" cy="108" r="8" fill={primary} opacity="0.7" />
      <path
        d="M84 196h152"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="12 10"
        opacity="0.6"
      />
      <rect
        x="96"
        y="48"
        width="64"
        height="8"
        rx="4"
        fill={primary}
        opacity="0.5"
      />
      <rect
        x="168"
        y="48"
        width="64"
        height="8"
        rx="4"
        fill={accent}
        opacity="0.5"
      />
      <path
        d="M232 132v32"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M212 148h40"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
