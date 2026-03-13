import { useEffect } from 'react';
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { InteractiveCard } from "./components/InteractiveCard";
import { Projects } from "./components/Body";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { projects } from './data';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggle } = useTheme();

  // Scroll-reveal: add .revealed when elements enter the viewport
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-scroll-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      <Navigation isDark={isDark} onThemeToggle={toggle} />
      <Hero>
        <InteractiveCard projects={projects} />
      </Hero>
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}
