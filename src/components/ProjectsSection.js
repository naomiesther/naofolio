"use client";

import { useState } from "react";
import useScrollReveal from "@/components/useScrollReveal";
import useInView from "@/components/useInView";

function renderRippleLetters(text, prefix) {
  return text.split("").map((ch, index) => (
    <span
      key={`${prefix}-${index}`}
      className="ripple-letter"
      style={{ ["--i"]: index }}
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));
}

function ProjectCard({ p, index }) {
  return (
    <article
      key={p.title}
      className="sp-project-card sp-carousel-item"
      style={{ "--card-index": index }}
    >
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="sp-project-thumb-link"
      >
        <div className="sp-project-thumb">
          <picture>
            <source srcSet={p.webp} type="image/webp" />
            <img
              src={p.image}
              alt={p.title}
              className="sp-project-image"
              loading="lazy"
              draggable="false"
            />
          </picture>
        </div>
      </a>
      <h3 className="sp-project-title">{p.title}</h3>
      <p className="sp-project-desc">{p.desc}</p>
      <a
        className="sp-project-link"
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${p.title}`}
      >
        View <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default function ProjectsSection() {
  useScrollReveal();

  const built = [
    {
      title: "USLS Basic Education Unit 2026",
      desc: "Developed and refined the USLS Basic Education Unit webpage for improved accessibility and presentation.",
      link: "https://www.usls.edu.ph/beu",
      image: "/assets/images/projects/USLS-BEU.png",
      webp: "/assets/images/projects/USLS-BEU.webp",
    },
    {
      title: "USLS Enrollment Steps 2026",
      desc: "Designed and organized the USLS Enrollment Steps webpage to provide a clear and user-friendly enrollment guide.",
      link: "https://www.usls.edu.ph/esteps",
      image: "/assets/images/projects/USLS-ESTEPS.png",
      webp: "/assets/images/projects/USLS-ESTEPS.webp",
    },
    {
      title: "Women Who Lead: Lasallian Spotlight 2026",
      desc: "Created the USLS Women Who Lead: Lasallian Spotlight newsletter, highlighting women leaders within the community.",
      link: "https://www.usls.edu.ph/womenwholead/",
      image: "/assets/images/projects/USLS-WWL.png",
      webp: "/assets/images/projects/USLS-WWL.webp",
    },
    {
      title: "TokyoTrip",
      desc: "A school project showcasing Tokyo with CSS animations and design polish.",
      link: "https://tokyo-trip-mocha.vercel.app/",
      image: "/assets/images/projects/tokyotrip.png",
      webp: "/assets/images/projects/tokyotrip.webp",
    },
  ];

  const designed = [
    {
      title: "BusyBee",
      desc: "A web and mobile task-organizing platform with customizable to-do items and simple analytics.",
      link: "https://www.figma.com/design/e4iPHOP4rjFsIDiIZ7PeDT/BusyBee-%7C-Sample-Design?node-id=0-1&t=LsW2kEF0eXZpZxW0-1",
      image: "/assets/images/projects/busybee.png",
      webp: "/assets/images/projects/busybee.webp",
    },
    {
      title: "Roots & Routes",
      desc: "A web project weaving Google Maps, Translate, Spotify and YouTube into a tour of Filipino culture.",
      link: "https://www.figma.com/design/ejJ8cKgVXugn99B489gMhu/R-R?node-id=0-1&t=qqTOa5QWnYRXi8sH-1",
      image: "/assets/images/projects/rnr.png",
      webp: "/assets/images/projects/rnr.webp",
    },
    {
      title: "Balik Yuhom",
      desc: "A MassKara website showcasing Bacolod, the City of Smiles, and the origins of its festival.",
      link: "https://www.figma.com/design/0ab3hUHWsrcmx6vzGhIwhU/Masskara-Web-Activity?node-id=0-1&t=H5uFPXpz6cYYgGha-1",
      image: "/assets/images/projects/balikyuhom.png",
      webp: "/assets/images/projects/balikyuhom.webp",
    },
    {
      title: "AgriLease",
      desc: "A school-project land-leasing mobile app connecting farmland owners and lessees across Negros.",
      link: "https://www.figma.com/design/8y3siwUIfu9HkJxKXLuEkZ/AgriLease?node-id=0-1&t=YUEMGkr5pmjYIWu2-1",
      image: "/assets/images/projects/agrilease.png",
      webp: "/assets/images/projects/agrilease.webp",
    },
  ];

  const PER_PAGE = 2;
  const allItems = [...built, ...designed];
  const totalPages = Math.ceil(allItems.length / PER_PAGE);

  const [page, setPage] = useState(0);
  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const items = allItems.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
  const isBuilt = page < Math.ceil(built.length / PER_PAGE);

  const [gridRef, gridIn] = useInView();

  return (
    <section id="projects" className="sp-section sp-projects" aria-label="Projects">
      {/* Background Glows */}
      <div className="projects-bg">
        <div className="projects-bg-glow projects-bg-glow-1" />
        <div className="projects-bg-glow projects-bg-glow-2" />
        <div className="projects-bg-glow projects-bg-glow-3" />
        <div className="projects-bg-glow projects-bg-glow-4" />
        <div className="projects-bg-glow projects-bg-glow-5" />
        <div className="projects-bg-glow projects-bg-glow-6" />
      </div>

      <div className="sp-section-inner">
        <div className="sp-section-entrance sp-projects-entrance" aria-hidden="true" />

        <div className="sp-reveal-grid sp-reveal-text" aria-label="Projects header">
          <h2 className="sp-section-title wave-title sp-projects-header sp-reveal-item">
            {renderRippleLetters("my projects", "projects")}
          </h2>

          <p className="sp-section-subtitle sp-reveal-item">
            {isBuilt
              ? "A few things I have built."
              : "A few things I have designed."}
          </p>
        </div>

        <div className="sp-carousel-stage">
          <button
            type="button"
            className="sp-carousel-arrow sp-carousel-arrow-side sp-carousel-arrow-prev"
            onClick={goPrev}
            aria-label="Previous projects"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div
            ref={gridRef}
            className={
              "sp-project-grid sp-carousel-grid" + (gridIn ? " is-in" : "")
            }
            aria-label="Project cards"
            key={page}
          >
            {items.map((p, idx) => (
              <ProjectCard key={p.title} p={p} index={idx} />
            ))}
          </div>

          <button
            type="button"
            className="sp-carousel-arrow sp-carousel-arrow-side sp-carousel-arrow-next"
            onClick={goNext}
            aria-label="Next projects"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

