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
import { setListTypeValueAction, setPageValueAction, setSearchValueAction } from '../../Store/post/action';
import { useEffect } from 'react';
import { RoutesConstants } from "../../Constants/Routes";
import { PostListType } from "../../Store/post/types";



const Home = (props:{ listType?: PostListType }) => {
  const dispatch = useDispatch<AppDispatch>()
  let [searchParams, setSearchParams] = useSearchParams()
  let currentPage = Number(searchParams.get('page')) || 1;

  const authentificationState = useSelector((state: AppState) => state.authentication)

  const posts = useSelector((state: AppState) => state.post)
 
  useEffect(() => {
    dispatch(setSearchValueAction(""));
    dispatch(setListTypeValueAction(props?.listType ?? "allPosts"));
    dispatch(setPageValueAction(currentPage));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage, props.listType])

  if (!posts) {
    return null
  }


  var postOffset = currentPage === 1 ? 2: 3;

  return (
    <div className={styles.body}>
    <h1 className={styles.headerTitle}>
            Blog
    </h1>
 
    {authentificationState.isAuthenticated && 
    <nav className={styles.navigation}>
    <Link className={[styles.navTabs, globalStyles.link].join(' ')} to="/">All</Link>
    <Link className={[styles.navTabs, globalStyles.link].join(' ')} to={RoutesConstants.PostsMy}> My posts</Link>
     </nav>
    }
    
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
          <Card post={posts.results[postOffset+1]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.results[postOffset+2]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.results[postOffset+3]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.results[postOffset+4]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <Card post={posts.results[postOffset+5]} cardstyle={cardStyles.middleCard} />
          <Card post={posts.results[postOffset+6]} cardstyle={cardStyles.middleCard} />
        </div>
        <div className={styles.smallAndSmallContent}>
          <Card post={posts.results[postOffset+7]} cardstyle={cardStyles.smallCard} />
          <Card post={posts.results[postOffset+8]} cardstyle={cardStyles.smallCard} />
        </div>
      </div>
      <div>
        <Pager total={posts.count} itemPerPage={12} currentPage={currentPage} endpoint='' />
      </div>
    </div>
  );
};

export default Home;
