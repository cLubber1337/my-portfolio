import React from "react";
import style from "./ContactMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <section className={style.contact}>
      <div className={style.container}>
        <div className={style.relative}>
          <h2 className={style.title}>CONTACT</h2>
          <p className={style.subTitle}>Get in Touch</p>
          <span className={style.line}></span>
        </div>
        <div className={style.row}>
          <div className={style.contactLeft}>
            <p>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ marginRight: "15px", fontSize: "30px" }}
                color={"#206491"}
              />
              <a href="mailto:supersoroko@gmail.com">supersoroko@gmail.com</a>
            </p>
            <p>
              <FontAwesomeIcon
                color={"#206491"}
                style={{ marginRight: "18px", fontSize: "30px" }}
                href="tel:+375256561690"
                icon={faPhone}
              />
              <a href="tel:+375256561690">+375256561690</a>
            </p>

            <div className={style.socialIcons}>
              <a href="https://t.me/AndreySoroko" target="_blank">
                <FontAwesomeIcon
                  style={{ fontSize: "32px", marginRight: "15px" }}
                  color={"#2d2e32"}
                  icon={faTelegram}
                />
              </a>

              <a href="https://github.com/cLubber1337" target="_blank">
                <FontAwesomeIcon
                  style={{ fontSize: "32px", marginRight: "15px" }}
                  color={"#2d2e32"}
                  icon={faGithub}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/andrey-saroko/"
                target="_blank"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "32px" }}
                  color={"#2d2e32"}
                  icon={faLinkedin}
                />
              </a>
            </div>
          </div>
          <div className={style.contactRight}>
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea name="Name" rows="6" placeholder="Your Message" />
              <button className={style.btn} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
