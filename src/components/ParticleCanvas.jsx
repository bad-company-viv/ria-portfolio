import { useEffect, useRef } from 'react'

/**
 * Floating particle canvas fixed to the viewport.
 * All particles drift upward slowly with random alpha / size.
 */
export default function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId
        let particles = []

        const COLORS = [
            'rgba(200,146,122,',
            'rgba(216,207,232,',
            'rgba(201,169,110,',
            'rgba(176,160,204,',
            'rgba(245,223,214,',
        ]

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticle = () => ({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 200,
            r: Math.random() * 2.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.4 + 0.15,
            drift: (Math.random() - 0.5) * 0.3,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })

        const init = () => {
            resize()
            particles = Array.from({ length: 120 }, createParticle)
        }

        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p, i) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = p.color + p.alpha + ')'
                ctx.fill()
                p.y -= p.speed
                p.x += p.drift
                p.alpha -= 0.0003
                if (p.y < -10 || p.alpha <= 0) particles[i] = createParticle()
            })
            animId = requestAnimationFrame(tick)
        }

        init()
        tick()
        window.addEventListener('resize', resize)
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="particleCanvas" style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none'
    }} />
}
