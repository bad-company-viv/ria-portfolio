import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
    const badgeRef = useRef(null)
    const nameRef = useRef(null)
    const rolesRef = useRef(null)
    const taglineRef = useRef(null)
    const ctaRef = useRef(null)
    const scrollRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.to(imgRef.current, { opacity: 1, scale: 1, duration: 1.4 }, 0.1)
            .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
            .to(nameRef.current, { opacity: 1, y: 0, duration: 1.0 }, 0.55)
            .to(rolesRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
            .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
            .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, 1.15)
            .to(scrollRef.current, { opacity: 1, duration: 0.6 }, 1.4)
    }, [])

    return (
        <section id="hero" className="heroSection">
            {/* Floating cosmic orbs */}
            <div className="orb orb1" />
            <div className="orb orb2" />
            <div className="orb orb3" />
            <div className="orb orb4" />
            {/* Rings */}
            <div className="ring ring1" />
            <div className="ring ring2" />

            {/* Full-bleed portrait image — bottom-right floating */}
            <div
                ref={imgRef}
                className="heroImgWrap"
                style={{ opacity: 0, scale: 1.04 }}
            >
                <img
                    src="/two.jpg"
                    alt="Ria Gupta — Toronto skyline"
                    className="heroImg"
                />
                <div className="heroImgGlow" />
            </div>

            <div className="heroContent">
                {/* Badge */}
                <div ref={badgeRef} className="heroBadge" style={{ opacity: 0 }}>
                    <span className="badgeDot" />
                    <span>Manifestation · Music · Mindset</span>
                </div>

                {/* Name */}
                <h1 ref={nameRef} className="heroName" style={{ opacity: 0 }}>
                    <span className="heroSalutation">Hi, I'm</span>
                    <span className="nameRia">Ria</span>
                    <span className="nameGupta">Gupta</span>
                </h1>

                {/* Roles */}
                <p ref={rolesRef} className="heroRoles" style={{ opacity: 0 }}>
                    <span>Manifestation &amp; Feminine Energy Coach</span>
                    <span className="roleDivider">·</span>
                    <span>DJ &amp; Producer</span>
                    <span className="roleDivider">·</span>
                    <span>Psychologist</span>
                    <span className="roleDivider">·</span>
                    <span>Founder of WishTune</span>
                </p>

                {/* Tagline */}
                <p ref={taglineRef} className="heroTagline" style={{ opacity: 0 }}>
                    "I mix music + psychology to help you <em>transform your life.</em>"
                </p>

                {/* CTA */}
                <div ref={ctaRef} className="heroCta" style={{ opacity: 0 }}>
                    <a href="#connect" className="btnGlass btnPrimary" id="btn-work-with-me">
                        <span className="btnIcon">✨</span>
                        <span>Work With Me</span>
                        <div className="btnGlowInner" />
                    </a>
                    <a
                        href="https://www.youtube.com/@manifestologywithria"
                        target="_blank" rel="noopener noreferrer"
                        className="btnGlass btnSecondary"
                        id="btn-listen-youtube"
                    >
                        <span className="btnIcon">🎧</span>
                        <span>Listen on YouTube</span>
                        <div className="btnGlowInner" />
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div ref={scrollRef} className="scrollIndicator" style={{ opacity: 0 }}>
                <div className="scrollLine" />
                <span>Scroll</span>
            </div>
        </section>
    )
}
