"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

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

const ABOUT_CARDS = [
  {
    title: "Education",
    accent: "pink",
    text: [
      "University of St. La Salle, BS Information Technology (2022–2026)",
      "Liceo de La Salle SHS, Humanities and Social Sciences (2020–2022)",
    ],
  },
  {
    title: "Experience",
    accent: "blue",
    text: [
      "Full-Stack Developer and Web Developer Intern",
      "Governor, USLS College of Computing Studies Council",
    ],
  },
  {
    title: "Expertise",
    accent: "green",
    text: [
      "UI/UX, web development, branding, and content creation",
      "Focused on soft visuals, responsive systems, and clear usability",
    ],
  },
];

const PROJECTS = [
  {
    title: "Portfolio revamp",
    tag: "Design + Dev",
    image: "/assets/images/IMG_1676.JPG",
    description:
      "A personal portfolio refresh that blends pastel visuals, smooth interactions, and responsive storytelling.",
  },
  {
    title: "Brand story system",
    tag: "Identity",
    image: "/assets/images/IMG_1768.jpg",
    description:
      "A brand-forward web concept focused on personality, hierarchy, and a gentle editorial rhythm.",
  },
  {
    title: "Responsive gallery",
    tag: "Frontend",
    image: "/assets/images/IMG_1798.JPG",
    description:
      "A mobile-first interface designed to keep layout balance, readability, and tactile details intact.",
  },
  {
    title: "Visual diary",
    tag: "Creative UI",
    image: "/assets/images/IMG_2117.JPG",
    description:
      "An expressive image-led layout for curated moments, soft mood, and lightweight interaction cues.",
  },
];

const SOCIAL_LINKS = [
  {
    href: "mailto:naomi@example.com",
    label: "Email",
    value: "naomi@example.com",
  },
  {
    href: "https://linkedin.com/in/naomi",
    label: "LinkedIn",
    value: "LinkedIn",
  },
  {
    href: "https://github.com/naomi",
    label: "GitHub",
    value: "GitHub",
  },
];

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SinglePagePortfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.18, 0.35, 0.5, 0.7],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId) => (event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setMenuOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    window.alert("Thanks! Your message has been sent.");
  };

  return (
    <main className="portfolio-shell">
      <div className="portfolio-backdrop" aria-hidden="true" />

      <nav className={`portfolio-nav ${menuOpen ? "is-open" : ""}`}>
        <a href="#home" className="portfolio-brand" onClick={handleNavClick("home")}>
          Nao
        </a>

        <button
          type="button"
          className="portfolio-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="portfolio-nav-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              onClick={handleNavClick(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="portfolio-section hero-section" data-section>
        <div className="hero-decor hero-cloud hero-cloud-left" aria-hidden="true">
          <img src="/assets/decor/cloud-1.png" alt="" />
        </div>
        <div className="hero-decor hero-cloud hero-cloud-right" aria-hidden="true">
          <img src="/assets/decor/cloud-2.png" alt="" />
        </div>
        <div className="hero-decor hero-flower hero-flower-left" aria-hidden="true">
          <img src="/assets/decor/flower-1.png" alt="" />
        </div>
        <div className="hero-decor hero-flower hero-flower-right" aria-hidden="true">
          <img src="/assets/decor/flower-2.png" alt="" />
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">pixel-soft portfolio</p>
            <h1 className="hero-title">
              <span>Hi, this is</span>
              <strong>Nao</strong>
            </h1>
            <p className="hero-subtitle">
              UI/UX Designer and Web Developer crafting cozy, readable interfaces with a soft
              pixel-inspired feel.
            </p>

            <div className="hero-actions">
              <button type="button" className="hero-primary" onClick={handleNavClick("about")}>
                Enter
              </button>
              <button type="button" className="hero-secondary" onClick={handleNavClick("projects")}>
                Scroll
              </button>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-frame">
              <Image
                src="/assets/images/main-image.png"
                alt="Naomi Liu holding a camera"
                width={1200}
                height={1600}
                priority
              />
            </div>
            <p className="hero-caption">A soft, playful digital presence.</p>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-section about-section-alt" data-section>
        <div className="section-heading">
          <p className="section-kicker">About</p>
          <h2>Creative, calm, and detail-driven.</h2>
          <p className="section-lead">
            I design and build interfaces that feel warm, readable, and deliberate. My focus is
            balancing visual personality with structure so the experience stays clear on every
            screen.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-photo-card">
            <Image
              src="/assets/images/about.png"
              alt="Naomi Liu portrait"
              width={900}
              height={1200}
              priority={false}
            />
          </div>

          <div className="about-story-card">
            <p>
              I&apos;m Nao, a creative designer and developer who enjoys shaping digital spaces with
              a cozy, slightly nostalgic mood. I like subtle movement, pastel tones, and layouts
              that feel polished instead of crowded.
            </p>

            <div className="skill-logo-grid" aria-label="Technical skills">
              {SKILLS.map((skill) => (
                <img key={skill.src} src={skill.src} alt={skill.alt} className="skill-logo" />
              ))}
            </div>

            <div className="about-card-grid">
              {ABOUT_CARDS.map((card) => (
                <article key={card.title} className={`info-card info-card-${card.accent}`}>
                  <h3>{card.title}</h3>
                  {card.text.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section projects-section-alt" data-section>
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Selected work with a soft pixel touch.</h2>
          <p className="section-lead">
            A mix of design, frontend, and visual storytelling pieces presented in a clean card
            layout.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-thumb">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="project-body">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="portfolio-section contact-section-alt" data-section>
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s make something soft, functional, and memorable.</h2>
          <p className="section-lead">
            Reach out for collaborations, freelance work, or a friendly hello. I usually reply by
            email first.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            {SOCIAL_LINKS.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>

          <form className="contact-form-card" onSubmit={handleSubmit}>
            <label>
              <span>Your name</span>
              <input type="text" name="name" placeholder="Type your name" required />
            </label>

            <label>
              <span>Your email</span>
              <input type="email" name="email" placeholder="name@example.com" required />
            </label>

            <label>
              <span>Your message</span>
              <textarea name="message" rows={5} placeholder="Tell me about your idea" required />
            </label>

            <button type="submit" className="contact-submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
