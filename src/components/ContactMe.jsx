import React from "react";
import style from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <h2>Contacts</h2>
        <form className={style.form}>
          <input type="text" className={style.inputName} />
          <input type="text" className={style.inputAddress} />
          <textarea
            className={style.textarea}
            name="messageToMe"
            id="messageToMe"
          ></textarea>
        </form>
        <button className={style.button}>send</button>
      </div>
    </div>
  );
};

export default ContactMe;
