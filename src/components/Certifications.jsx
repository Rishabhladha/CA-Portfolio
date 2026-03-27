import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCloud, FaCode, FaDatabase, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import './Certifications.css';

const certs = [
  {
    id: 1,
    title: 'Cloud Computing',
    issuer: 'NPTEL — IIT Kharagpur',
    description:
      'Completed the NPTEL certification covering core cloud computing concepts including virtualization, cloud architecture, deployment models, and cloud security.',
    icon: <FaCloud />,
    iconColor: '#38bdf8',
    badge: 'NPTEL',
    badgeColor: '#0ea5e9',
    tags: ['Cloud Architecture', 'Virtualization', 'AWS', 'Security'],
  },
  {
    id: 2,
    title: 'Data Structures & Algorithms',
    issuer: 'Apna College',
    description:
      'Intensive DSA course covering arrays, linked lists, trees, graphs, dynamic programming, sorting algorithms, and problem-solving patterns for competitive programming.',
    icon: <FaCode />,
    iconColor: '#a855f7',
    badge: 'Apna College',
    badgeColor: '#7c3aed',
    tags: ['Arrays & Strings', 'Trees & Graphs', 'Dynamic Programming', 'Sorting'],
  },
  {
    id: 3,
    title: 'MongoDB Database',
    issuer: 'Mongoose / MongoDB University',
    description:
      'Learned MongoDB fundamentals, advanced querying, aggregation pipelines, indexing strategies, and Mongoose ODM for Node.js-based application development.',
    icon: <FaDatabase />,
    iconColor: '#47a248',
    badge: 'MongoDB',
    badgeColor: '#47a248',
    tags: ['CRUD Operations', 'Aggregation', 'Mongoose ODM', 'Indexing'],
  },
];

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Glow accent */}
      <div className="cert-card__glow" style={{ background: cert.iconColor }} />

      {/* Header */}
      <div className="cert-card__header">
        <div className="cert-card__icon" style={{ color: cert.iconColor, background: `${cert.iconColor}18` }}>
          {cert.icon}
        </div>
        <div className="cert-card__badge" style={{ background: `${cert.badgeColor}22`, color: cert.badgeColor, borderColor: `${cert.badgeColor}44` }}>
          <FaAward style={{ fontSize: '0.7rem' }} />
          {cert.badge}
        </div>
      </div>

      {/* Body */}
      <div className="cert-card__body">
        <h3 className="cert-card__title">{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>
        <p className="cert-card__desc">{cert.description}</p>
      </div>

      {/* Tags */}
      <div className="cert-card__tags">
        {cert.tags.map((tag) => (
          <span key={tag} className="cert-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section certifications">
      {/* Background orbs */}
      <div className="orb cert-orb-1" />
      <div className="orb cert-orb-2" />

      <div className="container">
        <motion.div
          ref={ref}
          className="certifications__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// achievements</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and course completions that validate my expertise across cloud, algorithms, and databases.
          </p>
        </motion.div>

        <div className="certifications__grid">
          {certs.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
