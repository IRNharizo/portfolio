import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import translations from '../translations';
import './Navbar.css';

// Navbar component handles navigation, language switch, and theme toggle
function Navbar({ toggleLang, currentLang, toggleTheme, currentTheme }) {

  // Controls mobile menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  // References used to detect clicks outside the menu
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Load translations based on current language
  const t = translations[currentLang];

  // Restore default body scroll behavior
  function resetBodyScroll() {
    document.body.style.overflowY = '';
    document.body.style.overflowX = '';
  }

  // Toggle mobile menu visibility
  function toggleMenu() {
    setIsOpen(function (prev) {
      return !prev;
    });
  }

  // Close menu and restore scrolling
  function closeMenu() {
    setIsOpen(false);
    resetBodyScroll();
  }

  // Close menu first, then execute provided action (language/theme switch)
  function closeMenuThen(action) {
    closeMenu();
    window.requestAnimationFrame(function () {
      action();
    });
  }

  // Close menu when clicking outside of navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        toggleRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Disable page scrolling only when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      resetBodyScroll();
    }

    return function () {
      resetBodyScroll();
    };
  }, [isOpen]);

  // Safety: close menu when theme changes to avoid layout conflicts
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme]);

  return (
    <nav className="navbar">

      {/* Logo and role section */}
      <div className="logo">
        <Link
          to="acceuil"
          smooth={true}
          duration={500}
          className="logo-link"
          offset={-120}
          onClick={closeMenu}
        >
          {t.name}
        </Link>

        {/* User role / subtitle */}
        <p>{t.role}</p>
      </div>

      {/* Mobile burger button */}
      <button className="menu-toggle" onClick={toggleMenu} ref={toggleRef}>
        ☰
      </button>

      {/* Navigation links container */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`} ref={menuRef}>

        {/* Home */}
        <li>
          <Link
            to="acceuil"
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            offset={-120}
            onClick={closeMenu}
          >
            {t.home}
          </Link>
        </li>

        {/* About */}
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            offset={-120}
            onClick={closeMenu}
          >
            {t.about}
          </Link>
        </li>

        {/* Projects */}
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            offset={-120}
            onClick={closeMenu}
          >
            {t.projects}
          </Link>
        </li>

        {/* Skills */}
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            offset={-120}
            onClick={closeMenu}
          >
            {t.skills}
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link"
            activeClass="active"
            spy={true}
            offset={-120}
            onClick={closeMenu}
          >
            {t.contact}
          </Link>
        </li>

        {/* Language toggle */}
        <li>
          <button
            className="lang-toggle"
            onClick={() => closeMenuThen(toggleLang)}
          >
            {currentLang === 'fr' ? 'EN' : 'FR'}
          </button>
        </li>

        {/* Theme toggle */}
        <li>
          <button
            className="theme-toggle"
            onClick={() => closeMenuThen(toggleTheme)}
          >
            {currentTheme === 'dark' ? '☀️' : '🌙'}
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
