import React from 'react';
import { motion } from 'framer-motion';
import translations from '../translations';
import './About.css';

// About section displays personal information with animated entrance
function About({ lang }) {

  // Load translations based on selected language
  const t = translations[lang];

  return (
    <section id="about" className="section about">

      {/* Animated container using Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}          // Start slightly faded and shifted down
        whileInView={{ opacity: 1, y: 0 }}      // Animate when entering viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        transition={{ duration: 0.6 }}         // Smooth entrance animation
      >

        {/* Section title */}
        <h2>{t.aboutTitle}</h2>

        {/* About content card */}
        <div className="about-content">

          {/* Render each paragraph with its associated icon */}
          {t.aboutParagraphs.map((item, index) => (
            <p key={index}>
              {/* Icon displayed before text */}
              <span className="icon">{item.icon}</span>

              {/* Paragraph content */}
              {item.text}
            </p>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default About;
