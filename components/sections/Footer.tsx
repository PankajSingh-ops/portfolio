"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { navLinks, personalInfo } from "@/data";

const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.social.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    const handleNavClick = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="border-t border-border bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-3">
                    {/* Branding */}
                    <div>
                        <a href="#home" className="font-heading text-xl font-bold">
                            <span className="gradient-text">&lt;</span>
                            {personalInfo.name.split(" ")[0]}
                            <span className="gradient-text">/&gt;</span>
                        </a>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            Building beautiful, performant web experiences with modern
                            technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                            Quick Links
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left text-sm text-muted transition-colors hover:text-accent"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-all hover:border-accent/50 hover:bg-accent/5 hover:text-accent"
                                >
                                    <s.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                    <p className="flex items-center gap-1 text-xs text-muted">
                        © {year} {personalInfo.name}.
                    </p>
                    <p className="text-xs text-muted">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
