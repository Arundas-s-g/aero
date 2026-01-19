"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./TeamPreview.module.css";
import clsx from "clsx";
import Image from "next/image";

// Core Members Data (Filtered: Non-Senior Executives)
const previewTeam = [
    { id: 0, name: "PAUL VARGHESE SHIBU", position: "SECRETARY", image: "/team/paul.jpg", size: "large" },
    { id: 4, name: "SINAN", position: "SAE CAPTAIN", image: "/team/SINAN.jpg", size: "small" },
    { id: 7, name: "AKASHDEEP", position: "DEPUTY SECRETARY", image: "/team/placeholder.jpg", size: "small" },
    { id: 11, name: "AADITYA", position: "FABRICATION HEAD", image: "/team/aditya.jpg", size: "small" },
    { id: 12, name: "ANGEL", position: "DESIGN AND CONTENT HEAD", image: "/team/ANGEL.jpg", size: "large" }, // Prominent
    { id: 13, name: "VIVANSH", position: "MARKETING HEAD", image: "/team/VIVANSH.jpeg", size: "small" },
    { id: 14, name: "AARUSH", position: "MARKETING HEAD", image: "/team/placeholder.jpg", size: "small" },
    { id: 15, name: "ABINASH", position: "TREASURER", image: "/team/Abinash.jpg", size: "small" },
    { id: 16, name: "AKAANSH", position: "TREASURER", image: "/team/AAKANSH.jpg", size: "small" },
    { id: 17, name: "MAAHIRA", position: "MEDIA AND PR HEAD", image: "/team/MAAHIRA.png", size: "small" }
];

export default function TeamPreview() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header with Link */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Our Team
                    </h2>
                    <Link href="/team" className={styles.viewAllLink}>
                        View All Members
                        <span className={styles.arrowWrapper}>
                            <ArrowRight size={16} />
                        </span>
                    </Link>
                </div>

                {/* Mixed Grid - Limited to 10 */}
                <div className={styles.grid}>
                    {previewTeam.map((member) => (
                        <div
                            key={member.id}
                            className={clsx(
                                styles.card,
                                member.size === "large" ? styles.spanLarge : styles.spanSmall
                            )}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={styles.memberImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            {/* Hover Overlay */}
                            <div className={styles.overlay}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <p className={styles.memberPosition}>{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
