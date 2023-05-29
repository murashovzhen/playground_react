import React from "react";
import styles from "./styles.module.scss";
import globalStyles from '../../../../App.module.scss'

const HeaderTabs = () => {
  return (
    <nav className={styles.navigation}>
      <a className={[styles.navTabs, globalStyles.link].join(' ')} href="#">All</a>
      <a className={[styles.navTabs, globalStyles.link].join(' ')} href="#">My favorites</a>
      <a className={[styles.navTabs, globalStyles.link].join(' ')} href="#"> My posts</a>
    </nav>
  );
};

export default HeaderTabs;

//сделать таб  disabled