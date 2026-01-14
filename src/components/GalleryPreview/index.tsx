"use client";

import clsx from "clsx";

// 10 placeholder items
const galleryItems = Array.from({ length: 10 }).map((_, i) => ({ id: i }));

export default function GalleryPreview() {
    return (
        <section className="relative w-full py-24 px-4 md:px-12 bg-black text-white">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="text-center md:text-right self-end">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        Gallery
                    </h2>
                    <p className="text-white/60 mt-4">A glimpse into our world.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-2 h-[500px]">
                    {galleryItems.map((item, i) => (
                        <div
                            key={item.id}
                            className={clsx(
                                "relative overflow-hidden group rounded-md bg-neutral-900 border border-white/5",
                                // First image large, others small random
                                i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
                            )}
                        >
                            {/* Placeholder */}
                            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
