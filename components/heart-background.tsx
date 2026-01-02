"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: string
  delay: string
  duration: string
  size: string
}

export function HeartBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate 30 hearts with random properties
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 20}s`,
      size: `${10 + Math.random() * 25}px`,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-fall opacity-0 text-red-300/60"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            top: "-50px",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
