import React from "react";
import style from "./ContactMe.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { cubicCoordinates, stepsCoordinates } from "easing-coordinates";
import {
  animated,
  to as interpolate,
  createInterpolator,
} from "@react-spring/web";
import { useControls } from "leva";

const easeMap = {
  "ease-in-out": { x1: 0.42, y1: 0, x2: 0.58, y2: 1 },
  "ease-out": { x1: 0, y1: 0, x2: 0.58, y2: 1 },
  "ease-in": { x1: 0.42, y1: 0, x2: 1, y2: 1 },
  ease: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 },
  linear: { x1: 0.25, y1: 0.25, x2: 0.75, y2: 0.75 },
};

const ContactMe = () => {
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
  }, [easeCustom, 5]);
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
      id="contacts"
      className={style.contact}
      style={{
        backgroundImage: allStops.to(
          (...args) => `linear-gradient(${150}deg, ${args.join(", ")})`
        ),
      }}
    >
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
    </animated.div>
  );
};

export default ContactMe;
