"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({ target, duration = 2000, suffix = "", prefix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    // Scale duration for small numbers so they don't flash instantly
    const scaledDuration = target < 500 ? 1200 : duration;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / scaledDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  // Format display: show K for thousands
  const display = (() => {
    if (count >= 1000) return (count / 1000).toFixed(count >= 10000 ? 0 : 1).replace(/\.0$/, "") + "K";
    return count.toLocaleString();
  })();

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
