import React from "react";
import styles from "./styles.module.scss";
import youNameItUp from "../IconsCards/Up.png";
import youNameItDown from "../IconsCards/Down.png";
import youNameItBookmark from "../IconsCards/Bookmark.png";
import youNameItMore from "../IconsCards/More.png";

const CardFooter = () => {
  return (
    <footer className={styles.cardFooter}>
      <div>
        <img src={youNameItUp} alt="" />
        <span>0</span>
        <img src={youNameItDown} alt="" />
        <span>0</span>
      </div>
      <div>
        <img className={styles.bookmark} src={youNameItBookmark} alt="" />
        <img src={youNameItMore} alt="" />
      </div>
    </footer>
  );
};

export default CardFooter;
