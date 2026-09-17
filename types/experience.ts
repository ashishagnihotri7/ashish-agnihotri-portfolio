// File: types/experience.ts

export type TimelineCategory =
  | "Experience"
  | "Education"
  | "Entrepreneurship"
  | "Leadership";

export interface TimelineItem {
  id: string;
  category: TimelineCategory;
  role: string;
  organization: string;
  duration: string;
  status?: string;
  shortDescription?: string;
  details?: string[];
  technologies?: string[];
  skills?: string[];
  cgpa?: string;
  isEducationAnchor?: boolean; // Ye navbar scroll ke kaam aayega
}
