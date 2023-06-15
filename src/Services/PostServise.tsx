import { PostPageType, PostType } from '../types/post'

const postsEndpoint = "https://mockside.vercel.app/api/posts";

export const getPost = (id: string | undefined) => {
    return fetch(`${postsEndpoint}/${id}`)
        .then(response => response.json())
        .then((result: PostType) => result)
}

// export const getAllPosts = (page: number, limit: number, search? :string) => {
//     let offset = (page - 1) * limit;
//     return fetch(`${postsEndpoint}?limit=${limit}&offset=${offset}${search ? '&search=' + search : ''}`)
//         .then(response => response.json())
//         .then((result: PostPageType) => result)
// }


export const getAllPosts = async (page: number, limit: number, search?: string) => {
    let offset = (page - 1) * limit;
    const url = `${postsEndpoint}?limit=${limit}&offset=${offset}${search ? '&search=' + search : ''}`
    try {
        const response = await fetch(url)
        const result = await response.json()
        return {
            ok: response.ok,
            status: response.status,
            data: result
        }
    } catch (error: any) {
        return {
            ok: false,
            status: 400,
            data: error.message
        }
    }
}

export const createPost = async (
    title: string, text: string, discription: string,
    lesson_number: string, image: File | string, token: string
) => {

    const formData = new FormData()
    formData.append('title', title)
    formData.append('text', text)
    formData.append('discription', discription)
    formData.append('lesson_number', lesson_number)
    formData.append('image', image)
    
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
