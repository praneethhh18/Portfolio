
import {
  BrainCircuit,
  Code,
  Instagram,
  Linkedin,
  Mail,
  Rocket,
  Server,
  Smartphone,
  Briefcase,
  GraduationCap,
  DraftingCompass,
  Twitter
} from "lucide-react";

import { 
  WhatsAppIcon,
  TensorFlowIcon,
  ScikitLearnIcon,
  PythonIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  FlutterIcon,
  MongodbIcon,
  GoogleCloudIcon,
  VSCodeIcon,
  GenAIIcon,
  DataScienceIcon,
  PromptEngineeringIcon,
  TrelloIcon,
  GitHubIcon,
  GoogleColabIcon,
  OpenCvIcon,
  HtmlIcon,
  DockerIcon,
} from "@/components/icons";

export const PROJECTS = [
  {
    title: "DeepFake Anomaly Detection",
    description: "An advanced AI model designed to identify, classify, and flag deepfake images in real time using unsupervised learning and anomaly detection techniques.",
    tech: ["AI", "ML", "Python", "VGG16 CNN architecture", "One-Class SVM"],
    imageUrlId: "project-deepfake",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "SkillBridge AI",
    description: "An intelligent platform for skill gap analysis and personalized career path recommendations, helping youths to navigate their career development and path effectively.",
    tech: ["NLP", "ML", "AI", "Ai agents", "React", "TF-IDF", "Word2Vec", "BERT"],
    imageUrlId: "project-skillbridge-ai",
    githubUrl: "https://github.com/praneethhh18",
  },
  {
    title: "SAR Ship Detection",
    description: "An advanced AI model designed to detect and localize ships in SAR imagery in real time using deep learning and image preprocessing techniques.",
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
    { name: "TensorFlow", icon: TensorFlowIcon, description: "Building and training production-grade neural networks and machine learning models." },
    { name: "Scikit-learn", icon: ScikitLearnIcon, description: "Applying classical machine learning algorithms for data analysis and predictive modeling." },
    { name: "AI Agents", icon: BrainCircuit, description: "Architecting autonomous agents that reason, plan, and execute complex tasks." },
    { name: "GenAI APIs", icon: GenAIIcon, description: "Integrating and fine-tuning large language models for novel applications." },
    { name: "Google Colab", icon: GoogleColabIcon, description: "Leveraging cloud-based notebooks for collaborative and powerful ML experimentation."},
    { name: "OpenCV", icon: OpenCvIcon, description: "Implementing real-time computer vision applications and image processing workflows."}
  ],
  "Programming": [
    { name: "Python", icon: PythonIcon, description: "Crafting robust backend systems, data pipelines, and AI-powered services." },
    { name: "TypeScript", icon: TypeScriptIcon, description: "Developing scalable and maintainable web applications with type safety." },
    { name: "React", icon: ReactIcon, description: "Building dynamic, component-based user interfaces with a focus on performance." },
    { name: "Next.js", icon: NextjsIcon, description: "Leveraging server-side rendering and static generation for optimal web experiences." },
    { name: "Flutter", icon: FlutterIcon, description: "Creating cross-platform mobile applications with a beautiful and native feel." },
    { name: "HTML", icon: HtmlIcon, description: "Structuring web content with semantic and accessible markup." },
  ],
  "Data & Cloud": [
    { name: "MongoDB", icon: MongodbIcon, description: "Designing and managing flexible, high-performance NoSQL database schemas." },
    { name: "Data Science", icon: DataScienceIcon, description: "Transforming raw data into actionable insights through statistical analysis and visualization." },
    { name: "Google Cloud", icon: GoogleCloudIcon, description: "Deploying and scaling applications on a secure and reliable cloud infrastructure." },
  ],
  "Tools": [
    { name: "GitHub", icon: GitHubIcon, description: "Managing complex codebases and collaborating effectively with distributed teams." },
    { name: "VS Code", icon: VSCodeIcon, description: "Optimizing development workflows with a highly customized and efficient code editor." },
    { name: "Prompt Engineering", icon: PromptEngineeringIcon, description: "Mastering the art of instructing AI models to achieve precise and creative outcomes." },
    { name: "Trello", icon: TrelloIcon, description: "Orchestrating project timelines and deliverables with agile methodologies." },
    { name: "Docker", icon: DockerIcon, description: "Containerizing applications to ensure consistent environments from development to production." },
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
    title: "AI Systems Architecture",
    description: "Designing and implementing scalable, end-to-end AI solutions from concept to deployment.",
    icon: BrainCircuit,
  },
  {
    title: "Full-Stack Development",
    description: "Crafting seamless digital experiences with expertise in both frontend and backend technologies.",
    icon: Code,
  },
  {
    title: "Creative Technology",
    description: "Blending design and engineering to build innovative and interactive user-centric applications.",
    icon: DraftingCompass,
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
    icon: GitHubIcon,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/praneethhh.___",
    icon: Instagram,
  },
  {
    name: "Twitter",
    url: "https://x.com/praneethhh_18",
    icon: Twitter,
  }
];
