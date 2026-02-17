import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import translations from '../translations';
import './Acceuil.css';

// Home / Landing section with animated intro content
function Acceuil({ lang }) {

  // Load translations based on selected language
  const t = translations[lang];

  return (
    <section id="acceuil" className="section acceuil">

      {/* Animated container for main hero content */}
      <motion.div
        className="acceuil-content"
        initial={{ opacity: 0, y: 80, scale: 0.9 }} // Start faded, lower and slightly scaled down
        animate={{ opacity: 1, y: 0, scale: 1 }}   // Animate to full visibility and normal scale
        transition={{ duration: 1.2 }}            // Smooth entrance animation
      >

        {/* Main title */}
        <h2>{t.homeTitle}</h2>

        {/* Profile picture */}
        <img src={`${import.meta.env.BASE_URL}IR.jpeg`} alt="Photo de profil" className="profile-pic" />

        {/* Subtitle */}
        <p className="subtitle">{t.homeSubtitle}</p>

        {/* Introductory text */}
        <p className="intro">{t.homeIntro}</p>

        {/* Call-to-action button scrolling to Projects section */}
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-120}
          className="btn"
        >
          {t.seeProjects}
        </Link>

      </motion.div>
    </section>
  );
}

export default Acceuil;
