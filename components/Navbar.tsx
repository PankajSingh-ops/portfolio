"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks, personalInfo } from "@/data";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // IntersectionObserver for active section
    useEffect(() => {
        const sections = navLinks.map((l) => l.href.slice(1));
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("#home");
                    }}
                    className="font-heading text-xl font-bold tracking-tight"
                >
                    <span className="gradient-text">&lt;</span>
                    {personalInfo.name.split(" ")[0]}
                    <span className="gradient-text">/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link.href)}
                            className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                                    ? "text-accent"
                                    : "text-muted hover:text-foreground"
                                }`}
                        >
                            {link.label}
                            {activeSection === link.href.slice(1) && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-accent"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="ml-2 rounded-lg p-2 text-muted transition-colors hover:bg-surface-light hover:text-foreground"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="rounded-lg p-2 text-muted"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </button>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-muted"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass overflow-hidden border-t border-border md:hidden"
                    >
                        <div className="space-y-1 px-4 py-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${activeSection === link.href.slice(1)
                                            ? "bg-accent/10 text-accent"
                                            : "text-muted hover:bg-surface-light hover:text-foreground"
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
