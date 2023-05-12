import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { PostType } from '../../../Types/Post'
import CardFooter from '../AllCards/CardFooter';
import MiddleCard from '../AllCards/MiddleCard';
import SmallCard from '../AllCards/SmallCard';
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
          <SmallCard post={posts && posts[1]} />
          <SmallCard post={posts && posts[2]} />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard post={posts && posts[3]} />
          <MiddleCard post={posts && posts[4]} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <SmallCard post={posts && posts[5]} />
          <SmallCard post={posts && posts[6]} />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard post={posts && posts[7]} />
          <MiddleCard post={posts && posts[8]} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <SmallCard post={posts && posts[9]} />
          <SmallCard post={posts && posts[10]} />
        </div>
      </div>

    </div>
  )
}


export default BodyContent;
