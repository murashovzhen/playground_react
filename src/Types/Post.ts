import { PostListType } from '../Store/post/types'
import { ResponseErrors } from './ResponseError1'

export type PostType = {
    id: string
    title: string
    text: string
    image: string
    date: Date
    authorId: string
    likes: number
    dislikes: number
    views: number
    isPopular: boolean
    lesson_number: string
    description: string
}

export type PostPageType = {
    currentPage: number
    search: string
    count: number
    listType: PostListType
    results: PostType[]
    errors: ResponseErrors
}

export type PostCardType = {
    post: PostType | undefined
    cardstyle: string
}


