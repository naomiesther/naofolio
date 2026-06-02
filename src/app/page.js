import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import PortfolioNavbar from "@/components/PortfolioNavbar";

import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="sp-root">
      <PortfolioNavbar />
      <main className="sp-main">
        <HeroSection />

        <section id="about" className="sp-about" aria-label="About">
          <AboutSection />
        </section>

        <ProjectsSection />

        <section className="sp-section sp-contact" id="contact" aria-label="Contact">
          <ContactSection />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}





