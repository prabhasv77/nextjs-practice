import React from "react";
import styles from "../../styles/HeroSection.module.css";
import Button from "../../public/common/Button";
const HeroSection = () => {
  return (
    <>
      <div className={styles["hero-video"]}>
        <video
          src="/assets/videos/hero-clip.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles["video"]}
        ></video>
      </div>
      <div className={styles["hero-section-content"]}>
        <h2>RACE THE NIGHT AWAY</h2>
        <p>
          Run until you see the stars at the Nike After Dark Tour, a race series
          powered by women.
        </p>
        <div className={styles["hero-section-buttons"]}>
          <Button text="Register Now" className="button-color-black" />
          <Button text="Shop Running" className="button-color-black" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
