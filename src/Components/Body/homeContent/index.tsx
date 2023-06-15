import { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import { PostPageType } from '../../../types/post';
import Card from '../../Card';
import cardStyles from '../../Card/styles.module.scss';
import { getAllPosts } from '../../../services/postServise';
import { Pager } from '../../Paging';
import { useSearchParams } from 'react-router-dom';

const HomeContent = () => {

  let [searchParams, setSearchParams] = useSearchParams()
  let currentPage = Number(searchParams.get('page')) || 1;
  let itemPerPage = 12;

  if (currentPage === 1) {
    itemPerPage = 11;
  }

  const [posts, setPosts] = useState<PostPageType>();

  const getApiData = async (page: number, limit: number) => {
    const data = await getAllPosts(page, limit);
    setPosts(data);
  };

  useEffect(() => {
    getApiData(currentPage, itemPerPage);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (!posts) {
    return null
  }

  return (
    <div>
      {currentPage === 1 &&
        <div className={styles.bigAndSmallContent}>
          <Card post={posts.items[0]} cardstyle={cardStyles.bigCard} />
          <div className={styles.smallAndSmallContent}>
            <Card post={posts.items[1]} cardstyle={cardStyles.smallCard} />
            <Card post={posts.items[2]} cardstyle={cardStyles.smallCard} />
          </div>
        </div>
      }
      {currentPage > 1 &&
        <div className={styles.middleAndSmallContent}>
          <div className={styles.middleAndMiddleContent} >
            <Card post={posts.items[0]} cardstyle={cardStyles.middleCard} />
            <Card post={posts.items[1]} cardstyle={cardStyles.middleCard} />
          </div>
          <div className={styles.smallAndSmallContent}>
            <Card post={posts.items[2]} cardstyle={cardStyles.smallCard} />
            <Card post={posts.items[3]} cardstyle={cardStyles.smallCard} />
          </div>
        </div>
      }
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts.items[posts.items.length - 8]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.items[posts.items.length - 7]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.items[posts.items.length - 6]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.items[posts.items.length - 5]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts.items[posts.items.length - 4]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.items[posts.items.length - 3]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.items[posts.items.length - 2]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.items[posts.items.length - 1]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div>
        <Pager total={posts.count} itemPerPage={12} currentPage={currentPage} endpoint='' />
      </div>
    </div>
  )
}

export default HomeContent;
