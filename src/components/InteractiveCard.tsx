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

  // Auto-rotate projects — clears both the interval and any pending fade timeout on unmount
  useEffect(() => {
    if (projects.length <= 1) return;
    let fadeTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setIsFadingOut(true);
      fadeTimeout = setTimeout(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
        setIsFadingOut(false);
      }, 500);
    }, 20000);
    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
    };
  }, [projects.length]);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
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
  if (!project) return null;

  return (
    <div
      ref={cardRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full max-w-80 mx-auto h-48 rounded-2xl shadow-md transform-gpu transition-all duration-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 ${isFadingOut ? "opacity-0" : "opacity-100"}`}
      style={{ transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1.02)` }}
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
        <div className="absolute inset-0 p-6 flex flex-col justify-between overflow-hidden">
          <div className="min-w-0">
            <h3 className="text-xl font-semibold truncate">{project.title}</h3>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm line-clamp-3">{project.desc}</p>
          </div>
          <div className="flex gap-3 mt-4">
            {project.demo && <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-teal-700 dark:bg-teal-600 text-white hover:bg-teal-800 dark:hover:bg-teal-500 transition text-sm" href={project.demo} target="_blank" rel="noreferrer">Live demo</a>}
            {project.code && <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition text-sm" href={project.code} target="_blank" rel="noreferrer">View code</a>}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(15,118,110,0.08), rgba(15,118,110,0) 30%)`,
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" />
    </div>
  );
}
