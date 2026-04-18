import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const els = [titleRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 400 + i * 180);
    });
  }, []);

  return (
    <section className="hero" id="hero">
      {/* animated city grid bg */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      {/* floating code particles */}
      <div className="code-particles">
        {['<div>', 'const', '=>', 'fetch()', 'async', '{...}', 'null', 'API', 'git push', 'npm', 'useEffect', 'SELECT *'].map((t, i) => (
          <span key={i} className="code-particle" style={{ '--i': i }}>{t}</span>
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow" ref={null}>
          <span className="eyebrow-line" />
          <span>Hey there, I am</span>
        </p>

        <h1 className="hero-title" ref={titleRef}>
          <span className="title-first">Manasvi</span>
          <br />
          <span className="title-last">
            <span className="title-serif">Saxena</span>
            <span className="title-dot">.</span>
          </span>
        </h1>

        <div className="hero-roles" ref={subRef}>
          <span className="role-tag">Full-Stack Dev</span>
          <span className="role-sep">×</span>
          <span className="role-tag role-tag-2">Web App Builder</span>
          <span className="role-sep">×</span>
          <span className="role-tag role-tag-3">Health-Tech Nerd</span>
        </div>

        <p className="hero-desc" ref={ctaRef}>
          CSE @ GITAM '27 · I build things that actually work,<br />
          break them on purpose to find out why, then make them better.
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <button
            className="btn-primary"
            data-hover
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a
            href="mailto:manasvi.infp@gmail.com"
            className="btn-ghost"
            data-hover
          >
            Let's talk
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>

      {/* City illustration */}
      <div className="hero-city">
        <svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" className="city-svg">
          {/* Buildings left */}
          <rect x="0" y="150" width="60" height="150" fill="#1a1030" opacity="0.8"/>
          <rect x="10" y="130" width="40" height="170" fill="#1e1238" opacity="0.9"/>
          <rect x="70" y="100" width="50" height="200" fill="#1a1030" opacity="0.8"/>
          <rect x="80" y="80" width="30" height="220" fill="#221445" opacity="0.9"/>
          <rect x="130" y="160" width="40" height="140" fill="#1a1030" opacity="0.7"/>
          <rect x="180" y="90" width="70" height="210" fill="#1e1238" opacity="0.9"/>
          <rect x="200" y="70" width="30" height="230" fill="#2d1b6e" opacity="0.5"/>
          <rect x="260" y="120" width="55" height="180" fill="#1a1030" opacity="0.8"/>
          <rect x="325" y="140" width="45" height="160" fill="#1e1238" opacity="0.7"/>
          {/* Buildings right */}
          <rect x="860" y="130" width="55" height="170" fill="#1a1030" opacity="0.8"/>
          <rect x="925" y="80" width="70" height="220" fill="#1e1238" opacity="0.9"/>
          <rect x="945" y="60" width="30" height="240" fill="#2d1b6e" opacity="0.5"/>
          <rect x="1005" y="100" width="60" height="200" fill="#1a1030" opacity="0.8"/>
          <rect x="1075" y="150" width="50" height="150" fill="#1e1238" opacity="0.7"/>
          <rect x="1130" y="120" width="70" height="180" fill="#1a1030" opacity="0.9"/>
          {/* Window lights */}
          {[...Array(20)].map((_, i) => (
            <rect
              key={i}
              x={Math.random() * 400 + 10}
              y={Math.random() * 150 + 80}
              width="5"
              height="7"
              fill={i % 3 === 0 ? '#00e5ff' : i % 3 === 1 ? '#a78bfa' : '#ff6b6b'}
              opacity={Math.random() * 0.6 + 0.3}
            />
          ))}
          {/* River */}
          <ellipse cx="600" cy="280" rx="200" ry="30" fill="rgba(0,229,255,0.04)" />
          <path d="M400 270 Q600 260 800 270 Q600 280 400 270Z" fill="rgba(0,229,255,0.06)" />
          {/* Glow at center-bottom */}
          <ellipse cx="600" cy="290" rx="300" ry="20" fill="rgba(108,63,196,0.15)" />
        </svg>
      </div>
    </section>
  );
}
