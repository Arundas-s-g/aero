"use client";

import styles from "./GalleryPreview.module.css";
import clsx from "clsx";
import Image from "next/image";

const galleryImages = [
    "/gallery/gallery_1.jpg",
    "/gallery/gallery_2.jpg",
    "/gallery/gallery_3.jpg",
    "/gallery/gallery_4.jpg",
    "/gallery/gallery_5.jpg",
    "/gallery/gallery_6.jpg",
    "/gallery/gallery_7.jpg",
    "/gallery/gallery_8.jpg",
    "/gallery/gallery_9.jpg",
    "/gallery/gallery_10.jpg"
];

export default function GalleryPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Gallery
                    </h2>
                    <p className={styles.description}>A glimpse into our world.</p>
                </div>

                <div className={styles.grid}>
                    {galleryImages.map((src, i) => {
                        // "Puzzled" pattern logic
                        // 0: Large, 1: Tall, 2: Small, 3: Small, 4: Wide
                        // 5: Large, 6: Small, 7: Tall, 8: Small, 9: Wide
                        let spanClass = styles.spanSmall;
                        if (i === 0 || i === 5) spanClass = styles.spanLarge;
                        else if (i === 1 || i === 7) spanClass = styles.spanTall;
                        else if (i === 4 || i === 9) spanClass = styles.spanWide;
                        
                        return (
                            <div
                                key={i}
                                className={clsx(styles.card, spanClass)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={src}
                                        alt={`Gallery Image ${i + 1}`}
                                        fill
                                        className={styles.galleryImage}
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
