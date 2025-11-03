"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.log("Analytics placeholder - page view:", pathname);
  }, [pathname]);

  return null;
}

export function initGA4() {
  if (typeof window === "undefined") return;

  console.log("GA4 initialization placeholder");
}

export function initPostHog() {
  if (typeof window === "undefined") return;

  console.log("PostHog initialization placeholder");
}
