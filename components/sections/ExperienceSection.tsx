"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data";

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-padding">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    title="Experience & Education"
                    subtitle="My professional journey and academic background"
                />

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-px" />

                    {experiences.map((exp, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative mb-12 flex flex-col sm:flex-row ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-0 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:left-1/2">
                                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
                                    <div className="absolute h-3 w-3 animate-ping rounded-full bg-accent/30" />
                                </div>

                                {/* Content */}
                                <div
                                    className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${isLeft ? "sm:pr-12" : "sm:pl-12"
                                        }`}
                                >
                                    <div className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                                        {/* Header */}
                                        <div className="mb-3 flex items-start gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                                {exp.type === "work" ? (
                                                    <Briefcase className="h-4 w-4" />
                                                ) : (
                                                    <GraduationCap className="h-4 w-4" />
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-heading text-base font-semibold leading-tight">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-sm text-accent">{exp.organization}</p>
                                                <p className="mt-0.5 text-xs text-muted">{exp.period}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-1.5 text-sm text-muted">
                                            {exp.description.map((d, dIdx) => (
                                                <li key={dIdx} className="flex gap-2">
                                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
