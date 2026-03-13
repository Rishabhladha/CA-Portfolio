import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDatabase,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiLaravel, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 92 },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6', level: 88 },
      { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', level: 85 },
      { name: 'React', icon: <FaReact />, color: '#61dafb', level: 88 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', level: 82 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', level: 85 },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff', level: 83 },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', level: 80 },
      { name: 'Java', icon: <FaJava />, color: '#f89820', level: 72 },
      { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 70 },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Laravel / PHP', icon: <SiLaravel />, color: '#ff2d20', level: 65 },
      { name: 'REST APIs', icon: <FaDatabase />, color: '#a855f7', level: 88 },
    ],
  },
];

function SkillBar({ name, icon, color, level, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06 }}
    >
      <div className="skill-item__header">
        <span className="skill-item__icon" style={{ color }}>
          {icon}
        </span>
        <span className="skill-item__name">{name}</span>
      </div>
      <div className="skill-item__bar-bg">
        <motion.div
          className="skill-item__bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: i * 0.06 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My toolkit for building modern, scalable web applications from front to back.
          </p>
        </motion.div>

        <div className="skills__groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skills__group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
            >
              <h3 className="skills__group-title">{group.category}</h3>
              <div className="skills__list">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
