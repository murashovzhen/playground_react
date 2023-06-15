import { PostPageType } from "../../Types/Post"
import { ResponseErrors } from "../../Types/ResponseError1";


export const RegistrationActionName = {
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  SET_PAGE_VALUE: "SET_PAGE_VALUE",
  LOAD_POSTS: "LOAD_POSTS",
  CLEAR_SEARCH: "CLEAR_SEARCH",
  LOAD_POSTS_FAILED: "LOAD_POSTS_FAILED",
} as const

export type PostActionType = {
  type: string;
  payload?: PostPageType | ResponseErrors |  string | number
}