import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { PostType } from '../../../Types/Post'
import Card from '../../Card';
import cardStyles from "../../Card/styles.module.scss";

const BodyContent = () => {
  const [posts, setPosts] = useState<PostType[]>();

  const getApiData = async () => {
    const data = await (await fetch(
      "https://mockside.vercel.app/api/posts"
    )).json();

    setPosts(data.items);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>

      <div className={styles.bigAndSmallContent}>
        <Card post={posts && posts[0]} cardstyle={cardStyles.bigCard} />
        <div className={styles.smallAndSmallContent}>
          <Card post={posts && posts[1]} cardstyle={cardStyles.smallCard} />
          <Card post={posts && posts[2]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts && posts[3]} cardstyle={cardStyles.middleCard} />
          <Card post={posts && posts[4]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts && posts[5]} cardstyle={cardStyles.smallCard} />
          <Card post={posts && posts[6]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts && posts[7]} cardstyle={cardStyles.middleCard} />
          <Card post={posts && posts[8]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts && posts[9]} cardstyle={cardStyles.smallCard} />
          <Card post={posts && posts[10]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>

    </div>
  )
}

export default BodyContent;
