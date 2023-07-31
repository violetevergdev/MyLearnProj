/** @format */
import { Burger } from "./Burger";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <header className={styles.headerSection}>
        <ul className={styles.nav}>
          <li className={styles.navElem}>
            <a href="#main" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navElem}>
            <a href="#about" className={styles.navLink}>
              About me
            </a>
          </li>
          <li className={styles.navElem}>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li className={styles.navElem}>
            <a href="#portfolio" className={styles.navLink}>
              Porfolio
            </a>
          </li>
          <li className={styles.navElem}>
            <a href="#contacts" className={styles.navLink}>
              Contacts
            </a>
          </li>
        </ul>
      </header>

      <Burger />
    </div>
  );
};
