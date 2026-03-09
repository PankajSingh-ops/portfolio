"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { personalInfo, roles } from "@/data";

function TypewriterText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (charIndex < currentRole.length) {
                        setCharIndex((c) => c + 1);
                    } else {
                        setTimeout(() => setIsDeleting(true), 1500);
                    }
                } else {
                    if (charIndex > 0) {
                        setCharIndex((c) => c - 1);
                    } else {
                        setIsDeleting(false);
                        setRoleIndex((r) => (r + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 40 : 80
        );
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <span className="gradient-text">
            {roles[roleIndex].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
        </span>
    );
}

const socials = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function HeroSection() {
    return (
        <section
            id="home"
            className="gradient-bg relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Floating orbs */}
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-accent/5 blur-[100px]"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-accent/5 blur-[120px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl"
                >
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
                </motion.h1>

                {/* Typewriter role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-4 font-heading text-xl font-medium sm:text-2xl md:text-3xl"
                >
                    I&apos;m a <TypewriterText />
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
                    >
                        View My Work
                        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                    </a>
                    <a
                        href={personalInfo.resumePath}
                        download
                        className="group flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-accent/5"
                    >
                        <Download className="h-4 w-4" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="mt-12 flex items-center justify-center gap-4"
                >
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="group rounded-full border border-border p-3 text-muted transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                        >
                            <s.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-xs text-muted"
                >
                    <span>Scroll</span>
                    <div className="h-6 w-4 rounded-full border border-muted/50 p-1">
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-1.5 w-1.5 rounded-full bg-accent"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
