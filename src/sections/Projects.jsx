import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'YumBowl',
    subtitle: 'Personalised Meal Prep Platform',
    desc: 'Full-stack web app that generates custom weekly meal plans based on your health profile, budget, food preferences, and fitness goals. Multi-step onboarding, dynamic meal dashboard with nutrition breakdowns.',
    stack: ['Python', 'Flask', 'React', 'SQL'],
    tag: 'Health-Tech',
    color: '#00e5ff',
    highlight: 'Recommendation engine that matches meals to user constraints while staying within caloric goals and monthly budget.',
  },
  {
    number: '02',
    title: 'Skin Lesion Classifier',
    subtitle: 'Medical AI — CNN + Transfer Learning',
    desc: 'CNN trained on the HAM10000 dermoscopy dataset to classify 7 types of skin lesions. MobileNetV2 backbone with data augmentation for class imbalance. >85% validation accuracy. Wrapped in a Flask API.',
    stack: ['Python', 'TensorFlow/Keras', 'CNN', 'OpenCV', 'Flask'],
    tag: 'AI/ML · Ongoing',
    color: '#a78bfa',
    highlight: 'AUC-ROC and confusion matrix evaluation. Queryable via a lightweight web interface.',
  },
  {
    number: '03',
    title: 'PO Management System',
    subtitle: 'Full CRUD Web App',
    desc: 'End-to-end purchase order, vendor, and inventory management. Clean HTML/CSS frontend for creating, editing, and viewing orders without page reloads. SQL relational schema for order tracking and filtering.',
    stack: ['Python', 'SQL', 'HTML/CSS'],
    tag: 'Full-Stack',
    color: '#ff6b6b',
    highlight: 'Designed for non-technical ops teams — clean UX, fast filtering, zero page reloads.',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects-inner">
        <div className="projects-header">
          <p className="section-label reveal"><span className="label-line" />02 — Projects</p>
          <h2 className="projects-heading reveal">
            Things I've<br />
            <span className="heading-serif">built & shipped.</span>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((p, i) => (
            <div
              className="project-card reveal"
              key={i}
              style={{ '--card-color': p.color }}
            >
              <div className="project-card-inner">
                <div className="project-meta">
                  <span className="project-number">{p.number}</span>
                  <span className="project-tag">{p.tag}</span>
                </div>

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-highlight">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{p.highlight}</span>
                  </div>
                </div>

                <div className="project-footer">
                  <div className="project-stack">
                    {p.stack.map(s => (
                      <span key={s} className="stack-pill">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-glow" />
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note reveal">
          <span className="note-mono">// more on GitHub →</span>
          <a href="https://github.com/manasvi-saxena" target="_blank" rel="noreferrer" className="github-link" data-hover>
            github.com/manasvi-saxena
          </a>
        </div>
      </div>
    </section>
  );
}
