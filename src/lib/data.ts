import {
  BrainCircuit,
  Code,
  Database,
  Github,
  Instagram,
  Linkedin,
  Mail,
  PencilRuler,
  Rocket,
  Server,
  Smartphone,
  Trello,
  Briefcase,
  GraduationCap
} from "lucide-react";

import { WhatsAppIcon } from "@/components/icons";

export const PROJECTS = [
  {
    title: "DeepFake Anomaly Detection",
    description: "An advanced AI model designed to identify, classify, and flag deepfake content in real-time video streams using sophisticated machine learning algorithms.",
    tech: ["AI", "ML", "Python", "TensorFlow"],
    imageUrlId: "project-deepfake",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "SkillBridge AI",
    description: "An intelligent platform for skill gap analysis and personalized career path recommendations, helping professionals to navigate their career development effectively.",
    tech: ["GenAI", "React", "Next.js", "AI Agents"],
    imageUrlId: "project-skillbridge-ai",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "SAR Ship Detection",
    description: "Automated ship identification system utilizing Synthetic Aperture Radar (SAR) imagery, enhancing maritime surveillance and security.",
    tech: ["Data Science", "Computer Vision", "Python"],
    imageUrlId: "project-sar-ship",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "Horizon DB",
    description: "A custom-built, scalable database architecture optimized for handling large-scale AI and machine learning datasets with high efficiency and performance.",
    tech: ["Database", "System Design", "Cloud"],
    imageUrlId: "project-horizon-db",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "ASE Shopping Cart Challenge",
    description: "A responsive and feature-rich e-commerce interface developed as part of a competitive coding challenge, showcasing modern frontend development skills.",
    tech: ["Web", "TypeScript", "React"],
    imageUrlId: "project-shopping-cart",
    githubUrl: "https://github.com/praneethhh18",
  },
];

export const SKILLS = {
  "AI & ML": [
    { name: "TensorFlow", icon: BrainCircuit, description: "End-to-end open source platform for machine learning." },
    { name: "Scikit-learn", icon: BrainCircuit, description: "Machine learning library for Python." },
    { name: "AI Agents", icon: BrainCircuit, description: "Developing autonomous AI agents for various tasks." },
    { name: "GenAI APIs", icon: BrainCircuit, description: "Utilizing generative AI APIs for creative solutions." },
  ],
  "Programming": [
    { name: "Python", icon: Code, description: "Versatile language for web development, data science, and more." },
    { name: "TypeScript", icon: Code, description: "Statically typed superset of JavaScript." },
    { name: "React", icon: Code, description: "A JavaScript library for building user interfaces." },
    { name: "Next.js", icon: Code, description: "The React framework for production." },
    { name: "Flutter", icon: Smartphone, description: "UI toolkit for building natively compiled applications for mobile, web, and desktop." },
  ],
  "Data & Cloud": [
    { name: "MongoDB", icon: Database, description: "NoSQL database for modern applications." },
    { name: "Data Science", icon: Database, description: "Extracting insights and knowledge from data." },
    { name: "Google Cloud", icon: Server, description: "Cloud computing services by Google." },
  ],
  "Tools": [
    { name: "GitHub", icon: Github, description: "Version control and collaboration platform." },
    { name: "VS Code", icon: Code, description: "A lightweight but powerful source code editor." },
    { name: "Prompt Engineering", icon: PencilRuler, description: "Crafting effective prompts for AI models." },
    { name: "Trello", icon: Trello, description: "Collaboration tool that organizes your projects into boards." },
  ],
};

export const TIMELINE = [
    {
      type: 'Education',
      icon: GraduationCap,
      title: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'Srinivas Institute of Technology, Mangalore',
      date: '2022 – 2026',
    },
    {
      type: 'Experience',
      icon: Briefcase,
      title: 'Freelance Technical Trainer',
      institution: 'Taniya Technologies',
      date: 'Nov 2023 – Mar 2025',
    },
    {
        type: 'Education',
        icon: GraduationCap,
        title: 'Canara Pre-University, Mangalore',
        institution: 'PCMC',
        date: '2020 – 2022',
      },
];

export const CERTIFICATIONS = [
  "Google AI & ML",
  "AWS Cloud",
  "Celonis Process Mining",
  "Palo Alto Cybersecurity",
];


export const SERVICES = [
  {
    title: "AI & ML Development",
    description: "Building intelligent models and systems to solve complex problems.",
    icon: BrainCircuit,
  },
  {
    title: "Web Development",
    description: "Creating responsive, high-performance websites and web applications.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences with a clean aesthetic.",
    icon: PencilRuler,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "WhatsApp",
    url: "https://wa.me/9483240597",
    icon: WhatsAppIcon,
  },
  {
    name: "Email",
    url: "mailto:praneethhh0218@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/praneeth-p-k-0792632ba",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/praneethhh18",
    icon: Github,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/praneethhh.___",
    icon: Instagram,
  },
];
