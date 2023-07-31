/** @format */
import styles from "./Skills.module.css";
import { Stars } from "./Stars";

export const Card = ({ skill }) => {
  return (
    <div key={skill.id} className={styles.oneCard + " " + "col-md-3 "}>
      <div>
        <div className={styles.image}>
          <img src={skill.img} alt="" />
        </div>
        <div className={styles.info}>
          <h3>
            {skill.name}{" "}
            <span style={{ display: "block" }}>{skill.secondName}</span>
          </h3>
        </div>
      </div>
      <Stars />
    </div>
  );
};
