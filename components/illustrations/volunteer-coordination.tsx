import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function VolunteerCoordinationIllustration({
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
        x="28"
        y="36"
        width="264"
        height="168"
        rx="24"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <rect
        x="56"
        y="72"
        width="208"
        height="96"
        rx="16"
        fill={neutral}
        opacity="0.6"
      />
      <rect
        x="72"
        y="88"
        width="176"
        height="64"
        rx="12"
        fill="white"
        stroke={line}
        strokeWidth="2"
      />
      {[90, 116, 142].map((y) => (
        <line
          key={y}
          x1="88"
          x2="216"
          y1={y}
          y2={y}
          stroke={neutral}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="116" cy="104" r="10" fill={primary} opacity="0.8" />
      <circle cx="152" cy="104" r="10" fill={accent} opacity="0.7" />
      <circle cx="188" cy="104" r="10" fill={primary} opacity="0.4" />
      <path
        d="M100 152l16 16 32-36 24 24 40-44"
        fill="none"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="72"
        y="56"
        width="60"
        height="12"
        rx="6"
        fill={primary}
        opacity="0.9"
      />
      <rect
        x="140"
        y="56"
        width="44"
        height="12"
        rx="6"
        fill={accent}
        opacity="0.8"
      />
      <rect
        x="192"
        y="56"
        width="44"
        height="12"
        rx="6"
        fill={primary}
        opacity="0.5"
      />
      <path
        d="M88 188h144"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 10"
        opacity="0.5"
      />
      <circle cx="88" cy="188" r="6" fill={primary} />
      <circle cx="160" cy="188" r="6" fill={accent} />
      <circle cx="232" cy="188" r="6" fill={primary} opacity="0.6" />
    </svg>
  );
}
