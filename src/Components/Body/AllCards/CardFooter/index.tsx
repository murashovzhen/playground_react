import React, {useState} from "react";
import styles from "./styles.module.scss";
import { CardFooterType } from '../../../../Types/CardFooterType'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faThumbsUp, faBookmark } from '@fortawesome/free-regular-svg-icons';

const CardFooter = (props: CardFooterType) => {
  const [cardFooter, setValue] = useState(props)

  const likeOnClick = () => {
      setValue(x=>{ x.likes++; return x;})
  }

  const dislikeOnClick = () => {
    setValue(x=>{ x.dislikes++; return x;})
  }

  return (
    <footer className={styles.card_Footer}>
      <div>        
        <div className={styles.card_Footer_Control}>
          <FontAwesomeIcon icon={faThumbsUp} onClick={likeOnClick} />
          <span>{cardFooter.likes}</span>
        </div>
        <div className={styles.card_Footer_Control}>
           <FontAwesomeIcon icon={faThumbsDown} onClick={dislikeOnClick} />
           <span>{cardFooter.dislikes}</span>
        </div>       
      </div>
      <div>
        <div className={styles.card_Footer_Control}>
            <FontAwesomeIcon icon={faBookmark}/>
        </div>
        <div className={styles.card_Footer_Control}>
            <FontAwesomeIcon icon={faEllipsisH} />
        </div> 
      </div>
    </footer>
  );
};

export default CardFooter;
