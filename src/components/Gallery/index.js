import styles from "./Gallery.module.css";
import clsx from "clsx";
import Image from "next/image";

const galleryImages = [
    "/gallery/gallery_1.jpg", "/gallery/gallery_2.jpg", "/gallery/gallery_3.jpg",
    "/gallery/gallery_4.jpg", "/gallery/gallery_5.jpg", "/gallery/gallery_6.jpg",
    "/gallery/gallery_7.jpg", "/gallery/gallery_8.jpg", "/gallery/gallery_9.jpg",
    "/gallery/gallery_10.jpg", "/gallery/gallery_11.jpg", "/gallery/Rectangle 33.png",
    "/gallery/Rectangle 36.png", "/gallery/Rectangle 39.png", "/gallery/Rectangle 40.png",
    "/gallery/Rectangle 42.png", "/gallery/drone.png", "/gallery/icarus.png", "/gallery/rocket.png"
];

export default function Gallery() {
    return (
        <section className={styles.section} id="gallery-page">
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Our Gallery
                    </h2>
                    <p className={styles.subheading}>
                        Capturing moments from our journey to the skies.
                    </p>
                </div>

                {/* Masonry-like Grid -> Puzzled Grid */}
                <div className={styles.grid}>
                    {galleryImages.map((src, i) => {
                        // Complex puzzled pattern
                        const pattern = [
                            'spanLarge', 'spanSmall', 'spanTall', 'spanSmall', 'spanWide',
                            'spanSmall', 'spanLarge', 'spanTall', 'spanWide', 'spanSmall',
                            'spanTall', 'spanLarge', 'spanSmall', 'spanWide'
                        ];
                        const sizeClass = styles[pattern[i % pattern.length]] || styles.spanSmall;
                        
                        return (
                            <div
                                key={i}
                                className={clsx(styles.card, sizeClass)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={src}
                                        alt={`Gallery Image ${i + 1}`}
                                        fill
                                        className={styles.galleryImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Hover Overlay */}
                                <div className={styles.overlay}>
                                    <p className={styles.overlayText}>View Image</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
