import React from "react";
import style from "../styles/Project.module.css";

const Project = () => {
  return (
    <div className={style.main}>
      <div className={style.photo}>
        <button className={style.button}>view</button>
      </div>
      <div className={style.description}>
        <h3>project name</h3>
        <p>short description</p>
      </div>
    </div>
  );
};

export default Project;
