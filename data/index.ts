import {
    Code2,
    Database,
    Globe,
    Layout,
    Server,
    Smartphone,
    Terminal,
    Wrench,
} from "lucide-react";

// ===== PERSONAL INFO =====
export const personalInfo = {
    name: "Pankaj Singh Jethi",
    role: "Full-Stack Developer",
    tagline: "Crafting elegant digital experiences with clean code & creative design.",
    email: "pjethi292@gmail.com",
    location: "India",
    resumePath: "/resume/Pankaj singh jethi.pdf",
    avatar: "/avatar.jpg",
    social: {
        github: "https://github.com/PankajSingh-ops",
        linkedin: "https://www.linkedin.com/in/pankaj-singh-jethi",
        twitter: "https://x.com/eleven_of74553",
    },
};

// ===== ROLES FOR TYPEWRITER =====
export const roles = [
    "Full-Stack Developer",
    "React Specialist",
    "Next.js Enthusiast",
    "UI/UX Craftsman",
    "Problem Solver",
];

// ===== NAV LINKS =====
export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
];

// ===== STATS =====
export const stats = [
    { label: "Projects Completed", value: 50, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Technologies Used", value: 25, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "+" },
];

// ===== ABOUT =====
export const aboutText = [
    "I'm a passionate Full-Stack Developer with 3+ years of experience in building modern, performant web applications. I specialize in React, Next.js, Node.js, and cloud technologies, turning complex problems into elegant, user-friendly solutions.",
    "My journey in software development started with a curiosity for how things work on the web. Today, I build end-to-end applications — from pixel-perfect frontends to scalable backend architectures — always with a focus on clean code, performance, and great user experience.",
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what's possible with modern web technologies.",
];

// ===== SKILLS =====
export const skillCategories = [
    {
        title: "Frontend",
        icon: Layout,
        skills: [
            { name: "React", level: "Expert" },
            { name: "Next.js", level: "Expert" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Expert" },
            { name: "Framer Motion", level: "Advanced" },
            { name: "HTML/CSS", level: "Expert" },
            { name: "Redux", level: "Advanced" },
            { name: "React Native", level: "Advanced" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js", level: "Expert" },
            { name: "Express.js", level: "Expert" },
            { name: "Python", level: "Intermediate" },
            { name: "REST APIs", level: "Expert" },
            { name: "GraphQL", level: "Intermediate" },
            { name: "Socket.io", level: "Advanced" },
        ],
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            { name: "MongoDB", level: "Expert" },
            { name: "PostgreSQL", level: "Advanced" },
            { name: "Redis", level: "Intermediate" },
            { name: "Firebase", level: "Advanced" },
            { name: "Prisma", level: "Advanced" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: [
            { name: "Git", level: "Expert" },
            { name: "Docker", level: "Intermediate" },
            { name: "AWS", level: "Intermediate" },
            { name: "Vercel", level: "Advanced" },
            { name: "Linux", level: "Advanced" },
            { name: "CI/CD", level: "Intermediate" },
        ],
    },
];

// ===== PROJECTS =====
export type ProjectCategory = "All" | "Frontend" | "Full-Stack" | "API";

export interface Project {
    title: string;
    description: string;
    tech: string[];
    category: ProjectCategory;
    github: string;
    demo: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.",
        tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full-Stack",
        github: "#",
        demo: "#",
        image: "/projects/ecommerce.jpg",
    },
    {
        title: "AI Chat Application",
        description:
            "Real-time messaging app with AI-powered responses, file sharing, and end-to-end encryption.",
        tech: ["React", "Socket.io", "OpenAI", "Express", "Redis"],
        category: "Full-Stack",
        github: "#",
        demo: "#",
        image: "/projects/chat.jpg",
    },
    {
        title: "Portfolio Dashboard",
        description:
            "Interactive analytics dashboard with charts, real-time data, and customizable widgets.",
        tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
        category: "Frontend",
        github: "#",
        demo: "#",
        image: "/projects/dashboard.jpg",
    },
    {
        title: "REST API Service",
        description:
            "Scalable RESTful API with authentication, rate limiting, caching, and comprehensive documentation.",
        tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Swagger"],
        category: "API",
        github: "#",
        demo: "#",
        image: "/projects/api.jpg",
    },
    {
        title: "Social Media Clone",
        description:
            "Feature-rich social platform with posts, stories, messaging, and real-time notifications.",
        tech: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
        category: "Full-Stack",
        github: "#",
        demo: "#",
        image: "/projects/social.jpg",
    },
    {
        title: "Landing Page Kit",
        description:
            "Collection of beautifully designed, responsive landing page templates with animations.",
        tech: ["React", "Framer Motion", "Tailwind CSS", "Figma"],
        category: "Frontend",
        github: "#",
        demo: "#",
        image: "/projects/landing.jpg",
    },
];

// ===== EXPERIENCE =====
export interface Experience {
    type: "work" | "education";
    title: string;
    organization: string;
    period: string;
    description: string[];
}

export const experiences: Experience[] = [
    {
        type: "work",
        title: "Senior Full-Stack Developer",
        organization: "Tech Solutions Inc.",
        period: "2024 – Present",
        description: [
            "Led development of 5+ client-facing applications using React & Next.js",
            "Architected microservice backend with Node.js, reducing response times by 40%",
            "Mentored junior developers and conducted code reviews",
            "Implemented CI/CD pipelines, cutting deployment time by 60%",
        ],
    },
    {
        type: "work",
        title: "Full-Stack Developer",
        organization: "Digital Craft Studio",
        period: "2023 – 2024",
        description: [
            "Built and maintained 10+ web applications for diverse clients",
            "Developed RESTful APIs and integrated third-party services",
            "Optimized database queries, improving app performance by 35%",
            "Collaborated with designers to implement pixel-perfect UIs",
        ],
    },
    {
        type: "work",
        title: "Frontend Developer",
        organization: "StartUp Hub",
        period: "2022 – 2023",
        description: [
            "Developed responsive UIs using React and Tailwind CSS",
            "Implemented complex animations with Framer Motion",
            "Built reusable component libraries used across 3 products",
        ],
    },
    {
        type: "education",
        title: "Bachelor of Technology",
        organization: "University of Technology",
        period: "2019 – 2023",
        description: [
            "Computer Science & Engineering",
            "Relevant coursework: Data Structures, Algorithms, Web Development",
            "Led the college coding club and organized hackathons",
        ],
    },
];
