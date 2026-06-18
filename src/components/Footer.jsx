import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="font-heading text-xl font-semibold text-white">
              EK<span className="text-accent">.</span>
            </span>
            <p className="text-sm mt-1">Développeur Full Stack</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {['#hero', '#about', '#experience', '#projects', '#contact'].map((href) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors capitalize"
              >
                {href.slice(1)}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: personalInfo.github, icon: FiGithub },
              { href: personalInfo.linkedin, icon: FiLinkedin },
              { href: `mailto:${personalInfo.email}`, icon: FiMail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} KOUMBA KOUMBA Wisy Kedy Emmanuel. Tous droits réservés.</p>
          <p>Construit avec React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
