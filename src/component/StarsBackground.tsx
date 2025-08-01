'use client'

import { useEffect, useRef } from 'react'

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      velocity: Math.random() * 0.3 + 0.05,
    }))

    const animate = () => {
      ctx.fillStyle = '#000' // Black background
      ctx.fillRect(0, 0, width, height)

      ctx.fillStyle = 'white'
      stars.forEach((star) => {
        star.y += star.velocity
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-[-1]"
    />
  )
}
