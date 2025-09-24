import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { InteractiveCard } from "./components/InteractiveCard";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { projects } from './data'; 

export default function App() {
  const [theme, setTheme] = useState(0);

  const themes = [
    "bg-gradient-to-r from-purple-600 via-pink-500 to-red-600",
    "bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500",
    "bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500",
  ];

  // Effect to cycle through themes
  useEffect(() => {
    const id = setInterval(() => setTheme((t) => (t + 1) % 3), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`min-h-screen ${themes[theme]} transition-colors duration-2000 ease-in-out`}>
      <Navigation />
      <div className="backdrop-blur-sm bg-black/40 min-h-screen text-gray-100">
        <Hero>
          <InteractiveCard projects={projects} />
        </Hero>
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}