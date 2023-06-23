import { PostPageType } from "../../Types/Post"
import { ResponseErrors } from "../../Types/ResponseError1";

export type PostListType =
  | 'myPosts'
  | 'allPosts';

export const RegistrationActionName = {
  SET_SEARCH_VALUE: "SET_SEARCH_VALUE",
  SET_PAGE_VALUE: "SET_PAGE_VALUE",
  SET_LIST_TYPE_VALUE: "SET_LIST_TYPE_VALUE",
  LOAD_POSTS: "LOAD_POSTS",
  CLEAR_SEARCH: "CLEAR_SEARCH",
  LOAD_POSTS_FAILED: "LOAD_POSTS_FAILED",
  ADD_POST_FAIL: "ADD_POST_FAIL"
} as const

export type PostActionType = {
  type: string;
  payload?: PostPageType | ResponseErrors | string | number | PostListType
}