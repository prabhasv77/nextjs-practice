import React from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-wrapper"]}>
        <div className={styles["navbar-container"]}>
          <img
            className={styles["logo-nike-img"]}
            src="/assets/images/logo-nike.png"
            alt="logo-nike"
          ></img>
          <div className={styles["navbar-menu"]}>
            <p>New & Featured</p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Sale</p>
            <p>SNKRS</p>
          </div>
          <div className={styles["search-wishlist-cart"]}>
            <div className={styles["search-box"]}>
              <div className={styles["search-icon-container"]}>
                <img
                  className={styles["search-icon"]}
                  src="assets/icons/search.png"
                  alt="search-icon-img"
                />
              </div>
              <input
                className={styles["search-input"]}
                type="text"
                placeholder="Search"
              />
            </div>
            <div className={styles["wishlist-container"]}>
              <img
                className={styles["wishlist-icon"]}
                src="/assets/icons/wishlist.png"
                alt="wishlist-icon"
              />
            </div>
            <div className={styles["cart-container"]}>
              <img
                className={styles["cart-icon"]}
                src="/assets/icons/bag.png"
                alt="shopping-bag-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
