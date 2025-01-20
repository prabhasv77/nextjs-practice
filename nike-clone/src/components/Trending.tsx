import React from "react";
import styles from "../../styles/Trending.module.css";

interface Card {
  title: string;
  image: string;
}

const TrendingCards: readonly Card[] = [
  {
    title: "Sports",
    image: "/assets/images/trending-1.jpg",
  },
  {
    title: "Nike Active Wear",
    image: "/assets/images/trending-2.jpg",
  },
  {
    title: "Casuals",
    image: "/assets/images/trending-3.jpg",
  },
] as const;

const Trending: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div>Trending</div>
        {TrendingCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.image} alt={card.title} className={styles.image} />
            <h3 className={styles.title}>{card.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trending;
