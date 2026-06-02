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
    <section className="page-section about-section sp-about" id="about">


        {/* Grid Background */}
        <div className="grid-background" />


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


      </section>
  );
}

