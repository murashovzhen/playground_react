import React, {useState} from "react";
import styles from "./styles.module.scss";
import youNameItUp from "../IconsCards/Up.png";
import youNameItDown from "../IconsCards/Down.png";
import youNameItBookmark from "../IconsCards/Bookmark.png";
import youNameItMore from "../IconsCards/More.png";

const CardFooter = () => {
  const [valueUp, setValueUp] = useState(0)
  const [valueDown, setValueDown] = useState(0)

  
  const iconUpOnclick = (type: 'increase') => {
        if (type) {
                setValueUp(valueUp +1)
        }
  }

  const iconDownOnclick = (type: 'decrease') => {
        if (type) {
                setValueDown (valueDown +1)
        }
  }
  
  return (
    <footer className={styles.cardFooter}>
      <div>
        <img src={youNameItUp} alt="CardFooter" onClick={() => iconUpOnclick('increase')}/>
        <span>{valueUp}</span>
        <img src={youNameItDown} alt="CardFooter" onClick={() => iconDownOnclick('decrease')}/>
        <span>{valueDown}</span>
      </div>
      <div>
        <img className={styles.bookmark} src={youNameItBookmark} alt="" />
        <img src={youNameItMore} alt="" />
      </div>
    </footer>
  );
};

export default CardFooter;
