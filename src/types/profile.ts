export interface Project {
  name: string;
  description: string;
  link?: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Ceritifications {
  name: string;
  date: string;
  link: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  years: number;
  icon: string;
  description: string;
}

export interface Education {
  degree: string;
  field?: string;
  institution: string;
  year: number;
  grade?: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  experience: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  contact: Contact;
  certifications: Ceritifications[];
  education: Education[];
}
