import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function SectionWrapper({ children, className = '', id }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ title, subtitle, light = false }) {
  return (
    <motion.div variants={itemVariants} className="mb-14 text-center">
      <h2 className={`section-title ${light ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle mt-3 ${light ? 'text-gray-300' : ''}`}>{subtitle}</p>
      )}
      <div className={`mx-auto mt-4 h-[2px] w-16 ${light ? 'bg-white' : 'bg-gray-900 dark:bg-white'}`} />
    </motion.div>
  );
}
