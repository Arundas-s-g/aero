"use client";

import clsx from "clsx";

const achievements = [
    { id: 1, year: "2024", title: "National Expo", color: "bg-blue-900" },
    { id: 2, year: "2023", title: "Innovation", color: "bg-purple-900" },
    { id: 3, year: "2022", title: "Inter-NIT", color: "bg-red-900" },
    { id: 4, year: "2021", title: "Campus Map", color: "bg-green-900" },
    { id: 5, year: "2020", title: "Foundation", color: "bg-neutral-800" },
];

export default function AchievementsPreview() {
    return (
        <section className="relative w-full py-24 px-4 md:px-12 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Achievements
                    </h2>
                    <p className="text-white/60 max-w-2xl md:self-start">
                        Celebrating our milestones and awards throughout the years.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {achievements.map((item) => (
                        <div key={item.id} className="relative w-64 h-64 bg-neutral-900 border border-white/10 rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className={`absolute inset-0 opacity-50 ${item.color}`}></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                                <span className="text-4xl font-black text-white/10">{item.year}</span>
                                <h4 className="text-xl font-bold uppercase tracking-wider mt-2">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
