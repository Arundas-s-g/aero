
export default function Events() {
    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-4 md:px-12 z-10" id="events-page">
            <div className="max-w-7xl mx-auto flex flex-col gap-24">

                {/* 1. UPCOMING EVENTS (Banner) */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase text-center mb-4">
                        Upcoming Event
                    </h2>
                    {/* Large Banner Placeholder */}
                    <div className="w-full aspect-[21/9] bg-neutral-900 border border-white/10 rounded-xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white/90">Sky High 2026</h3>
                            <p className="mt-4 text-blue-200 text-lg tracking-wide uppercase">Coming Soon | March 15th</p>
                            <button className="mt-8 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. PREVIOUS EVENTS (Gallery) */}
                <div className="flex flex-col gap-12">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase text-center text-white/50">
                        Previous Events
                    </h2>

                    {/* Grid of 6 images (3:4 aspect ratio) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-[3/4] relative bg-neutral-900 border border-white/5 rounded-lg overflow-hidden group transition-all duration-300 hover:border-blue-500/30 hover:scale-[1.01]"
                            >
                                {/* Placeholder Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                                    <span className="text-white/5 text-4xl font-black">Event {i + 1}</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                    <h3 className="text-xl font-bold uppercase tracking-wider text-white">Workshop {i + 1}</h3>
                                    <p className="text-sm text-white/60 mt-2 font-light">2025 Edition</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
