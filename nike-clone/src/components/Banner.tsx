"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Banner.module.css";

interface BannerData {
  bannerText: string;
  bannerLink: string;
}

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);
  const mockData: BannerData[] = [
    {
      bannerText: "New Styles on Sale: Up To 40% Off",
      bannerLink: "Shop All Our New Markdowns",
    },
    {
      bannerText: "Exclusive Summer Collection Available Now",
      bannerLink: "Explore Summer Trends",
    },
    {
      bannerText: "Limited Time Offer: Free Shipping on Orders Over $50",
      bannerLink: "Shop Now and Save",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % mockData.length);
        setAnimate(true);
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, [mockData.length]);

  return (
    <>
      {mockData.length > 0 && (
        <div className={styles["banner-container"]}>
          <div
            className={`${styles["banner-content"]} ${
              animate ? styles["fade-in"] : ""
            }`}
          >
            <p className={styles["banner-text"]}>
              {mockData[currentIndex].bannerText}
            </p>
            <p className={styles["banner-link"]}>
              {mockData[currentIndex].bannerLink}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
