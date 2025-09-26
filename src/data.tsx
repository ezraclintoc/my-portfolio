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

// An array of icon components for the tech marquee
export const logos = [
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

// An array of project objects
export const projects = [
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
  {
    title: "Impromptu Generator",
    desc: "A website that generates prompts for impromptu speaking.",
    tags: ["Vite", "Tailwind", "React"],
    demo: "https://impromptu-six.vercel.app/",
    code: "https://github.com/ezraclintoc/Impromptu"
  }
];