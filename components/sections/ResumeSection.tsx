"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data";

export default function ResumeSection() {
    return (
        <section id="resume" className="section-padding gradient-bg">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    title="My Resume"
                    subtitle="View and download my professional resume"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-2xl border border-border bg-surface"
                >
                    {/* Action Bar */}
                    <div className="flex flex-col items-center justify-between gap-4 border-b border-border p-4 sm:flex-row sm:p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                                <FileText className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-heading text-sm font-semibold">Resume — Pankaj Singh Jethi</h3>
                                <p className="text-xs text-muted">PDF Document</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href={personalInfo.resumePath}
                                download
                                className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-accent-light"
                            >
                                <Download className="h-4 w-4" />
                                Download
                            </a>
                            <a
                                href={personalInfo.resumePath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent/50 hover:bg-accent/5"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Full Screen
                            </a>
                        </div>
                    </div>

                    {/* PDF Viewer */}
                    <div className="relative aspect-[8.5/11] w-full bg-surface-light">
                        <iframe
                            src={`${personalInfo.resumePath}#view=FitH`}
                            title="Resume"
                            className="h-full w-full"
                            style={{ minHeight: "600px" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
