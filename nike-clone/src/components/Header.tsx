import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          src="/assets/images/jordan-png-transparent.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navLinks}>
        <Link href="/" passHref>
          <span className={styles.link}>Find a Store</span>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/help" passHref>
          <span className={styles.link}>Help</span>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/about" passHref>
          <span className={styles.link}>Join Us</span>
        </Link>
        <span className={styles.separator}>|</span>
        <Link href="/contact" passHref>
          <span className={styles.link}>Sign In</span>
        </Link>
      </nav>
    </header>
  );
}
