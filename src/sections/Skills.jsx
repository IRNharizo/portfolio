import React from 'react';
import { motion } from 'framer-motion';
import translations from '../translations';
import './Skills.css';

// Skills section displays categorized technical skills
function Skills({ lang }) {

  // Load translations based on selected language
  const t = translations[lang];

  return (
    <section id="skills" className="section skills">

      {/* Animated container triggered when section enters viewport */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}          // Start faded and slightly below
        whileInView={{ opacity: 1, y: 0 }}      // Animate into visible position
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        transition={{ duration: 0.6 }}         // Smooth fade-in animation
      >

        {/* Section title */}
        <h2>{t.skillsTitle}</h2>

        {/* Skills grid container */}
        <div className="skills-container">

          {/* Render skill categories */}
          {t.skillsCategories.map((category, index) => (
            <div className="skill-category" key={index}>

              {/* Category title */}
              <h3>{category.title}</h3>

              {/* List of skills inside category */}
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
