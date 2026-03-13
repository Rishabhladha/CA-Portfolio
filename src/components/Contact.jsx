import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, this would call an API
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="section contact">
      <div className="orb contact__orb" />
      <div className="container">
        <motion.div
          ref={ref}
          className="contact__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, exciting projects, or just having a great conversation.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Info */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact__info-card">
              <FaEnvelope className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Email</p>
                <a href="mailto:rishabhladha456@gmail.com" className="contact__info-value">
                  rishabhladha456@gmail.com
                </a>
              </div>
            </div>
            <div className="contact__info-card">
              <FaPhoneAlt className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Phone</p>
                <a href="tel:+919783095507" className="contact__info-value">
                  +91 9783095507
                </a>
              </div>
            </div>
            <div className="contact__info-card">
              <FaMapMarkerAlt className="contact__info-icon" />
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">India 🇮🇳</p>
              </div>
            </div>

            <div className="contact__socials">
              <a href="https://github.com/Rishabhladha" target="_blank" rel="noreferrer" className="contact__social">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rishabh-ladha/" target="_blank" rel="noreferrer" className="contact__social">
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Available for freelance work & full-time roles
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="contact__form"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="contact__field">
              <label htmlFor="name" className="contact__label">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Rishabh Ladha"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email" className="contact__label">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                placeholder="Let's build something amazing together..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn--primary contact__submit" disabled={sent}>
              {sent ? '✓ Message Sent!' : <><FaPaperPlane /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
