import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // change nav color when scrolling
  const [color, setColor] = React.useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  // burger menu
  const [burger, setBurger] = React.useState(false);
  const toggleBurger = () => {
    setBurger(!burger);
  };
  const closeMenu = () => setBurger(false);

  return (
    <header
      tabIndex="1"
      className={color ? `${style.header} ${style.headerBg}` : style.header}
    >
      <Link to="home" spy={true} smooth={true} duration={500}>
        <img className={style.logo} src={logo} alt="logo" />
      </Link>

      <div className={style.hamburger} onClick={toggleBurger}>
        {burger ? (
          <FontAwesomeIcon icon={faTimes} fontSize={"25px"} />
        ) : (
          <FontAwesomeIcon icon={faBars} fontSize={"25px"} />
        )}
      </div>

      <ul
        className={burger ? `${style.navMenu} ${style.active}` : style.navMenu}
      >
        <li>
          <Link
            to="home"
            spy={true}
            onClick={closeMenu}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            onClick={closeMenu}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            onClick={closeMenu}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contacts"
            spy={true}
            onClick={closeMenu}
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>

      {/*Mobile menu*/}
      {/*<ul className={style.hidden}>*/}
      {/*  <li>*/}
      {/*    <Link to="home" spy={true} smooth={true} duration={500}>*/}
      {/*      Home*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="about" spy={true} smooth={true} duration={500}>*/}
      {/*      About*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="projects" spy={true} smooth={true} duration={500}>*/}
      {/*      Projects*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link to="contacts" spy={true} smooth={true} duration={500}>*/}
      {/*      Contacts*/}
      {/*    </Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </header>
  );
};
export default Header;
