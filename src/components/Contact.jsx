import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiAlertCircle, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { sendEmail } from '../services/emailService';
import { personalInfo } from '../data/portfolio';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const { ref, isInView } = useScrollAnimation();

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendEmail(form);
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-900/80 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-200';

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1596003903427-5a6a40df1c48?w=1600&q=60)',
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-3">
            Contact
          </h2>
          <p className="text-gray-400 text-sm">Travaillons ensemble</p>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-green-500 shadow-[0_0_10px_#22c55e]" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-semibold text-white mb-2">Discutons de votre projet</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Que vous ayez un projet en tête ou simplement envie de discuter,
                n'hésitez pas à me contacter. Je répondrai rapidement.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FiMapPin, label: 'Localisation', value: personalInfo.location },
                { icon: FiMail, label: 'Email', value: personalInfo.email },
                { icon: FiPhone, label: 'Téléphone', value: personalInfo.phone },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-green-500 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm text-gray-300">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Votre nom" required className={inputClass} />
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Votre email" required className={inputClass} />
            </div>

            <input type="text" name="subject" value={form.subject} onChange={handleChange}
              placeholder="Sujet" required className={inputClass} />

            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Votre message..." required rows={6}
              className={`${inputClass} resize-none`} />

            <button type="submit" disabled={status === 'loading'}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-green-500 text-black font-semibold text-sm uppercase tracking-wide hover:bg-green-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {status === 'loading' ? (
                <><span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin" /> Envoi...</>
              ) : (
                <><FiSend size={15} /> Envoyer le message</>
              )}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-400 bg-green-900/20 px-4 py-3 border border-green-800">
                <FiCheck size={16} /> Message envoyé avec succès !
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-red-400 bg-red-900/20 px-4 py-3 border border-red-800">
                <FiAlertCircle size={16} /> Une erreur est survenue. Veuillez réessayer.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
