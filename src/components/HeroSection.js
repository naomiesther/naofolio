"use client";

export default function HeroSection() {
  return (
    <section id="home" className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-bg-glow hero-bg-glow-1" />
        <span className="hero-bg-glow hero-bg-glow-2" />
        <span className="hero-bg-glow hero-bg-glow-3" />
      </div>

      <div className="hero-inner">
        <p className="hero-sub">Welcome to my cozy portfolio</p>
        <h1 className="hero-title">
          Hi, this is <span className="hero-name">Nao</span>
        </h1>

        <div className="hero-cta-row">
          <button
            type="button"
            className="hero-cta"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Scroll
          </button>
        </div>
      </div>
    </section>
  );
}

