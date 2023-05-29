import React from "react";
import styles from "./styles.module.scss";
import BodyHeader from "./Body_header";
import BodyContent from "./Body_content";


const Body = () => {
  return (
    <div className={styles.body}>
      <BodyHeader />
      <BodyContent />
    </div>
  );
};

export default Body;
