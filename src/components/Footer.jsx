export default function Footer() {
    return (
        <footer className="siteFooter" role="contentinfo">
            <div className="footerFade" />
            <div className="footerContent">
                <div className="footerLogo">
                    <span className="footerLogoText">Ria Gupta</span>
                </div>

                <p className="footerCopy">&copy; {new Date().getFullYear()} Ria Gupta. Crafted with love &amp; intention.</p>

                {/* Credit Section */}
                <div className="siteCredits">
                    <a
                        href="https://fabulousmedia.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="creditLink"
                        aria-label="FabulousMedia"
                    >
                        <img
                            src="/sitecredits/fabulous.png"
                            alt="FabulousMedia"
                            className="creditLogo"
                            loading="lazy"
                            width="80"
                            height="12"
                        />
                    </a>
                    <div className="creditDivider" />
                    <a
                        href="https://gocommercially.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="creditLink"
                        aria-label="GoCommercially"
                    >
                        <img
                            src="/sitecredits/gocomercially.svg"
                            alt="GoCommercially"
                            className="creditLogo"
                            loading="lazy"
                            width="80"
                            height="12"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}
