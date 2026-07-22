export const profile = {
  name: "Ammar Yasser",
  title: "React Native Developer",
  heroLine:
    "I build and ship cross-platform mobile apps for clients in Saudi Arabia and beyond.",
  email: "ammar.business24@gmail.com",
  github: "https://github.com/ammarasc74",
  linkedin: "https://www.linkedin.com/in/ammar-yasser-1297971b3/",
  cvPath: "/Ammar_Yasser_CV.pdf",
  experience: [
    { period: "2025 – Present", role: "React Native Developer", company: "In-House" },
    { period: "2025", role: "React Native Developer", company: "Appcorp" },
    { period: "2024", role: "React Native Developer", company: "Pharosoft" },
    { period: "2022 – 2023", role: "React Native Developer", company: "In-House" },
    { period: "2021 – 2022", role: "Full-stack Developer", company: "Valoro" },
  ],
  skills: {
    Mobile: [
      "React Native", "TypeScript", "React Navigation", "Redux Toolkit",
      "React Query", "Shopify Restyle", "Firebase", "OneSignal",
      "App Store / Play publishing",
    ],
    Backend: [
      "Node.js", "Express", "REST & GraphQL", "JWT / OAuth",
      "MySQL", "MongoDB", "Redis", "Socket.IO",
    ],
    "DevOps & Tools": [
      "GitHub Actions CI/CD", "Git", "Docker", "AWS S3 / EC2", "Jira",
    ],
  },
} as const;
