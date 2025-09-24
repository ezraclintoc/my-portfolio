import React from 'react';
import { logos } from '../data'; // Import logos from data file

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <header id="home" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="block text-white">Hi — I'm</span>
            <span className="block hero-highlight bg-clip-text text-transparent">
              Ezra Clintoc
            </span>
          </h1>
          <p className="text-lg text-gray-100 mb-6 max-w-xl">
            Frontend engineer with systems experience. Built a simple online card game and a "perelizer" — C++, Python, Go, now frontend: Tailwind, React, Node.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/20 text-white font-medium hover:scale-105 transition">
              View projects
            </a>
            <a href="mailto:ezra@example.com" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white font-medium hover:scale-105 transition">
              Contact me
            </a>
          </div>
          <div className="mt-12 overflow-hidden relative">
            <div className="marquee gap-10">
              {logos.concat(logos).map((logo, idx) => (
                <div key={idx} className="flex-shrink-0">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Interactive Card passed as child */}
        {children}
      </div>
    </header>
  );
}