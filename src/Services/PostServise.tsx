import { PostPageType, PostType } from '../Types/Post'

const postsEndpoint = "https://studapi.teachmeskills.by/blog/posts";

export const getPost = (id: string | undefined) => {
    return fetch(`${postsEndpoint}/${id}`)
        .then(response => response.json())
        .then((result: PostType) => result)
}

export const getAllPosts = (page: number, limit: number, search?: string) => {
    let offset = (page - 1) * limit;
    return fetch(`${postsEndpoint}?limit=${limit}&offset=${offset}${search ? '&search=' + search : ''}`)
        .then(response => response.json())
        .then((result: PostPageType) => result)
}

export const createPost = async (
    form: PostType, image: File | string, token?: string
) => {

    const formData = new FormData()
    formData.append('title', form.title)
    formData.append('text', form.text)
    formData.append('discription', form.discription)
    formData.append('lesson_number', form.lesson_number)
    formData.append('image', image)
    debugger
    try {
        const response = await fetch(new Request('https://studapi.teachmeskills.by/blog/posts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        }))

        const result = await response.json()
        debugger
    } catch (error) {
        console.log(error)
    }
}

