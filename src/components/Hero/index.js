"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DroneSequence from "../DroneSequence";
import styles from "./Hero.module.css";

export default function Hero() {
    // Isolated Hero Logic
    // Total Height: 400vh (Increased for slower animation)
    // Sticky Ratio Calculation:
    // Sticky Phase = (Height - Viewport) / Height
    // (400 - 100) / 400 = 300 / 400 = 0.75 (75%)
    // Exit Phase = 100 / 400 = 0.25 (25%)

    // Result:
    // 0 -> 0.75: Sticky. Animation plays 0% -> 75%.
    // 0.75 -> 1.0: Moving Up (Exit). Animation plays 75% -> 100%.

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"] // Capture full exit
    });

    // Sequence Transform:
    // Map linearly 0->1. The sticky geometry handles the timing.
    const sequenceProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1],
        { clamp: true }
    );

    // Dynamic Configuration for Mobile vs Desktop
    const [config, setConfig] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setConfig({
                    folder: "/mobile_sequence",
                    prefix: "ezgif-frame-",
                    digits: 3,
                    frameCount: 181,
                    startAt: 1 // Mobile starts at 001
                });
            } else {
                setConfig({
                    folder: "/sequence",
                    prefix: "frame_",
                    digits: 4,
                    frameCount: 181,
                    startAt: 0 // Desktop starts at 0000
                });
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            ref={containerRef}
            className={styles.container}
        >
            <motion.div
                className={styles.stickyWrapper}
            >
                <div className={styles.droneLayer}>
                    {config && (
                        <DroneSequence 
                            frameCount={config.frameCount} 
                            progress={sequenceProgress} 
                            folder={config.folder}
                            prefix={config.prefix}
                            digits={config.digits}
                            startAt={config.startAt}
                        />
                    )}
                </div>

                {/* Text Overlay - Emerges earlier [0.15-0.35] and sits higher */}
                <div className={styles.textOverlay}>
                    {/* Heading: Appears First [0.15 - 0.35] - Slower transition */}
                    <motion.h1
                        style={{
                            opacity: useTransform(scrollYProgress, [0.15, 0.35], [0, 1]),
                            y: useTransform(scrollYProgress, [0.15, 0.35], ["50px", "0px"])
                        }}
                        className={styles.heading}
                    >
                        CLUB<br className={styles.mobileBreak} /> <span className={styles.clubHighlight}>AEROUNWIRED</span>
                    </motion.h1>

                    {/* Subheadings: Appears Second [0.30 - 0.50] - Slower transition */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.30, 0.50], [0, 1]),
                            y: useTransform(scrollYProgress, [0.30, 0.50], ["50px", "0px"])
                        }}
                        className={styles.subheadingWrapper}
                    >
                        <h2 className={styles.subheading}>
                            WINGS OF INNOVATION
                        </h2>
                        <h2 className={styles.subheading}>
                            HEART OF AVIATION
                        </h2>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
