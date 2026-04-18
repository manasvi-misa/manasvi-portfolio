import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, i * 120);
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-bg-glow" />
      <div className="about-inner">
        <div className="about-left">
          <p className="section-label reveal">
            <span className="label-line" />
            01 — About
          </p>
          <h2 className="about-heading reveal">
            Building things<br />
            <span className="heading-serif">that work.</span>
          </h2>
          <div className="about-avatar reveal">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <span className="avatar-emoji">⚡</span>
            </div>
            <div className="avatar-status">
              <span className="status-dot" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-text reveal">
            I'm a CSE student at GITAM University who genuinely enjoys the whole process—
            from sketching out a database schema at 1am, to watching a Flask API actually 
            respond on the first try (rare, but euphoric).
          </p>
          <p className="about-text reveal">
            My thing is building <strong>full-stack web apps</strong> that solve real problems.
            Currently obsessed with health-tech—I'm building a skin lesion classifier with CNNs
            and a personalised meal prep platform. Interned in cybersecurity, which means I also 
            think about how to <em>break</em> what I build. Features, not bugs.
          </p>

          <div className="about-facts reveal">
            <div className="fact-card">
              <span className="fact-num">3+</span>
              <span className="fact-label">Projects shipped</span>
            </div>
            <div className="fact-card">
              <span className="fact-num">2</span>
              <span className="fact-label">Internships</span>
            </div>
            <div className="fact-card">
              <span className="fact-num">5+</span>
              <span className="fact-label">Certifications</span>
            </div>
          </div>

          <div className="about-links reveal">
            <a href="mailto:manasvi.infp@gmail.com" className="about-link" data-hover>
              manasvi.infp@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="about-link" data-hover>
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
