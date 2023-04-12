import React from "react";
import style from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className={style.footer}>
      <p>
        Copyright © 2023. All rights are reserved{" "}
        <FontAwesomeIcon
          color="#fff"
          icon={faHeart}
          style={{ marginLeft: "5px" }}
        />
      </p>
    </section>
  );
};

export default Footer;
