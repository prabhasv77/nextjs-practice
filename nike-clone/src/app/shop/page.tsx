"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import useApi from "@/hooks/useApi";
import ShopCard from "@/components/ShopCard";
import styles from "../../../styles/Shop.module.css";
import { memo } from "react";
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

const ShopPage = memo(() => {
  const {
    data: items,
    error,
    loading,
  } = useApi<Item[]>("http://localhost:5000/api/shoes");

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <div>
        {loading && <p>Loading Inventory...</p>}
        {error && <p>Error: {error}</p>}
        <div className={styles.grid}>
          {items && items.map((item) => <ShopCard key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
});

export default ShopPage;
