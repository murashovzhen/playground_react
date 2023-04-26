import { PostType } from '../Types/Post'

export const getPost = (id: number) => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}