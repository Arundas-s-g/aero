"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Dummy Data Generator (reused logic for consistency)
const generateTeam = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        name: `Member ${i + 1}`,
        position: `Position ${i + 1}`,
        // Specific visual arrangement for Home Preview: Only index 0 and 4 are large (Total 2 bigs)
        size: (i === 0 || i === 4) ? "large" : "small"
    }));
};

const previewTeam = generateTeam(10);

export default function TeamPreview() {
    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-4 md:px-12 z-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                {/* Header with Link */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-center md:text-left">
                        Our Team
                    </h2>
                    <Link href="/team" className="group flex items-center gap-4 text-blue-500 hover:text-white transition-colors uppercase tracking-widest text-sm font-semibold">
                        View All Members
                        <span className="p-2 border border-blue-500/30 rounded-full group-hover:border-white/50 transition-colors">
                            <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>

                {/* Mixed Grid - Limited to 10 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px] grid-flow-dense">
                    {previewTeam.map((member) => (
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
        </section>
    );
}
