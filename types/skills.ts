// File: types/skills.ts

// Har possible category add kar di hai taaki koi error na aaye
export type SkillCategory =
  | "Backend & Systems"
  | "Databases"
  | "Frontend & Web"
  | "CS Concepts"
  | "Tools & DevOps"
  | "Tools"
  | "AI & Modern Stack";

// Har possible level add kar diya hai
export type SkillProficiency =
  | "Core"
  | "Advanced"
  | "Intermediate"
  | "Working With"
  | "Learning"
  | "Used in Projects";

export interface SkillCategoryData {
  title: SkillCategory;
  description: string;
  iconName: string;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: SkillProficiency;
  description: string;
  projects?: string[];
  featured?: boolean;
}
