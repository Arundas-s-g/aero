"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from "./Achievements.module.css";
import clsx from "clsx";

// Achievements Data with specific formatting and images
const achievements = [
    {
        id: 1,
        year: "2025",
        title: "NITK",
        description: <><strong>AIR-5th</strong> in Wright Flight competition conducted by NITK</>,
        image: "/achievements/NITK.jpg"
    },
    {
        id: 2,
        year: "2025",
        title: "ADDC",
        description: <>Unique Technology Award <strong>2nd position</strong> Overall - <strong>AIR 26th</strong></>,
        image: "/achievements/ADDC_25.jpg" 
    },
    {
        id: 3,
        year: "2025",
        title: "DDC",
        description: <>CFD Rank-<strong>8th position</strong> Overall <strong>AIR-15th</strong></>,
        image: "/achievements/DDC_25.jpg"
    },
    {
        id: 4,
        year: "2023",
        title: "ADDC",
        description: <><strong>AIR-1</strong> in Best Design Report</>,
        image: "/achievements/ADDC_23.jpg"
    },
    {
        id: 5,
        year: "2019",
        title: "ADC",
        description: <>Earned Top Honors at <strong>Boeing-IIT National Aeromodelling Competition</strong></>,
        image: "/achievements/ADC_2019.jpg"
    },
    {
        id: 6,
        year: "2017",
        title: "ADC",
        description: <>Awarded <strong>2nd position</strong> for Best Presentation Overall <strong>AIR-4th</strong> in Aero Design challenge</>,
        image: "/achievements/ADC_17.jpg"
    },
    {
        id: 7,
        year: "2016",
        title: "ADC",
        description: <>Awarded <strong>AIR-1st</strong> in Best Presentation, <strong>1st</strong> in Best Flight, <strong>3rd</strong> in Best Design Report Overall <strong>AIR-1</strong></>,
        image: "/achievements/ADC_2016.jpg"
    }
];

export default function Achievements() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className={styles.section} id="achievements-page" ref={containerRef}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Journey</h2>

                <div className={styles.timelineWrapper}>
                    {/* Central Static Line */}
                    <div className={styles.centralLine}></div>
                    
                    {/* Animated Growing Line */}
                    <motion.div 
                        className={styles.scrollLine} 
                        style={{ scaleY }} 
                    />

                    {/* Timeline Items */}
                    {achievements.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }) {
    const isOdd = index % 2 !== 0;
    
    return (
        <motion.div 
            className={clsx(styles.timelineItem, isOdd && styles.reverse)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {/* Image Side */}
            <div className={clsx(styles.halfBlock, styles.imageSide)}>
                <div className={styles.imageContainer}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.cardImage}
                    />
                </div>
            </div>

            {/* Central Dot */}
            <motion.div 
                className={styles.timelineDot}
                initial={{ scale: 0, backgroundColor: "#050505" }}
                whileInView={{ scale: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Content Side */}
            <div className={clsx(styles.halfBlock, styles.contentSide)}>
                <span className={styles.year}>{item.year}</span>
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.description}>
                    {item.description}
                </div>
            </div>
        </motion.div>
    );
}
