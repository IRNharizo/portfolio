// src/components/Footer.js

import React from 'react';
import translations from '../translations';
import './Footer.css'; // Optional CSS file for footer styling

// Footer component receives the current language as a prop
function Footer({ lang }) {

  // Retrieve translations based on selected language
  const t = translations[lang];

  return (
    // Main footer container
    <footer className="footer">
      {/* Display localized footer text */}
      {t.footer.text}
    </footer>
  );
}

export default Footer;
