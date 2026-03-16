import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from 'react-fast-marquee'

gsap.registerPlugin(ScrollTrigger)

const MEDIA = [
    {
        id: 'med2',
        type: 'Speaker',
        title: 'Emotional Design & Habit Formation',
        venue: 'BNI Conference (2025)',
    },
    {
        id: 'med3',
        type: 'Press Coverage',
        title: 'WishTune Patent Filing & Innovations',
        venue: 'National Media (Dec 2025)',
    },
    {
        id: 'med4',
        type: 'Featured In',
        title: 'Entrepreneurship & Mental Health Publications',
        venue: 'Times of India, Economic Times, Business Standard, NDTV 24x7',
    }
]

export default function Media() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const imgRef = useRef(null)
    const cardRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 75%' }

            gsap.set([labelRef.current, headRef.current], { opacity: 0, y: 30 })
            gsap.set(imgRef.current, { opacity: 0, scale: 1.1, clipPath: 'inset(15% 15% 15% 15%)' })
            gsap.set(cardRefs.current, { opacity: 0, y: 40 })

            const tl = gsap.timeline({ scrollTrigger: st })
            tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
                .to(headRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
                .to(imgRef.current, {
                    opacity: 1,
                    scale: 1,
                    clipPath: 'inset(0% 0% 0% 0%)',
                    duration: 1.5,
                    ease: 'power3.out'
                }, '-=0.6')

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
        <section id="media" className="storySection" ref={sectionRef} style={{ flexDirection: 'column', background: 'linear-gradient(180deg, rgba(245, 237, 250, 0.8) 0%, rgba(250, 243, 240, 0.8) 100%)', padding: 'var(--section-pad-v) var(--section-pad-h)' }}>
            <div style={{ maxWidth: 'var(--max-width)', width: '100%', margin: '0 auto' }}>
                <p ref={labelRef} className="storyLabel" style={{ textAlign: 'center' }}>Public Speaking &amp; PR</p>
                <h2 ref={headRef} className="storyHeading" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    Media &amp; <em>Speaking</em>
                </h2>

                <div className="metricsLayout" style={{ gridTemplateColumns: '1fr 1.5fr', alignItems: 'center' }}>
                    <div ref={imgRef} className="metricsImgWrap" style={{ opacity: 0 }}>
                        <img
                            src="/ria.jpg"
                            alt="Speaking and PR"
                            className="metricsImg"
                        />
                    </div>

                    <div className="metricsGrid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {MEDIA.map((item, i) => (
                            <div key={item.id} className="metricCard" ref={el => cardRefs.current[i] = el}>
                                <div className="cardInner" style={{ padding: '32px 28px' }}>
                                    <div className="cardGlowBorder" />
                                    <p className="cardSub" style={{ marginBottom: '8px' }}>{item.type}</p>
                                    <h3 className="cardTitle" style={{ fontSize: '20px', marginBottom: '16px' }}>{item.title}</h3>
                                    <p className="cardDesc" style={{ color: 'var(--midnight-blue)', fontWeight: 500 }}>{item.venue}</p>
                                    <div className="cardShimmer" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '80px', width: '100vw', marginLeft: 'calc(-50vw + 50%)', overflow: 'hidden' }}>
                    <Marquee gradient={true} gradientColor="[248, 240, 245]" speed={40} className="mediaMarquee">
                        {['Times of India', 'Economic Times', 'Business Standard', 'NDTV 24x7', 'TEDx', 'BNI'].map((partner, idx) => (
                            <div key={idx} style={{
                                padding: '0 40px',
                                fontFamily: 'var(--font-serif)',
                                fontSize: '28px',
                                color: 'var(--midnight-blue)',
                                opacity: 0.6,
                                fontWeight: 500
                            }}>
                                {partner}
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    )
}
