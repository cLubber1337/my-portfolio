import React from "react";
import style from "../styles/Main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.greeting}>
          <span>Hello!</span>
          <h1>
            I am <br /> Andrew Soroko
          </h1>
          <span>A Web developer</span>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
};

export default Main;
