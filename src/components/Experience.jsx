import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experiences } from '../data/portfolio';

/* Ligne verte lumineuse animée */
function GlowLine() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px flex flex-col items-center">
      {/* ligne de base */}
      <div className="absolute inset-0 bg-gray-700" />
      {/* lueur animée qui descend */}
      <motion.div
        className="absolute top-0 w-px bg-gradient-to-b from-transparent via-green-400 to-transparent"
        style={{ height: '40%' }}
        animate={{ top: ['0%', '60%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* halo vert */}
      <motion.div
        className="absolute top-0 w-3 rounded-full bg-green-400/30 blur-sm"
        style={{ height: '40%' }}
        animate={{ top: ['0%', '60%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gray-950/80" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
            Expériences
          </h2>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <GlowLine />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 * idx, ease: 'easeOut' }}
                  className={`relative flex items-start gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Card côté */}
                  <div className="w-[calc(50%-2rem)]">
                    {/* Année */}
                    <span className="text-green-400 text-sm font-mono tracking-widest block mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-white text-lg font-bold mb-1">{exp.company}</h3>
                    <p className="text-green-300 text-sm font-medium mb-3">{exp.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.tasks.map((task) => (
                        <li key={task} className="text-gray-500 text-xs flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer centre */}
                  <div className="w-16 flex-shrink-0" />

                  {/* Dot central lumineux */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 z-10">
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_12px_4px_rgba(34,197,94,0.6)] border-2 border-gray-950" />
                  </div>

                  {/* Espace droit/gauche vide */}
                  <div className="w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
