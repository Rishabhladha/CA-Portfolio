import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiJsonwebtokens, SiTailwindcss, SiFramer, SiExpress, SiClerk, SiStripe, SiCloudinary } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'MediTrack',
    subtitle: 'Healthcare Appointment System',
    date: 'Jan 2026',
    description:
      'A role-based healthcare orchestration platform enabling distinct workflows for Patients and Doctors. Features secure multi-tier authentication, dynamic appointment lifecycle management, and real-time status sync.',
    highlights: [
      'Role-based access control with Express middleware for Patients & Doctors',
      'JWT-protected routes + bcryptjs encryption (HIPAA-aligned privacy)',
      'Robust state machine: Pending → Approved / Rejected lifecycle',
    ],
    tags: [
      { label: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
      { label: 'React', icon: <FaReact />, color: '#61dafb' },
      { label: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { label: 'JWT', icon: <SiJsonwebtokens />, color: '#fb923c' },
      { label: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8' },
      { label: 'Framer Motion', icon: <SiFramer />, color: '#a855f7' },
    ],
    gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
    accentColor: '#7c3aed',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'SkillStream',
    subtitle: 'LMS & Course Delivery Platform',
    date: 'Dec 2025',
    description:
      'A scalable learning management system with multi-tier content hierarchies, rich-text course creation, Stripe payment integration, and multi-role authentication via Clerk — empowering both educators and students.',
    highlights: [
      'Multi-tier content hierarchy: chapters, lectures, rich-text via Quill.js',
      'Stripe webhook integration for automated enrollment & transactions',
      'Clerk multi-role auth with dedicated educator/student dashboards',
    ],
    tags: [
      { label: 'Node.js', icon: <FaNodeJs />, color: '#68a063' },
      { label: 'React', icon: <FaReact />, color: '#61dafb' },
      { label: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      { label: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
      { label: 'Clerk', icon: <SiClerk />, color: '#6c47ff' },
      { label: 'Stripe', icon: <SiStripe />, color: '#635bff' },
      { label: 'Cloudinary', icon: <SiCloudinary />, color: '#3448c5' },
    ],
    gradient: 'linear-gradient(135deg, #0ea5e9, #4f46e5)',
    accentColor: '#0ea5e9',
    github: 'https://github.com',
    live: '#',
  },
];

function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? project.accentColor + '55' : undefined,
        boxShadow: hovered ? `0 16px 48px ${project.accentColor}22` : undefined,
      }}
    >
      {/* Top gradient bar */}
      <div className="project-card__top" style={{ background: project.gradient }} />

      <div className="project-card__body">
        <div className="project-card__meta">
          <div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__subtitle">{project.subtitle}</p>
          </div>
          <span className="project-card__date">{project.date}</span>
        </div>

        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__highlights">
          {project.highlights.map((h) => (
            <li key={h} className="project-card__highlight">
              <span className="project-card__bullet" style={{ background: project.accentColor }} />
              {h}
            </li>
          ))}
        </ul>

        <div className="project-card__tags">
          {project.tags.map((t) => (
            <span key={t.label} className="project-card__tag" style={{ borderColor: t.color + '44', color: t.color }}>
              <span className="project-card__tag-icon">{t.icon}</span>
              {t.label}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
            <FaGithub /> Source Code
          </a>
          <a href={project.live} className="project-card__link project-card__link--primary" style={{ background: project.gradient }}>
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section projects">
      <div className="orb projects__orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects I've Built</h2>
          <p className="section-subtitle">
            Real-world applications built with modern tech stacks, showcasing my ability
            to architect and deliver end-to-end solutions.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
