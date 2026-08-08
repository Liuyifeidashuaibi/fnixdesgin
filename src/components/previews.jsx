import React from "react";

/** 首屏背景：瓷白底上的墨色细网格 + 渐晕，营造编辑化氛围 */
export function HeroBackdrop({ className, style }) {
  return (
    <svg
      className={["absolute inset-0 h-full w-full", className]
        .filter(Boolean)
        .join(" ")}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      fill="none"
      style={style}
    >
      {/* 细网格 */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={120 * (i + 0.5)}
          y1="0"
          x2={120 * (i + 0.5)}
          y2="900"
          stroke="var(--fg)"
          strokeOpacity="0.05"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={128 * (i + 0.5)}
          x2="1440"
          y2={128 * (i + 0.5)}
          stroke="var(--fg)"
          strokeOpacity="0.04"
        />
      ))}
      {/* 渐晕 */}
      <rect width="1440" height="900" fill="url(#hero-vignette)" />
      <defs>
        <linearGradient
          id="hero-vignette"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="var(--bg)" stopOpacity="0.4" />
          <stop offset="55%" stopColor="var(--bg)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--bg)" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HeroBackdrop;
