import { PostType, ResponseType } from "../../types/post"

export type SearchStateType = {
  search: string
  count: number
  list: PostType[]
}

export type SearchActionType = {
  type: string
  payload?: ResponseType | string
}