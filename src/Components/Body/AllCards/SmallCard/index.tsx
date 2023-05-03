import React, { useEffect, useState } from 'react'
import CardDate from '../Date'
import CardFooter from '../CardFooter/index'
import styles from '../SmallCard/styles.module.scss'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'

const SmallCard = () => {
  const [post, setPost] = useState<PostType>({} as PostType)

  useEffect(() => {
    getPost('640f2d6af5d04dbff2c5ab45')
      .then(post => setPost(post))
  })

  return (
    <div className={styles.smallCard}>
      <div className={styles.smallCardContent}>
        <img className={styles.smallCardImg_Upper} src={post.image} alt="SmallCard" />
        <div className={styles.smallCardText}>
          <CardDate />
          <h3>{post.title}</h3>
        </div>
        <img className={styles.smallCardImg} src={post.image} alt="SmallCard" />
      </div>
      <CardFooter />
    </div>
  );
};

export default SmallCard;
