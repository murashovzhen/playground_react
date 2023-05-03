import { PostType } from '../Types/Post'

export const getPost = (id: string) => {
    return fetch('https://mockside.vercel.app/api/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}