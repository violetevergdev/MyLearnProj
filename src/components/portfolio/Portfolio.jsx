/** @format */

import styles from "./Portfolio.module.css";
import { prevDef } from "../../prevDef";

export const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.images + " " + "row"}>
        <div className={styles.block + " " + "col-md-7"}>
          <img className={styles.img} src="/portfolio1.png" alt="web levis" />
          <a onClick={prevDef} className={styles.link} href="#">
            Online fashion store - Homepage
          </a>
        </div>
        <div className={styles.block + " " + "col-md-7"}>
          <img className={styles.img} src="/portfolio2.png" alt="web reebok" />
          <a onClick={prevDef} className={styles.link} href="#">
            Reebok Store - Concept
          </a>
        </div>
        <div className={styles.block + " " + "col-md-7"}>
          <img className={styles.img} src="/portfolio3.png" alt="web reebok" />
          <a onClick={prevDef} className={styles.link} href="#">
            Braun Landing Page - Concept
          </a>
        </div>
      </div>
    </div>
  );
};
