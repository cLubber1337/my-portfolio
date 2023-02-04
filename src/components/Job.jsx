import React from "react";
import style from "../styles/Job.module.css";

const Job = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>Considering remote work options</h2>
        <button className={style.button}>Hire me</button>
      </div>
    </div>
  );
};

export default Job;
