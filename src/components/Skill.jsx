import React from "react";
import style from "../styles/Skill.module.css";

const Skill = () => {
  return (
    <div className={style.main}>
      <div className={style.photo}></div>
      <h3>React</h3>
      <div className={style.description}></div>
    </div>
  );
};

export default Skill;
