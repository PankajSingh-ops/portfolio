"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
        >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                        <span key={i} className="gradient-text">
                            {word}
                        </span>
                    ) : (
                        <span key={i}>{word} </span>
                    )
                )}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
            )}
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-accent" />
        </motion.div>
    );
}
