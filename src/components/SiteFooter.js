"use client";

export default function SiteFooter() {
  return (
    <footer className="sp-site-footer" aria-label="Site footer">
      {/* Background Glows */}
      <div className="footer-bg-glow" aria-hidden="true" />
      <div className="footer-bg-glow-2" aria-hidden="true" />
      
      <div className="sp-site-footer-inner">
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-name">Naomi Esther Liu</p>
            <p className="footer-role">UI/UX Designer / Web Developer</p>
            <p className="footer-email">liunaomiesther@gmail.com</p>
            <p className="footer-location">Bacolod City, 6100 PH</p>
          </div>

          <nav className="footer-links" aria-label="Quick links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
          </nav>

          <nav className="footer-socials" aria-label="Social links">
            <a href="https://linkedin.com/in/naoliu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.805 0-9.72h3.554v1.378c.43-.664 1.199-1.608 2.92-1.608 2.134 0 3.734 1.398 3.734 4.402v5.548zM5.337 9.766c-1.142 0-1.889-.756-1.889-1.704 0-.962.756-1.704 1.93-1.704 1.174 0 1.888.742 1.907 1.704 0 .948-.733 1.704-1.948 1.704zm-1.652 10.686h3.305v-9.72H3.685v9.72zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://facebook.com/naoballs" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.02 4.388 11.019 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.033 1.792-4.709 4.533-4.709 1.312 0 2.686.235 2.686.235v2.98h-1.513c-1.49 0-1.955.93-1.955 1.887v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.092 24 18.092 24 12.073z" />
              </svg>
            </a>
            <a href="https://instagram.com/naoestherliu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
              </svg>
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Naomi Liu. All rights reserved. | Bacolod City, Negros Occidental, PH
          </p>
        </div>
      </div>
    </footer>
  );
}

