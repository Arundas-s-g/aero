"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
];

export default function AeroNav() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Dynamic scroll logic: Transparent initially, Glass on scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Initial check (in case page loads scrolled down)
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{ zIndex: 999999 }}
            className={clsx(
                "fixed top-0 left-0 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-transparent py-4 border-blue-500/10 shadow-none" // Transparent even on scroll
                    : "bg-transparent py-4 border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Name: AEROUNWIRED */}
                <Link
                    href="/"
                    className="font-bold text-2xl tracking-tighter uppercase relative z-[999999] hover:text-blue-400 transition-colors"
                >
                    <span className="text-blue-500">AERO</span>
                    <span className="text-white">UNWIRED</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-sm tracking-wide uppercase transition-all duration-300",
                                    isActive
                                        ? "text-blue-500 font-extrabold scale-105 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                                        : "text-white/70 font-bold hover:text-blue-400 hover:scale-105"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Icon (Simple placeholder for now) */}
                <button className="md:hidden text-white hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
