
import { Project, TimelineItem, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Brutal",
    description: "A high-performance online store built with Next.js and Tailwind, emphasizing fast interactions and bold UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    image: "https://picsum.photos/seed/p1/600/400"
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description: "Integrated Gemini API for real-time customer support with persistent memory and personality.",
    tags: ["Gemini", "Node.js", "Redis"],
    link: "#",
    image: "https://picsum.photos/seed/p2/600/400"
  },
  {
    id: 3,
    title: "Portfolio Minimalism 1.0",
    description: "The previous iteration of my personal site focused on clean lines and negative space.",
    tags: ["Astro", "Framer Motion"],
    link: "https://farreltito.netlify.app/",
    image: "https://picsum.photos/seed/p3/600/400"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 1,
    type: 'experience',
    title: "Lead Frontend Engineer",
    subtitle: "Creative Tech Solutions",
    date: "2023 - Present",
    description: "Architecting scalable React architectures and mentoring junior developers in modern CSS practices."
  },
  {
    id: 2,
    type: 'experience',
    title: "UI/UX Designer",
    subtitle: "Freelance Agency",
    date: "2021 - 2023",
    description: "Crafting digital experiences for 20+ global clients with a focus on accessibility and bold aesthetics."
  },
  {
    id: 3,
    type: 'education',
    title: "Bachelor of Computer Science",
    subtitle: "Telkom University",
    date: "2018 - 2022",
    description: "Focused on Human-Computer Interaction and Software Engineering principles."
  },
  {
    id: 4,
    type: 'education',
    title: "UI Design Bootcamp",
    subtitle: "Design School X",
    date: "2021",
    description: "Intensive 6-month program covering visual hierarchy, typography, and neobrutalist trends."
  }
];

export const SKILLS: Skill[] = [
  { name: "React", icon: "⚛️", color: "bg-blue-400" },
  { name: "Next.js", icon: "▲", color: "bg-white" },
  { name: "TypeScript", icon: "TS", color: "bg-blue-600" },
  { name: "Tailwind", icon: "🌊", color: "bg-cyan-400" },
  { name: "Framer Motion", icon: "✨", color: "bg-pink-400" },
  { name: "Gemini API", icon: "🤖", color: "bg-yellow-400" },
  { name: "Node.js", icon: "🟢", color: "bg-green-400" },
  { name: "Figma", icon: "🎨", color: "bg-orange-400" },
];
