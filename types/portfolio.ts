// File: types/portfolio.ts

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  about: string;
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    gmail: string;
  };
}
