/** @format */
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <div id="main">
      <div className={styles.main}>
        <h1 className="title">
          Denis
          <br /> Novik
        </h1>
        <p className={styles.discription + " " + "discription"}>
          UX | UI designer
          <br /> 24 years old, Minsk
        </p>
        <span className={styles.span + " " + styles.spanRUENG}>
          RU<span>|ENG</span>
        </span>
      </div>

      <div>
        <img
          className={styles.img + " " + styles.largeImg}
          src="./1.jpg"
          alt="Denis Novic"
        />
        <img
          className={styles.img + " " + styles.smallImg}
          src="./men.jpg"
          alt="Denis Novic"
        />
      </div>
    </div>
  );
};
