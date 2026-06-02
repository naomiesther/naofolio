"use client";

import { useEffect, useMemo, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
];

function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-15% 0px -70% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

export default function PortfolioNavbar() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sp-nav" aria-label="Primary">
      <div className="sp-nav-inner">
        <div className="sp-nav-brand" aria-hidden="true">
          <span className="sp-nav-brand-mark">NAO</span>
        </div>

        <nav className="sp-nav-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`sp-nav-link ${active === s.id ? "is-active" : ""}`}
              onClick={() => scrollToId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="sp-nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sp-nav-hamburger-lines" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="sp-nav-mobile" role="dialog" aria-label="Mobile navigation">
          <div className="sp-nav-mobile-links">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`sp-nav-mobile-link ${active === s.id ? "is-active" : ""}`}
                onClick={() => scrollToId(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

