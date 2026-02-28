// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  category: string;
  items: string[];
}