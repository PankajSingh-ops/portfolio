"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface ScreenshotCarouselProps {
    screenshots: string[];
    title: string;
}

export default function ScreenshotCarousel({ screenshots, title }: ScreenshotCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const total = screenshots.length;

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 400);
        },
        [isTransitioning]
    );

    const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);
    const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [prev, next]);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => next(), 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="mb-10">
            {/* Main slide */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface-light">
                <div className="relative h-64 w-full sm:h-80 md:h-[420px]">
                    {screenshots.map((src, i) => (
                        <div
                            key={src}
                            className="absolute inset-0 transition-all duration-500 ease-in-out"
                            style={{
                                opacity: i === current ? 1 : 0,
                                transform: i === current ? "scale(1)" : "scale(1.04)",
                                zIndex: i === current ? 1 : 0,
                            }}
                        >
                            {src ? (
                                <Image
                                    src={src}
                                    alt={`${title} screenshot ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={i === 0}
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                    <Layers className="h-10 w-10 text-muted/30" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Nav arrows — visible on hover */}
                <button
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-black/70 group-hover:opacity-100"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all hover:bg-black/70 group-hover:opacity-100"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>

                {/* Slide counter badge */}
                <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {current + 1} / {total}
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {screenshots.map((src, i) => (
                    <button
                        key={src}
                        onClick={() => goTo(i)}
                        className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all sm:h-20 sm:w-28 ${
                            i === current
                                ? "border-accent shadow-[0_0_0_1px_var(--color-accent)]"
                                : "border-transparent opacity-50 hover:opacity-80"
                        }`}
                    >
                        {src ? (
                            <Image
                                src={src}
                                alt={`Thumbnail ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-surface-light">
                                <Layers className="h-4 w-4 text-muted/30" />
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
