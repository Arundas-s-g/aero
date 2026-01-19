import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>

                {/* Text Content */}
                <div className={styles.textColumn}>
                    <h2 className={styles.heading}>
                        About Us
                    </h2>
                    <p className={styles.paragraph}>
                        We are the Aeromodelling Club of NIT Calicut, a vibrant community of enthusiasts passionate about the science and art of flight. Our club brings together students who design, build, and fly a wide range of aerial vehicles, including planes, drones, and model rockets. Our aim to promote hands-on learning and innovation in aeromodelling and aerospace engineering. Through workshops, projects, and competitions, we encourage creativity, technical skill development, and teamwork.
                    </p>
                    <button className={styles.button}>
                        Explore
                    </button>
                </div>

                {/* Image Placeholder */}
                <div className={styles.imageWrapper}>
                    {/* Random geometric placeholder pattern */}
                    <div className={styles.placeholderGradient}></div>
                    <span className={styles.placeholderText}>Image Placeholder</span>
                </div>
            </div>
        </section>
    );
}
