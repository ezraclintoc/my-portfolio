import React, { useRef, useEffect, useState } from "react";
import { Github, ExternalLink, Code, Home } from "lucide-react";
import {
  SiCplusplus,
  SiPython,
  SiGo,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiOllama,
  SiOpengl,
  SiCreality,
  SiKicad,
} from "react-icons/si";

export default function App() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, shineX: 50, shineY: 50 });
  const [theme, setTheme] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTheme((t) => (t + 1) % 3), 10000);
    return () => clearInterval(id);
  }, []);

  function handleMove(e) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 18;
    const rx = (0.5 - py) * 18;
    setTilt({ rx, ry, shineX: px * 100, shineY: py * 100 });
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0, shineX: 50, shineY: 50 });
  }

  const themes = [
    "bg-gradient-to-r from-purple-600 via-pink-500 to-red-600",
    "bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500",
    "bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500",
  ];

  const logos = [
    <SiCplusplus size={40} color="white" />,
    <SiPython size={40} color="white" />,
    <SiGo size={40} color="white" />,
    <SiReact size={40} color="white" />,
    <SiTailwindcss size={40} color="white" />,
    <SiNodedotjs size={40} color="white" />,
    <SiOllama size={40} color="white" />,
    <SiOpengl size={40} color="white" />,
    <SiCreality size={40} color="white" />,
    <SiKicad size={40} color="white" />,
  ];

  const projects = [
    {
      title: "Set",
      desc: "A multiplayer online card game with real-time play — Built without backend",
      tags: ["Javascript", "Pusher.js", "two.js"],
      code: "https://github.com/ezraclintoc/set",
      demo: "https://ezraclintoc.github.io/set",
    },
    {
      title: "Perlerizer",
      desc: "A program to pixelate an image. It includes a pallete, it is purpose built for perler beads or hama beads.",
      tags: ["Python", "Algorithm"],
      code: "https://github.com/ezraclintoc/perlerizer",
    },
    {
      title: "Wallpaper",
      desc: "A curated list of wallpapers",
      tags: ["Wallpapers"],
      code: "https://github.com/ezraclintoc/wallpapers",
    },
    {
      title: "Debate Club Website",
      desc: "A website for the CFC debate club. It has a secure login system and is hosted on vercel.",
      tags: ["React", "Node", "Tailwind"],
      demo: "https://cfc.is-local.org"
    },
  ];

  // State for current project and rotation
  const [currentProject, setCurrentProject] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Auto-rotate projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true); // Start fade-out
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length); // Change project AFTER fade-out
        setIsFadingOut(false); // Start fade-in
      }, 500); // Match CSS transition duration
    }, 20000);

    return () => clearInterval(interval);
  }, [projects.length]);

  // Update the card JSX to show dynamic project content

  return (
    <div
      className={`min-h-screen ${themes[theme]} transition-colors duration-2000 ease-in-out`}
    >
      {/* NAV */}
      <nav className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-auto">
        <div className="flex items-center gap-6 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/10 text-white">
          <a
            href="#home"
            className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </a>
          <a
            href="#projects"
            className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition"
          >
            <Code className="w-5 h-5" />
            <span className="text-xs mt-1">Projects</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="text-xs mt-1">Contact</span>
          </a>
          <a
            href="https://github.com/ezraclintoc"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition"
          >
            <Github className="w-5 h-5" />
            <span className="text-xs mt-1">GitHub</span>
          </a>
        </div>
      </nav>

      <div className="backdrop-blur-sm bg-black/40 min-h-screen text-gray-100">
        <header id="home" className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                <span className="block text-white">Hi — I m</span>
                <span className="block hero-highlight bg-clip-text text-transparent">
                  Ezra Clintoc
                </span>
              </h1>
              <p className="text-lg text-gray-100 mb-6 max-w-xl">
                Frontend engineer with systems experience. Built a simple online
                card game and a "perelizer" — C++, Python, Go, now frontend:
                Tailwind, React, Node.
              </p>

              <div className="flex gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/20 text-white font-medium hover:scale-105 transition"
                >
                  View projects
                </a>
                <a
                  href="mailto:ezra@example.com"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white font-medium hover:scale-105 transition"
                >
                  Contact me
                </a>
              </div>

              {/* Custom icon loop (manual) */}
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

            {/* 3D interactive card */}
            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className={`relative w-80 h-48 rounded-2xl shadow-2xl transform-gpu 
                transition-all duration-500 bg-black/40 text-white 
                ${isFadingOut ? "opacity-0" : "opacity-100"}`}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.02)`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {projects[currentProject].title}
                    </h3>
                    <p className="mt-2 text-gray-200 text-sm">
                      {projects[currentProject].desc}
                    </p>
                  </div>

                  {/* Buttons at the bottom left */}
                  <div className="flex gap-3 mt-4">
                    {projects[currentProject].demo?.length ? (
                      <a
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition"
                        href={projects[currentProject].demo}
                      >
                        Demo
                      </a>
                    ) : null}
                    {projects[currentProject].code?.length ? (
                      <a
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                        href={projects[currentProject].code}
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(600px circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.25), rgba(255,255,255,0) 30%)`,
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" />
            </div>

          </div>
        </header>
        {/* Projects */}
        <main id="projects" className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl p-6 bg-black/30 border border-white/10 backdrop-blur-sm hover:scale-105 transition text-white w-auto h-64"
              >
                {/* <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"> */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-gray-200 text-sm">{p.desc}</p>
                  </div>

                  <div className="mt-4 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons at the bottom left */}
                  <div className="flex gap-3 mt-4">
                    {p.demo?.length ? (
                      <a
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition"
                        href={p.demo}
                      >
                        Demo
                      </a>
                    ) : null}
                    {p.code?.length ? (
                      <a
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                        href={p.code}
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Languages & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "C++",
                "Python",
                "Golang",
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Node",
              ].map((s) => (
                <div
                  key={s}
                  className="px-3 py-2 bg-black/30 border border-white/20 rounded-full text-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Contact/Footer */}
        <footer
          id="contact"
          className="mt-12 border-t border-white/20 py-8 text-center text-gray-200"
        >
          <div className="max-w-4xl mx-auto px-6">
            <p>
              Interested in collaborating? Reach out at{" "}
              <a href="mailto:ezraclintoc@gmail.com" className="underline">
                ezraclintoc@gmail.com
              </a>
              .
            </p>
            <p className="mt-3 text-sm">Made with ❤️ — Ezra Clintoc</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
