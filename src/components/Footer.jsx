export default function Footer() {
    return (
        <footer className="siteFooter" role="contentinfo">
            <div className="footerFade" />
            <div className="footerContent">
                <div className="footerLogo">
                    <span className="footerLogoText">Ria Gupta</span>
                </div>

                <p className="footerCopy">&copy; {new Date().getFullYear()} Ria Gupta. Crafted with love &amp; intention.</p>
            </div>
        </footer>
    )
}
