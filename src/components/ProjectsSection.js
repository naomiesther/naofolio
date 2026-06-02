"use client";

import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="sp-section sp-projects" aria-label="Projects">
      {/* Background Glows */}
      <div className="projects-bg">
        <div className="projects-bg-glow projects-bg-glow-1" />
        <div className="projects-bg-glow projects-bg-glow-2" />
        <div className="projects-bg-glow projects-bg-glow-3" />
      </div>

      <div className="sp-section-inner">
        <h2 className="sp-section-title">Projects</h2>
        <p className="sp-section-subtitle">A few things I have built.</p>

        <div className="sp-project-grid">
          {[
            {
              title: "USLS Basic Education Unit 2026",
              desc: "Developed and refined the USLS Basic Education Unit webpage for improved accessibility and presentation.",
              link: "https://www.usls.edu.ph/beu",
              image: "https://www.usls.edu.ph/beu/og-image.jpg",
            },
            {
              title: "USLS Enrollment Steps 2026",
              desc: "Designed and organized the USLS Enrollment Steps webpage to provide a clear and user-friendly enrollment guide.",
              link: "https://www.usls.edu.ph/esteps",
              image: "https://www.usls.edu.ph/esteps/og-image.jpg",
            },
            {
              title: "Women Who Lead: Lasallian Spotlight 2026",
              desc: "Created the USLS Women Who Lead: Lasallian Spotlight newsletter, highlighting women leaders within the community.",
              link: "https://www.usls.edu.ph/womenwholead/",
              image: "https://www.usls.edu.ph/womenwholead/og-image.jpg",
            },
          ].map((p) => (
            <article key={p.title} className="sp-project-card">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="sp-project-thumb-link">
                <div className="sp-project-thumb">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="sp-project-image"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </a>
              <h3 className="sp-project-title">{p.title}</h3>
              <p className="sp-project-desc">{p.desc}</p>
              <a className="sp-project-link" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title}`}>
                View <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

