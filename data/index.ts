import {
    Database,
    Layout,
    Server,
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
export type ProjectCategory = "All" | "Frontend" | "Full-Stack" | "Mobile";

export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    category: ProjectCategory;
    duration?: string;
    role?: string;
    highlights?: string[];
    screenshots: string[];
    demo?: string;
    github?: string;
    showGithub?: boolean;
    playStore?: string;
    appStore?: string;
    image: string;
}

export const projects: Project[] = [
    {
        slug: "ecommerce-platform",
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.",
        longDescription:
            "A modern e-commerce platform built with a scalable architecture, secure payments, and real-time order tracking. It supports product management, inventory, discount codes, and an optimized checkout experience.",
        tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full-Stack",
        duration: "3 months",
        role: "Full-Stack Developer",
        highlights: [
            "Implemented secure Stripe payments and webhook-based order status updates.",
            "Built an admin dashboard for managing products, categories, and inventory.",
            "Optimized core pages for performance and SEO using Next.js.",
        ],
        screenshots: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
        github: "#",
        demo: "#",
        image: "/projects/ecommerce.jpg",
    },
    {
        slug: "ai-chat-application",
        title: "AI Chat Application",
        description:
            "Real-time messaging app with AI-powered responses, file sharing, and end-to-end encryption.",
        longDescription:
            "A real-time chat application that combines traditional messaging with AI-assisted responses. Users can chat in rooms, share files, and get contextual suggestions generated by AI.",
        tech: ["React", "Socket.io", "OpenAI", "Express", "Redis"],
        category: "Full-Stack",
        duration: "2 months",
        role: "Full-Stack Developer",
        highlights: [
            "Integrated OpenAI for contextual, AI-assisted replies.",
            "Implemented WebSocket-based real-time messaging with Socket.io.",
            "Used Redis for session storage and message caching.",
        ],
        screenshots: ["/projects/chat-1.jpg", "/projects/chat-2.jpg"],
        github: "#",
        demo: "#",
        image: "/projects/chat.jpg",
    },
    {
        slug: "portfolio-dashboard",
        title: "Portfolio Dashboard",
        description:
            "Interactive analytics dashboard with charts, real-time data, and customizable widgets.",
        longDescription:
            "An analytics dashboard for visualizing key metrics with interactive charts and configurable widgets. Designed for fast insights with a clean, responsive UI.",
        tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
        category: "Frontend",
        duration: "1.5 months",
        role: "Frontend Engineer",
        highlights: [
            "Built reusable chart components using D3.js and React.",
            "Implemented widget layout with drag-and-drop customization.",
            "Ensured responsive design across desktop and mobile breakpoints.",
        ],
        screenshots: ["/projects/dashboard-1.jpg", "/projects/dashboard-2.jpg"],
        github: "#",
        demo: "#",
        image: "/projects/dashboard.jpg",
    },
    {
        slug: "social-media-clone",
        title: "Social Media Clone",
        description:
            "Feature-rich social platform with posts, stories, messaging, and real-time notifications.",
        longDescription:
            "A social media platform clone featuring posts, stories, messaging, and notifications. Focused on scalability and a smooth, modern user experience.",
        tech: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"],
        category: "Full-Stack",
        duration: "4 months",
        role: "Full-Stack Developer",
        highlights: [
            "Implemented real-time notifications and messaging.",
            "Used Prisma + PostgreSQL for a robust data layer.",
            "Integrated Cloudinary for optimized media uploads.",
        ],
        screenshots: ["/projects/social-1.jpg", "/projects/social-2.jpg"],
        github: "#",
        demo: "#",
        image: "/projects/social.jpg",
    },
    {
        slug: "landing-page-kit",
        title: "Landing Page Kit",
        description:
            "Collection of beautifully designed, responsive landing page templates with animations.",
        longDescription:
            "A collection of polished, reusable landing page templates with advanced animations and responsive layouts, ideal for quickly bootstrapping new marketing sites.",
        tech: ["React", "Framer Motion", "Tailwind CSS", "Figma"],
        category: "Frontend",
        duration: "1 month",
        role: "Frontend Engineer",
        highlights: [
            "Designed and implemented multiple landing page variations.",
            "Used Framer Motion for smooth entrance and scroll animations.",
            "Collaborated on designs in Figma and translated them to code.",
        ],
        screenshots: ["/projects/landing-1.jpg", "/projects/landing-2.jpg"],
        github: "#",
        demo: "#",
        image: "/projects/landing.jpg",
    },
    {
        slug: "weather-app",
        title: "Weather App",
        description:
            "Clean and responsive weather app with live forecasts, city search, and location-based weather.",
        longDescription:
            "A minimal and fast weather application that shows current conditions and multi-day forecasts. Users can search by city or use their current location.",
        tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
        category: "Frontend",
        duration: "2 weeks",
        role: "Frontend Engineer",
        highlights: [
            "Integrated OpenWeather API with robust error handling.",
            "Implemented geolocation-based weather detection.",
            "Designed a clean, card-based UI optimized for mobile.",
        ],
        screenshots: ["/screenshots/portfolio/Number1.webp", "/screenshots/portfolio/Number2.webp"],
        github: "https://github.com/PankajSingh-ops/weather.git",
        demo: "https://weather-eight-indol.vercel.app",
        image: "/projects/weather.jpg",
    },
    {
        slug: "suno-kahaniyan",
        title: "Suno Kahaniyan",
        description:
            "Mobile storytelling app with curated audio stories, offline listening, and a smooth player experience.",
        tech: ["Flutter", "Dart", "Firebase"],
        category: "Mobile",
        longDescription:
            "A storytelling mobile app offering curated audio stories for different age groups. Features playlists, offline downloads, and a simple, kid-friendly player.",
        duration: "3 months",
        role: "Mobile Developer",
        highlights: [
            "Implemented offline downloads and local caching.",
            "Integrated Firebase for authentication and analytics.",
            "Designed a simple, accessible UI for all age groups.",
        ],
        screenshots: ["/projects/suno-1.jpg", "/projects/suno-2.jpg"],
        showGithub: false,
        playStore: "#",
        appStore: "#",
        image: "/projects/suno-kahaniyan.jpg",
    },
    {
        slug: "namo-music",
        title: "Namo Music",
        description:
            "Music streaming mobile app with playlists, favorites, and a modern, fast audio player.",
        tech: ["Flutter", "Dart", "REST API"],
        category: "Mobile",
        longDescription:
            "A music streaming app focused on fast playback, curated playlists, and personalized favorites. Built with a smooth audio player and offline-ready design.",
        duration: "3 months",
        role: "Mobile Developer",
        highlights: [
            "Built a custom audio player with background playback.",
            "Integrated REST APIs for tracks, playlists, and search.",
            "Implemented favorites and playlist management.",
        ],
        screenshots: ["/projects/namo-1.jpg", "/projects/namo-2.jpg"],
        showGithub: false,
        playStore: "#",
        appStore: "#",
        image: "/projects/namo-music.jpg",
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
