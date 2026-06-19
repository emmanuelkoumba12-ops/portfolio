import { motion } from 'framer-motion';
import {
  SiVscodium, SiFigma, SiCanva, SiPostman,
  SiGithub, SiGit, SiMysql, SiVite,
} from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { tools } from '../data/portfolio';

const iconMap = {
  SiVscodium, SiFigma, SiCanva, SiPostman,
  SiGithub, SiGit, SiMysql, SiVite,
};

export default function Tools() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="tools"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gray-950/88" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
            Outils &amp; Technologies
          </h2>
          <p className="text-gray-400 text-sm">Les outils de mon quotidien</p>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((tool, idx) => {
            const Icon = iconMap[tool.icon];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.07 * idx }}
                className="group p-6 border border-gray-700 hover:border-green-500 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center gap-3 transition-all duration-300 cursor-default"
              >
                {Icon && (
                  <Icon
                    size={36}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tool.color }}
                  />
                )}
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                  {tool.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
