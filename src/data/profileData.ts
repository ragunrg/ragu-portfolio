import { Profile } from "../types/profile";

const profileData: Profile = {
  name: "Ragu N",
  title: "Senior Software Engineer",
 about:  `👋 Senior Software Engineer with 3.5+ years at Accenture delivering scalable enterprise full-stack applications using React.js, Redux, TypeScript, GraphQL, and .NET Core.

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
      ]
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
      name: "Redis Performance Engineering",
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
