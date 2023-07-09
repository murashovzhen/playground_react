import { AppThunk } from ".."
import { getFilms } from "../../Services/filmServise"
import { FilmActionName } from "./reducer"


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
                type: FilmActionName.LOAD_FILMS,
                payload: items.data
            }))
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
