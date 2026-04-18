import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
      <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">manasvi</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l} onClick={() => scrollTo(l)}>
            <span className="nav-link" data-hover>{l}</span>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/manasvi-misa"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            data-hover
          >
            GitHub
          </a>
        </li>
      </ul>

      <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} data-hover>
        <span /><span /><span />
      </button>
    </nav>
  );
}
