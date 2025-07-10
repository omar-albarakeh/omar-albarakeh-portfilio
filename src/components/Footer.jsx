import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { email },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setSubscribed(true);
      setError('');
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    })
    .catch(() => {
      setError('Failed to subscribe. Please try again.');
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-row">
          {/* Left side: logo + tagline */}
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">Omar AlBarakeh</NavLink>
            <p className="footer-tagline">Building digital experiences that matter</p>
          </div>

          {/* Right side: newsletter */}
          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="footer-form">
              <div className="footer-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="footer-input"
                  disabled={subscribed}
                />
                <button type="submit" className="footer-submit" disabled={subscribed}>
                  <FaArrowRight />
                </button>
              </div>
              {error && <p className="footer-error">{error}</p>}
              {subscribed && <p className="footer-success">Thank you for subscribing!</p>}
            </form>
            <p className="footer-newsletter-text">Subscribe to get notified about my latest projects and updates.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-row">
          <div className="footer-icons">
            <a href="https://github.com/omar-albarakeh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/omar-albarakeh/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:omaralbarakeh2@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-legal">
            <p className="footer-copy">© {new Date().getFullYear()} Omar AlBarakeh. All rights reserved.</p>
            <div className="footer-legal-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
