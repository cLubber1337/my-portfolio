import React, { useState } from "react";
import style from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "@mui/material";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header tabIndex="1" className={style.navBar}>
      <img className={style.logo} src={logo} alt="logo" />
      <button
        className={style.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      ></button>
      <div
        className={
          isNavExpanded
            ? `${style.navigationMenu} ${style.expanded}`
            : `${style.navigationMenu}`
        }
      >
        <ul className={style.ul}>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="Contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
