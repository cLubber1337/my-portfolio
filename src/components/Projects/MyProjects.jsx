import React from "react";
import style from "./MyProjects.module.scss";
import Project from "./Project";

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

const MyProjects = () => {
  return (
    <section className={style.projects}>
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
    </section>
  );
};

export default MyProjects;
