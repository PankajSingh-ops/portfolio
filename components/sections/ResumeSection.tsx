"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, Smartphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data";

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check both screen width and user agent for thorough mobile detection
            const isSmallScreen = window.innerWidth < 768;
            const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
            setIsMobile(isSmallScreen || isMobileUA);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
}

export default function ResumeSection() {
    const isMobile = useIsMobile();

    // Build the full URL for the resume (needed for Google Docs viewer on mobile)
    const [resumeFullUrl, setResumeFullUrl] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            setResumeFullUrl(
                `${window.location.origin}${personalInfo.resumePath}`
            );
        }
    }, []);

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

                    {/* PDF Viewer — Desktop: native iframe | Mobile: Google Docs viewer fallback */}
                    {isMobile ? (
                        <div className="flex flex-col items-center gap-6 px-4 py-10 text-center sm:px-6">
                            {/* Mobile fallback info */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                                <Smartphone className="h-8 w-8" />
                            </div>
                            <div>
                                <p className="mb-1 text-sm font-semibold">
                                    Mobile PDF Preview
                                </p>
                                <p className="text-xs text-muted">
                                    Use the buttons above to download or view the full resume
                                </p>
                            </div>

                            {/* Google Docs embedded viewer — works on mobile browsers */}
                            {resumeFullUrl && (
                                <div className="w-full overflow-hidden rounded-xl border border-border">
                                    <iframe
                                        src={`https://docs.google.com/gview?url=${encodeURIComponent(resumeFullUrl)}&embedded=true`}
                                        title="Resume"
                                        className="h-full w-full"
                                        style={{ minHeight: "500px", width: "100%" }}
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="relative aspect-[8.5/11] w-full bg-surface-light">
                            <iframe
                                src={`${personalInfo.resumePath}#view=FitH`}
                                title="Resume"
                                className="h-full w-full"
                                style={{ minHeight: "600px" }}
                            />
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
