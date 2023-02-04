import React from "react";
import style from "../styles/Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
