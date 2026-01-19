import styles from "./Events.module.css";
import Image from "next/image";
import clsx from "clsx";

const EVENTS = [
    { id: 1, title: "Computational Fluid Dynamics", date: "MAR 22, 2025", image: "/events/fluid_dynamics.png" },
    { id: 2, title: "ICARUS", date: "JAN 18, 2025", image: "/events/icarus.png" },
    { id: 3, title: "ICARUS 2", date: "TBA", image: "/events/icarus2.png" },
    { id: 4, title: "ALBATROSS", date: "TBA", image: "/events/albatross.png" },
    { id: 5, title: "Drone-Tech Workshop", date: "AUG 18, 2024", image: "/events/drone.png" },
    { id: 6, title: "Aircraft-Design Workshop", date: "AUG 31, 2024", image: "/events/aircraft.png" },
];

export default function Events() {
    return (
        <section className={styles.section} id="events-page">
            <div className={styles.container}>

                {/* 1. UPCOMING EVENTS (Banner) */}
                <div className={styles.subSection}>
                    <h2 className={styles.heading}>
                        Upcoming Event
                    </h2>
                    {/* Large Banner Placeholder (kept as is for now or can be populated if needed) */}
                    <div className={styles.bannerCard}>
                        <div className={styles.bannerGradient}></div>
                        <div className={styles.bannerContent}>
                            <h3 className={styles.bannerTitle}>Sky High 2026</h3>
                            <p className={styles.bannerSubtitle}>Coming Soon | March 15th</p>
                            <button className={styles.bannerButton}>
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. PREVIOUS EVENTS (Gallery) */}
                <div className={styles.subSectionLarge}>
                    <h2 className={styles.headingSecondary}>
                        All Events
                    </h2>

                    {/* Grid of Images */}
                    <div className={styles.grid}>
                        {EVENTS.map((event, i) => {
                            // Puzzled Pattern
                            let spanClass = styles.spanNormal;
                            if (i === 0) spanClass = styles.spanLarge; // 2x2
                            else if (i === 3) spanClass = styles.spanWide; // 2x1
                            else if (i === 4) spanClass = styles.spanTall; // 1x2

                            return (
                                <div
                                    key={event.id}
                                    className={clsx(styles.gridCard, spanClass)}
                                >
                                    {/* Event Image */}
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className={styles.eventImage}
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className={styles.gridOverlay}>
                                        <h3 className={styles.gridTitle}>{event.title}</h3>
                                        <p className={styles.gridSubtitle}>{event.date}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
