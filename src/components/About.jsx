import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const stats = [
  { value: '2+', label: 'Years of Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Technologies' },
  { value: '100%', label: 'Dedication' },
];

function StatCard({ value, label, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="about__stat"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      <span className="about__stat-value">{value}</span>
      <span className="about__stat-label">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section about">
      <div className="orb about__orb" />
      <div className="container">
        <div className="about__grid" ref={ref}>
          {/* Text side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">Crafting Digital<br />Experiences</h2>

            <p className="about__para">
              I'm <strong>Rishabh Ladha</strong>, a passionate full-stack developer with a love for
              building clean, scalable, and visually stunning web applications. I specialize in
              the <span className="about__highlight">MERN stack</span> and enjoy turning complex
              problems into simple, beautiful solutions.
            </p>
            <p className="about__para">
              From architecting secure <span className="about__highlight">JWT-based authentication
              systems</span> to integrating third-party services like <span className="about__highlight">
              Stripe</span> and <span className="about__highlight">Cloudinary</span>, I love the
              full spectrum of web development — both the creative and the technical.
            </p>
            <p className="about__para">
              When I'm not coding, I'm exploring new technologies, contributing to projects,
              and continuously leveling up my skills. I'm currently looking for opportunities
              where I can make a meaningful impact.
            </p>

            <div className="about__tags">
              {['Problem Solver','Team Player','Fast Learner','Clean Code Enthusiast'].map(t => (
                <span key={t} className="about__tag">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Stats side */}
          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__card">
              <div className="about__card-header">
                <span className="about__card-dot about__card-dot--red" />
                <span className="about__card-dot about__card-dot--yellow" />
                <span className="about__card-dot about__card-dot--green" />
                <span className="about__card-title">profile.json</span>
              </div>
              <div className="about__card-body">
                <pre className="about__code">{`{
  "name": "Rishabh Ladha",
  "role": "Full Stack Developer",
  "location": "India",
  "education": "B.Tech",
  "specialization": [
    "MERN Stack",
    "REST APIs",
    "UI/UX Design"
  ],
  "status": "Open to Work",
  "passion": "Building cool stuff"
}`}</pre>
              </div>
            </div>

            <div className="about__stats">
              {stats.map((s, i) => (
                <StatCard key={s.label} {...s} i={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
