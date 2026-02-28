import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
    {
        id: 'metricCard1',
        number: '5', suffix: '+',
        title: 'Years of Study',
        sub: 'University of Waterloo',
        desc: 'First Class Honors in Psychology. Mastered the subconscious mind — and how to rewire it.',
        delay: 6,
    },
    {
        id: 'metricCard2',
        number: '100s', suffix: '',
        title: 'Lives Changed',
        sub: 'Global Community',
        desc: 'Helping dissolve blocks and raise frequency worldwide.',
        delay: 7,
    },
    {
        id: 'metricCard3',
        number: '10K', suffix: '+',
        title: 'Global Plays',
        sub: 'Manifestation Music',
        desc: 'Rewiring minds daily through frequency and sound.',
        delay: 5.5,
    },
    {
        id: 'metricCard4',
        number: '100', suffix: '%',
        title: 'Lived & Proven',
        sub: 'Tested in Real Life',
        desc: 'Everything taught is experienced, embodied, and proven.',
        delay: 8,
    },
]

export default function Metrics() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const imgRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 70%' }

            gsap.set(headRef.current, { opacity: 0, y: 24 })
            gsap.set(cardRefs.current, { opacity: 0, y: 60 })
            gsap.set(imgRef.current, { opacity: 0, scale: 1.06 })

            gsap.to(headRef.current, { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out', scrollTrigger: st })
            gsap.to(imgRef.current, { opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: 'power3.out', scrollTrigger: st })

            cardRefs.current.forEach((card, i) => {
                gsap.to(card, {
                    opacity: 1, y: 0,
                    duration: 0.9,
                    delay: 0.15 + i * 0.13,
                    ease: 'power3.out',
                    scrollTrigger: st,
                })
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="metrics" className="metricsSection" ref={sectionRef}>
            <h2 ref={headRef} className="metricsHeading">Lives I've Touched</h2>

            <div className="metricsLayout">
                {/* Graduation photo */}
                <div ref={imgRef} className="metricsImgWrap" style={{ opacity: 0 }}>
                    <img
                        src="/one.jpg"
                        alt="Ria Gupta — University of Waterloo graduation"
                        className="metricsImg"
                    />
                </div>

                <div className="metricsGrid">
                    {CARDS.map((c, i) => (
                        <article
                            key={c.id}
                            id={c.id}
                            className="metricCard"
                            ref={el => cardRefs.current[i] = el}
                            tabIndex={0}
                            aria-label={`${c.number}${c.suffix} ${c.title}`}
                            style={{ animation: `cardFloat ${c.delay}s ease-in-out infinite` }}
                        >
                            <div className="cardInner">
                                <div className="cardGlowBorder" />
                                <div className="cardNumber">
                                    {c.number}
                                    {c.suffix && <span className="cardPlus">{c.suffix}</span>}
                                </div>
                                <h3 className="cardTitle">{c.title}</h3>
                                <p className="cardSub">{c.sub}</p>
                                <p className="cardDesc">{c.desc}</p>
                                <div className="cardShimmer" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
