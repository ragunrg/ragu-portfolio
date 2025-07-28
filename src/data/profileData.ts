import { Profile } from "../types/profile";

const profileData: Profile = {
  name: 'Ragu N',
  title: 'Frontend Developer',
  about:
  `👋 Hi, I’m Ragu — a Full Stack Developer with 2.8 years of experience building dynamic, scalable, and user-friendly web applications.

💻 I specialize in React.js, TypeScript, GraphQL, Microsoft .NET, and Micro Frontend Architecture. At Accenture, I’ve contributed to enterprise-level digital solutions, working with cross-functional teams to deliver performant and maintainable UIs.

🔍 I'm passionate about clean code, reusable components, and pixel-perfect design. I continuously explore modern frontend technologies to elevate user experience and development efficiency.

🎯 Currently seeking roles that challenge both my technical and architectural skills — where I can make meaningful contributions to impactful products.

📨 Let’s connect — whether you’re hiring, collaborating, or geeking out over Full Stack frameworks!`
,
  projects: [
    {
      name: 'Micro Frontend Dashboard',
      description:
        'Designed and implemented a scalable micro frontend architecture using React, TypeScript, Webpack 5 Module Federation, enabling parallel development by multiple teams and seamless deployment of independent modules.',
      link: 'https://github.com/yourusername/micro-frontend-dashboard',
    },
    {
      name: 'GraphQL Admin Panel',
      description:
        'Built a secure and responsive admin dashboard using GraphQL and React. Integrated authentication, dynamic role-based access, and real-time data updates with Apollo Client.',
      link: 'https://github.com/yourusername/graphql-admin-panel',
    },
    {
      name: 'Portfolio Website',
      description:
        'Developed this portfolio using React, TypeScript, Redux Toolkit, and Tailwind CSS (no longer using Tailwind). Emphasized accessibility, theming support (dark/light), and modular reusable components.',
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      name: 'Azure Resource Tracker',
      description:
        'Built a lightweight dashboard to visualize and monitor Azure resources using Azure SDK, React.js, and Chart.js. Integrated basic authentication and role-based dashboards.',
      link: 'https://github.com/yourusername/azure-resource-tracker',
    },
  ],

  skills: [
    'React.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'GraphQL',
    'Micro Frontend Architecture',
    'Redux Toolkit',
    'HTML5 & CSS3',
    'REST APIs',
    'Webpack / Module Federation',
    'Git & GitHub',
    'Jest & React Testing Library',
    'Responsive Design',
    'Azure Fundamentals',
  ],

  certifications: [
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      date: '2025',
      link: 'https://learn.microsoft.com/en-us/users/ragun-3257/credentials/f04e05cf7e1e7d5d?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },
  ],

  contact: {
    email: 'ragunpkm2001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ragu-n-252010181/',
    github: 'https://github.com/ragunrg',
  },
};

export default profileData;
