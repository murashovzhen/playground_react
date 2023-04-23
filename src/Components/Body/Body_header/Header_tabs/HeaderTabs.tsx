import React from "react";
import styles from "./styles.module.scss";

const HeaderTabs = () => {
  return (
    <nav className={styles.navigation}>
      <a className={styles.navTabs} href="#">All</a>
      <a className={styles.navTabs} href="#">My favorites</a>
      <a className={styles.navTabs} href="#"> Popular</a>
    </nav>
  ); 
};

export default HeaderTabs;

//сделать таб  disabled