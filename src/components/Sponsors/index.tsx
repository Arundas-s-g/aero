"use client";

import clsx from "clsx";

// Dummy Sponsors Data (5 items as requested, repeated for seamless loop)
const sponsors = [
    { id: 1, name: "Sponsor 1", color: "from-blue-900 to-blue-800" },
    { id: 2, name: "Sponsor 2", color: "from-purple-900 to-purple-800" },
    { id: 3, name: "Sponsor 3", color: "from-red-900 to-red-800" },
    { id: 4, name: "Sponsor 4", color: "from-green-900 to-green-800" },
    { id: 5, name: "Sponsor 5", color: "from-yellow-900 to-yellow-800" },
];

export default function Sponsors() {
    return (
        <section className="relative w-full bg-[#050505] pt-0 pb-12 overflow-hidden flex flex-col items-center gap-8 z-20">
            <h3 className="text-white/40 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                Our Trusted Partners
            </h3>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden flex mask-gradient-x">
                {/* 
                   We need 2 sets of the list for seamless scrolling.
                   Using a custom keyframe animation defined in globals.css/tailwind config creates the smoothest loop.
                   For now, we can use a direct style or class if 'animate-scroll' isn't defined, 
                   but let's assume valid tailwind setup or standard CSS injection.
                */}
                <div className="flex gap-8 animate-infinite-scroll min-w-full shrink-0 items-center justify-around px-4">
                    {sponsors.map((sponsor) => (
                        <SponsorCard key={`a-${sponsor.id}`} sponsor={sponsor} />
                    ))}
                </div>
                <div className="flex gap-8 animate-infinite-scroll min-w-full shrink-0 items-center justify-around px-4" aria-hidden="true">
                    {sponsors.map((sponsor) => (
                        <SponsorCard key={`b-${sponsor.id}`} sponsor={sponsor} />
                    ))}
                </div>
            </div>

            {/* Inline Styles for Animation to ensure no dependency issues */}
            <style jsx>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-infinite-scroll {
                    animation: scroll 20s linear infinite;
                }
                .mask-gradient-x {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            `}</style>
        </section>
    );
}

function SponsorCard({ sponsor }: { sponsor: any }) {
    return (
        <div className="relative w-[200px] aspect-video rounded-lg overflow-hidden border border-white/5 bg-neutral-900 group shrink-0">
            {/* Placeholder Gradient Content */}
            <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/80 font-bold uppercase tracking-wider text-sm">{sponsor.name}</span>
            </div>
        </div>
    );
}
