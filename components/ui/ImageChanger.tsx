"use client"

import { useState, useEffect, useCallback } from "react"

const IMAGES = [
  '/scenes/sm/1.png', '/scenes/sm/2.png', '/scenes/sm/3.png', '/scenes/sm/4.png', '/scenes/sm/5.png', '/scenes/sm/6.png', '/scenes/sm/7.png'
]

export function ImageChanger() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [nextIndex, setNextIndex] = useState(1)

  const triggerTransition = useCallback(() => {
    setIsTransitioning(true)
    
    // After the glitch effect, swap the image
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setNextIndex((nextIndex + 1) % IMAGES.length)
    }, 150)

    // End transition
    setTimeout(() => {
      setIsTransitioning(false)
    }, 350)
  }, [nextIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      triggerTransition()
    }, 5000)

    return () => clearInterval(interval)
  }, [triggerTransition])

  // Preload next image
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = IMAGES[nextIndex]
  }, [nextIndex])

  return (
    <div className="relative w-full h-full aspect-3/2 rounded-lg overflow-hidden shadow-2xl">
      {/* TV Frame */}
      <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none z-30" />
      
      {/* Main Image */}
      <img
        src={IMAGES[currentIndex] || "/placeholder.svg"}
        alt="TV channel content"
        className={`absolute inset-0 w-full h-full object-cover transition-transform ${
          isTransitioning ? "tv-glitch" : ""
        }`}
        crossOrigin="anonymous"
      />

      {/* Static Noise Overlay */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-75 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        }}
      />

      {/* RGB Split Effect during transition */}
      {isTransitioning && (
        <>
          <div className="absolute inset-0 z-5 mix-blend-screen opacity-50 translate-x-1 bg-red-500/20" />
          <div className="absolute inset-0 z-5 mix-blend-screen opacity-50 -translate-x-1 bg-cyan-500/20" />
        </>
      )}

      {/* Black flash */}
      <div
        className={`absolute inset-0 z-25 bg-black transition-opacity ${
          isTransitioning ? "animate-tv-flash" : "opacity-0"
        }`}
      />

      {/* Screen curvature effect */}
      <div
        className="absolute inset-0 z-30 pointer-events-none rounded-lg"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  )
}
