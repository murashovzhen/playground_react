import React,{ useEffect, useState } from 'react'
import CardFooter from '../CardFooter/index'
import styles from '../BigCard/styles.module.scss'
import CardDate from '../Date'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'

const BigCard = () => {
const [post, setPost]=useState<PostType>({} as PostType)

    useEffect(() => {
      getPost(10)
            .then(post => setPost(post))
    })

  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardContent}>
        <div className={styles.bigCardText}>
          <CardDate/>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
        <img className={styles.bigCardImg} src={post.image} alt="BigCard" />
      </div>
      <CardFooter />
    </div>
  );
}

export default BigCard
