import React from "react";
import style from "./MyProjects.module.scss";
import Project from "./Project";
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import {
  animated,
  to as interpolate,
  createInterpolator,
} from "@react-spring/web";
import { useControls } from "leva";

const projects = [
  {
    name: "Social Network",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    link: "https://social-network.netlify.app/",
    code: "https://github.com/mohamed-mohamed/social-network",
    tech: ["React", "Redux", "Material-UI"],
  },
  {
    name: "Social Network",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    link: "https://social-network.netlify.app/",
    code: "https://github.com/mohamed-mohamed/social-network",
    tech: ["React", "Redux", "Material-UI"],
  },
  {
    name: "Social Network",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    link: "https://social-network.netlify.app/",
    code: "https://github.com/mohamed-mohamed/social-network",
    tech: ["React", "Redux", "Material-UI"],
  },
];
const easeMap = {
  "ease-in-out": { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
  "ease-out": { x1: 0, y1: 0, x2: 0.58, y2: 1 },
  "ease-in": { x1: 0.42, y1: 0, x2: 1, y2: 1 },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
  linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

const MyProjects = () => {
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
    ["#82e09b", "#d3d3d3", "#f5f5f5"],
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
      id="projects"
      className={style.projects}
      style={{
        backgroundImage: allStops.to(
          (...args) => `linear-gradient(${41}deg, ${args.join(", ")})`
        ),
      }}
    >
      <div className={style.container}>
        <div className={style.relative}>
          <h2>PORTFOLIO</h2>
          <p className={style.title}>My Works</p>
          <span className={style.line}></span>
        </div>
        <div className={style.content}>
          <h3 className={style.subTitle}>
            Each project is a unique piece of development 🧩
          </h3>
          <div className={style.grid}>
            {projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default MyProjects;
