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
        <p className="hero-sub" aria-label="Welcome to my cozy portfolio">
          {"Welcome to my cozy portfolio".split("").map((ch, index) => (
            <span
              key={`hero-sub-${index}`}
              className="ripple-letter hero-sub-ripple"
              style={{ ["--i"]: index }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>

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

