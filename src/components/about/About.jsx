import React from "react";
import style from "./About.module.scss";
import { useControls } from "leva";
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import {
  animated,
  createInterpolator,
  to as interpolate,
} from "@react-spring/web";

export const easeMap = {
  "ease-in-out": { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
  "ease-out": { x1: 0, y1: 0, x2: 0.58, y2: 1 },
  "ease-in": { x1: 0.42, y1: 0, x2: 1, y2: 1 },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
  linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

export const About = () => {
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

  return (
    <animated.div
      id={"about"}
      className={style.about}
      style={{
        backgroundImage: allStops.to(
          (...args) => `linear-gradient(${148}deg, ${args.join(", ")})`
        ),
      }}
    >
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
    </animated.div>
  );
};
