"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects, ProjectCategory } from "@/data";

const categories: ProjectCategory[] = ["All", "Frontend", "Full-Stack", "API"];

export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="section-padding gradient-bg">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    title="Featured Projects"
                    subtitle="A selection of projects I've built and learned from"
                />

                {/* Filters */}
                <div className="no-scrollbar mb-12 flex items-center justify-center gap-2 overflow-x-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${activeFilter === cat
                                    ? "bg-accent text-background shadow-lg shadow-accent/25"
                                    : "border border-border text-muted hover:border-accent/30 hover:text-foreground"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-48 overflow-hidden bg-surface-light">
                                    <div className="flex h-full items-center justify-center">
                                        <Layers className="h-12 w-12 text-muted/20" />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-light"
                                        >
                                            <ExternalLink className="h-3.5 w-3.5" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/50"
                                        >
                                            <Github className="h-3.5 w-3.5" />
                                            Code
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-heading text-lg font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md bg-accent/5 px-2 py-0.5 text-xs text-accent/80"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
