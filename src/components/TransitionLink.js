"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function TransitionLink({
  href,
  className,
  children,
  transitionMs = 500,
  ...props
}) {
  const router = useRouter();

  const handleClick = useCallback(
    (e) => {
      // Let the browser handle modified clicks (new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();

      document.body.classList.add("is-navigating");

      window.setTimeout(() => {
        router.push(href);
      }, transitionMs);
    },
    [href, router, transitionMs]
  );

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
