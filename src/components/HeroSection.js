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
        <h1 className="hero-title" aria-label="Hi, this is Nao">
          <span className="hero-title-phrase">
            {"Hi, this is".split("").map((ch, index) => (
              <span
                key={`hero-title-ch-${index}`}
                className="hero-title-char"
                style={{ ["--i"]: index }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>{" "}

          <span className="hero-name-wrap" aria-hidden="true">
            <img
              src="/assets/letters/nao_letters.svg"
              alt="Nao"
              className="hero-name-mark"
              draggable="false"
            />
          </span>
        </h1>

        <p className="hero-sub" aria-label="Welcome to my little corner of the internet">
          {"welcome to my little corner of the internet".split("").map((ch, index) => (
            <span
              key={`hero-sub-${index}`}
              className="ripple-letter"
              style={{ ["--i"]: index }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>

        <p className="hero-tagline" aria-label="crafting digital spaces where aesthetics and usability can coexist peacefully">
          {"crafting digital spaces where aesthetics and usability can coexist peacefully. ✿".split("").map((ch, index) => (
            <span
              key={`hero-tagline-${index}`}
              className="hero-tagline-char"
              style={{ ["--i"]: index }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>

        <div className="hero-cta-row">
          <button
            type="button"
            className="hero-cta"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Scroll
          </button>
        </div>
      </div>
    </section>
  );
}

