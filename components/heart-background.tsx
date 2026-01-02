"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const IMAGES = [
  "/images/DSC_0719.jpg",
  "/images/DSC_0827.jpg",
  "/images/DSC_0906.jpg",
  "/images/DSC_1051.jpg",
  "/images/DSC_1126.jpg",
  "/images/DSC_1183.JPG",
  "/images/DSC_1192.jpg",
  "/images/DSC_1205.JPG",
  "/images/DSC_1226.JPG",
  "/images/DSC_1267.JPG",
  "/images/DSC_1272.JPG",
  "/images/DSC_1280.JPG",
  "/images/DSC_1290.JPG",
  "/images/DSC_1295.JPG",
  "/images/DSC_1303.JPG",
  "/images/DSC_1328.JPG",
  "/images/DSC_1335.JPG",
  "/images/DSC_1352.jpg",
  "/images/DSC_1354.JPG",
  "/images/DSC_1359.JPG",
  "/images/DSC_1365.JPG",
]

interface Heart {
  id: number
  left: string
  delay: string
  duration: string
  size: string
}

interface FloatingImage {
  id: number
  left: string
  delay: string
  duration: string
  size: number
  image: string
}

export function HeartBackground() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const [floatingImages, setFloatingImages] = useState<FloatingImage[]>([])

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

    // Generate floating images with heart shape mask
    const newFloatingImages = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 85}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${20 + Math.random() * 15}s`,
      size: 120 + Math.random() * 80,
      image: IMAGES[Math.floor(Math.random() * IMAGES.length)],
    }))
    setFloatingImages(newFloatingImages)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Emoji hearts */}
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

      {/* Floating images with heart shape */}
      {floatingImages.map((item) => (
        <div
          key={`img-${item.id}`}
          className="absolute animate-heart-fall"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            top: "-150px",
            width: item.size,
            height: item.size,
          }}
        >
          <Image
            src={item.image}
            alt="Wedding photo"
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-full"
            style={{
              clipPath: "url(#heart-clip)",
            }}
          />
        </div>
      ))}

      {/* SVG clip path for heart shape */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.9 C0.5,0.9,0.05,0.6,0.05,0.35 C0.05,0.15,0.2,0.05,0.35,0.05 C0.42,0.05,0.47,0.1,0.5,0.15 C0.53,0.1,0.58,0.05,0.65,0.05 C0.8,0.05,0.95,0.15,0.95,0.35 C0.95,0.6,0.5,0.9,0.5,0.9 Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
