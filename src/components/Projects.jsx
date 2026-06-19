import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi';
import { useScrollAnimation, } from '../hooks/useScrollAnimation';
import { itemVariants } from './SectionWrapper';
import { projects } from '../data/portfolio';

/* ── Modal détail projet ── */
function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-950 border border-gray-800"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={18} />
            </button>

            {/* Hero image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="text-xs text-green-400 uppercase tracking-widest mb-2 block">{project.category}</span>
                <h2 className="text-3xl font-bold text-white font-heading">{project.title}</h2>
                <p className="text-gray-300 mt-1">{project.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-sm uppercase tracking-widest text-green-400 mb-3">À propos du projet</h3>
                <p className="text-gray-300 leading-relaxed">{project.details}</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-green-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 border border-gray-700 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white border border-gray-700 px-4 py-2 hover:border-green-500 hover:text-green-400 transition-colors">
                      <FiGithub size={15} /> Voir le code
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm bg-green-500 text-black px-4 py-2 font-medium hover:bg-green-400 transition-colors">
                      <FiExternalLink size={15} /> Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Extra screenshots */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div className="px-8 pb-8">
                <h3 className="text-sm uppercase tracking-widest text-green-400 mb-4">Captures d'écran</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.screenshots.map((src, i) => (
                    <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full aspect-video object-contain bg-gray-800 border border-gray-800 hover:border-green-500 transition-colors cursor-zoom-in"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Section Portfolio ── */
export default function Projects() {
  const [selected, setSelected] = useState(null);
  const { ref, isInView } = useScrollAnimation();

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="py-24 bg-gray-900"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1600&q=60)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/85 pointer-events-none" style={{ position: 'absolute' }} />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
              Portfolio
            </h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase">
              Mes dernières créations.{' '}
              <span className="text-white hover:text-green-400 cursor-pointer transition-colors">
                Voir plus <FiArrowRight className="inline" size={12} />
              </span>
            </p>
            <div className="mx-auto mt-5 w-16 h-[2px] bg-green-500" />
          </motion.div>

          {/* Grid — 3 colonnes, grandes images plein cadre */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-1"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative group cursor-pointer overflow-hidden bg-gray-800"
                style={{ aspectRatio: '4/3' }}
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'; }}
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-400 flex flex-col items-center justify-center gap-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-center px-6">
                    <span className="text-green-400 text-xs uppercase tracking-widest block mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold font-heading mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.subtitle}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-green-400 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors">
                      Voir le projet <FiArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
