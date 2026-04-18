import { useEffect, useRef } from 'react';
import './Skills.css';

const skillGroups = [
  {
    label: 'Languages',
    icon: '{ }',
    items: ['Python', 'JavaScript', 'SQL', 'HTML/CSS', 'Java', 'C'],
  },
  {
    label: 'Frameworks & Tools',
    icon: '⚙',
    items: ['React', 'Flask', 'Git', 'GitHub', 'Linux', 'Wireshark', 'Burp Suite', 'MongoDB Atlas', 'VS Code'],
  },
  {
    label: 'Concepts',
    icon: '◈',
    items: ['REST APIs', 'CRUD Applications', 'Full-Stack Dev', 'Database Design', 'CNNs', 'Network Forensics', 'Incident Response'],
  },
  {
    label: 'Certifications',
    icon: '✦',
    items: ['Google Cybersecurity Professional', 'Tata Cybersecurity Analyst (Forage)', 'Goldman Sachs SWE (Forage)'],
  },
];

const experience = [
  {
    role: 'Cybersecurity Intern',
    company: 'Elevate Labs',
    location: 'Bangalore, India',
    period: 'June 2025 – July 2025',
    points: [
      'Monitored and triaged security alerts in a live environment',
      'Coordinated with IT teams to investigate and resolve incidents',
      'Documented incident response procedures and escalation workflows',
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-inner">
        <div className="skills-header">
          <p className="section-label reveal"><span className="label-line" />03 — Skills & XP</p>
          <h2 className="skills-heading reveal">
            Tools of<br />
            <span className="heading-serif">the trade.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div className="skill-group reveal" key={i}>
              <div className="skill-group-header">
                <span className="skill-group-icon">{g.icon}</span>
                <span className="skill-group-label">{g.label}</span>
              </div>
              <div className="skill-tags">
                {g.items.map(item => (
                  <span key={item} className="skill-tag" data-hover>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-block">
          <p className="section-sublabel reveal">Experience</p>
          {experience.map((e, i) => (
            <div className="exp-card reveal" key={i}>
              <div className="exp-left">
                <span className="exp-period">{e.period}</span>
                <span className="exp-location">{e.location}</span>
              </div>
              <div className="exp-right">
                <div className="exp-title-row">
                  <h3 className="exp-role">{e.role}</h3>
                  <span className="exp-company">@ {e.company}</span>
                </div>
                <ul className="exp-points">
                  {e.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-block reveal">
          <p className="section-sublabel">Education</p>
          <div className="edu-row">
            <div className="edu-card">
              <span className="edu-year">2023 – 2027</span>
              <h4 className="edu-deg">B.Tech Computer Science & Engineering</h4>
              <p className="edu-school">GITAM University, Visakhapatnam</p>
            </div>
            <div className="edu-card">
              <span className="edu-year">2011 – 2023</span>
              <h4 className="edu-deg">High School Diploma</h4>
              <p className="edu-school">Choithram School North Campus, Indore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
