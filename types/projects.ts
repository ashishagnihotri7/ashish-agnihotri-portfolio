// File: types/projects.ts

export type ProjectCategory =
  | "Backend Architecture"
  | "Full Stack"
  | "Frontend & Web"
  | "Entrepreneurship";

export interface ProjectLink {
  type: "github" | "live" | "demo";
  url: string;
  label?: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface EngineeringDecision {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;

  problemStatement?: string;
  solution?: string;
  myRole?: string;
  engineeringDecisions?: EngineeringDecision[];
  challenges?: ProjectChallenge[];
  futureRoadmap?: string[];

  features: string[];
  techStack: string[];
  links: ProjectLink[];
  featured: boolean;
  year: string;
}
