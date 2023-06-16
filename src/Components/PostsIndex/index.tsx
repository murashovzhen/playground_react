import React from "react";
import globalStyles from '../../App.module.scss'
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import Card from '../Card';
import cardStyles from '../Card/styles.module.scss';
import { Pager } from '../Paging';
import { useSearchParams } from 'react-router-dom';
import { AppDispatch, AppState, AppThunk } from '../../Store';
import { useDispatch, useSelector } from 'react-redux';
import { setPageValueAction, setSearchValueAction } from '../../Store/post/action';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  let [searchParams, setSearchParams] = useSearchParams()
  let currentPage = Number(searchParams.get('page')) || 1;
  
  const posts = useSelector((state: AppState) => state.post)
 
  useEffect(() => {
    dispatch(setSearchValueAction(""));
    dispatch(setPageValueAction(currentPage));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage])

  if (!posts) {
    return null
  }

  return (
    <div className={styles.body}>
     <h1 className={styles.headerTitle}>
            Blog
        </h1>
        <nav className={styles.navigation}>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#">All</Link>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#">My favorites</Link>
      <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="#"> My posts</Link>
    </nav>
    {currentPage === 1 &&
        <div className={styles.bigAndSmallContent}>
          <Card post={posts.results[0]} cardstyle={cardStyles.bigCard} />
          <div className={styles.smallAndSmallContent}>
            <Card post={posts.results[1]} cardstyle={cardStyles.smallCard} />
            <Card post={posts.results[2]} cardstyle={cardStyles.smallCard} />
          </div>
        </div>
      }
      {currentPage > 1 &&
        <div className={styles.middleAndSmallContent}>
          <div className={styles.middleAndMiddleContent} >
            <Card post={posts.results[0]} cardstyle={cardStyles.middleCard} />
            <Card post={posts.results[1]} cardstyle={cardStyles.middleCard} />
          </div>
          <div className={styles.smallAndSmallContent}>
            <Card post={posts.results[2]} cardstyle={cardStyles.smallCard} />
            <Card post={posts.results[3]} cardstyle={cardStyles.smallCard} />
          </div>
        </div>
      }
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts.results[posts.results.length - 8]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.results[posts.results.length - 7]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.results[posts.results.length - 6]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.results[posts.results.length - 5]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts.results[posts.results.length - 4]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.results[posts.results.length - 3]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.results[posts.results.length - 2]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.results[posts.results.length - 1]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div>
        <Pager total={posts.count} itemPerPage={12} currentPage={currentPage} endpoint='' />
      </div>
    </div>
  );
};

export default Home;
