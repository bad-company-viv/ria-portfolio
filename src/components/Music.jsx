import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Music() {
    const sectionRef = useRef(null)
    const waveRef = useRef(null)
    const imgColRef = useRef(null)
    const textColRef = useRef(null)

    /* ── Waveform canvas ── */
    useEffect(() => {
        const canvas = waveRef.current
        const ctx = canvas.getContext('2d')
        let animId, t = 0, hovering = false

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const cy = canvas.height / 2
            const amp = hovering ? 52 : 28
            const bars = 100

            for (let i = 0; i < bars; i++) {
                const x = (canvas.width / bars) * i
                const phase = (i / bars) * Math.PI * 8 + t
                const h = Math.sin(phase) * amp * (0.4 + 0.6 * Math.abs(Math.sin(t * 0.4 + i * 0.08)))
                const alpha = 0.25 + 0.75 * Math.abs(h) / (amp + 1)

                const grad = ctx.createLinearGradient(0, cy - amp, 0, cy + amp)
                grad.addColorStop(0, `rgba(220,160,130,${alpha})`)
                grad.addColorStop(0.5, `rgba(200,170,230,${alpha * 0.7})`)
                grad.addColorStop(1, `rgba(200,150,100,${alpha * 0.5})`)

                ctx.strokeStyle = grad
                ctx.lineWidth = 1.5
                ctx.lineCap = 'round'
                ctx.beginPath()
                ctx.moveTo(x, cy - h)
                ctx.lineTo(x, cy + h)
                ctx.stroke()
            }
            t += 0.022
            animId = requestAnimationFrame(draw)
        }
        draw()

        const s = sectionRef.current
        const on = () => { hovering = true }
        const off = () => { hovering = false }
        s.addEventListener('mouseenter', on)
        s.addEventListener('mouseleave', off)
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
            s.removeEventListener('mouseenter', on)
            s.removeEventListener('mouseleave', off)
        }
    }, [])

    /* ── GSAP reveals ── */
    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 65%' }

            gsap.fromTo(imgColRef.current,
                { opacity: 0, x: -60 },
                { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: st }
            )
            gsap.fromTo(textColRef.current.children,
                { opacity: 0, y: 36 },
                { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.12, delay: 0.2, scrollTrigger: st }
            )
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="music" className="musicSection" ref={sectionRef}>
            {/* Dark radial glows */}
            <div className="musicBgOverlay" />

            {/* Waveform — full-width decorative strip */}
            <div className="waveformStrip">
                <canvas id="waveformCanvas" ref={waveRef} />
            </div>

            {/* Two-column grid */}
            <div className="musicGrid">

                {/* LEFT ── full-height DJ photo */}
                <div ref={imgColRef} className="musicImgCol" style={{ opacity: 0 }}>
                    <div className="musicImgFrame">
                        <img
                            src="/four.JPG"
                            alt="Ria Gupta DJing at House Beyond"
                            className="musicImg"
                        />

                    </div>
                </div>

                {/* RIGHT ── text content */}
                <div ref={textColRef} className="musicTextCol">


                    <h2 className="musicHeading">
                        How I Blend Music<br />
                        &amp; <em>Manifestation</em>
                    </h2>

                    <p className="musicDesc">
                        Manifestation music designed to rewire the subconscious effortlessly. Each beat carries an intention, each melody a frequency — crafted to align your energy with your deepest desires.
                    </p>

                    {/* Divider */}
                    <div className="musicDivider">
                        <span className="divLine" />
                        <span className="divIcon">✦</span>
                        <span className="divLine" />
                    </div>

                    {/* YouTube CTA card */}
                    <a
                        href="https://www.youtube.com/@manifestologywithria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="musicYtCard"
                        id="btn-yt-card"
                        aria-label="Watch on YouTube"
                    >
                        <div className="ytCardLeft">
                            <div className="ytIconWrap">
                                <svg viewBox="0 0 68 48" width="36" height="25" aria-hidden="true">
                                    <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#ff0000" />
                                    <path d="M45 24L27 14v20" fill="#fff" />
                                </svg>
                            </div>
                            <div className="ytCardInfo">
                                <span className="ytCardHandle">@manifestologywithria</span>
                                <span className="ytCardSub">Manifestation · Frequency Music</span>
                            </div>
                        </div>
                        <div className="ytCardArrow">→</div>
                    </a>

                    {/* Stats row */}
                    <div className="musicStats">
                        <div className="musicStat">
                            <span className="statNum">10K+</span>
                            <span className="statLab">Global Plays</span>
                        </div>

                    </div>

                    {/* CTA */}
                    <a
                        href="https://www.youtube.com/@manifestologywithria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btnMusicCta"
                        id="btn-listen-now"
                    >
                        <span>Listen Now</span>
                        <span className="btnArrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
