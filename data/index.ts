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
        slug: "resume-ai-builder",
        title: "Resume AI — Smart Resume Builder",
        description:
            "An AI-powered resume building platform with ATS checker, cover letter generator, credit-based usage system, and Razorpay payment integration.",
        longDescription:
            "Resume AI is a full-featured, production-grade SaaS platform that helps job seekers create professional, ATS-optimized resumes and cover letters. Built with a Next.js frontend and Express.js backend, the platform leverages AI to generate tailored resumes, analyze them against ATS scoring criteria, and produce customized cover letters — all within a credit-based monetization model. Users can purchase credits via Razorpay, unlock premium templates, and export polished documents ready for job applications. The backend uses PostgreSQL for persistent data storage and Redis for caching and session management, ensuring fast response times and a seamless user experience. The entire application is deployed on a VPS for full infrastructure control.",
        tech: ["Next.js", "Express.js", "PostgreSQL", "Redis", "Razorpay", "Tailwind CSS"],
        category: "Full-Stack",
        duration: "15 Days",
        role: "Full-Stack Developer",
        highlights: [
            "Built an AI-powered resume builder with multiple professional templates and real-time preview.",
            "Developed an ATS (Applicant Tracking System) checker that scores resumes and provides actionable improvement suggestions.",
            "Implemented an AI cover letter generator that tailors content based on job descriptions and user profiles.",
            "Designed a credit-based usage system with tiered plans for fair monetization.",
            "Integrated Razorpay payment gateway for secure credit purchases and subscription management.",
            "Used Redis for caching frequently accessed data and managing user sessions for faster performance.",
            "Deployed the full stack on a VPS with PostgreSQL, ensuring data reliability and full infrastructure control.",
        ],
        screenshots: [
            "/screenshots/resume/resume1.webp",
            "/screenshots/resume/resume2.webp",
            "/screenshots/resume/resume3.webp",
            "/screenshots/resume/resume4.webp",
            "/screenshots/resume/resume5.webp",
        ],
        github: "https://github.com/PankajSingh-ops/Myresume",
        demo: "https://resume-ai.techyuni.com/",
        image: "/screenshots/resume/resume1.webp",
    },
    {
        slug: "techyuni",
        title: "Techyuni — AI Tools Directory & Platform",
        description:
            "An AI tools directory and platform featuring curated tool listings, built-in utilities like typing test and gym planner, and a modern discovery experience.",
        longDescription:
            "Techyuni is a comprehensive AI tools directory and utility platform that helps users discover, compare, and access the best AI tools across categories. Beyond being a directory, the platform also hosts its own suite of built-in tools — including a typing speed test, gym workout planner, and many more productivity utilities. Built with Next.js for a fast, SEO-optimized frontend and MongoDB for flexible document-based data storage, Techyuni serves as both a discovery hub and a toolbox. Cloudflare R2 handles media and asset storage for fast global delivery. The entire application is deployed on a VPS for full control over infrastructure, performance tuning, and scaling.",
        tech: ["Next.js", "MongoDB", "Cloudflare R2", "Gemini API", "OpenAI API", "Tailwind CSS"],
        category: "Full-Stack",
        duration: "1 month",
        role: "Full-Stack Developer",
        highlights: [
            "Built an AI tools directory with category-based browsing, search, and detailed tool listings.",
            "Developed built-in utility tools including a typing speed test, gym workout planner, and more.",
            "Designed a modern, SEO-optimized frontend with Next.js for fast indexing and discoverability.",
            "Used MongoDB for flexible, schema-less storage of tool metadata, user data, and analytics.",
            "Integrated Cloudflare R2 for cost-effective storage and global delivery of media assets.",
            "Deployed on a VPS with full infrastructure control for performance optimization and scaling.",
        ],
        screenshots: ["/projects/chat-1.jpg", "/projects/chat-2.jpg"],
        github: "#",
        demo: "https://techyuni.com",
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
        slug: "suno-kahaniyan-web",
        title: "Suno Kahaniyan — Audio & eBook Platform",
        description:
            "A content-rich platform with 1000+ audiobooks, 1000+ eBooks, shorts, and videos — powered by HLS streaming, Cloudflare R2 storage, and a full admin dashboard.",
        longDescription:
            "Suno Kahaniyan is a full-featured digital content platform offering a vast library of audiobooks, eBooks, short-form content, and videos. Built with a React.js frontend and Express.js backend, the platform serves 1000+ eBooks and 1000+ audiobooks with seamless playback using HLS (HTTP Live Streaming) for adaptive video and audio delivery. All media assets are stored on Cloudflare R2 for fast, cost-effective global distribution. PostgreSQL handles persistent data and content metadata, while Redis powers caching for frequently accessed catalogs and user sessions, ensuring snappy load times even under heavy traffic. A comprehensive admin section enables content management, user moderation, analytics, and bulk uploads — making it a complete end-to-end content delivery platform.",
        tech: ["React.js", "Express.js", "PostgreSQL", "Redis", "Cloudflare R2", "HLS"],
        category: "Full-Stack",
        duration: "2 months",
        role: "Full-Stack Developer",
        highlights: [
            "Built a scalable content platform serving 1000+ audiobooks and 1000+ eBooks with category-based browsing and search.",
            "Implemented HLS (HTTP Live Streaming) for adaptive audio and video playback across all devices and network conditions.",
            "Integrated Cloudflare R2 for cost-effective, globally distributed media storage and delivery.",
            "Developed a comprehensive admin dashboard for content management, user moderation, and analytics.",
            "Used Redis for caching popular content, catalog pages, and user sessions for lightning-fast load times.",
            "Built shorts and video sections with optimized streaming and lazy loading for smooth user experience.",
            "Designed a PostgreSQL schema for managing large-scale content metadata, user libraries, and playback progress.",
        ],
        screenshots: [
            "/screenshots/suno/suno1.webp",
            "/screenshots/suno/suno2.webp",
            "/screenshots/suno/suno3.webp",
            "/screenshots/suno/suno4.webp",
            "/screenshots/suno/suno5.webp",
        ],
        github: "#",
        demo: "https://sunokahaniyan.com",
        image: "/screenshots/suno/suno1.webp",
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
        title: "Suno Kahaniyan — Mobile App",
        description:
            "A feature-rich mobile app for audiobooks, eBooks, shorts, and videos with offline listening, React Native Track Player, and a polished UI.",
        tech: ["React Native", "React Native Track Player", "TypeScript"],
        category: "Mobile",
        longDescription:
            "Suno Kahaniyan is a full-featured mobile content app built with React Native, offering audiobooks, eBooks, short-form audio content, and video playback — all in one place. The app uses React Native Track Player for seamless, background-capable audio playback with lock-screen controls and queue management. Users can browse a vast library, download content for offline listening, and enjoy a smooth, intuitive UI designed for all age groups. The shorts player provides a TikTok-style vertical swiping experience for quick audio stories, while the video section supports streaming playback. The app is live on both the App Store and Google Play Store.",
        duration: "2 months",
        role: "Mobile Developer",
        highlights: [
            "Built with React Native and React Native Track Player for smooth, background-capable audio playback with lock-screen controls.",
            "Implemented offline downloads and local caching so users can listen without an internet connection.",
            "Developed a shorts player with vertical swiping for quick, bite-sized audio stories.",
            "Built a video player section with streaming support for long-form content.",
            "Integrated an eBook reader with bookmark, progress tracking, and reading mode support.",
            "Designed a clean, modern UI optimized for both iOS and Android across all screen sizes.",
            "Published on both the App Store and Google Play Store.",
        ],
        screenshots: ["/projects/suno-1.jpg", "/projects/suno-2.jpg"],
        showGithub: false,
        playStore: "https://play.google.com/store/apps/details?id=com.sunokahaniyan&hl=en_IN",
        appStore: "https://apps.apple.com/us/app/suno-kahaniyan/id6755959514",
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
        title: "Full-Stack Developer",
        organization: "Digiyuni",
        period: "2024 – Present",
        description: [
            "Built Suno Kahaniyan, a storytelling platform using React, Zustand, Express.js, PostgreSQL, Redis, and Cloudflare R2, serving audio and eBook content (sunokahaniyan.com).",
            "Built TechYuni, a learning platform using Next.js, MongoDB, Redis Cloud, Redux Toolkit, and Gemini API for AI-powered features (techyuni.com).",
            "Created Namo Music App, a cross-platform music streaming application using React Native, Express.js, PostgreSQL, and Redux Toolkit.",
            "Developed TBPS Quiz App with Next.js frontend and Express.js backend, supporting both web and mobile platforms (education.tbpsngo.org).",
            "Built and deployed Suno Kahaniyan Android & iOS apps using React Native, integrated with backend APIs and cloud media storage.",
            "Worked on production deployments using VPS, Nginx, PM2, and Git-based workflows.",
        ],
    },
    {
        type: "work",
        title: "Web Developer",
        organization: "Tetra Information Services Pvt Ltd",
        period: "2023 – 2024",
        description: [
            "Developed and enhanced frontend features for company websites using HTML, CSS, JavaScript, and React.",
            "Designed and developed the complete frontend for zuhuas.org, focusing on clean UI, responsiveness, and performance.",
            "Developed and maintained user-facing interfaces using React.js, Next.js, and React Native for multiple production applications.",
            "Collaborated with backend developers to integrate frontend with APIs.",
            "Debugged and resolved UI-related issues in live production environments.",
            "Improved user experience by optimizing page layouts and navigation flow.",
        ],
    },
    {
        type: "education",
        title: "Master of Computer Applications (MCA)",
        organization: "Graphic Era Hill University",
        period: "2021 – 2023",
        description: [
            "Master of Computer Applications",
            "Specialized in full-stack web development, data structures, and software engineering.",
        ],
    },
    {
        type: "education",
        title: "Bachelor of Science (B.Sc)",
        organization: "Kumaun University",
        period: "2016 – 2019",
        description: [
            "Bachelor of Science",
        ],
    },
    {
        type: "education",
        title: "12th (Senior Secondary)",
        organization: "K.V. No.1 Banbasa Cantt",
        period: "2015 – 2016",
        description: [
            "Senior Secondary Education",
        ],
    },
];
