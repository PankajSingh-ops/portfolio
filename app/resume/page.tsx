"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass fixed top-0 left-0 right-0 z-50 shadow-lg"
            >
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Portfolio
                    </Link>

                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                            <FileText className="h-4 w-4" />
                        </div>
                        <span className="hidden font-heading text-sm font-semibold sm:block">
                            Resume
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <a
                            href={personalInfo.resumePath}
                            download
                            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-light"
                        >
                            <Download className="h-3.5 w-3.5" />
                            Download
                        </a>
                        <a
                            href={personalInfo.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/50"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Full Screen</span>
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* PDF Viewer */}
            <main className="pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto max-w-5xl p-4 sm:p-6"
                >
                    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl">
                        <iframe
                            src={`${personalInfo.resumePath}#view=FitH`}
                            title="Resume — Pankaj Singh Jethi"
                            className="h-[calc(100vh-8rem)] w-full"
                            style={{ minHeight: "700px" }}
                        />
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
