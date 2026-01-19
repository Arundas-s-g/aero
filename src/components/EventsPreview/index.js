"use client";

import { useState, useEffect, useRef } from "react";
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
    const trackRef = useRef(null);
    const [extendedEvents, setExtendedEvents] = useState([]);

    // Create a large list for "infinite" feel
    useEffect(() => {
        // 20 copies * 6 items = 120 items
        const copies = new Array(20).fill(EVENTS).flat();
        setExtendedEvents(copies);
    }, []);

    const handleInfiniteScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        
        // We have 20 sets of events. 
        // We want to keep the user roughly in the middle 10 sets.
        // If they scroll to the first 5 sets, jump forward by 10 sets.
        // If they scroll to the last 5 sets, jump backward by 10 sets.
        
        const totalSets = 20;
        const scrollWidth = track.scrollWidth;
        const clientWidth = track.clientWidth;
        
        const singleSetWidth = scrollWidth / totalSets;
        const jumpWidth = singleSetWidth * 10; // Jump 10 sets
        
        const threshold = singleSetWidth * 5; // 5 sets buffer from edges
        
        if (track.scrollLeft < threshold) {
            // Too close to start -> Jump forward
            track.scrollLeft += jumpWidth;
        } else if (track.scrollLeft + clientWidth > scrollWidth - threshold) {
            // Too close to end -> Jump backward
            track.scrollLeft -= jumpWidth;
        }
    };

    // Initial Scroll to Middle - Robust check
    useEffect(() => {
        if (!trackRef.current || extendedEvents.length === 0) return;

        const initializeScroll = () => {
            const track = trackRef.current;
            if (track) {
                const totalWidth = track.scrollWidth;
                const middlePosition = totalWidth / 2 - track.clientWidth / 2;
                
                // Only set if we are currently near 0 (initial state)
                if (track.scrollLeft < 100) {
                   track.scrollLeft = middlePosition;
                }
            }
        };

        // Try immediately and after a short delay to ensure layout is ready
        initializeScroll();
        const timeoutId = setTimeout(initializeScroll, 50);
        
        return () => clearTimeout(timeoutId);
    }, [extendedEvents]);

    const scroll = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        const scrollAmount = 300; 
        
        // Safety check: if we are stuck at edges, force jump before scrolling
        const totalSets = 20;
        const singleSetWidth = track.scrollWidth / totalSets;
        const jumpWidth = singleSetWidth * 10;
        
        if (track.scrollLeft < 10 && direction === "left") {
             // Stuck at start and trying to go left? Jump forward first
             track.scrollLeft += jumpWidth;
        } else if (track.scrollLeft + track.clientWidth > track.scrollWidth - 10 && direction === "right") {
             // Stuck at end and trying to go right? Jump backward first
             track.scrollLeft -= jumpWidth;
        }

        track.scrollBy({ 
            left: direction === "left" ? -scrollAmount : scrollAmount, 
            behavior: "smooth" 
        });
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

            {/* Carousel Viewport - Now the scroll container */}
            <div 
                className={styles.carouselViewport} 
                ref={trackRef}
                onScroll={handleInfiniteScroll}
            >
                <div className={styles.carouselTrack}>
                    {extendedEvents.map((event, i) => (
                        <div
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrow Navigation (Desktop) - Outside viewport relative to section */}
             {/* We position them mostly relative to the viewport container via CSS in original module, 
                 but here we can just place them relative to section or adjust module. 
                 Original styles.navButton had absolute positioning. 
                 We need to ensure they sit on top of the scrolling content.
            */}
            <div className={styles.carouselControlsDesktop}>
                 <button
                    onClick={() => scroll("left")}
                    className={`${styles.navButton} ${styles.navLeft}`}
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={32} />
                </button>
                <button
                    onClick={() => scroll("right")}
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
                        onClick={() => scroll("left")}
                        className={styles.controlButton}
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
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
