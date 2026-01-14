
export default function Gallery() {
    // Generate 50 dummy images/items
    const images = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        title: `Gallery Image ${i + 1}`,
        // Rotate sizes for visual variety
        aspect: ["aspect-square", "aspect-[4/3]", "aspect-[3/4]"][i % 3]
    }));

    return (
        <section className="relative w-full bg-[#050505] text-white py-24 px-4 md:px-12 z-10" id="gallery-page">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">

                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest uppercase">
                        Our Gallery
                    </h2>
                    <p className="text-white/60 font-light tracking-wide">
                        Capturing moments from our journey to the skies.
                    </p>
                </div>

                {/* Masonry-like Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className={`relative break-inside-avoid bg-neutral-900 border border-white/5 rounded-lg overflow-hidden group transition-all duration-300 hover:border-white/20 mb-4 ${img.aspect}`}
                        >
                            {/* Placeholder Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center">
                                <span className="text-white/5 text-xl font-black">{img.id + 1}</span>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-white/80">{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
