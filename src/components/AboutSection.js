"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const SKILLS = [
  { src: "/assets/icons/figma.png", alt: "Figma" },
  { src: "/assets/icons/html.png", alt: "HTML5" },
  { src: "/assets/icons/css.png", alt: "CSS3" },
  { src: "/assets/icons/javascript.png", alt: "JavaScript" },
  { src: "/assets/icons/php.png", alt: "PHP" },
  { src: "/assets/icons/mysql.png", alt: "MySQL" },
  { src: "/assets/icons/canva.png", alt: "Canva" },
  { src: "/assets/icons/photoshop.png", alt: "Adobe Photoshop" },
  { src: "/assets/icons/premiere.png", alt: "Adobe Premiere Pro" },
  { src: "/assets/icons/audition.png", alt: "Adobe Audition" },
];

const FOLDER_CARDS = [
  {
    title: "Education",
    kind: "education",
    variant: "pink",
    details: [
      {
        institution: "University of St. La Salle",
        years: "2022 – 2026",
        degree: "BS Information Technology",
        bullets: [
          "Graduated Cum Laude",
          "Member, Google Developer Student Clubs (2022–2023)",
        ],
      },
      {
        institution: "Liceo de La Salle SHS",
        years: "2020 – 2022",
        degree: "Humanities and Social Sciences",
        bullets: [
          "Graduated with High Honors",
          "Media Committee Head, HUMSS Council",
          "Member, Bahandi Production and Arts Club",
        ],
      },
    ],
  },
  {
    title: "Experience",
    kind: "experience",
    variant: "blue",
    details: [
      { role: "Full-Stack Developer", years: "2026", company: "Sakada Cafe and Autodocs Car Services" },
      { role: "Web Developer Intern", years: "January – April 2026", company: "USLS Center for Marketing and Communications" },
      { role: "Governor", years: "2025 – 2026", company: "USLS College of Computing Studies Council" },
      { role: "Executive President", years: "2023 – 2024", company: "Information Technology Society – USLS" },
    ],
  },
  {
    title: "Expertise",
    kind: "expertise",
    variant: "green",
    details: [
      "UI/UX",
      "Web Design and Development",
      "Graphic Design",
      "Leadership",
      "Communication",
      "Problem Solving",
      "Online Content Creation",
      "Project Management",
    ],
  },
];

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

