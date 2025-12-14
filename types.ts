export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string; // e.g., "Full Stack", "Mobile", "Backend"
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  liveDemoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
