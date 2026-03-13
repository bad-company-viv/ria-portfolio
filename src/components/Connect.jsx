import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Connect() {
    const sectionRef = useRef(null)
    const labelRef = useRef(null)
    const headRef = useRef(null)
    const subRef = useRef(null)
    const linksRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const st = { trigger: sectionRef.current, start: 'top 70%' }
            const items = [
                { el: headRef.current, d: 0.1 },
                { el: subRef.current, d: 0.2 },
                { el: linksRef.current, d: 0.3 },
                { el: ctaRef.current, d: 0.45 },
            ]
            items.forEach(({ el, d }) => {
                gsap.set(el, { opacity: 0, y: 28 })
                gsap.to(el, { opacity: 1, y: 0, duration: 0.9, delay: d, ease: 'power3.out', scrollTrigger: st })
            })
        }, sectionRef)
        return () => ctx.revert()
    }, [])

    return (
        <section id="connect" className="connectSection" ref={sectionRef}>
            <div className="connectBg" />

            <div className="connectContent">
                <h2 ref={headRef} className="connectHeading">
                    Join the<br /><em>Journey</em>
                </h2>

                <p ref={subRef} className="connectSub">
                    Whether you're ready to transform your life or just beginning to awaken, there's space for you here.
                </p>

                <div ref={linksRef} className="connectLinks">
                    <a
                        href="https://wishtune.com"
                        target="_blank" rel="noopener noreferrer"
                        className="connectLinkCard"
                        id="connectWishtune"
                    >
                        <div className="connectLinkIcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                                <path d="M9 18V5l12-2v13"></path>
                                <circle cx="6" cy="18" r="3"></circle>
                                <circle cx="18" cy="16" r="3"></circle>
                            </svg>
                        </div>
                        <div className="connectLinkText">
                            <span className="connectPlatform">Wishtune</span>
                            <span className="connectHandle">wishtune.com</span>
                        </div>
                        <span className="connectArrow">↗</span>
                    </a>

                    <a
                        href="https://www.instagram.com/riiagupta"
                        target="_blank" rel="noopener noreferrer"
                        className="connectLinkCard"
                        id="connectInstagram"
                    >
                        <div className="connectLinkIcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </div>
                        <div className="connectLinkText">
                            <span className="connectPlatform">Instagram</span>
                            <span className="connectHandle">@riiagupta</span>
                        </div>
                        <span className="connectArrow">↗</span>
                    </a>

                    <a
                        href="https://www.youtube.com/@manifestologywithria"
                        target="_blank" rel="noopener noreferrer"
                        className="connectLinkCard"
                        id="connectYoutube"
                    >
                        <div className="connectLinkIcon">
                            <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke="currentColor" strokeWidth="1.5" />
                                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <div className="connectLinkText">
                            <span className="connectPlatform">YouTube</span>
                            <span className="connectHandle">@manifestologywithria</span>
                        </div>
                        <span className="connectArrow">↗</span>
                    </a>

                    <a
                        href="mailto:rriiaagupta@gmail.com"
                        className="connectLinkCard"
                        id="connectEmail"
                    >
                        <div className="connectLinkIcon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                                <path d="M2 6l10 7 10-7"></path>
                            </svg>
                        </div>
                        <div className="connectLinkText">
                            <span className="connectPlatform">Email</span>
                            <span className="connectHandle">rriiaagupta@gmail.com</span>
                        </div>
                        <span className="connectArrow">↗</span>
                    </a>
                </div>

                <div ref={ctaRef} className="connectCtaWrap">
                    <a
                        href="https://riagupta.com"
                        target="_blank" rel="noopener noreferrer"
                        className="btnConnectMain"
                        id="btn-join-journey"
                    >
                        <span className="btnText">Join the Journey</span>
                        <div className="btnPulseRing" />
                        <div className="btnGlowAura" />
                    </a>
                </div>
            </div>
        </section>
    )
}
