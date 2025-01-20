import styles from "../../styles/Home.module.css";
import Header from "@/components/Header";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import TrendingCards from "@/components/Trending";
const shoes = [
  { id: 1, name: "Air Max 2023", price: "$150", image: "/airmax.jpg" },
  { id: 2, name: "Jordan Retro", price: "$200", image: "/jordan.jpg" },
  { id: 3, name: "Adidas Ultraboost", price: "$180", image: "/ultraboost.jpg" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <HeroSection />
      <TrendingCards />
      <div className={styles.home}></div>
    </>
  );
}
