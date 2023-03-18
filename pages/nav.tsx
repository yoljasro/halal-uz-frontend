import React from "react";
import styles from "../styles/nav.module.sass";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <img src="/assets/img/logo.svg" alt="logo" className={styles.logo} />
        <span className={styles.text}>My Website</span>
        <div className={styles.separator}></div>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.modalButton}>Modal</button>
        <select className={styles.selectOption}>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
