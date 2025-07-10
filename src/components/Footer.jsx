// components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope className="footer-icon" />
          </a>
        </div>

        <div className="footer-links">
          <NavLink to="/about" className="footer-link">About</NavLink>
          <NavLink to="/projects" className="footer-link">Projects</NavLink>
          <NavLink to="/skills" className="footer-link">Skills</NavLink>
          <NavLink to="/contact" className="footer-link">Contact</NavLink>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
