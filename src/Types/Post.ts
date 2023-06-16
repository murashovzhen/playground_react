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
}



export type PostPageType = {
    currentPage: number
    search: string
    count: number
    results: PostType[]
}

export type PostCardType = {
    post: PostType | undefined
    cardstyle: string
}


