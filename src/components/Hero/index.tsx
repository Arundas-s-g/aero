"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import DroneSequence from "@/components/DroneSequence";

export default function Hero() {
    // Isolated Hero Logic
    // Total Height: 500vh
    // Sticky Ratio Calculation:
    // Sticky Phase = (Height - Viewport) / Height
    // (500 - 100) / 500 = 400 / 500 = 0.8 (80%)
    // Exit Phase = 100 / 500 = 0.2 (20%)

    // Result:
    // 0 -> 0.8: Sticky. Animation plays 0% -> 80%.
    // 0.8 -> 1.0: Moving Up (Exit). Animation plays 80% -> 100%.

    const containerRef = useRef<HTMLDivElement>(null);
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

    return (
        <section
            ref={containerRef}
            className="relative h-[500vh] w-full bg-[#050505] m-0 p-0"
        >
            <motion.div
                className="sticky top-0 left-0 w-full h-screen overflow-hidden m-0 p-0 z-0 will-change-transform"
            >
                <div className="absolute inset-0 z-0 w-full h-full">
                    <DroneSequence frameCount={181} progress={sequenceProgress} />
                </div>

                {/* Text Overlay - Emerges earlier [0.2-0.3] and sits higher */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-48 pointer-events-none">
                    {/* Heading: Appears First [0.2 - 0.3] */}
                    <motion.h1
                        style={{
                            opacity: useTransform(scrollYProgress, [0.2, 0.3], [0, 1]),
                            y: useTransform(scrollYProgress, [0.2, 0.3], ["50px", "0px"])
                        }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase mb-6 text-center drop-shadow-2xl"
                    >
                        CLUB <span className="text-blue-500">AEROUNWIRED</span>
                    </motion.h1>

                    {/* Subheadings: Appears Second [0.25 - 0.35] */}
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0.25, 0.35], [0, 1]),
                            y: useTransform(scrollYProgress, [0.25, 0.35], ["50px", "0px"])
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <h2 className="text-xl md:text-2xl text-white/90 font-light tracking-[0.5em] uppercase">
                            WINGS OF INNOVATION
                        </h2>
                        <h2 className="text-xl md:text-2xl text-white/90 font-light tracking-[0.5em] uppercase">
                            HEART OF AVIATION
                        </h2>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
