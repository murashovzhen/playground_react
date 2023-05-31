
export type PostType = {
    id: string
    title: string
    text: string
    image: string
    createdAt: Date
    authorId: string
    likes: number
    dislikes: number
    views: number
    isPopular: boolean
}

export type PostCardType = {
    post: PostType | undefined
    cardstyle: string
}

