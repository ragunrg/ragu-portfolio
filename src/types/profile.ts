export interface Project {
  name: string;
  description: string;
  link: string;
  technologies?: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements?: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Certifications {
  name: string;
  date: string;
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Profile {
  name: string;
  title: string;
  about: string;
  experience?: WorkExperience[];
  projects: Project[];
  skills: string[];
  contact: Contact;
  certifications: Certifications[];
  education?: any[];
}
