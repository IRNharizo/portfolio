import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Acceuil from './sections/Acceuil';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import './App.css';

// Root application component
function App() {

  // Current language state (default: French)
  const [lang, setLang] = useState('fr');

  // Toggle between French and English
  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  // Current theme state (light / dark)
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // Root container with dynamic theme class
    <div className={`App ${theme}`}>

      {/* Top navigation bar */}
      <Navbar
        toggleLang={toggleLang}
        currentLang={lang}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />

      {/* Main content sections */}
      <main>
        <Acceuil lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

    </div>
  );
}

export default App;
