"use client";

import { useEffect, useRef, useState } from "react";

export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const opts = options || { threshold: 0.15, rootMargin: "0px 0px -10% 0px" };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      opts
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [opts.threshold, opts.rootMargin]);

  return [ref, inView];
}
