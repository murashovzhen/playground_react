
export const Registration = async (username: string, email: string, password: string) => {
    const url = ("https://studapi.teachmeskills.by/auth/users/")
    const option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    }
    try {
        const response = await fetch(url, option)
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
// .then(response => response.json())
// .then((result: RegResponse)=> result)


export const Activation = async (uid: string, token: string) => {
    const url = ("https://studapi.teachmeskills.by/auth/users/activation/")
    const option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            uid,
            token
        })
    }
    try {
        const response = await fetch(url, option)
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

export const Login = async (email: string, password: string) => {
    const url = ("https://studapi.teachmeskills.by/auth/jwt/create/")
    const option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    }
    try {
        const response = await fetch(url, option)
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

