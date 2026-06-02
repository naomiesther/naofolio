"use client";

import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();

  const handleBack = () => {
    document.body.classList.add("is-navigating");

    window.setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <main className="page-wrapper">
      {/* ==========================================
        PROJECTS (migrated from projects.html)
      ========================================== */}
      <section className="page-section projects-section">
        <button type="button" className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <div className="page-title">
          <span className="projects-title">My Projects</span>
        </div>

        <div className="projects-container">
          <div className="project-card">
            <div className="project-thumbnail placeholder" />
            <h3>Project One</h3>
            <p>
              A beautiful UI/UX design and development project showcasing modern
              design principles.
            </p>
            <a href="#" className="project-link">
              View →
            </a>
          </div>

          <div className="project-card">
            <div className="project-thumbnail placeholder" />
            <h3>Project Two</h3>
            <p>
              An interactive web application built with HTML, CSS, and
              JavaScript for enhanced user engagement.
            </p>
            <a href="#" className="project-link">
              View →
            </a>
          </div>

          <div className="project-card">
            <div className="project-thumbnail placeholder" />
            <h3>Project Three</h3>
            <p>
              A comprehensive branding and web design project that combines
              creativity with functionality.
            </p>
            <a href="#" className="project-link">
              View →
            </a>
          </div>

          <div className="project-card">
            <div className="project-thumbnail placeholder" />
            <h3>Project Four</h3>
            <p>
              A responsive mobile-first design solution that prioritizes user
              experience across all devices.
            </p>
            <a href="#" className="project-link">
              View →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
