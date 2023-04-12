import React from "react";
import style from "./Burger.model.css";

export const Burger = () => {
  return (
    <div className={style.navbar}>
      <div className={`${style.container} ${style.navContainer}`}>
        <input className={style.checkbox} type="checkbox" name="" id="" />
        <div className={style.hamburgerLines}>
          <span className={`${style.line} ${style.line1}`}></span>
          <span className={`${style.line} ${style.line2}`}></span>
          <span className={`${style.line} ${style.line3}`}></span>
        </div>
      </div>
    </div>
  );
};
