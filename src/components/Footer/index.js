import Link from "next/link";
import { Instagram, Mail, Linkedin, Facebook } from "lucide-react";
import styles from "./Footer.module.css";
import clsx from "clsx";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* 1. Quick Links */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>
                        Quick Links
                    </h3>
                    <nav className={styles.nav}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/team" className={styles.navLink}>Team</Link>
                        <Link href="#events" className={styles.navLink}>Events</Link>
                        <Link href="#achievements" className={styles.navLink}>Achievements</Link>
                        <Link href="#gallery" className={styles.navLink}>Gallery</Link>
                    </nav>
                </div>

                {/* 2. Location */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>
                        Location
                    </h3>
                    <p className={styles.locationText}>
                        1st Floor, Milma Canteen,<br />
                        NITC
                    </p>
                    {/* Google Map Embed */}
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3912.164366632938!2d75.936939!3d11.320899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb435ac3e232971fa!2sMilma%20Canteen!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            className={styles.iframe}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>

                {/* 3. Connect With Us */}
                <div className={styles.column}>
                    <h3 className={styles.heading}>
                        Connect With Us
                    </h3>
                    <nav className={styles.socialNav}>
                        <Link href="https://www.instagram.com/club_aerounwired" target="_blank" className={clsx(styles.socialLink, styles.hoverPink)}>
                            <Instagram size={18} /> Instagram
                        </Link>
                        <a href="mailto:aerounwired@nitc.ac.in" className={clsx(styles.socialLink, styles.hoverRed)}>
                            <Mail size={18} /> Gmail
                        </a>
                        <Link href="https://www.linkedin.com/company/aerounwired/" target="_blank" className={clsx(styles.socialLink, styles.hoverBlue)}>
                            <Linkedin size={18} /> LinkedIn
                        </Link>
                        <Link href="https://www.facebook.com/UnwiredAeroNitCalicut/" target="_blank" className={clsx(styles.socialLink, styles.hoverSky)}>
                            <Facebook size={18} /> Facebook
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p className={styles.copyrightText}>
                    Aerounwired club ©2025, NITC. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
