import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const p1Ref = useRef(null)
    const p2Ref = useRef(null)
    const p3Ref = useRef(null)
    const p4Ref = useRef(null)
    const p5Ref = useRef(null)
    const p6Ref = useRef(null)
    const sigRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 72%' }

            // Image parallax float on scroll
            gsap.fromTo(imgRef.current,
                { yPercent: 8, opacity: 0, scale: 1.05 },
                { yPercent: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: st }
            )

            const targets = [
                { el: headRef.current, d: 0.1 },
                { el: p1Ref.current, d: 0.2 },
                { el: p2Ref.current, d: 0.3 },
                { el: p3Ref.current, d: 0.4 },
                { el: p4Ref.current, d: 0.45 },
                { el: p5Ref.current, d: 0.5 },
                { el: p6Ref.current, d: 0.55 },
                { el: sigRef.current, d: 0.65 },
            ]
            targets.forEach(({ el, d }) => {
                gsap.set(el, { opacity: 0, y: 32 })
                gsap.to(el, { opacity: 1, y: 0, duration: 0.9, delay: d, ease: 'power3.out', scrollTrigger: st })
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="story" className="storySection" ref={sectionRef}>
            <div className="storyFloatBg" />

            {/* Two-column layout: text left, photo right */}
            <div className="storyLayout">
                <div className="storyContainer">
                    <h2 ref={headRef} className="storyHeading">
                        Why I Created<br />
                        <em>WishTune</em>
                    </h2>

                    <div className="storyBody">
                        <p ref={p1Ref} className="storyPara">
                            Manifestation should not feel like homework. Most people try to “manifest” by adding more to their day. More techniques. More routines. More effort.
                        </p>
                        <p ref={p2Ref} className="storyPara">
                            But your mind is being shaped all day anyway, by repetition. And music is one of the most repeated inputs in modern life. That is where <strong>WishTune</strong> began.
                        </p>
                        <p ref={p3Ref} className="storyPara">
                            I am Ria Gupta, a Psychology graduate, DJ, and music producer. I built WishTune to blend real music with belief-focused audio design, so mindset work becomes something you actually stick to.
                        </p>
                        <p ref={p4Ref} className="storyPara">
                            It sounds like the music you already play. You just listen during your normal day.
                        </p>
                        <p ref={p5Ref} className="storyPara">
                            Over time, the goal is simple. Better self-perception. Better emotional baseline. Better decisions. Better outcomes.
                        </p>
                        <p ref={p6Ref} className="storyPara">
                            <strong>WishTune is music, redesigned for who you want to become.</strong>
                        </p>
                    </div>

                    <div ref={sigRef} className="storySignature">
                        <div className="sigLine" />
                        <span>Ria Gupta</span>
                    </div>
                </div>

                {/* Photo panel */}
                <div ref={imgRef} className="storyImgWrap" style={{ opacity: 0 }}>
                    <img
                        src="/three.jpg"
                        alt="Ria Gupta at a conference"
                        className="storyImg"
                    />
                    <div className="storyImgGlow" />
                    <div className="storyImgTag">
                        <span>✦</span>
                        <span>Ria Gupta</span>
                    </div>
                </div>
            </div>

            <div className="storyOrb storyOrbLeft" />
            <div className="storyOrb storyOrbRight" />
        </section>
    )
}
