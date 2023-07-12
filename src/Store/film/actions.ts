import { AppThunk } from ".."
import { getCountries, getFilms, getGenres } from "../../Services/filmServise"
import { FilmActionName, FilmsSearchFilterType } from "./reducer"


export const loadFilmsAction = (): AppThunk => {
    return (dispatch, getState) => {
        const state = getState().films
        getFilms(
            state.filter.filmListType,
            state.filter.page,
            state.filter.limit,
            state.filter.year,
            state.filter.rating,
            state.filter.country,
            state.filter.genres,
            state.filter.searchterm,
            state.filter.sortingField
        )
            .then(items => dispatch({
                type: state.filter.page > 1 ? FilmActionName.LOAD_MORE_FILMS : FilmActionName.LOAD_FILMS,
                payload: items.data
            }))
    }
}

export const loadDictionaries = (): AppThunk => {
    return (dispatch, getState) => {
        if(getState().films.contries.length === 0){
            getCountries().then(items => dispatch({
                type: FilmActionName.LOAD_CONTRIES ,
                payload: items.data
            }))
        }
        if(getState().films.genres.length === 0){
            getGenres().then(items => dispatch({
                type: FilmActionName.LOAD_GENRES ,
                payload: items.data
            }))
        }
       
    }
}

export const setFilter = (filter: FilmsSearchFilterType): AppThunk => {
    return (dispatch, getState) => {
        dispatch({
            type:  FilmActionName.SET_SEARCH_VALUE,
            payload: {
                ...filter,
                page: 1,
            }
        });
        dispatch(loadFilmsAction())
    }
}

export const changePageAction = (): AppThunk => {
    return (dispatch, getState) => {
        const state = getState().films.filter;

        dispatch({
            type: FilmActionName.SET_SEARCH_VALUE,
            payload: {
                ...state,
                page: state.page + 1,
            }
        });
        dispatch(loadFilmsAction())
    }
}
