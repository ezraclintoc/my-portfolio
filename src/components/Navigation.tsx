import { Github, ExternalLink, Code, Home } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-auto">
      <div className="flex items-center gap-6 bg-black/30 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg border border-white/10 text-white">
        <a href="#home" className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition">
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#projects" className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition">
          <Code className="w-5 h-5" />
          <span className="text-xs mt-1">Projects</span>
        </a>
        <a href="#contact" className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition">
          <ExternalLink className="w-5 h-5" />
          <span className="text-xs mt-1">Contact</span>
        </a>
        <a href="https://github.com/ezraclintoc" target="_blank" rel="noreferrer" className="flex flex-col items-center text-sm px-3 py-1 hover:scale-105 transition">
          <Github className="w-5 h-5" />
          <span className="text-xs mt-1">GitHub</span>
        </a>
      </div>
    </nav>
  );
}