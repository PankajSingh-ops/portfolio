"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data";

const levelColors: Record<string, string> = {
    Expert: "bg-accent/20 text-accent border-accent/30",
    Advanced: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    Intermediate: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

export default function SkillsSection() {
    return (
        <section id="skills" className="section-padding">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    title="Skills & Tech Stack"
                    subtitle="Technologies I work with and love building with"
                />

                <div className="grid gap-8 sm:grid-cols-2">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 sm:p-8"
                        >
                            {/* Category Header */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                    <category.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-heading text-lg font-semibold">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: catIdx * 0.1 + skillIdx * 0.05,
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all ${levelColors[skill.level] || levelColors["Intermediate"]
                                            }`}
                                        title={`${skill.name} — ${skill.level}`}
                                    >
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
