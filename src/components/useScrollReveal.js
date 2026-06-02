"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const onScrollReveal = () => {
      const targets = document.querySelectorAll(".sp-reveal-grid");

      if (!targets.length) return;

      const revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target;
              el.classList.add("is-visible");
              revealObserver.unobserve(el);
            }
          }
        },
        { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
      );

      targets.forEach((el) => revealObserver.observe(el));

      return () => revealObserver.disconnect();
    };

    onScrollReveal();
  }, []);
}

