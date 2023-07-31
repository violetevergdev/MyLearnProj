/** @format */

import styles from "./About.module.css";

export const About = () => {
  return (
    <div id="about">
      <div className={styles.about}>
        <h2 className={styles.title}>About me</h2>
        <p className={styles.discriptions + " " + "row"}>
          <span className={styles.span + " " + "col-md-12"}>
            Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design
            and everything connected with it.
          </span>
          <span className={styles.span + " " + "col-md-12"}>
            I'm studying at courses "Web and mobile design interfaces" in
            IT-Academy.
          </span>
          <span className={styles.span + " " + "col-md-12"}>
            Ready to implement excellent projects
            <br /> with wonderful people.
          </span>
        </p>
      </div>
    </div>
  );
};
