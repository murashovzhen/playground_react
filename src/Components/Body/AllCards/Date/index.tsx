import React from "react";
import styles from './styles.module.scss'

interface Props {}

const CardDate = (props: Props) => {
  return (
    <span className={styles.cardDate}>
      {new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
  );
};

export default CardDate;

// var today = new Date();
// var options = { year: "numeric", month: "long", day: "numeric" };
// var now = today.toLocaleString("en-US", options);
