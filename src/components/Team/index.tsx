"use client";

import clsx from "clsx";

// Dummy Data Generator
const generateTeam = (count: number, rolePrefix: string) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        name: `Member ${i + 1}`,
        position: `${rolePrefix} ${i + 1}`,
        // Bento Grid Logic: Every 7th item is large, others small
        size: (i % 7 === 0 || i % 7 === 4) ? "large" : "small"
    }));
};

const mainTeam = generateTeam(24, "Core Member");
const juniorTeam = generateTeam(27, "Junior Exec");

export default function Team() {
    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-4 md:px-12 z-10" id="team">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">

                {/* 1. MEET THE TEAM */}
                <div className="flex flex-col gap-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-center mb-8">
                        Meet The Team
                    </h2>

                    {/* Mixed Grid / Bento Style */}
                    {/* We use grid-auto-flow-dense to pack items tightly */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px] grid-flow-dense">
                        {mainTeam.map((member) => (
                            <div
                                key={member.id}
                                className={clsx(
                                    "relative bg-neutral-900 border border-white/5 rounded-lg overflow-hidden group transition-all duration-300 hover:border-blue-500/50",
                                    member.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                                )}
                            >
                                {/* Placeholder Image Area */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                                    <span className="text-white/10 text-4xl font-black">{member.id + 1}</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-blue-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">{member.name}</h3>
                                    <p className="text-sm md:text-base text-blue-200 mt-2 font-light tracking-widest">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. JUNIOR EXECUTIVE */}
                <div className="flex flex-col gap-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase text-center mb-8 text-white/50">
                        Junior Executive
                    </h2>

                    {/* Mixed Grid / Bento Style for Juniors */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px] grid-flow-dense">
                        {juniorTeam.map((member) => (
                            <div
                                key={member.id}
                                className={clsx(
                                    "relative bg-neutral-900 border border-white/5 rounded-lg overflow-hidden group transition-all duration-300 hover:border-white/20",
                                    member.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                                )}
                            >
                                {/* Placeholder Image Area */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                                    <span className="text-white/5 text-2xl font-black">{member.id + 1}</span>
                                </div>

                                {/* Hover Overlay - Name Only */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-2">
                                    <h3 className="text-sm md:text-lg font-bold uppercase tracking-wider text-white">{member.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
