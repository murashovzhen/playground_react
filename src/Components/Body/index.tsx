import React from "react";
import styles from "./styles.module.scss";
import HomeContent from "./homeContent";
import HomeHeader from "./homeHeader";


const Home = () => {
  return (
    <div className={styles.body}>
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
