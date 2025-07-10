// components/Header.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          YourName
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
