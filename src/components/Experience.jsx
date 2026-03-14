import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
    {
        id: 'exp1',
        period: '2025 Present',
        role: 'Founder & Chief Executive Officer',
        company: 'WishTune',
        desc: 'Designing tools integrating reflective journaling, spiritual practice, and cognitive mechanisms.',
    },
    {
        id: 'exp2',
        period: '2017 Present',
        role: 'Chief Marketing Officer',
        company: 'Oxxy Healthcare India',
        desc: 'Directed Swastha Bharat Movement, coordinating 100+ free health camps. Led behavior change communication strategies for preventive health.',
    },
    {
        id: 'exp3',
        period: '2021 2022',
        role: 'CMO & Equity Partner',
        company: 'Capture My Hippo',
        desc: 'Led user engagement strategy for a social memory platform. Applied behavioral insights to design storytelling prompts.',
    },
    {
        id: 'exp4',
        period: '2022 2023',
        role: 'Digital Marketing Specialist',
        company: 'TeacherUp & MyCoachingTree',
        desc: 'Directed branding and learner engagement strategy for an EdTech platform.',
    },
    {
        id: 'exp5',
        period: '2018 2020',
        role: 'Founder & CEO',
        company: 'Staria Education',
        desc: 'Built partnerships with 1,000+ institutions. Featured in 60+ national publications (Times of India, Economic Times).',
    }
]

export default function Experience() {
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
        <section id="experience" className="timelineSection" ref={sectionRef}>
            <div className="storyContainer" style={{ margin: '0 auto', maxWidth: '800px' }}>
                <p ref={labelRef} className="storyLabel" style={{ textAlign: 'center' }}>Professional Journey</p>
                <h2 ref={headRef} className="storyHeading" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    Evolution &amp; <em>Impact</em>
                </h2>

                <div className="timelineGrid">
                    {EXPERIENCES.map((exp, i) => (
                        <div key={exp.id} className="timelineCard" ref={el => cardRefs.current[i] = el}>
                            <div className="cardInner timelineInner">
                                <div className="cardGlowBorder" />
                                <span className="timelinePeriod">{exp.period}</span>
                                <h3 className="cardTitle timelineRole">{exp.role}</h3>
                                <p className="cardSub timelineCompany">{exp.company}</p>
                                <p className="cardDesc">{exp.desc}</p>
                                <div className="cardShimmer" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
