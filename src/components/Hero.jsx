import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1600&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-gray-950/75" />

      {/* Grille subtile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-green-400 text-sm uppercase tracking-[0.3em] mb-6"
        >
          Développeur Web & Support Technique
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          KOUMBA KOUMBA
          <br />
          <span className="text-gray-400">Wisy Kedy Emmanuel</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mx-auto w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e] mb-8"
        />

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-green-500 text-black font-semibold uppercase tracking-wide text-sm hover:bg-green-400 transition-colors w-full sm:w-auto"
          >
            Voir mes projets
          </button>
          <a
            href={personalInfo.cvUrl}
            download
            className="px-8 py-3 border border-white/30 text-white uppercase tracking-wide text-sm hover:border-green-500 hover:text-green-400 transition-colors w-full sm:w-auto text-center"
          >
            Télécharger CV
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          {[
            { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: FiMail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-green-400 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
