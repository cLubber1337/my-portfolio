import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "@mui/material";

const Header = () => {
  return (
    <header tabIndex="1" className={style.header}>
      <img className={style.logo} src={logo} alt="logo" />
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
    </header>
  );
};
export default Header;
