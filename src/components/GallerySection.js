"use client";

import { useState } from "react";
import useScrollReveal from "@/components/useScrollReveal";
import useInView from "@/components/useInView";

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
    title: "VCB 2026",
    image: "/assets/images/gallery/VCB 2026.png",
  },
  {
    title: "CCS Howlympics: Wolves",
    image: "/assets/images/gallery/CCS_Howlympics-Wolves.png",
  },
  {
    title: "CCS Discord Server Launch",
    image: "/assets/images/gallery/CCS_Discord-Server-Launch.png",
  },
  {
    title: "CCS Cheerdance DP",
    image: "/assets/images/gallery/CCS Cheerdance DP.png",
  },
  {
    title: "Team Hyperlink Electeds",
    image: "/assets/images/gallery/TEAM HYPERLINK ELECTEDS.png",
  },
  {
    title: "ITS Executive Board",
    image: "/assets/images/gallery/ITS Executive Board.png",
  },
];

const galleryItemsExtra = [
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

const galleryGroups = [
  {
    items: galleryItems,
  },
  {
    items: galleryItemsExtra,
  },
];

export default function GallerySection() {
  useScrollReveal();
  const [selectedItem, setSelectedItem] = useState(null);
  const [groupIndex, setGroupIndex] = useState(0);

  const group = galleryGroups[groupIndex];

  const [gridRef, gridIn] = useInView();

  const goPrev = () =>
    setGroupIndex((i) => (i - 1 + galleryGroups.length) % galleryGroups.length);
  const goNext = () =>
    setGroupIndex((i) => (i + 1) % galleryGroups.length);

  return (
    <section id="gallery" className="sp-section sp-gallery" aria-label="Creative Gallery">
      <div className="sp-section-inner">
        <div className="sp-section-entrance sp-gallery-entrance" aria-hidden="true" />

        <div className="sp-reveal-grid sp-reveal-text" aria-label="Gallery header">
          <h2 className="sp-section-title wave-title sp-gallery-header sp-reveal-item">
            {renderRippleLetters("my creative works", "gallery")}
          </h2>

          <p className="sp-section-subtitle sp-reveal-item">
            A selection of pubmats I have designed and edited.
          </p>
        </div>

        <div className="sp-carousel-stage">
          <button
            type="button"
            className="sp-carousel-arrow sp-carousel-arrow-side sp-carousel-arrow-prev"
            onClick={goPrev}
            aria-label="Previous creative works"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div
            ref={gridRef}
            className={
              "sp-gallery-grid sp-carousel-grid" + (gridIn ? " is-in" : "")
            }
            aria-label="Gallery items"
            key={groupIndex}
          >
            {group.items.map((item, index) => (
              <img
                key={item.title}
                src={item.image}
                alt={item.title}
                className="sp-gallery-image sp-carousel-item"
                style={{ "--card-index": index }}
                loading="lazy"
                draggable="false"
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>

          <button
            type="button"
            className="sp-carousel-arrow sp-carousel-arrow-side sp-carousel-arrow-next"
            onClick={goNext}
            aria-label="Next creative works"
          >
            <span aria-hidden="true">→</span>
          </button>
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
