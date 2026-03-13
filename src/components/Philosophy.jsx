import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
    const sectionRef = useRef(null)
    const p1Ref = useRef(null)
    const p2Ref = useRef(null)
    const p3Ref = useRef(null)
    const headRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 65%' }

            const targets = [
                { el: headRef.current, d: 0.45 },
                { el: p1Ref.current, d: 0.55 },
                { el: p2Ref.current, d: 0.65 },
                { el: p3Ref.current, d: 0.75 },
            ]
            targets.forEach(({ el, d }) => {
                if (el) {
                    gsap.set(el, { opacity: 0, y: 32 })
                    gsap.to(el, { opacity: 1, y: 0, duration: 0.9, delay: d, ease: 'power3.out', scrollTrigger: st })
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="philosophy" className="philosophySection" ref={sectionRef}>
            <div className="philosophyBg" />

            <div className="philosophyContent">
                <div className="personalContent">
                    <h2 ref={headRef} className="personalHeading">
                        Science Meets <em>Spirituality</em>
                    </h2>

                    <div className="personalTextBlocks">
                        <p ref={p1Ref} className="personalPara">
                            With a double major in <strong>Psychology and Business</strong>, I merge the rigour of science with the wisdom of spirituality, creating a methodology that is both grounded and transcendent.
                        </p>
                        <p ref={p2Ref} className="personalPara">
                            My mission: <em>empower women to unlock their inner power</em> and manifest with joy and ease, moving beyond old patterns into a life of effortless abundance.
                        </p>
                        <p ref={p3Ref} className="personalPara">
                            When not guiding others, I explore the world, study personal development, create music, and embrace life fully as living proof that the methods I teach truly work.
                        </p>
                    </div>
                </div>
            </div>

            <div className="philOrb philOrb1" />
            <div className="philOrb philOrb2" />
        </section>
    )
}
