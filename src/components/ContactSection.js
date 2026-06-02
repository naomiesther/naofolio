"use client";

import { useState } from "react";
import useScrollReveal from "@/components/useScrollReveal";

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

const galleryItems = [
  {
    title: "Wolf of the Month",
    image: "/assets/images/gallery/CCS_Wolf-of-the-Month.png",
  },
  {
    title: "TechTrack: Mapping Your Future in Tech",
    image: "/assets/images/gallery/CCS_TechTrack_Mapping-Your-Future-in-Tech.png",
  },
  {
    title: "Commandline: Leaders in the Making",
    image: "/assets/images/gallery/CCS_Commandline_Leaders-in-the-Making.png",
  },
  {
    title: "Council General Assembly",
    image: "/assets/images/gallery/CCS_Council General Assembly.png",
  },
  {
    title: "Reboot Exam Ready-Set-Go Kits",
    image: "/assets/images/gallery/CCS Reboot Exam Ready-Set-Go Kits.png",
  },
  {
    title: "General Assembly",
    image: "/assets/images/gallery/CCS General Assembly.png",
  },
];

export default function ContactSection() {
  useScrollReveal();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="contact" className="sp-section sp-contact" aria-label="More Creative Work">
      <div className="sp-section-inner">
        <div className="sp-section-entrance sp-gallery-entrance" aria-hidden="true" />

        <div className="sp-reveal-grid sp-reveal-text" aria-label="Gallery header">
          <h2 className="sp-section-title wave-title sp-gallery-header sp-reveal-item">
            {renderRippleLetters("More Creative Work", "gallery")}
          </h2>
          <p className="sp-section-subtitle sp-reveal-item">A selection of pubmats I have designed and edited.</p>
        </div>

        <div className="sp-gallery-grid sp-reveal-grid" aria-label="Gallery items">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className="sp-gallery-item sp-reveal-item"
              style={{ ["--card-index"]: index }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="sp-gallery-thumb">
                <img
                  src={item.image}
                  alt={item.title}
                  className="sp-gallery-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <h3 className="sp-gallery-title">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="sp-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="sp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sp-modal-close" onClick={() => setSelectedItem(null)}>
              ×
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="sp-modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
}