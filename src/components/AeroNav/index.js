"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./AeroNav.module.css";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/", mobileSize: "1.5rem" },
    { name: "Team", href: "/team", mobileSize: "1.5rem" },
    { name: "Events", href: "/events", mobileSize: "1.5rem" },
    { name: "Achievements", href: "/achievements", mobileSize: "1.25rem" },
    { name: "Gallery", href: "/gallery", mobileSize: "1.5rem" },
];

export default function AeroNav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header
                style={{ zIndex: 999997 }}
                className={clsx(
                    styles.nav,
                    isScrolled ? styles.scrolled : styles.initial
                )}
            >
            <div className={styles.container}>
                {/* Brand Name: AEROUNWIRED */}
                <Link
                    href="/"
                    className={styles.brand}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className={styles.brandAero}>AERO</span>
                    <span className={styles.brandUnwired}>UNWIRED</span>
                </Link>

                {/* Desktop Nav */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    styles.navLink,
                                    isActive && styles.activeLink
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Icon */}
                <button 
                    className={styles.mobileButton} 
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '2rem', height: '2rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '2rem', height: '2rem' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div 
                className={clsx(styles.backdrop, isMenuOpen && styles.backdropOpen)}
                onClick={() => setIsMenuOpen(false)}
            />

            <div className={clsx(styles.mobileMenu, isMenuOpen && styles.mobileMenuOpen)}>
                {/* Close Button Inside Sidebar */}
                <button 
                    className={styles.closeButton} 
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '2rem', height: '2rem' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className={styles.mobileLinks}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={styles.mobileNavLink}
                                style={{ 
                                    fontSize: link.mobileSize || '2rem',
                                    color: isActive ? '#3b82f6' : 'white'
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
