import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../Store';
import { useSearchParams } from 'react-router-dom';
import { changePageAction, loadFilmsAction } from '../../Store/film/actions';
import FilmCard from '../../Components/filmCard';
import InfiniteScroll from 'react-infinite-scroll-component';

function Films() {
    const dispatch = useDispatch<AppDispatch>()

    const films = useSelector((state: AppState) => state.films)

    useEffect(() => {

        dispatch(loadFilmsAction());
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

 

    const filmsItems = films.items.docs ? films.items.docs.map((item) =>
        <div className='col'>
            <FilmCard film={item} key={item.id}/>
        </div>

    ) : "";

    if (!films.items.docs) {
        return (<></>);
    }

    return (
        <div>  <InfiniteScroll
        dataLength={films.items.docs.length} //This is important field to render the next data
        next={() => dispatch(changePageAction())}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
            </p>
        }>
        <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-5'>
            {filmsItems}
        </div>
    </InfiniteScroll></div>

      


    )
}

export default Films





