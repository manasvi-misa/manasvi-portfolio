import './Marquee.css';

const items = [
  'Full-Stack Dev', '·', 'React', '·', 'Flask', '·', 'Python', '·', 
  'SQL', '·', 'Health-Tech', '·', 'CNNs', '·', 'Cybersecurity', '·',
  'REST APIs', '·', 'Web Apps', '·', 'Open to Work', '·',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className={item === '·' ? 'marquee-dot' : 'marquee-item'}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
