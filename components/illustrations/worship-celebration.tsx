import { cn } from "@/lib/utils";
import { IllustrationProps, defaultPalette } from "./palette";

export function WorshipCelebrationIllustration({
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
        x="30"
        y="34"
        width="260"
        height="172"
        rx="28"
        fill="white"
        stroke={primary}
        strokeWidth="3"
      />
      <path
        d="M30 112h260"
        stroke={neutral}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 8"
      />
      <circle cx="96" cy="136" r="28" fill={neutral} opacity="0.8" />
      <circle cx="160" cy="136" r="28" fill={accent} opacity="0.25" />
      <circle cx="224" cy="136" r="28" fill={primary} opacity="0.2" />
      {[96, 160, 224].map((cx, index) => (
        <g key={cx}>
          <circle
            cx={cx}
            cy="128"
            r="13"
            fill="white"
            stroke={line}
            strokeWidth="2.5"
          />
          <path
            d={`M${cx - 14} 166c4-18 16-28 20-28h8c4 0 16 10 20 28`}
            fill="none"
            stroke={index === 1 ? accent : primary}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M96 90v-16"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M224 90v-16"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M160 90v-24"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M76 84h40"
        stroke={primary}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M204 84h40"
        stroke={primary}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M140 74h40"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M160 174l-18 16h36z"
        fill={accent}
        opacity="0.6"
      />
      <circle cx="64" cy="70" r="10" fill={accent} opacity="0.4" />
      <circle cx="256" cy="70" r="10" fill={primary} opacity="0.4" />
      <path
        d="M80 192h160"
        stroke={primary}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 12"
        opacity="0.6"
      />
    </svg>
  );
}
