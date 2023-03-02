import React from "react";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>Andrey Soroko</h2>
        <div className={style.content}>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
        </div>
        <span>&copy; All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
