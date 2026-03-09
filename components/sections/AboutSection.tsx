"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { aboutText, stats } from "@/data";

export default function AboutSection() {
    return (
        <section id="about" className="section-padding gradient-bg">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me and what drives my passion for development"
                />

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-accent/10 to-accent-dark/40 blur-sm" />
                            <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface sm:h-80 sm:w-80">
                                <User className="h-24 w-24 text-muted/30" />
                                <span className="absolute bottom-4 text-xs text-muted">Your photo here</span>
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -right-4 -top-4 grid grid-cols-3 gap-1.5">
                                {Array.from({ length: 9 }).map((_, i) => (
                                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-accent/30" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        {aboutText.map((text, i) => (
                            <p
                                key={i}
                                className="mb-4 text-base leading-relaxed text-muted last:mb-0 sm:text-lg"
                            >
                                {text}
                            </p>
                        ))}
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group rounded-2xl border border-border bg-surface p-6 text-center transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                        >
                            <div className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="mt-2 text-sm text-muted">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
