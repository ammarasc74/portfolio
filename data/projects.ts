export type Store = "appstore" | "googleplay" | "appgallery" | "web";

export interface ProjectLink {
  store: Store;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  contribution: string;
  tech: string[];
  links: ProjectLink[];
  screenshots: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "manafith",
    name: "Manafith",
    tagline: "Vehicle insurance app for the Saudi market",
    contribution:
      "Built and shipped the app end to end: policy purchase and vehicle flows, chassis-number verification, plate configuration, payment integration, and a full Arabic RTL experience — released to the App Store and Google Play.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
    links: [
      { store: "googleplay", url: "https://play.google.com/store/apps/details?id=com.najm.manafeth" },
      { store: "appstore", url: "https://apps.apple.com/sa/app/manafith-%D9%85%D9%86%D8%A7%D9%81%D8%B0/id1630305902" },
    ],
    screenshots: [
      "/screenshots/manafith/shot-1.jpg",
      "/screenshots/manafith/shot-2.jpg",
      "/screenshots/manafith/shot-3.jpg",
    ],
    featured: true,
  },
  {
    slug: "munaseq",
    name: "Munaseq",
    tagline: "AI-powered social media listening platform",
    contribution:
      "Built the web front-end in Next.js: dashboards for monitoring and analyzing social conversations across platforms.",
    tech: ["Next.js", "React", "TypeScript"],
    links: [{ store: "web", url: "https://munaseq.ai" }],
    screenshots: [],
  },
  {
    slug: "inhouse",
    name: "In House",
    tagline: "Furniture e-commerce app",
    contribution:
      "Maintained and extended the shopping experience: checkout integration, delivery-address management, and business-driven features across iOS and Android.",
    tech: ["React Native", "Redux Toolkit", "Shopify Restyle", "Firebase"],
    links: [{ store: "web", url: "https://inhouse.sa" }],
    screenshots: [],
  },
  {
    slug: "glogo",
    name: "Glogo",
    tagline: "Ride-sharing app connecting drivers and passengers",
    contribution:
      "Implemented real-time trip tracking over socket connections and the ride status flows from request to drop-off.",
    tech: ["React Native", "Socket.IO", "REST APIs"],
    links: [{ store: "appstore", url: "https://apps.apple.com/eg/app/glogo-your-ride-your-way/id6498920876" }],
    screenshots: [],
  },
  {
    slug: "dentaly",
    name: "Dentaly",
    tagline: "All-in-one dashboard for dental practitioners and clinics",
    contribution:
      "Built practitioner and clinic workflows: patient management, scheduling, and clinical operations screens.",
    tech: ["React Native", "TypeScript"],
    links: [],
    screenshots: [],
  },
  {
    slug: "life-right",
    name: "Life Right",
    tagline: "Emergency medical consultations over instant video calls",
    contribution:
      "Built the patient-to-doctor video call flows for rapid emergency consultations.",
    tech: ["React Native", "WebRTC"],
    links: [],
    screenshots: [],
  },
  {
    slug: "fantasia",
    name: "Fantasia",
    tagline: "Fantasy sports app scored by real match results",
    contribution:
      "Built team selection and live scoring driven by real team results and player stats.",
    tech: ["React Native", "REST APIs"],
    links: [],
    screenshots: [],
  },
  {
    slug: "aqarbot",
    name: "Aqarbot",
    tagline: "Real-estate chatbot for requesting and offering properties",
    contribution:
      "Built chatbot-driven flows for clients and brokers to request and offer housing units and land.",
    tech: ["React Native", "REST APIs"],
    links: [{ store: "appstore", url: "https://apps.apple.com/eg/app/%D8%B9%D9%82%D8%A7%D8%B1-%D8%A8%D9%88%D8%AA/id6449610514" }],
    screenshots: [],
  },
];

const featuredProject = projects.find((p) => p.featured);
if (!featuredProject) {
  throw new Error("data/projects.ts: exactly one project must set featured: true");
}
export const featured: Project = featuredProject;
