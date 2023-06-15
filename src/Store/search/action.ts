import { AppThunk } from '..'
import { ResponseType } from '../../types/post'
import { getAllPosts } from "../../services/postServise"
import { SearchActionType } from "./types"


const clearSearchAction = (): SearchActionType => {
  return {
    type: 'CLEAR_SEARCH'
  }
}

export const setPosts = (posts: ResponseType): SearchActionType => {
  return {
    type: 'LOAD_SEARCH_POSTS',
    payload: posts
  }
}

export const loadSearchPostsAction = (/*limit: number, offset: number*/): AppThunk => {
  return (dispatch, getState) => {
    const search = getState().search.search
    if (search) {
      getAllPosts(4, 0, search)
        .then(posts => dispatch(setPosts(posts.data)))
    }
  }
}

export const setSearchValueAction = (search: string): AppThunk => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SEARCH_VALUE',
      payload: search
    })

    if (search) {
      dispatch(loadSearchPostsAction())
    }
    else {
      dispatch(clearSearchAction())
    }
  }
}





