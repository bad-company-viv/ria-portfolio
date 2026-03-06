import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
    const cursorRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const cursor = cursorRef.current

        // Use GSAP quickTo for highly performant mouse tracking
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" })
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" })

        const handleMouseMove = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
        }

        const handleMouseOver = (e) => {
            const target = e.target
            // Expand cursor if hovering over a link, button, or specific card child
            const isClickable = target.closest('a, button, .metricCard, .btnGlass, .timelineCard')
            setIsHovering(!!isClickable)
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.body.addEventListener('mouseover', handleMouseOver)

        // Ensure cursor starts out of bounds or centered silently until first move
        gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.body.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className={`customCursor ${isHovering ? 'hovering' : ''}`}
        />
    )
}
