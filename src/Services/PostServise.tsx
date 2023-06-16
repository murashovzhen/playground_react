import { PostPageType, PostType } from '../Types/Post'

const postsEndpoint = "https://studapi.teachmeskills.by/blog/posts";

export const getPost = (id: string | undefined) => {
    return fetch(`${postsEndpoint}/${id}`)
        .then(response => response.json())
        .then((result: PostType) => result)
}

export const getAllPosts = (page: number, limit: number, search? :string) => {
     let offset = (page - 1) * limit;
     return fetch(`${postsEndpoint}?limit=${limit}&offset=${offset}${search ? '&search=' + search : ''}`)
         .then(response => response.json())
         .then((result: PostPageType) => result)
}



