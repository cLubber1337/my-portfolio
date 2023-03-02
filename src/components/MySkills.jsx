import React from "react";
import style from "../styles/MySkills.module.css";
import Skill from "./Skill";

const MySkills = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>My Skills</h2>
        <div className={style.skillBlock}>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
