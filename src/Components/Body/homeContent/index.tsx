import { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { PostType } from "../../../Types/Post"
import Card from "../../Card";
import cardStyles from "../../Card/styles.module.scss";
import { getAllPosts } from '../../../Services/PostServise';
import { Pager } from '../../Paging';



const HomeContent = () => {
  const [posts, setPosts] = useState<PostType[]>();

  const getApiData = async () => {
    const data = await getAllPosts();
    setPosts(data.items);
  };

  useEffect(() => {
    getApiData();
  }, []);

  if (!posts) {
    return null
  }

  return (
    <div>

      <div className={styles.bigAndSmallContent}>
        <Card post={posts[0]} cardstyle={cardStyles.bigCard} />
        <div className={styles.smallAndSmallContent}>
          <Card post={posts[1]} cardstyle={cardStyles.smallCard} />
          <Card post={posts[2]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts[3]} cardstyle={cardStyles.middleCard} />
          <Card post={posts[4]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts[5]} cardstyle={cardStyles.smallCard} />
          <Card post={posts[6]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts[7]} cardstyle={cardStyles.middleCard} />
          <Card post={posts[8]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts[9]} cardstyle={cardStyles.smallCard} />
          <Card post={posts[10]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      {/* <Pager total={total} itemPerPage={12} currentPage={currentPage} /> */}
    </div>
  )
}

export default HomeContent;
