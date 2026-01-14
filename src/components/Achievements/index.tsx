"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

// Dummy Data
const achievements = [
    {
        id: 1,
        year: "2024",
        title: "National Drone Tech Expo",
        description: "Secured 1st place in the autonomous drone navigation challenge, showcasing our advanced AI pathfinding algorithms.",
        image: "bg-blue-900" // Placeholder class
    },
    {
        id: 2,
        year: "2023",
        title: "Aeromodelling Innovation Summit",
        description: "Presented our custom-built heavy lift drone 'Hercules', capable of carrying 10kg payloads stability.",
        image: "bg-purple-900"
    },
    {
        id: 3,
        year: "2022",
        title: "Inter-NIT Tech Fest",
        description: "Our RC Plane 'Falcon' won the best aerodynamic design award among 30+ participating institutes.",
        image: "bg-red-900"
    },
    {
        id: 4,
        year: "2021",
        title: "Mapping The Campus",
        description: "Successfully completed a full 3D photogrammetry map of the NITC campus using our fleet of survey drones.",
        image: "bg-green-900"
    },
    {
        id: 5,
        year: "2020",
        title: "Club Foundation",
        description: "Aerounwired was officially established as the premier aeromodelling club of NIT Calicut.",
        image: "bg-neutral-800"
    }
];

export default function Achievements() {
    const containerRef = useRef<HTMLDivElement>(null);
    // STAGE 2: "Line is supposed to grow with the image"
    // Changed offset to "start center" so the line starts growing only when the list enters the VIEWPORT CENTER
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // The line grows from 0% to 100% as the section passes through the center of the screen
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-4 md:px-12 z-10 overflow-hidden" id="achievements-page">
            <div className="max-w-7xl mx-auto flex flex-col gap-12 relative" ref={containerRef}>

                <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-center mb-16">
                    Our Journey
                </h2>

                {/* Central Timeline Line */}
                <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden hidden md:block">
                    <motion.div
                        style={{ height: lineHeight, maxHeight: "100%" }} // Ensure max height cap
                        className="w-full bg-blue-500 origin-top"
                    />
                </div>

                <div className="flex flex-col gap-24 relative">
                    {achievements.map((item, index) => (
                        <TimelineItem key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // Strict margin for subsequent items to ensure they trigger only on significant scroll
            viewport={{ once: true, margin: index === 0 ? "-50px" : "-300px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={clsx(
                "flex flex-col md:flex-row items-center gap-12 relative",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Image Side */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className={clsx(
                    "w-full aspect-[4/3] max-w-lg rounded-xl overflow-hidden border border-white/10 relative group",
                    isEven ? "md:mr-12" : "md:ml-12" // Spacing from center
                )}>
                    <div className={`absolute inset-0 ${item.image} opacity-50`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black text-white/10 uppercase tracking-widest">{item.year}</span>
                    </div>
                </div>
            </div>

            {/* Center Dot (Desktop only) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-blue-500 rounded-full z-10 hidden md:block"></div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
                <div className={clsx("flex flex-col gap-2", !isEven && "md:text-right md:items-end")}>
                    <div className="text-blue-500 font-bold tracking-widest text-lg">{item.year}</div>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-wide">{item.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed max-w-md">
                        {item.description}
                    </p>
                </div>
            </div>

        </motion.div>
    );
}
