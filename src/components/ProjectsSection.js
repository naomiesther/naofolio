"use client";

import useScrollReveal from "@/components/useScrollReveal";

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

export default function ProjectsSection() {
  useScrollReveal();

  return (
    <section id="projects" className="sp-section sp-projects" aria-label="Projects">
      {/* Background Glows */}
      <div className="projects-bg">
        <div className="projects-bg-glow projects-bg-glow-1" />
        <div className="projects-bg-glow projects-bg-glow-2" />
        <div className="projects-bg-glow projects-bg-glow-3" />
      </div>

      <div className="sp-section-inner">
        <div className="sp-section-entrance sp-projects-entrance" aria-hidden="true" />

        <div className="sp-reveal-grid sp-reveal-text" aria-label="Projects header">
          <h2 className="sp-section-title wave-title sp-projects-header sp-reveal-item">
            {renderRippleLetters("Projects", "projects")}
          </h2>
          <p className="sp-section-subtitle sp-reveal-item">A few things I have built.</p>
        </div>

        <div className="sp-project-grid sp-reveal-grid" aria-label="Project cards">
          {[
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
          ].map((p) => (
            <article key={p.title} className="sp-project-card sp-reveal-item">
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
          ))}
        </div>
      </div>
    </section>
  );
}

