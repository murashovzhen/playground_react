import { AppThunk } from '..'
import { getAllPosts } from "../../Services/PostServise"
import { RegistrationActionName } from './types'



const loadPostsAction = (): AppThunk => {
  return (dispatch, getState) => {
    const state = getState().post
    getAllPosts(state.currentPage, 12, state.term)
        .then(items => dispatch({
        type: RegistrationActionName.LOAD_POSTS,
        payload: items
      }))
  }
}


export const setSearchValueAction = (search: string): AppThunk => {
  return (dispatch) => {   

    if (search) {
      dispatch({
        type: RegistrationActionName.SET_SEARCH_VALUE,
        payload: search
      })
      dispatch(loadPostsAction())
    }
    else {
      dispatch({
        type: RegistrationActionName.CLEAR_SEARCH
      })
    }
  }
}

export const setPageValueAction = (currentPage: number): AppThunk => {
  return (dispatch) => {   

    dispatch({
      type: RegistrationActionName.SET_PAGE_VALUE,
      payload: currentPage
    })
   dispatch(loadPostsAction())
    
  }
}







