/** @format */

import styles from "./Skills.module.css";
import skills from "./skills.data.js";

import { Card } from "./Card";

export const Skills = () => {
  return (
    <div id="skills" className={styles.skill + " " + "container"}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.discriptions}>I work in such programs as</p>
      <div className={styles.cards + " " + "row"}>
        {skills.length ? (
          skills.map((skill) => <Card key={skill.id} skill={skill} />)
        ) : (
          <p>There anу no skills</p>
        )}
      </div>
    </div>
  );
};
