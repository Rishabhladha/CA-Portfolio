import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="hero__grid" />

      <div className="container hero__content">
        <div className="hero__split">
          {/* Left text side */}
          <div className="hero__text">

            <motion.h1
              className="hero__name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm <span className="hero__name-accent">Rishabh Ladha</span>
            </motion.h1>

            <motion.div
              className="hero__tagline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="hero__tagline-prefix">I build </span>
              <TypeAnimation
                sequence={[
                  'Full Stack Web Apps',
                  2000,
                  'REST APIs with Node.js',
                  2000,
                  'React Interfaces',
                  2000,
                  'Scalable Backends',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="hero__typed"
              />
            </motion.div>

            <motion.p
              className="hero__desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Passionate full-stack developer specializing in the MERN stack, crafting
              high-performance web applications with elegant UI and robust backend architecture.
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#projects" className="btn btn--primary">View My Work</a>
              <a href="#contact" className="btn btn--outline">Get In Touch</a>
            </motion.div>

            <motion.div
              className="hero__socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="https://github.com/Rishabhladha" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rishabh-ladha/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:rishabhladha456@gmail.com" className="hero__social-link" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:+919783095507" className="hero__social-link" aria-label="Phone">
                <FaPhoneAlt />
              </a>
            </motion.div>

            <motion.a
              href="#about"
              className="hero__scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FaArrowDown />
              <span>Scroll down</span>
            </motion.a>
          </div>

          {/* Right photo side */}
          <motion.div
            className="hero__photo-container"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              className="hero__photo-clickable" 
              onClick={() => setIsLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="View larger profile photo"
            >
              <img src="/profile.jpg" alt="Rishabh Ladha" className="hero__photo" />
              <div className="hero__photo-overlay">
                <span>View</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            className="hero__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <button className="hero__lightbox-close" onClick={() => setIsLightboxOpen(false)}>
              <FaTimes />
            </button>
            <motion.img 
              src="/profile.jpg" 
              alt="Rishabh Ladha" 
              className="hero__lightbox-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
