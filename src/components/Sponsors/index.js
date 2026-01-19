"use client";

import Image from "next/image";
import styles from "./Sponsors.module.css";

// Real Sponsors Data
const sponsors = [
    { id: 1, name: "Ansys", image: "/sponsors/ansys.png" },
    { id: 2, name: "DarkMatter", image: "/sponsors/darkmatter.png" },
    { id: 3, name: "Dassault Systèmes", image: "/sponsors/dassault.png" },
    { id: 4, name: "Gasotech", image: "/sponsors/gasotech.png" },
    { id: 5, name: "Glorod", image: "/sponsors/glorod.png" },
    { id: 6, name: "Quadkart", image: "/sponsors/quadkart.png" },
];

export default function Sponsors() {
    return (
        <section className={styles.section}>
            <h3 className={styles.heading}>
                Our Trusted Partners
            </h3>

            {/* Infinite Scroll Container */}
            <div className={styles.scrollContainer}>
                <div className={styles.track}>
                    {sponsors.map((sponsor) => (
                        <SponsorCard key={`a-${sponsor.id}`} sponsor={sponsor} />
                    ))}
                </div>
                <div className={styles.track} aria-hidden="true">
                    {sponsors.map((sponsor) => (
                        <SponsorCard key={`b-${sponsor.id}`} sponsor={sponsor} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SponsorCard({ sponsor }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <Image 
                    src={sponsor.image} 
                    alt={sponsor.name}
                    fill
                    className={styles.logoImage}
                    sizes="(max-width: 768px) 150px, 200px"
                />
            </div>
        </div>
    );
}
