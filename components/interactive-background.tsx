"use client"

import { useEffect, useRef, useState } from "react"

interface Dot {
  x: number
  y: number
  size: number
  originalSize: number
  color: string
  speedX: number
  speedY: number
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots() // Reinitialize dots when canvas is resized
    }

    // Initialize dots
    const initDots = () => {
      const dots: Dot[] = []
      const dotCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          originalSize: Math.random() * 2 + 1,
          color: `rgba(128, 0, 255, ${Math.random() * 0.2 + 0.1})`,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        })
      }

      dotsRef.current = dots
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    // Handle mouse leave
    const handleMouseLeave = () => {
      setMousePosition(null)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot, index) => {
        // Update dot position
        dot.x += dot.speedX
        dot.y += dot.speedY

        // Wrap around edges
        if (dot.x > canvas.width) dot.x = 0
        else if (dot.x < 0) dot.x = canvas.width

        if (dot.y > canvas.height) dot.y = 0
        else if (dot.y < 0) dot.y = canvas.height

        // Interact with mouse
        if (mousePosition) {
          const dx = mousePosition.x - dot.x
          const dy = mousePosition.y - dot.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 100

          if (distance < maxDistance) {
            // Increase dot size when mouse is near
            const scale = 1 + (maxDistance - distance) / maxDistance
            dot.size = dot.originalSize * scale * 2

            // Move dots away from mouse
            const angle = Math.atan2(dy, dx)
            const pushForce = ((maxDistance - distance) / maxDistance) * 2
            dot.x -= Math.cos(angle) * pushForce
            dot.y -= Math.sin(angle) * pushForce
          } else {
            // Return to original size
            dot.size = dot.size * 0.95 + dot.originalSize * 0.05
          }
        } else {
          // Return to original size when mouse leaves
          dot.size = dot.size * 0.95 + dot.originalSize * 0.05
        }

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()

        // Connect dots
        connectDots(dot, index)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Connect dots with lines
    const connectDots = (dot: Dot, index: number) => {
      for (let i = index + 1; i < dotsRef.current.length; i++) {
        const otherDot = dotsRef.current[i]
        const dx = dot.x - otherDot.x
        const dy = dot.y - otherDot.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const opacity = ((maxDistance - distance) / maxDistance) * 0.2
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(otherDot.x, otherDot.y)
          ctx.strokeStyle = `rgba(128, 0, 255, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-5" style={{ opacity: 0.5 }} />
}

export default InteractiveBackground
