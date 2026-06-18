import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SectionWrapper, SectionHeader, itemVariants } from './SectionWrapper';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <SectionWrapper id="testimonials" className="py-24 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          title="Témoignages"
          subtitle="Ce que disent mes clients et collaborateurs"
          light
        />

        <motion.div variants={itemVariants} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center px-4 md:px-16"
            >
              {/* Quote icon */}
              <div className="text-6xl text-gray-600 dark:text-gray-700 font-serif leading-none mb-6">"</div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 italic">
                {testimonials[current].text}
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-green-500 mb-4" />
                <p className="font-semibold text-white">{testimonials[current].name}</p>
                <p className="text-sm text-gray-400">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-colors"
              aria-label="Previous"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    i === current ? 'bg-white' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-colors"
              aria-label="Next"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
