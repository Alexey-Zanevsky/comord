import { useEffect, useState } from "react";
import logoWithText from "../../assets/brand/logo_and_text.svg";

const navigationItems = [
    { href: "#funkcje", label: "Funkcje" },
    { href: "#tutorial", label: "Tutorial" },
    { href: "#faq", label: "FAQ" },
];

export function Navbar() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const updateAppearance = () => {
            const featuresSection = document.getElementById("funkcje");

            if (featuresSection) {
                setIsLight(featuresSection.getBoundingClientRect().top <= 96);
            }
        };

        updateAppearance();
        window.addEventListener("scroll", updateAppearance, { passive: true });
        window.addEventListener("resize", updateAppearance);

        return () => {
            window.removeEventListener("scroll", updateAppearance);
            window.removeEventListener("resize", updateAppearance);
        };
    }, []);

    return (
        <header className="site-header">
            <nav className={`navbar${isLight ? " navbar--light" : ""}`} aria-label="Główna nawigacja">
                <a className="navbar__brand" href="#start" aria-label="Comord — strona główna">
                    <img src={logoWithText} alt="Comord" />
                </a>

                <div className="navbar__links">
                    {navigationItems.map(({ href, label }) => (
                        <a key={href} href={href}>
                            {label}
                        </a>
                    ))}
                </div>

                <a className="navbar__login" href="#login">
                    Zaloguj się
                </a>
            </nav>
        </header>
    );
}
