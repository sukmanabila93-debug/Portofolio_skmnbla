// src/data/portfolio.ts
import { Project, Skill } from "../types";

export const skills: Skill[] = [
  {
    category: "System Analysis & Design",
    items: ["UML", "ERD", "Microservices", "Agile/Scrum"]
  },
  {
    category: "Development",
    items: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "HTML & CSS", "PHP", "Code Eigniter4", "JavaScript"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Rancang Bangun Repository Aplikasi Karya Tulis Sistem Informasi IPI Garut",
    description: "Membangun aplikasi mobile dan mengintegrasikan layanan backend untuk sistem arsip digital akademik.",
    role: "Full-Stack Mobile Developer",
    techStack: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    imageUrl: "/images/repository.jpg", 
    githubUrl: "https://github.com/sukmanabila93-debug/SI_Repository"
  }
];