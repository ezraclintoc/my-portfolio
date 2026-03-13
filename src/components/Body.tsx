import { projects } from "../data";

export function Projects() {
  return (
    <main id="projects" className="max-w-6xl mx-auto px-6 pb-24">
      <h2 data-scroll-reveal className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 flex items-center gap-3">
        <span className="block w-1 h-8 rounded-full bg-teal-700 dark:bg-teal-500 shrink-0" aria-hidden="true" />
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-scroll-reveal
            style={{ transitionDelay: `${i * 80}ms` }}
            className="project-card relative rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-300 dark:hover:border-teal-600 shadow-sm hover:shadow-[0_16px_48px_-8px_rgba(15,118,110,0.18)] dark:hover:shadow-[0_16px_48px_-8px_rgba(45,212,191,0.1)] hover:scale-105 transition text-neutral-900 dark:text-neutral-50 w-auto h-64"
          >
            <div className="project-card-content absolute inset-0 p-6 flex flex-col justify-between overflow-hidden">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold truncate">{p.title}</h3>
                <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm line-clamp-3">{p.desc}</p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                {p.demo && (
                  <a
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-teal-700 dark:bg-teal-600 text-white hover:bg-teal-800 dark:hover:bg-teal-500 active:scale-95 transition text-sm"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                )}
                {p.code && (
                  <a
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 active:scale-95 transition text-sm"
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code
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
    "Rust",
    "Python",
    "Golang",
    "HTML",
    "CSS",
    "GLSL",
    "JavaScript",
    "React",
    "Tailwind",
    "Node",
  ];
  return (
    <section data-scroll-reveal className="mt-12">
      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4 flex items-center gap-3">
        <span className="block w-1 h-6 rounded-full bg-teal-700 dark:bg-teal-500 shrink-0" aria-hidden="true" />
        Languages & Tools
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <div
            key={s}
            className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300 hover:scale-110 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-teal-400 transition cursor-default select-none"
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
    <section data-scroll-reveal className="mt-12">
      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4 flex items-center gap-3">
        <span className="block w-1 h-6 rounded-full bg-teal-700 dark:bg-teal-500 shrink-0" aria-hidden="true" />
        Socials
      </h3>
      <div className="flex flex-wrap gap-3">
        {socials.map((s) => (
          <div
            key={s.tag}
            className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
          >
            <a href={s.url} target="_blank" rel="noreferrer">{s.tag}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
