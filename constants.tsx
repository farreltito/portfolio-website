
import { Project, TimelineItem, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "BluePay Indonesia",
    description: "An Aqcuiring merchant apps that related to QRIS payment.",
    tags: ["Next.js", "TypeScript", "Golang", "Tailwind"],
    link: "https://bluepay.id/",
    image: "https://picsum.photos/seed/p1/600/400"
  },
  {
    id: 2,
    title: "Quickbill Indonesia",
    description: "Developed frontend features for a fintech platform that streamlines digital invoicing, online payments, and transaction reconciliation for businesses.",
    tags: ["Next.js", "TypeScript", "Golang", "Tailwind"],
    link: "https://quickbill.id/",
    image: "/(public)/images/projects/logo-quickbill.png"
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
    title: "Bachelor of Computer Science",
    subtitle: "University of Surabaya (UBAYA)",
    date: "2018 - 2025",
    description: "Focused on Information Management and Enterprise Systems (IMES). (3,32 GPA out of 4,00)"
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
