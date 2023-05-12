import React, { useEffect, useState } from 'react'
import CardDate from '../Date'
import CardFooter from '../CardFooter/index'
import styles from '../SmallCard/styles.module.scss'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'
import { Link } from 'react-router-dom'

const SmallCard = (props: { post: PostType | undefined }) => {
  if (props.post == undefined) {
    return <div></div>;
  }
  return (
    <div className={styles.smallCard}>
      <div className={styles.smallCardContent}>
        <img className={styles.smallCardImg_Upper} src={props.post.image} alt="SmallCard" />
        <div className={styles.smallCardText}>
          <CardDate />
          <Link to={`/posts/${props.post.id}`}>
            <h3>{props.post.title}</h3>
          </Link>
        </div>
        <img className={styles.smallCardImg} src={props.post.image} alt="SmallCard" />
      </div>
      <CardFooter />
    </div>
  );
};

export default SmallCard;
