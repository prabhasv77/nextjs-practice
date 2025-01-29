import React from "react";
import styles from "../../styles/ShopCard.module.css";

interface Item {
  id: number;
  name: string;
  model: string;
  price: string;
  size: string;
  color: string;
  description: string;
  image_url: string;
  on_sale: number;
}

const ShopCard: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.image_url} alt={item.name} className={styles.image} />
      <h3 className={styles.title}>
        {item.name} - {item.model}
      </h3>
      <p className={styles.price}>${item.price}</p>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.color}>Color: {item.color}</p>
      <p className={styles.size}>Sizes: {item.size}</p>
      {item.on_sale ? <span className={styles.sale}>On Sale</span> : null}
    </div>
  );
};

export default ShopCard;
