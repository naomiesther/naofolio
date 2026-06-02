"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteTransitionReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure we never get stuck in a faded-out state after navigation.
    document.body.classList.remove("is-navigating");
  }, [pathname]);

  return null;
}
