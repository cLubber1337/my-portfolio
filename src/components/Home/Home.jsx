import React from "react";
import style from "./Home.module.scss";
import react from "../../assets/img/skills/react.svg";
import ts from "../../assets/img/skills/ts.svg";
import redux from "../../assets/img/skills/redux.svg";
import JS from "../../assets/img/skills/JS.svg";
import html from "../../assets/img/skills/html.svg";
import css from "../../assets/img/skills/css.svg";
import mui from "../../assets/img/skills/mui.svg";
import scss from "../../assets/img/skills/scss.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.main}>
            <div className={style.text}>
              <h1>Front-End Developer</h1>
              <p>
                Hi! I'm Andrey Soroko a front-end developer who loves building
                websites and apps. I specialize in JavaScript libraries and
                frameworks. Constantly learning new trends and innovations in
                Web development. On this site you can see examples of my work.
              </p>
              <div className={style.contact}>
                <button className={style.btn}>Download CV</button>
                <a
                  href="https://www.linkedin.com/in/andrey-saroko/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    style={{ fontSize: "42px", marginRight: "20px" }}
                    color={"#2d2e32"}
                    icon={faLinkedin}
                  />
                </a>
                <a href="https://github.com/cLubber1337" target="_blank">
                  <FontAwesomeIcon
                    style={{ fontSize: "42px", marginRight: "15px" }}
                    color={"#2d2e32"}
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
            <div className={style.photo}></div>
          </div>
          <div className={style.skills}>
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <img src={react} title={"react"} alt="react" />
                </li>
                <li>
                  <img src={ts} title={"ts"} alt="ts" />
                </li>
                <li>
                  <img src={redux} title={"redux"} alt="redux" />
                </li>
                <li>
                  <img src={JS} title={"js"} alt="js" />
                </li>
                <li>
                  <img src={html} title={"html"} alt="html" />
                </li>
                <li>
                  <img src={css} title={"css"} alt="css" />
                </li>
                <li>
                  <img src={mui} title={"mui"} alt="mui" />
                </li>
                <li>
                  <img src={scss} title={"scss"} alt="scss" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
