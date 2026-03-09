"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type ToastType = "success" | "error" | null;

export default function ContactSection() {
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [sending, setSending] = useState(false);
    const [toast, setToast] = useState<ToastType>(null);

    const validate = (): boolean => {
        const errs: Partial<FormData> = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = "Invalid email format";
        if (!form.subject.trim()) errs.subject = "Subject is required";
        if (!form.message.trim()) errs.message = "Message is required";
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSending(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setToast("success");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setToast("error");
            }
        } catch {
            setToast("error");
        } finally {
            setSending(false);
            setTimeout(() => setToast(null), 5000);
        }
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setForm((f) => ({ ...f, [field]: value }));
        if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    };

    return (
        <section id="contact" className="section-padding">
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to collaborate? Let's talk!"
                />

                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 lg:col-span-2"
                    >
                        <p className="text-base leading-relaxed text-muted">
                            I&apos;m always excited to discuss new projects, creative ideas, or
                            opportunities to be part of something amazing.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: Mail,
                                    label: "Email",
                                    value: personalInfo.email,
                                    href: `mailto:${personalInfo.email}`,
                                },
                                {
                                    icon: Linkedin,
                                    label: "LinkedIn",
                                    value: "Connect with me",
                                    href: personalInfo.social.linkedin,
                                },
                                {
                                    icon: MapPin,
                                    label: "Location",
                                    value: personalInfo.location,
                                    href: null,
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all hover:border-accent/20"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted">{item.label}</p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">
                                {(
                                    [
                                        { field: "name" as const, label: "Name", type: "text" },
                                        { field: "email" as const, label: "Email", type: "email" },
                                    ] as const
                                ).map(({ field, label, type }) => (
                                    <div key={field}>
                                        <label
                                            htmlFor={field}
                                            className="mb-1.5 block text-sm font-medium"
                                        >
                                            {label} <span className="text-accent">*</span>
                                        </label>
                                        <input
                                            id={field}
                                            type={type}
                                            value={form[field]}
                                            onChange={(e) => handleChange(field, e.target.value)}
                                            className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors[field] ? "border-red-500" : "border-border"
                                                }`}
                                            placeholder={`Your ${label.toLowerCase()}`}
                                        />
                                        {errors[field] && (
                                            <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-1.5 block text-sm font-medium"
                                >
                                    Subject <span className="text-accent">*</span>
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => handleChange("subject", e.target.value)}
                                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors.subject ? "border-red-500" : "border-border"
                                        }`}
                                    placeholder="What's this about?"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1.5 block text-sm font-medium"
                                >
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => handleChange("message", e.target.value)}
                                    className={`w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent/30 ${errors.message ? "border-red-500" : "border-border"
                                        }`}
                                    placeholder="Tell me about your project..."
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
                            >
                                {sending ? (
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                                ) : (
                                    <Send className="h-4 w-4" />
                                )}
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl px-5 py-3 shadow-xl ${toast === "success"
                            ? "border border-green-500/30 bg-green-500/10 text-green-400"
                            : "border border-red-500/30 bg-red-500/10 text-red-400"
                        }`}
                >
                    {toast === "success" ? (
                        <CheckCircle className="h-5 w-5" />
                    ) : (
                        <AlertCircle className="h-5 w-5" />
                    )}
                    <span className="text-sm font-medium">
                        {toast === "success"
                            ? "Message sent successfully!"
                            : "Failed to send. Please try again."}
                    </span>
                </motion.div>
            )}
        </section>
    );
}
