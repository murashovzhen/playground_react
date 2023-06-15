import { ResponseType } from '../../types/post';
import {SearchActionType, SearchStateType } from "./types";

const initialValue: SearchStateType = {
  search:'',
  count: 0,
  list: []
}

export const SearchReducer = (state: SearchStateType = initialValue, action: SearchActionType): SearchStateType => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state, //debounce
      search:action.payload as string
      }

    case "LOAD_SEARCH_POSTS":
      return {
        ...state,
        count: (action.payload as ResponseType).count,
        list: (action.payload as ResponseType).results
      }
    
    case 'CLEAR_SEARCH':
      return {
        ...initialValue
      }
    default:
      return state
  }
}