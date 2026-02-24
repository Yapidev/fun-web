'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface FloatingPhotoProps {
  src: string
  className?: string
}

export default function FloatingPhoto({ src, className = '' }: FloatingPhotoProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const element = ref.current
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / 1000 // detik
      // Gerakan naik turun dan rotasi halus
      const y = Math.sin(progress * 2) * 10
      const rotate = Math.sin(progress * 1.5) * 5
      element.style.transform = `translateY(${y}px) rotate(${rotate}deg)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div
      ref={ref}
      className={`absolute ${className} transition-transform duration-300 ease-in-out`}
    >
      <div className="relative w-full h-full bg-white p-2 rounded-lg shadow-lg border-4 border-white">
        <Image
          src={src}
          alt="floating"
          width={200}
          height={200}
          className="object-cover rounded"
        />
      </div>
    </div>
  )
}