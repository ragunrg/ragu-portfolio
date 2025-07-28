export interface Project {
    name: string;
    description: string;
    link: string;
  }
  
  export interface Contact {
    email: string;
    linkedin: string;
    github: string;
  }

  export interface Ceritifications
  {
    name: string;
    date: string;
    link: string;
  }
  
  export interface Profile {
    name: string;
    title: string;
    about: string;
    projects: Project[];
    skills: string[];
    contact: Contact;
    certifications: Ceritifications[];
  }
  