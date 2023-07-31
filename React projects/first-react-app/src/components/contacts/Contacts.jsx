/** @format */

import { useState } from "react";

import style from "./Modal.module.css";
import styles from "./Contacts.module.css";
export const Contacts = () => {
  const [isActive, setIsActive] = useState(false);
  const openModuleHandler = () => {
    setIsActive((current) => !current);
  };
  const closeModuleHandler = () => {
    setIsActive((current) => !current);
  };

  return (
    <div id="contacts" className={styles.contacts + " " + "container"}>
      <div className={styles.block + " " + "row"}>
        <h2 className={styles.title + " " + "col-md-3"}>Contacts</h2>
        <p className={styles.discriptions + " " + "col-md-5"}>
          Want to know more or just chat? <br /> You are welcome!
        </p>
        <button
          className={styles.btn + " " + "col-md-3 btn-open"}
          onClick={openModuleHandler}
        >
          Send message
        </button>

        <div className={styles.socialLink}>
          <img className={styles.icons} src="./lnd.svg" alt="linkedIn" />
          <img className={styles.icons} src="./inst.svg" alt="instagram" />
          <img className={styles.icons} src="./be.svg" alt="behance" />
          <img className={styles.icons} src="./ball.svg" alt="dribble" />
        </div>

        <p className={styles.another}>
          Like me on{" "}
          <span className={styles.span}>
            LinkedIn, Instagram, Behance, Dribble
          </span>
        </p>
      </div>

      <div
        className={
          isActive
            ? "open-modal modal-overlay col-md-12"
            : " col-md-12 modal-overlay"
        }
      >
        <div className={style.modalContainer}>
          <h3 className={style.title}>modal content</h3>
          <button className={style.closeBtn} onClick={closeModuleHandler}>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};
