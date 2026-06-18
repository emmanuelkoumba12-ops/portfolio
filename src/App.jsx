import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Tools />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
