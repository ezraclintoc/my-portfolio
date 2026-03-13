import React from 'react';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <header id="home" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="mb-6">
            <span className="block text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] mb-3 animate-in">Hi — I'm</span>
            <span className="block hero-highlight animate-in animate-delay-100">
              Ezra Clintoc
            </span>
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-6 max-w-xl animate-in animate-delay-200">
            I build whatever the problem needs. From Rust CLIs and AI agents to multiplayer games and web apps.
          </p>
          <div className="flex gap-3 animate-in animate-delay-300">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-teal-700 dark:bg-teal-600 text-white font-medium hover:bg-teal-800 dark:hover:bg-teal-500 hover:scale-105 active:scale-95 transition">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-neutral-900 dark:bg-neutral-700 text-white font-medium hover:bg-neutral-700 dark:hover:bg-neutral-600 hover:scale-105 active:scale-95 transition">
              Contact me
            </a>
          </div>
        </div>
        {/* Interactive Card */}
        <div className="animate-in animate-delay-500">
          {children}
        </div>
      </div>
    </header>
  );
}