function renderRippleWords(text, prefix) {
  return text.split(" ").map((word, wordIndex) => (
    <span key={`${prefix}-${wordIndex}`} className="ripple-word">
      {word.split("").map((ch, index) => (
        <span
          key={`${prefix}-${wordIndex}-${index}`}
          className="ripple-letter"
          style={{ ["--i"]: wordIndex * 12 + index }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
      {wordIndex < text.split(" ").length - 1 ? "\u00A0" : null}
    </span>
  ));
}

export default function AboutSection() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const folderSectionRef = useRef(null);

  const handleBack = () => {
    document.body.classList.add("is-navigating");

    window.setTimeout(() => {
      router.back();
    }, 300);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const introTimer = window.setTimeout(() => {
      section.classList.add("is-intro-ready");
    }, 80);

    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const folderSection = folderSectionRef.current;
    if (!folderSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          folderSection.classList.add("is-visible");
        }
      },
      { threshold: 0.22, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(folderSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      {/* ==========================================
        ABOUT SECTION
      ========================================== */}
      <section className="page-section about-section">
        {/* Grid Background */}
        <div className="grid-background" />

        {/* Back Button */}
        <button type="button" className="back-button" onClick={handleBack}>
          ← back
        </button>

        {/* Main About Content */}
        <div className="about-main" ref={sectionRef}>
          {/* LEFT COLUMN */}
          <div className="about-left">
            {/* Profile Image */}
            <div className="about-image">
              <Image
                src="/assets/images/about.png"
                alt="Naomi Liu"
                width={900}
                height={1200}
                priority
                draggable="false"
                onDragStart={(event) => event.preventDefault()}
              />
              <img
                src="/assets/decor/cloud-1.png"
                alt=""
                aria-hidden="true"
                className="about-cloud-1 decor-cloud"
                draggable="false"
              />
              {/* sparkle removed */}
            </div>

            {/* Resume Download Button */}
            <a
              href="/assets/files/Naomi-Liu-Resume.pdf"
              className="resume-button"
              download
            >
              download resume
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-right">
            {/* Heading */}
            <div className="about-heading">
              <span className="about-word">about</span>
              <img src="/assets/letters/me.svg" alt="me" className="me-svg" draggable="false" />
            </div>

            {/* Name */}
            <h1 className="about-name" aria-label="Naomi Esther Liu">
              {renderRippleLetters("Naomi Esther Liu", "name")}
            </h1>

            {/* Role */}
            <p className="about-role">UI/UX Designer &amp; Web Developer</p>

            {/* Description */}
            <p className="about-description">
              I&apos;m Nao, a creative designer and developer who enjoys crafting

              visually engaging and functional digital experiences. My work
              combines thoughtful user interface design with clean front-end
              development to build websites and applications that are both
              beautiful and purposeful.
            </p>

            {/* Divider */}
            <div className="skills-divider" />

            {/* Technical Skills Header */}
            <h2 className="technical-skills-header">Technical Skills</h2>

            {/* Skills Logos */}
            <div className="skills-logos">
              {SKILLS.map((skill) => (
                <img
                  key={skill.src}
                  src={skill.src}
                  alt={skill.alt}
                  className="skill-logo"
                  loading="lazy"
                  draggable="false"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider between intro and folder cards */}
        <div className="about-divider" aria-hidden="true" />

        <div className="about-folder-section" ref={folderSectionRef}>
          <div className="about-folder-header">
            <p className="about-folder-kicker">more about me!</p>
            <h2 className="about-folder-title" aria-label="education, experience, expertise">
              {renderRippleWords("education, experience, expertise", "folder")}
            </h2>
          </div>

          <div className="about-folder-grid">
            {FOLDER_CARDS.map((card, index) => (
              <article
                key={card.title}
                className={`about-folder-card about-folder-card--${card.variant}`}
                style={{ ["--card-index"]: index }}
              >

                <div className="about-folder-card-head">
                  <img
                    src={`/assets/icons/${card.title}.png`}
                    alt=""
                    aria-hidden="true"
                    className="about-folder-title-icon"
                    draggable="false"
                  />
                  <h3 className="about-folder-card-title">{card.title}</h3>
                </div>

                {/* Detailed content rendering based on card kind */}
                {card.kind === "education" && (
                  <div className="about-folder-education">
                    {card.details.map((edu) => (
                      <div key={edu.institution} className="edu-block">
                        <div className="edu-head">
                          <strong className="edu-institution">{edu.institution}</strong>
                          <span className="edu-years">{edu.years}</span>
                        </div>
                        <div className="edu-degree">{edu.degree}</div>
                        <ul className="edu-bullets">
                          {edu.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {card.kind === "experience" && (
                  <div className="about-folder-experience">
                    {card.details.map((exp, i) => (
                      <div key={`${exp.company}-${i}`} className="exp-block">
                        <div className="exp-role">{exp.role} <span className="exp-years">{exp.years}</span></div>
                        <div className="exp-company">{exp.company}</div>
                      </div>
                    ))}
                  </div>
                )}

                {card.kind === "expertise" && (
                  <div className="about-folder-expertise">
                    <div className="expertise-grid">
                      {card.details.map((d, i) => (
                        <span
                          key={d}
                          className="expertise-item"
                          style={{
                            "--p1": `${Math.round(((i + 1) * 77) % 360)}`,
                            "--p2": `${Math.round(((i + 3) * 113) % 360)}`,
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                
              </article>
            ))}
          </div>
        </div>

        <footer className="about-footer" aria-label="About page footer">
          <div className="about-footer-glow about-footer-glow-1" aria-hidden="true" />
          <div className="about-footer-glow about-footer-glow-2" aria-hidden="true" />

          <div className="about-footer-inner">
            <div className="about-footer-body">
              <div className="about-footer-brandmark" aria-hidden="true">
                <img
                  src="/assets/letters/nao_light.png"
                  alt="NAO"
                  loading="lazy"
                />
              </div>

              <div className="about-footer-info">
                <div className="about-footer-col about-footer-col--left">
                  <p className="footer-name">Naomi Esther Liu</p>
                  <p className="footer-role">UI/UX Designer / Web Developer</p>
                  <p className="footer-email">liunaomiesther@gmail.com</p>
                </div>

                <div className="about-footer-col about-footer-col--right">
                  <nav className="about-footer-quicklinks" aria-label="Quick links">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="about-footer-bottom">
              <div className="about-footer-copy">© {new Date().getFullYear()} Naomi Liu. All rights reserved. | Bacolod City, Negros Occidental, PH</div>

              <nav className="about-footer-links about-footer-socials" aria-label="Social links">
                <a href="https://linkedin.com/in/naoliu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.805 0-9.72h3.554v1.378c.43-.664 1.199-1.608 2.92-1.608 2.134 0 3.734 1.398 3.734 4.402v5.548zM5.337 9.766c-1.142 0-1.889-.756-1.889-1.704 0-.962.756-1.704 1.93-1.704 1.174 0 1.888.742 1.907 1.704 0 .948-.733 1.704-1.948 1.704zm-1.652 10.686h3.305v-9.72H3.685v9.72zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://facebook.com/naoballs" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.02 4.388 11.019 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.033 1.792-4.709 4.533-4.709 1.312 0 2.686.235 2.686.235v2.98h-1.513c-1.49 0-1.955.93-1.955 1.887v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.092 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com/naoestherliu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
