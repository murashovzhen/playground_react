import React from 'react'
import styles from "./styles.module.scss";
import BigCard from '../AllCards/BigCard/index'
import SmallCard from '../AllCards/SmallCard';
import MiddleCard from '../AllCards/MiddleCard';

const BodyContent = () => {
  return (
    <div>
      <div className={styles.bigAndSmallContent}>
          <BigCard />
        <div>
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard />
          <MiddleCard />
        </div>
        <div>
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard />
          <MiddleCard />
        </div>
        <div>
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </div>
  )
}

export default BodyContent;
