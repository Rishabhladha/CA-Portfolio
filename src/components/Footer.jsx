import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        
        {/* Brand / Bio */}
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            <img src="/profile.jpg" alt="Rishabh Ladha" className="footer__avatar" />
            <span className="footer__name">Rishabh Ladha</span>
          </div>
          <p className="footer__bio">
            Passionate full-stack developer dedicated to building scalable web applications with clean code and modern architecture.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item.toLowerCase()} spy={true} smooth={true} offset={-80} duration={500} className="footer__link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <FaEnvelope className="footer__icon" />
              <a href="mailto:rishabhladha456@gmail.com" className="footer__link">rishabhladha456@gmail.com</a>
            </li>
            <li>
              <FaPhoneAlt className="footer__icon" />
              <a href="tel:+919783095507" className="footer__link">+91 9783095507</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer__icon" />
              <span className="footer__text">India 🇮🇳</span>
            </li>
          </ul>
        </div>

      </div>

     
    </footer>
  );
}
