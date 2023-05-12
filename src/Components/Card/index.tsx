import React, { useEffect, useState } from 'react'
import CardFooter from '../Body/AllCards/CardFooter'
import styles from '../Card/styles.module.scss'
import { PostType } from '../../Types/Post'
import { Link } from 'react-router-dom'

const Card = (props: { post: PostType | undefined, cardstyle: string }) => {
  if (props.post == undefined) {
    return <div></div>;
  }

  return (
    <div className={props.cardstyle}>
      <div className={styles.cardContent}>
        <img className={styles.cardImg_Upper} src={props.post.image} alt='Image' />
        <div className={styles.cardText}>
          <span className={styles.cardDate}>
            {new Date(props.post.createDate).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <Link to={`/posts/${props.post.id}`}>
            <h2>{props.post.title}</h2>
          </Link>


          <p>{props.post.text}</p>
        </div>
        <img className={styles.cardImg} src={props.post.image} alt="Image" />
      </div>
      <CardFooter />
    </div>
  );
}

export default Card
