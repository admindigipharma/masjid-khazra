import { useEffect, useRef, useCallback } from 'react'

/**
 * Decorative cursor-following sunburst orbs.
 * Multiple golden starburst shapes trail the mouse with eased movement.
 * Automatically disabled for touch devices and prefers-reduced-motion.
 */

interface Orb {
  x: number
  y: number
  targetX: number
  targetY: number
  size: number
  opacity: number
  rotation: number
  speed: number
}

export default function CursorSunbursts() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbsRef = useRef<Orb[]>([])
  const mouseRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const activeRef = useRef(true)

  const ORB_COUNT = 5
  const ACCENT = { r: 212, g: 168, b: 67 } // --color-accent #D4A843

  const initOrbs = useCallback(() => {
    const orbs: Orb[] = []
    for (let i = 0; i < ORB_COUNT; i++) {
      orbs.push({
        x: -100,
        y: -100,
        targetX: -100,
        targetY: -100,
        size: 8 + i * 4,
        opacity: 0.5 - i * 0.08,
        rotation: Math.random() * 360,
        speed: 0.08 + i * 0.03, // slower = more trail
      })
    }
    orbsRef.current = orbs
  }, [])

  const drawSunburst = useCallback(
    (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      const rays = 8
      const innerRadius = size * 0.4
      const outerRadius = size

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.globalAlpha = opacity

      // Glow
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius * 1.2)
      gradient.addColorStop(0, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity * 0.6})`)
      gradient.addColorStop(0.5, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity * 0.2})`)
      gradient.addColorStop(1, `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, 0)`)
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, outerRadius * 1.2, 0, Math.PI * 2)
      ctx.fill()

      // Starburst shape
      ctx.fillStyle = `rgba(${ACCENT.r}, ${ACCENT.g}, ${ACCENT.b}, ${opacity})`
      ctx.beginPath()
      for (let i = 0; i < rays * 2; i++) {
        const angle = (i * Math.PI) / rays
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        if (i === 0) {
          ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
        } else {
          ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
        }
      }
      ctx.closePath()
      ctx.fill()

      // Centre dot
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    },
    [],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !activeRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const mouse = mouseRef.current
    const orbs = orbsRef.current

    for (let i = 0; i < orbs.length; i++) {
      const orb = orbs[i]
      orb.targetX = mouse.x
      orb.targetY = mouse.y

      // Ease towards target
      orb.x += (orb.targetX - orb.x) * orb.speed
      orb.y += (orb.targetY - orb.y) * orb.speed

      // Slowly rotate
      orb.rotation += 0.3 + i * 0.15

      drawSunburst(ctx, orb.x, orb.y, orb.size, orb.opacity, orb.rotation)
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [drawSunburst])

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window && !window.matchMedia('(pointer: fine)').matches) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleLeave = () => {
      mouseRef.current = { x: -100, y: -100 }
    }

    resize()
    initOrbs()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)
    document.addEventListener('mouseleave', handleLeave)

    activeRef.current = true
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      activeRef.current = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [initOrbs, animate])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
