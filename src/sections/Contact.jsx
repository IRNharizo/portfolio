import React from 'react';
import { motion } from 'framer-motion';
import translations from '../translations';
import './Contact.css';

// Contact section displays contact information and CV download
function Contact({ lang }) {

  // Load translations based on selected language
  const t = translations[lang];

  return (
    <section id="contact" className="section contact">

      {/* Animated container triggered on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}          // Start faded and slightly below
        whileInView={{ opacity: 1, y: 0 }}      // Animate when entering viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        transition={{ duration: 0.6 }}         // Smooth fade-in animation
      >

        {/* Section title */}
        <h2>{t.contactTitle}</h2>

        {/* Introductory contact message */}
        <p>{t.contactText}</p>

        {/* Two-column layout: contact links + CV download */}
        <div className="contact-columns">

          {/* Email and LinkedIn links */}
          <div className="contact-links">

            {/* Email */}
            <p>
              📧 <a href="mailto:rabearivelo.nianja@gmail.com">
                rabearivelo.nianja@gmail.com
              </a>
            </p>

            {/* LinkedIn profile */}
            <p>
              💼 <a
                href="https://www.linkedin.com/in/ianja-nharizo-r-59096b146/"
                target="_blank"
                rel="noreferrer"
              >
                {t.linkedinLabel}
              </a>
            </p>

          </div>

          {/* CV download section */}
          <div className="cv-download">

            {/* Download CV based on current language */}
            <a
              href={lang === 'fr' ? '/IR_FR.pdf' : '/IR_EN.pdf'}
              className="btn cv"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.downloadCV}
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
