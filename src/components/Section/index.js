import styles from "./Section.module.css";
import clsx from "clsx";

export default function Section({ id, title, children, className }) {
    return (
        <section id={id} className={clsx(styles.section, className)}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    {title}<span className={styles.dot}>.</span>
                </h2>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </section>
    );
}
