import { PostType, PostPageType } from '../Types/Post'

const postsEndpoint= "https://mockside.vercel.app/api/posts";

export const getPost = (id: string | undefined) => {
    return fetch(`${postsEndpoint}/${id}`)
        .then(response => response.json())
        .then((result: PostType) => result)
}

export const getAllPosts = (page:number, limit: number) => {
    var offset = (page-1)*limit;
    return fetch(`${postsEndpoint}?offset=${offset}&limit=${limit}`)
        .then(response => response.json())
        .then((result: PostPageType)=>result)
}

