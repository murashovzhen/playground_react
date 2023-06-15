import { PostPageType } from '../../Types/Post';
import {PostActionType, RegistrationActionName } from "./types";



const initialValue: PostPageType = {
  term: "",
  count: 0,
  items: [],
  currentPage: 1
}

export const PostReducer = (state: PostPageType = initialValue, action: PostActionType): PostPageType => {
  switch (action.type) {
    case RegistrationActionName.SET_SEARCH_VALUE:
      return {
        ...state, 
      term:action.payload as string
      }
    case RegistrationActionName.SET_PAGE_VALUE:
        return {
          ...state, 
        currentPage:action.payload as number
        }
    case RegistrationActionName.LOAD_POSTS:
      return {
        ...state,
        count: (action.payload as PostPageType).count,
        items: (action.payload as PostPageType).items
      }
    
    case RegistrationActionName.CLEAR_SEARCH:
      return {
        ...initialValue
      }
   
    case RegistrationActionName.LOAD_POSTS_FAILED:
        return {
          ...initialValue
        }
    default:
      return state
  }
}