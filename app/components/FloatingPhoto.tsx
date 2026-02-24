"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface FloatingPhotoProps {
  src: string;
  className?: string;
  speed?: number; // kecepatan melayang (detik)
  amplitude?: number; // jarak gerakan (px)
}

export default function FloatingPhoto({
  src,
  className = "",
  speed = 3,
  amplitude = 20,
}: FloatingPhotoProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Gerakan naik turun secara sinusoidal
      const yOffset = Math.sin((elapsed / 1000) * (2 * Math.PI / speed)) * amplitude;
      img.style.transform = `translateY(${yOffset}px) rotate(${yOffset * 0.5}deg)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [speed, amplitude]);

  return (
    <div
      ref={imgRef}
      className={`absolute opacity-30 pointer-events-none select-none ${className}`}
    >
      <Image src={src} alt="" width={200} height={200} className="w-full h-auto" />
    </div>
  );
}