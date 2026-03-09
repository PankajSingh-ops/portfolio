"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export default function AnimatedCounter({
    value,
    suffix = "",
    duration = 2000,
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));

            if (progress >= 1) {
                setCount(value);
                clearInterval(timer);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView, value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}
