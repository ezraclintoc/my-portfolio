import { useState, useEffect } from 'react';
import { Moon, Sun, Code, Home, Mail } from "lucide-react";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navigation({ isDark, onThemeToggle }: NavigationProps) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = ['home', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function navClass(id: string) {
    return `flex flex-col items-center px-3 py-2 min-w-[44px] hover:scale-105 transition ${
      active === id
        ? 'text-teal-600 dark:text-teal-400'
        : 'text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400'
    }`;
  }

  return (
    <nav className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-auto">
      <div className="flex items-center gap-6 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <a href="#home" className={navClass('home')}>
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#projects" className={navClass('projects')}>
          <Code className="w-5 h-5" />
          <span className="text-xs mt-1">Projects</span>
        </a>
        <a href="#contact" className={navClass('contact')}>
          <Mail className="w-5 h-5" />
          <span className="text-xs mt-1">Contact</span>
        </a>
        <button
          onClick={onThemeToggle}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex flex-col items-center px-3 py-2 min-w-[44px] text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 hover:scale-105 transition"
        >
          {isDark
            ? <Sun key="sun" className="w-5 h-5 theme-icon" />
            : <Moon key="moon" className="w-5 h-5 theme-icon" />
          }
          <span className="text-xs mt-1">{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
}
