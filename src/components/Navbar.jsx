import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="">Home page</a>
      <a href="">Skills</a>
      <a href="">My Projects</a>
      <a href="">My contacts</a>
    </div>
  );
};

export default Navbar;
