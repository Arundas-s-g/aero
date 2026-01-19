"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./EventsPreview.module.css";

const EVENTS = [
    { id: 1, title: "Computational Fluid Dynamics", date: "MAR 22, 2025", image: "/events/fluid_dynamics.png" },
    { id: 2, title: "ICARUS", date: "JAN 18, 2025", image: "/events/icarus.png" },
    { id: 3, title: "ICARUS 2", date: "TBA", image: "/events/icarus2.png" },
    { id: 4, title: "ALBATROSS", date: "TBA", image: "/events/albatross.png" },
    { id: 5, title: "Drone-Tech Workshop", date: "AUG 18, 2024", image: "/events/drone.png" },
    { id: 6, title: "Aircraft-Design Workshop", date: "AUG 31, 2024", image: "/events/aircraft.png" },
];

export default function EventsPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mobile detection
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1));
    };

    return (
        <section className={styles.section}>
            <div className={styles.gradientLine} />

            <div className={styles.headerContainer}>
                <div className={styles.headerText}>
                    <h2 className={styles.heading}>
                        EVENTS
                    </h2>
                    <p className={styles.subheading}>
                        Join us for our next series of groundbreaking gatherings and competitions.
                    </p>
                </div>
            </div>

            {/* Carousel Viewport */}
            <div className={styles.carouselViewport}>
                <motion.div
                    className={styles.carouselTrack}
                    animate={isMobile ? undefined : {
                        x: -(currentIndex * 292) // 260w + 32gap = 292
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {/* Render a large set of duplicates to simulate infinity for a long time */}
                    {[...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS].map((event, i) => (
                        <motion.div
                            key={`${event.id}-${i}`}
                            className={styles.cardWrapper}
                        >
                            {/* Image Container */}
                            <div className={styles.cardContainer}>
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            {/* Info Container (Below Image) */}
                            <div className={styles.infoContainer}>
                                <span className={styles.date}>
                                    {event.date}
                                </span>
                                <h3 className={styles.title}>
                                    {event.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Arrow Navigation (Desktop) */}
                <button
                    onClick={prevSlide}
                    className={`${styles.navButton} ${styles.navLeft}`}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={nextSlide}
                    className={`${styles.navButton} ${styles.navRight}`}
                    aria-label="Next Slide"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Mobile Controls & Link */}
            <div className={styles.mobileControlsContainer}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={prevSlide}
                        className={styles.controlButton}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className={styles.controlButton}
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
                <Link
                    href="/events"
                    className={styles.viewAll}
                >
                    View All
                    <span style={{ fontSize: '1.25rem' }}>→</span>
                </Link>
            </div>
        </section>
    );
}
