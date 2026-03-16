import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EDUCATION = [
    {
        id: 'edu1',
        period: '',
        degree: 'Masters in Psychology',
        field: '',
        institution: 'Columbia University',
        desc: '',
    },
    {
        id: 'edu2',
        period: 'May 2024',
        degree: 'Honours B.A.',
        field: 'Business & Psychology',
        institution: 'University of Waterloo',
        desc: 'Minor in Entrepreneurship & Technology. Dean\'s Honours, President\'s Scholarship. Coursework: Cognitive Psychology, Research Methods, Statistics for Psychology, Cognitive Neuroscience.',
    }
]

export default function Education() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 75%' }

            gsap.set([labelRef.current, headRef.current], { opacity: 0, y: 30 })
            gsap.set(cardRefs.current, { opacity: 0, x: -30 })

            const tl = gsap.timeline({ scrollTrigger: st })
            tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
                .to(headRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')

            cardRefs.current.forEach((card, i) => {
                tl.to(card, {
                    opacity: 1, x: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, `-=${i === 0 ? 0.4 : 0.6}`)
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="education" className="timelineSection" ref={sectionRef}>
            <div className="storyContainer" style={{ margin: '0 auto', maxWidth: '800px' }}>
                <p ref={labelRef} className="storyLabel" style={{ textAlign: 'center' }}>Academic Background</p>
                <h2 ref={headRef} className="storyHeading" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    Education &amp; <em>Credentials</em>
                </h2>

                <div className="timelineGrid">
                    {EDUCATION.map((edu, i) => (
                        <div key={edu.id} className="timelineCard" ref={el => cardRefs.current[i] = el}>
                            <div className="cardInner timelineInner">
                                <div className="cardGlowBorder" />
                                <span className="timelinePeriod">{edu.period}</span>
                                <h3 className="cardTitle timelineRole">{edu.degree}</h3>
                                <p className="cardSub timelineCompany">{edu.field}</p>
                                <p className="cardDesc" style={{ fontSize: '0.95rem', marginBottom: '8px' }}>{edu.institution}</p>
                                <p className="cardDesc">{edu.desc}</p>
                                <div className="cardShimmer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
