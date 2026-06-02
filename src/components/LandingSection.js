"use client";

import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

export default function LandingSection() {
  return (
    <section id="home" className="landing-section">
      {/* Grid Background */}
      <div className="grid-background" />

      {/* Pixel Decorations */}
      <div className="landing-decor" aria-hidden="true">
        {/* Clouds */}
        <img
          className="landing-shape decor-cloud cloud-1"
          src="/assets/decor/cloud-3.png"
          alt=""
        />
        <img
          className="landing-shape decor-cloud cloud-2"
          src="/assets/decor/cloud-2.png"
          alt=""
        />
        <img
          className="landing-shape decor-cloud cloud-3"
          src="/assets/decor/cloud-1.png"
          alt=""
        />
        <img
          className="landing-shape decor-cloud cloud-4"
          src="/assets/decor/cloud-1.png"
          alt=""
        />

        {/* Flowers */}
        <img
          className="landing-shape decor-flower flower-1"
          src="/assets/decor/flower-2.png"
          alt=""
        />
        <img
          className="landing-shape decor-flower flower-2"
          src="/assets/decor/flower-2.png"
          alt=""
        />
        <img
          className="landing-shape decor-flower flower-3"
          src="/assets/decor/flower-1.png"
          alt=""
        />
        <img
          className="landing-shape decor-flower flower-4"
          src="/assets/decor/flower-1.png"
          alt=""
        />

        {/* Sparkles removed */}
      </div>

      <div className="landing-content">
        {/* Background Heading */}
        <div className="landing-bg-text-bg">
          <span className="bg-main">
            <span className="montserrat-hi">HI! THIS IS</span>{" "}
            <object
              type="image/svg+xml"
              data="/assets/letters/nao_letters.svg"
              aria-label="NAO"
              style={{
                height: "1em",
                width: "auto",
                display: "inline-block",
                verticalAlign: "baseline",
              }}
            />
          </span>
        </div>

        {/* Floating Folder Links */}
        <TransitionLink
          href="/about"
          className="floating-folder folder-about"
          aria-label="About Me"
        >
          <span className="floating-folder-inner">
            <img src="/assets/icons/folder.png" alt="About Me" />
            <p>about me</p>
          </span>
        </TransitionLink>

        <TransitionLink
          href="/projects"
          className="floating-folder folder-projects"
          aria-label="Projects"
        >
          <span className="floating-folder-inner">
            <img src="/assets/icons/folder.png" alt="Projects" />
            <p>projects</p>
          </span>
        </TransitionLink>

        <TransitionLink
          href="/contact"
          className="floating-folder folder-contact"
          aria-label="Contact"
        >
          <span className="floating-folder-inner">
            <img src="/assets/icons/folder.png" alt="Contact" />
            <p>contact</p>
          </span>
        </TransitionLink>

        {/* Main Portrait */}
        <div className="landing-image">
          <Image
            src="/assets/images/main-image.png"
            alt="Naomi Liu"
            width={1200}
            height={1600}
            priority
          />
        </div>

        {/* Footer Labels */}
        <div className="landing-footer landing-footer-left">
          UI/UX Designer / Web Developer
        </div>
        <div className="landing-footer landing-footer-right">
          By Naomi Liu
        </div>
      </div>
    </section>
  );
}