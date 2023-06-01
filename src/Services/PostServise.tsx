import { PostType } from '../Types/Post'

export const getPost = (id: string | undefined) => {
    return fetch('https://mockside.vercel.app/api/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}

export const getAllPosts = () => {
    return fetch("https://mockside.vercel.app/api/posts")
        .then(response => response.json())
        .then((result: {
            count: number,
            items: PostType[]
        })=>result)
}

