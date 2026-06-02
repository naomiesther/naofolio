"use client";

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
              title: "Project One",
              desc: "A beautiful UI/UX design and development project showcasing modern design principles.",
            },
            {
              title: "Project Two",
              desc: "An interactive web application built with HTML, CSS, and JavaScript for enhanced user engagement.",
            },
            {
              title: "Project Three",
              desc: "A comprehensive branding and web design project that combines creativity with functionality.",
            },
            {
              title: "Project Four",
              desc: "A responsive mobile-first design solution that prioritizes user experience across all devices.",
            },
          ].map((p) => (
            <article key={p.title} className="sp-project-card">
              <div className="sp-project-thumb" aria-hidden="true" />
              <h3 className="sp-project-title">{p.title}</h3>
              <p className="sp-project-desc">{p.desc}</p>
              <a className="sp-project-link" href="#" aria-label={`View ${p.title}`}>
                View <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

