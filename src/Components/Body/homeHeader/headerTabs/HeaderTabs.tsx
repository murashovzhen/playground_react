import React from "react";
import styles from "./styles.module.scss";
import globalStyles from '../../../../App.module.scss'
import { Link } from "react-router-dom";

const HeaderTabs = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#">All</Link>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#">My favorites</Link>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#"> My posts</Link>
    </nav>
  );
};

export default HeaderTabs;

//сделать таб  disabled