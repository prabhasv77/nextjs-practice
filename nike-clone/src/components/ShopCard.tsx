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
      <p className={styles.description}>{item.description}</p>
      {item.on_sale ? <p className={styles.sale}>On Sale</p> : null}
      <p className={styles.price}>&#8377; {item.price}</p>
    </div>
  );
};

export default ShopCard;
