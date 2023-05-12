import React, { useEffect, useState } from 'react'
import CardFooter from '../CardFooter/index'
import styles from '../BigCard/styles.module.scss'
import CardDate from '../Date'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'
import { Link } from 'react-router-dom'

const BigCard = (props: { post: PostType | undefined }) => {
  if (props.post == undefined) {
    return <div></div>;
  }

  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardContent}>
        <img className={styles.bigCardImg_Upper} src={props.post.image} alt="BigCard" />
        <div className={styles.bigCardText}>
          <CardDate />
          <Link to={`/posts/${props.post.id}`}>
            <h2>{props.post.title}</h2>
          </Link>


          <p>{props.post.text}</p>
        </div>
        <img className={styles.bigCardImg} src={props.post.image} alt="BigCard" />
      </div>
      <CardFooter />
    </div>
  );
}

export default BigCard
