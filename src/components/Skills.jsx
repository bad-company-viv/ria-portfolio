import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
    {
        id: 'sk1',
        title: 'Core Competencies',
        items: ['Behaviour Change', 'Emotional Design', 'Contemplative Practice', 'Somatic Awareness', 'Emotional Regulation Frameworks'],
        delay: 6
    },
    {
        id: 'sk2',
        title: 'Integrative Approach',
        items: ['Psychology + Technology', 'Attentional Gating', 'Cognitive Priming Models', 'Narrative Design'],
        delay: 7
    },
    {
        id: 'sk3',
        title: 'Technical & Creative',
        items: ['Ableton Live', 'Rekordbox', 'Figma', 'Adobe Suite', 'Audio Production', 'Public Speaking'],
        delay: 5.5
    }
]

export default function Skills() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 75%' }

            gsap.set([labelRef.current, headRef.current], { opacity: 0, y: 30 })
            gsap.set(cardRefs.current, { opacity: 0, y: 40 })

            const tl = gsap.timeline({ scrollTrigger: st })
            tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
                .to(headRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')

            cardRefs.current.forEach((card, i) => {
                tl.to(card, {
                    opacity: 1, y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, `-=${i === 0 ? 0.4 : 0.6}`)
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="skills" className="metricsSection" ref={sectionRef} style={{ background: 'linear-gradient(180deg, rgba(238, 220, 240, 0.4) 0%, rgba(245, 237, 250, 0.8) 100%)' }}>
            <p ref={labelRef} className="metricsLabel">Capabilities</p>
            <h2 ref={headRef} className="metricsHeading">
                Skills &amp; Expertise
            </h2>

            <div className="metricsGrid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
                {SKILLS.map((sk, i) => (
                    <article
                        key={sk.id}
                        className="metricCard"
                        ref={el => cardRefs.current[i] = el}
                        style={{ animation: `cardFloat ${sk.delay}s ease-in-out infinite` }}
                    >
                        <div className="cardInner">
                            <div className="cardGlowBorder" />
                            <h3 className="cardTitle" style={{ marginBottom: '20px', fontSize: '22px' }}>{sk.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
                                {sk.items.map((item, idx) => (
                                    <li key={idx} style={{
                                        fontSize: '15px',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <span style={{ color: 'var(--rose-gold)' }}>⟡</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="cardShimmer" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
