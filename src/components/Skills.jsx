import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolio';

const categories = ['Front-End', 'Back-End', 'Base de données', 'Réseaux'];

function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-green-400 font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-gray-800 w-full">
        <motion.div
          className="h-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gray-950/85" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-3">05</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
            Compétences
          </h2>
          <p className="text-gray-400 text-sm">Technologies que je maîtrise</p>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-green-400 mb-5 border-b border-gray-800 pb-3">
                {cat}
              </h3>
              {skills
                .filter((s) => s.category === cat)
                .map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
