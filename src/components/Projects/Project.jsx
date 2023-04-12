import React, { memo } from "react";
import style from "./Project.module.scss";
import githubIcon from "../../assets/svg/githubIcon.svg";
import demo from "../../assets/svg/demo.svg";
const Project = memo(({ name, description, link, tech, code, image }) => {
  return (
    <div className={style.main}>
      <img src={image} alt="" className={style.ImgProject} />
      <div className={style.description}>
        <h3 className={style.title}>{name}</h3>
        <p className={style.text}>{description}</p>
        <div className={style.techs}>
          {tech &&
            tech.map((t) => {
              return <span key={t}>{t}</span>;
            })}
        </div>
        <div className={style.links}>
          <a href="/" target="_blank">
            Code <img src={githubIcon} className={style.link} alt={""}></img>
          </a>
          <a href="/" target="_blank">
            Demo <img src={demo} className={style.link} alt={""}></img>
          </a>
        </div>
      </div>
    </div>
  );
});

export default Project;
