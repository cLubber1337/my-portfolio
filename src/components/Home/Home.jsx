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
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import {
  animated,
  to as interpolate,
  createInterpolator,
  useSpring,
} from "@react-spring/web";
import { useControls } from "leva";

const easeMap = {
  "ease-in-out": { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
  "ease-out": { x1: 0, y1: 0, x2: 0.58, y2: 1 },
  "ease-in": { x1: 0.42, y1: 0, x2: 1, y2: 1 },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
  linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

export const Home = () => {
  const { easeCustom } = useControls({
    easeCustom: "",
  });
  const coordinates = React.useMemo(() => {
    let coordinates;
    const customBezier = easeCustom.split(",").map(Number);
    if (customBezier.length <= 1) {
      if ("ease-out" === "steps") {
        coordinates = stepsCoordinates(5, "skip-none");
      } else {
        const { x1, y1, x2, y2 } = easeMap["ease-out"];
        coordinates = cubicCoordinates(x1, y1, x2, y2, 5);
      }
    } else {
      coordinates = cubicCoordinates(
        customBezier[0],
        customBezier[1],
        customBezier[2],
        customBezier[3],
        5
      );
    }

    return coordinates;
  }, [easeCustom]);
  const allStops = interpolate(
    ["#64acd8", "#d3d3d3", "#f5f5f5"],
    (from, mid, to) => {
      const blend = createInterpolator({
        range: [0, 0.5, 1],
        output: [from, mid, to],
      });

      return coordinates.map(({ x, y }) => {
        const color = blend(y);

        return `${color} ${x * 100}%`;
      });
    }
  );

  const skillsLogos = useSpring({
    from: { x: 1300 },
    to: { x: 0 },
    config: { duration: 400, tension: 100, friction: 50 },
  });

  return (
    <animated.div
      id={"home"}
      className={style.home}
      style={{
        backgroundImage: allStops.to(
          (...args) => `linear-gradient(${32}deg, ${args.join(", ")})`
        ),
      }}
    >
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.main}>
            <div className={style.text}>
              <h1>
                Hi, I'm <span>Andrey</span> <br /> A Front-End Web Developer{" "}
              </h1>

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
            <animated.div className="logos" style={{ ...skillsLogos }}>
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
            </animated.div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
