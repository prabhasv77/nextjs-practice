import HeroSection from "../components/HeroSection";
import ShoeCard from "../components/ShoeCard";
import styles from "../../styles/Home.module.css";
import Header from "@/components/Header";
const shoes = [
  { id: 1, name: "Air Max 2023", price: "$150", image: "/airmax.jpg" },
  { id: 2, name: "Jordan Retro", price: "$200", image: "/jordan.jpg" },
  { id: 3, name: "Adidas Ultraboost", price: "$180", image: "/ultraboost.jpg" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <HeroSection />
        <h2 className={styles.title}>Featured Shoes</h2>
        <div className={styles.shoeGrid}>
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </>
  );
}
