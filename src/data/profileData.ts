import { Profile } from "../types/profile";

const profileData: Profile = {
  name: "Ragu N",
  title: "Senior Software Engineer",
  about: `👋 I'm a Senior Software Engineer with 3.5+ years of hands-on experience at Accenture, specializing in full-stack development and performance optimization.

💻 My expertise spans React.js, TypeScript, Node.js, and cloud technologies. I've architected Redis caching solutions that reduced latency from 20s to 7s (65% improvement), designed OAuth 2.0 microservices for enterprise authentication, and built scalable micro frontend architectures.

🔍 I'm passionate about writing clean, maintainable code and delivering pixel-perfect UIs. I stay current with modern frameworks and best practices to build products that users love.

🏏 Beyond code, I'm an avid cricket enthusiast who loves exploring new destinations through travel. I also enjoy gaming as a way to unwind and stay connected with friends worldwide.

📨 Let’s connect — whether you’re hiring, collaborating, or geeking out over Full Stack frameworks!`,
  projects: [
    {
      name: "Redis Performance Engineering",
      description:
        "Engineered and deployed Redis caching layer for commerce platform, reducing API latency from 20 seconds to 7 seconds (65% improvement). Implemented cache invalidation strategies and monitoring dashboards.",
    },
    {
      name: "Micro Frontend Architecture",
      description:
        "Designed scalable micro frontend architecture using React, TypeScript, Webpack 5 Module Federation enabling parallel development by 5 teams and seamless independent deployments across 8 applications.",
    },
    {
      name: "WCAG-Compliant UI Component Library",
      description:
        "Built accessible React component library with 100% WCAG AA compliance, keyboard navigation support, screen reader optimization, and comprehensive Storybook documentation.",
    },
  ],

  experience: [
    {
      title: "Senior Software Engineer",
      company: "Accenture",
      startDate: "Dec 2025",
      endDate: "Present",
      description: "Tech Lead for enterprise React applications",
      achievements: [
        "Led development of micro frontend architecture supporting 5 concurrent teams",
        "Optimized bundle size by 40% through strategic code splitting and lazy loading",
        "Implemented comprehensive unit testing achieving 85% code coverage",
        "Mentored 3 junior developers on React best practices and TypeScript patterns",
        "Reduced build time by 35% through Webpack optimization",
        "Architected real-time data dashboard handling 10K+ events/sec",
        "Led migration from JavaScript to TypeScript across 500+ components",
      ],
    },
    {
      title: "Software Engineer",
      company: "Accenture",
      startDate: "Nov 2022",
      endDate: "Nov 2025",
      description: "Full Stack Developer",
      achievements: [
        "Engineered Redis caching layer reducing API response latency from 20s to 7s (65% improvement)",
        "Designed and implemented OAuth 2.0 microservices for secure multi-tenant authentication",
        "Built WCAG-compliant responsive UI components with 100% accessibility score",
        "Developed Node.js backend APIs handling 50K+ daily transactions",
        "Implemented GraphQL layer reducing over-fetching by 30%",
        "Collaborated with UX team to deliver pixel-perfect implementations across 8+ projects",
      ],
    },
  ],

  skills: [
    { name: "React.js", category: "Frontend", proficiency: 95, years: 4, icon: "⚛️", description: "Component architecture, hooks, optimization" },
    { name: "TypeScript", category: "Languages", proficiency: 92, years: 3.5, icon: "📘", description: "Type safety, generics, advanced patterns" },
    { name: "JavaScript ES6+", category: "Languages", proficiency: 95, years: 5, icon: "🟨", description: "Modern JS, async/await, functional programming" },
    { name: "Node.js", category: "Backend", proficiency: 88, years: 3, icon: "🟩", description: "REST APIs, Express, microservices" },
    { name: "Redux Toolkit", category: "Frontend", proficiency: 90, years: 3, icon: "🎯", description: "State management, slices, middleware" },
    { name: "OAuth 2.0", category: "Auth/Security", proficiency: 85, years: 2.5, icon: "🔐", description: "Multi-tenant authentication systems" },
    { name: "Redis", category: "Backend", proficiency: 88, years: 2, icon: "🔴", description: "Caching, session management, pub/sub" },
    { name: "GraphQL", category: "Backend", proficiency: 82, years: 2, icon: "💎", description: "Schema design, resolvers, Apollo" },
    { name: "Webpack", category: "DevOps", proficiency: 85, years: 2.5, icon: "📦", description: "Module federation, code splitting, optimization" },
    { name: "Docker", category: "DevOps", proficiency: 80, years: 2, icon: "🐳", description: "Containerization, compose, registry" },
    { name: "Micro Frontends", category: "Frontend", proficiency: 87, years: 2, icon: "🏗️", description: "Module federation, orchestration, deployment" },
    { name: "HTML5 & CSS3", category: "Frontend", proficiency: 90, years: 4, icon: "🎨", description: "Semantic HTML, CSS Grid, Flexbox" },
    { name: "Jest & Testing Library", category: "Testing", proficiency: 88, years: 3, icon: "🧪", description: "Unit tests, integration tests, snapshots" },
    { name: "Git & GitHub", category: "DevOps", proficiency: 90, years: 4, icon: "🐙", description: "Version control, CI/CD, branching strategies" },
    { name: "REST APIs", category: "Backend", proficiency: 90, years: 3.5, icon: "🌐", description: "RESTful design, HTTP methods, versioning" },
    { name: "PostgreSQL", category: "Backend", proficiency: 82, years: 2.5, icon: "🗄️", description: "Queries, indexing, optimization" },
    { name: "AWS Basics", category: "DevOps", proficiency: 75, years: 1.5, icon: "☁️", description: "EC2, S3, Lambda basics" },
    { name: "Accessibility (WCAG)", category: "Frontend", proficiency: 86, years: 2, icon: "♿", description: "A11y standards, screen readers, ARIA" },
  ],

  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "2025",
      link: "https://www.credly.com",
    },
    {
      name: "GitHub Foundations (GH-200)",
      date: "2024",
      link: "https://www.credly.com",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "MIT, Anna University",
      year: 2022,
      grade: "7.48 CGPA",
    },
    {
      degree: "Higher Secondary",
      field: "Bio-Mathematics",
      institution: "Velammal Matriculation",
      year: 2018,
      grade: "91.5%",
    },
    {
      degree: "Secondary",
      field: "General",
      institution: "N.A.Konduraja Memorial High School",
      year: 2016,
      grade: "93.2%",
    },
  ],

  contact: {
    email: "ragunpkm2001@gmail.com",
    linkedin: "https://www.linkedin.com/in/ragu-n-252010181/",
    github: "https://github.com/ragunrg",
  },
};

export default profileData;
