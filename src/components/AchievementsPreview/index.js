"use client";

import styles from "./AchievementsPreview.module.css";
import clsx from "clsx";
import Image from "next/image";

const achievements = [
    {
        id: 1,
        year: "2025",
        title: "NITK",
        description: "AIR-5th in Wright Flight competition",
        image: "/achievements/NITK.jpg",
        colorClass: "overlayBlue",
        className: "spanLarge" // 2x2
    },
    {
        id: 2,
        year: "2025",
        title: "ADDC",
        description: "Unique Technology Award - 2nd Position Overall",
        image: "/achievements/ADDC_25.jpg",
        colorClass: "overlayPurple",
        className: "spanLarge" // 2x2
    },
    {
        id: 3,
        year: "2025",
        title: "DDC",
        description: "CFD Rank - 8th Position Overall",
        image: "/achievements/DDC_25.jpg",
        colorClass: "overlayRed",
        className: "spanNormal"
    },
    {
        id: 4,
        year: "2023",
        title: "ADDC",
        description: "AIR-1 in Best Design Report",
        image: "/achievements/ADDC_23.jpg",
        colorClass: "overlayGreen",
        className: "spanWide" // 2x1
    },
    {
        id: 5,
        year: "2019",
        title: "ADC",
        description: "Top Honors at Boeing-IIT National Competition",
        image: "/achievements/ADC_2019.jpg",
        colorClass: "overlayNeutral",
        className: "spanNormal"
    },
    {
        id: 6,
        year: "2017",
        title: "ADC",
        description: "2nd Position for Best Presentation Overall",
        image: "/achievements/ADC_17.jpg",
        colorClass: "overlayBlue",
        className: "spanWide" // 2x1 as requested
    },
    {
        id: 7,
        year: "2016",
        title: "ADC",
        description: "AIR-1 in Best Presentation & Best Flight",
        image: "/achievements/ADC_2016.jpg",
        colorClass: "overlayPurple",
        className: "spanWide" // 2x1
    }
];

export default function AchievementsPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Achievements
                    </h2>
                    <p className={styles.subheading}>
                        Celebrating our milestones and awards throughout the years.
                    </p>
                </div>

                <div className={styles.grid}>
                    {achievements.map((item) => (
                        <div 
                            key={item.id} 
                            className={clsx(styles.card, styles[item.className])}
                        >
                            {/* Image Background */}
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className={clsx(styles.cardOverlay, styles[item.colorClass])}></div>
                            
                            <div className={styles.cardContent}>
                                <span className={styles.year}>{item.year}</span>
                                <h4 className={styles.title}>{item.title}</h4>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
