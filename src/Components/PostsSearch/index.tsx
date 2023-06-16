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
import { setPageValueAction } from '../../Store/post/action';
import { useEffect } from 'react';
import genericStyles from '../../App.module.scss'

const SearchPosts = () => {
  const dispatch = useDispatch<AppDispatch>()
  let [searchParams, setSearchParams] = useSearchParams()
  let currentPage = Number(searchParams.get('page')) || 1;
  
  const posts = useSelector((state: AppState) => state.post)
 
  useEffect(() => {
    dispatch(setPageValueAction(currentPage));
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage])

  if (!posts) {
    return null
  }

  return (
    <div className={styles.body}>
      <div className={genericStyles.row}>
        <div className={genericStyles.col_12}>
          
           <Link to="/" className={genericStyles.link}>Back to Home</Link>
        </div>
      </div>
      <div className={genericStyles.row}>
        <div className={genericStyles.col_12}>
          <h1 className={styles.headerTitle}>
            Blog
          </h1>
        </div>
      </div>
         {
                posts.results.map(post => (
                  <Card post={post} cardstyle={cardStyles.smallCard} />
                ))
            }
      <div>
        <Pager total={posts.count} itemPerPage={12} currentPage={currentPage} endpoint='' />
      </div>
    </div>
  );
};

export default SearchPosts;
