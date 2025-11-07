import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function CareSupportIllustration({
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
        y="44"
        width="264"
        height="156"
        rx="28"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <path
        d="M80 138c12 14 32 36 80 68 48-32 68-54 80-68 22-24 20-56-6-72s-58-0.5-74 18c-16-18.5-48-34-74-18s-28 48-6 72z"
        fill={accent}
        opacity="0.2"
      />
      <path
        d="M100 134c10 12 28 30 60 52 32-22 50-40 60-52 16-18 14-42-4-54s-40-0.5-52 14c-12-14.5-34-28-52-14s-20 36-4 54z"
        fill="white"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M140 90c-8-12-24-22-40-12-18 12-18 36-6 50"
        fill="none"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M180 90c8-12 24-22 40-12 18 12 18 36 6 50"
        fill="none"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="84" cy="90" r="10" fill={primary} opacity="0.3" />
      <circle cx="236" cy="90" r="10" fill={accent} opacity="0.3" />
      <circle cx="120" cy="178" r="8" fill={primary} opacity="0.7" />
      <circle cx="200" cy="178" r="8" fill={accent} opacity="0.7" />
      <path
        d="M72 182h176"
        stroke={line}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="10 12"
        opacity="0.5"
      />
      <rect
        x="72"
        y="60"
        width="60"
        height="12"
        rx="6"
        fill={primary}
        opacity="0.4"
      />
      <rect
        x="188"
        y="60"
        width="60"
        height="12"
        rx="6"
        fill={accent}
        opacity="0.4"
      />
      <path
        d="M160 116l-12 10 12 12 12-12z"
        fill={accent}
        opacity="0.8"
      />
    </svg>
  );
}
