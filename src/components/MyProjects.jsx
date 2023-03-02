import React from "react";
import style from "../styles/MyProjects.module.css";
import Project from "./Project";

const MyProjects = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>My Projects</h2>
        <div className={style.block}>
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
