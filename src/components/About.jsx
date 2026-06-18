import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { SectionWrapper, SectionHeader, itemVariants } from './SectionWrapper';
import { personalInfo } from '../data/portfolio';

const stats = [
  { value: '3+', label: 'Années d\'expérience' },
  { value: '20+', label: 'Projets réalisés' },
  { value: '10+', label: 'Clients satisfaits' },
  { value: '5+', label: 'Technologies maîtrisées' },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="À propos de moi"
          subtitle="Qui suis-je et ce qui me motive"
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800" />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-900 dark:border-white" />
              <img
                src="/photo-cv.jpeg"
                alt="Emmanuel KOUMBA"
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h3
              variants={itemVariants}
              className="font-heading text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              Développeur Full Stack basé à Libreville, Gabon
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {personalInfo.bio}
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {personalInfo.bioExtended}
            </motion.p>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              {[
                { icon: FiMapPin, text: personalInfo.location },
                { icon: FiMail, text: personalInfo.email },
                { icon: FiPhone, text: personalInfo.phone },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm">
                  <Icon size={16} className="text-gray-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href={personalInfo.cvUrl}
              download
              className="inline-flex items-center gap-2 btn-primary"
            >
              <FiDownload size={16} />
              Télécharger mon CV
            </motion.a>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white dark:bg-gray-950 px-6 py-8 text-center"
            >
              <div className="font-heading text-4xl font-semibold text-gray-900 dark:text-white mb-1">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
