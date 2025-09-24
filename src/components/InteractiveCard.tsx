import React, { useRef, useState, useEffect } from 'react';

// Define the type for a single project
type Project = {
  title: string;
  desc: string;
  code?: string;
  demo?: string;
};

export function InteractiveCard({ projects }: { projects: Project[] }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, shineX: 50, shineY: 50 });
  const [currentProject, setCurrentProject] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setIsFadingOut(false);
      }, 500);
    }, 20000);
    return () => clearInterval(interval);
  }, [projects.length]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
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

  const project = projects[currentProject];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative w-80 h-48 rounded-2xl shadow-2xl transform-gpu transition-all duration-500 bg-black/40 text-white ${isFadingOut ? "opacity-0" : "opacity-100"}`}
      style={{ transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.02)` }}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-200 text-sm">{project.desc}</p>
          </div>
          <div className="flex gap-3 mt-4">
            {project.demo && <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition" href={project.demo}>Demo</a>}
            {project.code && <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition" href={project.code}>Code</a>}
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
  );
}