import React, { useEffect, useState } from 'react'
import CardFooter from '../CardFooter/index'
import styles from '../BigCard/styles.module.scss'
import CardDate from '../Date'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'

const BigCard = () => {
  const [post, setPost] = useState<PostType>({} as PostType)

  useEffect(() => {
    getPost('640f2d6af5d04dbff2c5ab2a')
      .then(post => setPost(post))
  })

  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCardContent}>
        <img className={styles.bigCardImg_Upper} src={post.image} alt="BigCard" />
        <div className={styles.bigCardText}>
          <CardDate />
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
        <img className={styles.bigCardImg} src={post.image} alt="BigCard" />
      </div>
      <CardFooter />
    </div>
  );
}

export default BigCard
