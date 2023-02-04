import React from "react";
import style from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>Contacts</h2>
        <form className={style.form}>
          <input type="text" style={{ width: "98.32%", height: "12%" }} />
          <input type="text" style={{ width: "98.32%", height: "12%" }} />
          <textarea
            name="messageToMe"
            id="messageToMe"
            cols="80"
            rows="11"
          ></textarea>
        </form>
        <button className={style.button}>send</button>
      </div>
    </div>
  );
};

export default ContactMe;
