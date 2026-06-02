import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PortfolioNavbar from "@/components/PortfolioNavbar";

import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="sp-root">
      <PortfolioNavbar />
      <main className="sp-main">
        <HeroSection />

        {/* Pastel green divider between Hero and About */}
        <div className="stripe-divider stripe-divider--hero-about" aria-hidden="true" />

        <section id="about" className="sp-about" aria-label="About">
          <AboutSection />
        </section>

        {/* Pastel green divider between About and Projects */}
        <div className="stripe-divider stripe-divider--about-projects" aria-hidden="true" />

<ProjectsSection />

        {/* Divider between Projects and Gallery */}
        <div className="stripe-divider stripe-divider--about-projects" aria-hidden="true" />

        <GallerySection />
      </main>

      <SiteFooter />
    </div>
  );
}





