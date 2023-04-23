import React from 'react'
import CardFooter from '../CardFooter/index'
import styles from '../BigCard/styles.module.scss'
import Date from '../Date'



const BigCard = () => {
  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardContent}>
        <div>
          <Date/>
          <h2>"Title"</h2>
          <p>"Description "</p>
        </div>
        <img src="" alt="BigCard" />
      </div>
      <CardFooter />
    </div>
  );
}

export default BigCard
