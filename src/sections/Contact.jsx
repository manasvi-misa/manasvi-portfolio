import { useEffect, useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-glow" />
      <div className="contact-inner">
        <p className="section-label reveal"><span className="label-line" />04 — Contact</p>
        <h2 className="contact-heading reveal">
          Let's make<br />
          <span className="heading-serif">something cool.</span>
        </h2>
        <p className="contact-sub reveal">
          Whether it's an internship, a collab, or just "hey your skin lesion project is sick" — 
          I'm all ears. Drop a line.
        </p>

        <div className="contact-links reveal">
          <a href="mailto:manasvi.infp@gmail.com" className="contact-email" data-hover>
            <span className="email-label">Email</span>
            <span className="email-addr">manasvi.infp@gmail.com</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="contact-social reveal">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" data-hover>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/manasvi-saxena" target="_blank" rel="noreferrer" className="social-btn" data-hover>
            <span>GitHub</span>
          </a>
          <a href="tel:+919993592704" className="social-btn" data-hover>
            <span>+91 9993592704</span>
          </a>
        </div>

        <div className="contact-footer reveal">
          <span className="footer-mono">
            Designed & built by Manasvi Saxena · 2025
          </span>
          <span className="footer-mono footer-tech">
            React · Deployed on Vercel
          </span>
        </div>
      </div>

      {/* Bottom city */}
      <div className="contact-city">
        <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="80" width="50" height="120" fill="#1a1030" opacity="0.9"/>
          <rect x="60" y="40" width="60" height="160" fill="#1e1238" opacity="0.9"/>
          <rect x="80" y="20" width="20" height="180" fill="#2d1b6e" opacity="0.5"/>
          <rect x="130" y="60" width="45" height="140" fill="#1a1030" opacity="0.8"/>
          <rect x="185" y="90" width="40" height="110" fill="#1e1238" opacity="0.7"/>
          <rect x="235" y="50" width="55" height="150" fill="#1a1030" opacity="0.8"/>
          <rect x="300" y="110" width="40" height="90" fill="#1e1238" opacity="0.7"/>
          <rect x="900" y="70" width="50" height="130" fill="#1a1030" opacity="0.8"/>
          <rect x="960" y="30" width="65" height="170" fill="#1e1238" opacity="0.9"/>
          <rect x="980" y="10" width="25" height="190" fill="#2d1b6e" opacity="0.5"/>
          <rect x="1035" y="80" width="50" height="120" fill="#1a1030" opacity="0.8"/>
          <rect x="1095" y="50" width="60" height="150" fill="#1e1238" opacity="0.7"/>
          <rect x="1160" y="90" width="40" height="110" fill="#1a1030" opacity="0.9"/>
          {/* Glow at horizon */}
          <rect x="0" y="195" width="1200" height="5" fill="rgba(108,63,196,0.3)"/>
          <ellipse cx="600" cy="200" rx="500" ry="15" fill="rgba(108,63,196,0.1)"/>
        </svg>
      </div>
    </section>
  );
}
