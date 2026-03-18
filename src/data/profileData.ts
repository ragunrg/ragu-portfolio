import { Profile } from "../types/profile";

const profileData: Profile = {
  name: "Ragu N",
  title: "Senior Software Engineer",
  about: `👋 Senior Software Engineer with 3.5+ years at Accenture delivering scalable enterprise full-stack applications using React.js, Redux, TypeScript, GraphQL, and .NET Core.

💻 Proven expertise in backend performance engineering (Redis caching, parallel async execution), Microservices, System Design, Azure AD (OAuth 2.0, broker auth, S2S token flows), downstream service integration, and CI/CD via GitHub Actions. Tech Lead for a pod of 4 engineers.

🚀 Key Achievements: Reduced critical API response time by 65% through Redis caching & parallel execution (20s → 7s). Architected OAuth 2.0 flows for secure microservice communication. Built micro-frontend architecture enabling independent deployment of 6+ services.

🔍 Passionate about performance optimization, clean architecture, system design, and mentoring teams to deliver high-impact solutions.

� Beyond code, I'm an avid cricket enthusiast who loves exploring new destinations through travel. I also enjoy gaming as a way to unwind and stay connected with friends worldwide.

�🎯 AZ-900 & GH-200 Certified. Seeking Senior/Lead Frontend, Full-Stack, or Backend Engineer roles.

📨 Let's connect — whether you're hiring, collaborating, or discussing Full Stack enterprise architecture!`,
  experience: [
    {
      company: "Accenture",
      position: "Senior Software Engineer",
      duration: "Dec 2025 - Present",
      description:
        "Tech Lead driving full-stack solutions using React.js, Redux, .NET Core, GraphQL, Redis, PostgreSQL, Azure AD, and GitHub Actions. Leading pod of 4 engineers on enterprise microservices.",
      achievements: [
        "Redis Cache & Performance Engineering: Reduced critical API response time from 20s to under 7s (65% improvement) through Redis caching and parallel async execution in .NET Core backend",
        "Azure AD & Broker Auth: Designed OAuth 2.0 token generation and broker auth flows for secure S2S communication across 5+ microservices",
        "Downstream Service Integration: Architected downstream API communication patterns with token-based auth ensuring reliable inter-service data flow",
        "Tech Lead: Led pod of 4 engineers on code reviews, architecture decisions, Redis/microservices mentoring, reducing PR rework by 40%",
        "Full-Stack Delivery: Owned end-to-end features integrating React.js+Redux with .NET Core microservices, cutting integration time by 30%",
        "Database & GraphQL Optimization: Optimized PostgreSQL queries improving throughput by 25%; designed GraphQL resolvers with server-side caching cutting latency by 35%",
        "CI/CD: Owned GitHub Actions pipelines achieving near-zero downtime releases across environments",
      ],
    },
    {
      company: "Accenture",
      position: "Software Engineer",
      duration: "Nov 2022 - Nov 2025",
      description:
        "Full-stack engineer delivering React.js and TypeScript frontends integrated with GraphQL/REST microservices. Focused on micro-frontend architecture, npm modernization, and WCAG accessibility.",
      achievements: [
        "Micro Frontend Architecture: Built modular micro-frontend modules using React.js, Redux, and TypeScript enabling independent deployment of 6+ frontend services",
        "Microservices Integration: Integrated React.js frontends with downstream microservices via GraphQL and REST APIs for real-time UI state synchronization",
        "npm & Codebase Modernization: Refactored monolithic components into reusable npm-published libraries, cutting developer onboarding time by 3 days",
        "Accessible UI: Delivered Figma-to-code responsive, WCAG-compliant interfaces across all browsers and devices",
        "Frontend Stability: Built Jest + React Testing Library test suites catching 70%+ of regressions before production",
        "Agile Leadership: Led sprint planning, backlog grooming, and code reviews consistently delivering features on schedule",
      ],
    },
  ],
  projects: [
    {
      name: "Redis Performance Engineering & Microservices",
      description:
        "Architected and implemented Redis caching layer with TTL strategies and parallel async execution in .NET Core backend. Reduced API response time by 65% (20s → 7s) for high-traffic workflows. Designed OAuth 2.0 token generation and broker auth flows for secure S2S communication across 5+ microservices.",
      link: "https://github.com/ragunrg",
      technologies: ["Redis", ".NET Core", "PostgreSQL", "OAuth 2.0", "Async Execution", "System Design"],
    },
    {
      name: "Micro Frontend & React/Redux Architecture",
      description:
        "Built scalable micro-frontend modules using React.js, Redux, and TypeScript enabling independent deployment of 6+ frontend services. Integrated with GraphQL and REST APIs for real-time UI state synchronization. Refactored monolithic components into reusable npm-published libraries.",
      link: "https://github.com/ragunrg",
      technologies: ["React.js", "Redux", "TypeScript", "GraphQL", "Micro Frontend", "npm"],
    },
    {
      name: "WCAG-Compliant Figma-to-Code UI System",
      description:
        "Delivered responsive, WCAG-compliant interfaces across all browsers and devices. Implemented accessible components from Figma designs. Built Jest + React Testing Library test suites ensuring 70%+ regression coverage before production deployment.",
      link: "https://github.com/ragunrg",
      technologies: ["React.js", "TypeScript", "WCAG Accessibility", "Figma", "Jest", "React Testing Library"],
    },
  ],

  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "SQL",
    "HTML5",
    "CSS3",
    "React.js",
    "Redux",
    "Micro Frontend Architecture",
    "Responsive Web Design",
    "WCAG Accessibility",
    "Figma-to-Code",
    "npm",
    ".NET Core",
    "GraphQL",
    "REST API",
    "Microservices",
    "Downstream Integration",
    "PostgreSQL",
    "SQL Server",
    "Redis (Caching & TTL Strategy)",
    "Parallel Async Execution",
    "Query Optimization",
    "Server-side Caching",
    "Azure Active Directory",
    "OAuth 2.0",
    "Client Credentials Flow",
    "Broker Auth",
    "S2S Token Generation",
    "Managed Identity",
    "GitHub Actions (CI/CD)",
    "Azure",
    "npm Package Management",
    "Multi-environment Deployments",
    "Jest",
    "React Testing Library",
    "Git",
    "Postman",
    "JIRA",
    "Figma",
    "Agile/Scrum",
    "System Design",
  ],

  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      date: "2025",
      link: "https://learn.microsoft.com/en-us/users/ragun-3257/credentials/f04e05cf7e1e7d5d",
    },
    {
      name: "GitHub Actions Certified (GH-200)",
      date: "2025",
      link: "https://github.com/ragunrg",
    },
  ],

  contact: {
    email: "ragunpkm2001@gmail.com",
    linkedin: "https://www.linkedin.com/in/ragu-n-252010181/",
    github: "https://github.com/ragunrg",
  },

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Madras Institute of Technology, Anna University",
      year: "2022",
      grade: "7.48 CGPA",
    },
    {
      degree: "Higher Secondary",
      field: "Bio-Mathematics",
      institution: "Velammal Matriculation Hr. Sec. School",
      year: "2018",
      grade: "91.5%",
    },
    {
      degree: "Secondary",
      field: "General",
      institution: "N.A.Konduraja Memorial High School",
      year: "2016",
      grade: "93.2%",
    },
  ],
};

export default profileData;
