import React from 'react';
import { motion } from 'framer-motion';
import translations from '../translations';
import './Projects.css';
import '../App.css';

// Projects section displays a list of portfolio projects
function Projects({ lang }) {

  // Load translations with fallback to English if language is invalid
  const t = translations[lang] || translations.en;

  // Safely retrieve projects list (prevents crashes if undefined)
  const projects = t.projectsList || [];

  return (
    <section id="projects" className="section projects">

      {/* Animated container triggered on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}          // Start faded and slightly below
        whileInView={{ opacity: 1, y: 0 }}      // Animate into view
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
        transition={{ duration: 0.6 }}         // Smooth entrance animation
      >

        {/* Section title with fallback text */}
        <h2>{t.projectsTitle || 'Mes projets'}</h2>

        {/* Projects grid */}
        <div className="projects">

          {/* Display message when no projects are available */}
          {projects.length === 0 ? (
            <p>{t.noProjectsText || 'Aucun projet à afficher pour le moment.'}</p>
          ) : (

            /* Render project cards */
            projects.map(function (project, index) {
              return (
                <div className="project" key={project.title + index}>

                  {/* Project title */}
                  <h3>{project.title}</h3>

                  {/* Project description */}
                  <p>{project.description}</p>

                  {/* Technologies list */}
                  <p>
                    <strong>{t.technologiesLabel || 'Technologies'} :</strong>{' '}
                    {Array.isArray(project.technologies)
                      ? project.technologies.join(', ')
                      : ''}
                  </p>

                  {/* External project link (optional) */}
                  {project.link ? (
                    <p>
                      🔗{' '}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {t.projectLearnMore || 'En savoir plus'}
                      </a>
                    </p>
                  ) : null}

                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
