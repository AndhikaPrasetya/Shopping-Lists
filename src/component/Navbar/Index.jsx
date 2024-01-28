import React from "react";
import styles from "./Navbar.module.css"
import shoppingIcon from "../../assets/shopping-icon.svg";

const Navbar = () => {
  return (
   
      <nav className={styles.nav}>
        <img src={shoppingIcon} alt="shoppingIcon" className={styles.navIcon} />
        <h1 className={styles.navTitle}>Shopping Lists</h1>
      </nav>
  );
};

export default Navbar;
