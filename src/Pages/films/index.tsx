import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../Store';
import { useSearchParams } from 'react-router-dom';
import { changePageAction, loadFilmsAction } from '../../Store/film/actions';
import FilmCard from '../../Components/filmCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function Films() {
    const dispatch = useDispatch<AppDispatch>()
    let [searchParams, setSearchParams] = useSearchParams()
    let currentPage = Number(searchParams.get('page')) || 1;

    const films = useSelector((state: AppState) => state.films)

    useEffect(() => {

        dispatch(loadFilmsAction());
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [currentPage])

    const filmsItems = films.items.docs ? films.items.docs.map((item) =>
        <div className='col'>
            <FilmCard film={item} />
        </div>

    ) : "";

    if (!films.items.docs) {
        return (<></>);
    }

    return (

        <InfiniteScroll
            dataLength={films.items.total} //This is important field to render the next data
            next={() => dispatch(changePageAction())}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={() => dispatch(changePageAction())}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
        >
            <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-5'>
                {filmsItems}
            </div>
        </InfiniteScroll>


    )
}

export default Films





