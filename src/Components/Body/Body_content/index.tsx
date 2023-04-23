import React from 'react'
import styles from "./styles.module.scss";
import BigCard from '../AllCards/BigCard/index'

const BodyContent = () => {
  return(
    <div className={styles.mainContent}>
      < BigCard/>
    </div>
  ) 
}

export default BodyContent;
