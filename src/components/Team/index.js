"use client";

import styles from "./Team.module.css";
import clsx from "clsx";

import Image from "next/image";

// Dummy Data for Core (unchanged)
const generateTeam = (count, rolePrefix) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        name: `Member ${i + 1}`,
        position: `${rolePrefix} ${i + 1}`,
        size: (i % 7 === 0 || i % 7 === 4) ? "large" : "small"
    }));
};

// Core Members Data
const coreMembers = [
    // 0 (Large) - VIP
    { name: "PAUL VARGHESE SHIBU", role: "SECRETARY", image: "/team/paul.jpg" },
    // 1-3 (Small) - Senior Execs
    { name: "VEENA", role: "SENIOR EXECUTIVE", image: "/team/veena.jpg" },
    { name: "JEFIN", role: "SENIOR EXECUTIVE", image: "/team/JEFFIN.jpg" },
    { name: "SRINIVAS", role: "SENIOR EXECUTIVE", image: "/team/SRINIVAS.jpg" },
    // 4 (Large) - VIP
    { name: "SINAN", role: "SAE CAPTAIN", image: "/team/SINAN.jpg" },
    // 5-6 (Small) - Senior Execs
    { name: "VARSHINII", role: "SENIOR EXECUTIVE", image: "/team/VARSHINII.jpg" },
    { name: "DENNIS", role: "SENIOR EXECUTIVE", image: "/team/DENNIS.jpg" },
    // 7 (Large) - VIP
    { name: "AKASHDEEP", role: "DEPUTY SECRETARY", image: "/team/placeholder.jpg" },
    // 8-10 (Small) - Senior Execs
    { name: "RABEEH", role: "SENIOR EXECUTIVE", image: "/team/RABEEH.jpg" },
    { name: "ARUN", role: "SENIOR EXECUTIVE", image: "/team/arun.jpg" },
    { name: "AKMAL", role: "SENIOR EXECUTIVE", image: "/team/akmal.jpg" },
    // 11 (Large) - VIP
    { name: "AADITYA", role: "FABRICATION HEAD", image: "/team/aditya.jpg" },
    // 12-13 (Small) - Overflow VIPs
    { name: "ANGEL", role: "DESIGN AND CONTENT HEAD", image: "/team/ANGEL.jpg" },
    { name: "VIVANSH", role: "MARKETING HEAD", image: "/team/VIVANSH.jpeg" },
    // 14 (Large) - VIP
    { name: "AARUSH", role: "MARKETING HEAD", image: "/team/placeholder.jpg" },
    // 15-17 (Small) - Overflow VIPs
    { name: "ABINASH", role: "TREASURER", image: "/team/Abinash.jpg" },
    { name: "AKAANSH", role: "TREASURER", image: "/team/AAKANSH.jpg" },
    { name: "MAAHIRA", role: "MEDIA AND PR HEAD", image: "/team/MAAHIRA.png" },
];

const mainTeam = coreMembers.map((member, i) => ({
    id: `core-${i}`,
    name: member.name,
    position: member.role,
    image: member.image,
    size: (i % 7 === 0 || i % 7 === 4) ? "large" : "small"
}));

// Real Junior Executives Data (Paths updated to /team/ as files are located there)
const juniorMembers = [
    { name: "SREELAKSHMI", image: "/team/Sreelakshmi PP   - SREELAKSHMI M T.jpg" },
    { name: "PARVATHY", image: "/team/parvathyg.jpeg" },
    { name: "UDAY", image: "/team/uday.jpg" },
    { name: "ARUNDAS", image: "/team/arundas.jpg" },
    { name: "ANIRUDH", image: "/team/Anirudh.jpeg" },
    { name: "EESHAN", image: "/team/eeshan.webp" },
    { name: "SIDHARTH", image: "/team/sidharth.jpg" },
    { name: "VISHNU", image: "/team/VISHNU NARAYANAN.jpg" },
    { name: "SHAHID", image: "/team/Shahid.jpg" },
    { name: "SRINAND", image: "/team/Srinand.jpg" },
    { name: "ADITHYAN", image: "/team/Screenshot_2025-09-14-16-15-48-174_com.instagram.android-edit.jpg" },
    { name: "SYAMANTAK", image: "/team/Syamantak.jpg" },
    { name: "DEEPAK", image: "/team/deepak.jpg" },
    { name: "DHYANESHWAR", image: "/team/Dnyaneshwar.jpg" },
    { name: "RISHIRAJ", image: "/team/IMG20250916175103~2.jpg" },
    { name: "NAVANEETH", image: "/team/navaneeth.jpeg" },
    { name: "SAMRUDHI", image: "/team/samrudhi.png" },
    { name: "SANIKA", image: "/team/Idphotu.jpg" },
    { name: "NANDHINI", image: "/team/nandini .jpg" },
    { name: "DILAN", image: "/team/WhatsApp Image 2025-09-28 at 2.57.51 PM.jpeg" },
    { name: "SHISHIRA", image: "/team/IMG-20250914-WA0021.jpg" },
    { name: "SHREYA", image: "/team/IMG-20250916-WA0011.jpg" },
    { name: "SOJJITH", image: "/team/Screenshot_20250922_151157_Gallery.jpg" },
    { name: "YASEEN", image: "/team/Yaseen.png" },
];

const juniorTeam = juniorMembers.map((member, i) => ({
    id: `jr-${i}`,
    ...member,
    size: (i % 7 === 0 || i % 7 === 4) ? "large" : "small"
}));

export default function Team() {
    return (
        <section className={styles.section} id="team">
            <div className={styles.container}>

                {/* 1. MEET THE TEAM */}
                <div className={styles.subSection}>
                    <h2 className={styles.heading}>
                        Meet The Team
                    </h2>

                    {/* Mixed Grid / Bento Style */}
                    <div className={styles.grid}>
                        {mainTeam.map((member) => (
                            <div
                                key={member.id}
                                className={clsx(
                                    styles.card,
                                    styles.cardCore,
                                    member.size === "large" ? styles.spanLarge : styles.spanSmall
                                )}
                            >
                                {/* Member Image */}
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
                                <div className={styles.overlayCore}>
                                    <h3 className={styles.nameLarge}>{member.name}</h3>
                                    <p className={styles.position}>{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. JUNIOR EXECUTIVE */}
                <div className={styles.subSection}>
                    <h2 className={styles.subHeading}>
                        Junior Executive
                    </h2>

                    {/* Mixed Grid / Bento Style for Juniors */}
                    <div className={styles.grid}>
                        {juniorTeam.map((member) => (
                            <div
                                key={member.id}
                                className={clsx(
                                    styles.card,
                                    styles.cardJunior,
                                    member.size === "large" ? styles.spanLarge : styles.spanSmall
                                )}
                            >
                                {/* Member Image */}
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src={member.image} 
                                        alt={member.name}
                                        fill
                                        className={styles.memberImage}
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />
                                </div>

                                {/* Hover Overlay - Name Only */}
                                <div className={styles.overlayJunior}>
                                    <h3 className={styles.nameSmall}>{member.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
