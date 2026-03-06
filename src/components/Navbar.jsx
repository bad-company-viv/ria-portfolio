import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = [
        { href: '#story', label: 'Story' },
        { href: '#metrics', label: 'Impact' },
        { href: '#experience', label: 'Journey' },
        { href: '#skills', label: 'Skills' },
        { href: '#media', label: 'Media' },
        { href: '#music', label: 'Music' },
        { href: '#philosophy', label: 'Philosophy' },
        { href: '#connect', label: 'Connect', cta: true },
    ]

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="navInner">
                <a href="#hero" className="navLogo">Ria Gupta</a>

                <ul className="navLinks">
                    {links.map(l => (
                        <li key={l.href}>
                            <a href={l.href} className={l.cta ? 'navCta' : ''}>{l.label}</a>
                        </li>
                    ))}
                </ul>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span /><span /><span />
                </button>
            </div>

            <div className={`mobileMenu${menuOpen ? ' open' : ''}`}>
                {links.map(l => (
                    <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
                ))}
            </div>
        </nav>
    )
}
