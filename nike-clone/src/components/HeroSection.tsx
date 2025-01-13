import styles from "../../styles/Home.module.css";

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.videoContainer}>
          <video className={styles.heroVideo} autoPlay loop muted playsInline>
            <source src="/assets/videos/hero-clip.mp4" type="video/mp4" />
            Your Browser doesn&apos;t support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
