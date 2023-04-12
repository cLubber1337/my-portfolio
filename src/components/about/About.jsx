import React from "react";
import style from "./About.module.scss";

export const About = () => {
  return (
    <section className={style.about}>
      <div className={style.container}>
        <div className={style.relative}>
          <h2>ABOUT ME</h2>
          <p>Know Me More</p>
          <span className={style.line}></span>
        </div>
        <div className={style.content}>
          <div className={style.photo}></div>
          <div className={style.text}>
            <h3>
              I am a <span>Full Stack</span> Web Developer
            </h3>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
