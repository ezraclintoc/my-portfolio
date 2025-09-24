import { CheckIcon } from "lucide-react";
import { projects } from "../data";

export function Projects({}) {
  return (
    <main id="projects" className="max-w-6xl mx-auto px-6 pb-24">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl p-6 bg-black/30 border border-white/10 backdrop-blur-sm hover:scale-105 transition text-white w-auto h-64"
          >
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
              <div className="flex gap-3 mt-4">
                {p.demo && (
                  <a
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/20 text-white hover:bg-white/30 transition"
                    href={p.demo}
                  >
                    Demo
                  </a>
                )}
                {p.code && (
                  <a
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                    href={p.code}
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Languages />
      <Socials />
    </main>
  );
}

function Languages() {
  const skills = [
    "C++",
    "Python",
    "Golang",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Node",
  ];
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Languages & Tools
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="px-3 py-2 bg-black/30 border border-white/20 rounded-full text-sm"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

function Socials() {
  const socials = [
    {
      tag: "Github",
      url: "https://github.com/ezraclintoc"
    },
    {
      tag: "Youtube",
      url: "https://youtube.com/@ezraclintoc"
    }
  ]
  return (
      <section className="mt-12">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Socials
        </h3>
        <div className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <div
            key={s.tag}
            className="px-3 py-2 bg-black/30 border border-white/20 rounded-full text-sm"
          >
            <a href={s.url}>{s.tag}</a>
          </div>
        ))}
      </div>
      </section>
    );
}
