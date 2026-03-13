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

            {/* Waveform full width decorative strip */}
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
                        Manifestation music designed to rewire the subconscious effortlessly. Each beat carries an intention, each melody a frequency crafted to align your energy with your deepest desires.
                    </p>

                    {/* Divider */}
                    <div className="musicDivider">
                        <span className="divLine" />
                        <span className="divIcon">✦</span>
                        <span className="divLine" />
                    </div>

                    {/* Streaming platforms grid */}
                    <div className="streamingGrid">
                        {/* YouTube */}
                        <a
                            href="https://www.youtube.com/@manifestologywithria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="streamingCard youtubeCard"
                            aria-label="Watch on YouTube"
                        >
                            <div className="streamingCardLeft">
                                <div className="streamingIconWrap">
                                    <svg viewBox="0 0 68 48" width="32" height="22" aria-hidden="true">
                                        <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#ff0000" />
                                        <path d="M45 24L27 14v20" fill="#fff" />
                                    </svg>
                                </div>
                                <div className="streamingCardInfo">
                                    <span className="streamingCardTitle">Watch on YouTube</span>
                                    <span className="streamingCardSub">@manifestologywithria</span>
                                </div>
                            </div>
                            <div className="streamingCardArrow">→</div>
                        </a>

                        {/* Spotify */}
                        <a
                            href="https://open.spotify.com/track/3fAkWgG4nSCIaRabq5SbPu?si=QOdjx4HYRrGWKET1Ydn5zA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="streamingCard spotifyCard"
                            aria-label="Listen on Spotify"
                        >
                            <div className="streamingCardLeft">
                                <div className="streamingIconWrap">
                                    <svg viewBox="0 0 24 24" width="32" height="22" aria-hidden="true">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.079 10.561 18.739 12.84c.361.21.599.659.301 1.1zm.179-3.442c-3.9-2.32-10.319-2.561-14.978-1.42-.6.179-1.2-.181-1.38-.764-.179-.595.182-1.2.764-1.38 5.12-1.271 12.359-.961 16.878 1.64.361.219.599.699.42 1.078-.181.439-.659.699-1.079.504z" fill="#1DB954" />
                                    </svg>
                                </div>
                                <div className="streamingCardInfo">
                                    <span className="streamingCardTitle">Listen on Spotify</span>
                                    <span className="streamingCardSub">Last Dance</span>
                                </div>
                            </div>
                            <div className="streamingCardArrow">→</div>
                        </a>

                        {/* Apple Music */}
                        <a
                            href="https://music.apple.com/in/album/last-dance/1875443703?i=1875443704"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="streamingCard appleMusicCard"
                            aria-label="Listen on Apple Music"
                        >
                            <div className="streamingCardLeft">
                                <div className="streamingIconWrap">
                                    <img src="/apple.png" alt="Apple Music" className="streamingIcon" />
                                </div>
                                <div className="streamingCardInfo">
                                    <span className="streamingCardTitle">Listen on Apple Music</span>
                                    <span className="streamingCardSub">Last Dance</span>
                                </div>
                            </div>
                            <div className="streamingCardArrow">→</div>
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="musicStats">
                        <div className="musicStat">
                            <span className="statNum">10K+</span>
                            <span className="statLab">Global Plays</span>
                        </div>

                    </div>

                    {/* CTA */}
                    <a
                        href="https://linktr.ee/riiagupta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btnMusicCta"
                        id="btn-listen-now"
                    >
                        <span>Explore All Platforms</span>
                        <span className="btnArrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
