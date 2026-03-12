
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
    title: "Brain Domain Ltd",
    description: "Developed an Automation System for Industrial application using C# and .NET.",
    tags: ["C#", ".NET"],
    link: "https://brain-domain.com/",
    image: "https://picsum.photos/seed/p3/600/400"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 1,
    type: 'experience',
    title: "Fullstack Developer",
    subtitle: "Quickbill Indonesia",
    date: "2025 - Present",
    description: "Developing Digital Invoicing Platform using Next.js and TypeScript."
  },
  {
    id: 2,
    type: 'experience',
    title: "Fullstack Developer",
    subtitle: "Brain Domain Ltd",
    date: "2025 - Present",
    description: "Developing Industrial Automation using C# and .NET."
  },
  {
    id: 3,
    type: 'education',
    title: "Bootcamp Fullstack Software Engineer",
    subtitle: "RevoU",
    date: "2025 - 2026",
    description: "Learned Fullstack Development using React, Next.js, TypeScript, and Tailwind."
  },
  {
    id: 4,
    type: 'experience',
    title: "Basketball Coach Assistant",
    subtitle: "DBL Academy Surabaya - Part Time",
    date: "2024",
    description: "Assisting basketball coach in training for kids age 3 until age 12."
  },
  {
    id: 5,
    type: 'experience',
    title: "Web Development Intern",
    subtitle: "GAOTek Inc.",
    date: "2024",
    description: "Developed a web application using WordPress and PHP."
  },
  {
    id: 6,
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
  { name: "C#", icon: "C#", color: "bg-red-400" },
  { name: ".NET", icon: ".NET", color: "bg-blue-400" },
  { name: "Golang", icon: "Golang", color: "bg-blue-600" },
  { name: "Node.js", icon: "🟢", color: "bg-green-400" },
  { name: "Flutter", icon: "Flutter", color: "bg-blue-400" },
];
