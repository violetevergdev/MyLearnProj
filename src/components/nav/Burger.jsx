/** @format */

import "./burger.css";

export const Burger = () => {
  const burg = () => {
    let menuBtn1 = document.querySelector(".burger-button");
    let menu1 = document.querySelector(".burger-menu");
    menuBtn1.classList.toggle("active1");
    menu1.classList.toggle("active1");
  };

  const outBur = () => {
    let menuBtn1 = document.querySelector(".burger-button");
    let menu1 = document.querySelector(".burger-menu");
    menuBtn1.classList.remove("active1");
    menu1.classList.remove("active1");
  };
  return (
    <div className="burger">
      <a className="burger-button" onClick={burg}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="burger-menu ">
        <ul className="burger-menu_list">
          <li className="burger-menu_link">
            <a onClick={outBur} href="#main" className="burger-list_link">
              Home
            </a>
          </li>
          <li className="burger-menu_link">
            <a onClick={outBur} href="#about" className="burger-list_link">
              About me
            </a>
          </li>
          <li className="burger-menu_link">
            <a onClick={outBur} href="#skills" className="burger-list_link">
              Skills
            </a>
          </li>
          <li className="burger-menu_link">
            <a onClick={outBur} href="#portfolio" className="burger-list_link">
              Portfolio
            </a>
          </li>
          <li className="burger-menu_link">
            <a onClick={outBur} href="#contacts" className="burger-list_link">
              Contacts
            </a>
          </li>
        </ul>
        <div className="ruEng">
          <p>
            RU <span className="eng">| ENG</span>
          </p>
        </div>
      </div>
    </div>
  );
};
