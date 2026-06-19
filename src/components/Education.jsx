import { motion } from 'framer-motion';
import { FiMapPin, FiBook } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { education } from '../data/portfolio';

export default function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gray-950/90" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
            Formation
          </h2>
          <p className="text-gray-400 text-sm">Mon parcours académique</p>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group p-6 border border-gray-700 hover:border-green-500 bg-gray-900/60 backdrop-blur-sm transition-all duration-300"
            >
              <div className="w-10 h-10 border border-gray-600 group-hover:border-green-500 flex items-center justify-center mb-4 transition-colors">
                <FiBook size={18} className="text-gray-400 group-hover:text-green-400 transition-colors" />
              </div>

              <span className="text-xs text-green-400 uppercase tracking-widest mb-2 block font-mono">
                {edu.period}
              </span>

              <h3 className="font-semibold text-white mb-1 leading-snug">{edu.degree}</h3>
              <p className="text-sm font-medium text-green-300 mb-2">{edu.school}</p>

              <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                <FiMapPin size={11} />
                <span>{edu.location}</span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
