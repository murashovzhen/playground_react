import { useSelector } from "react-redux"
import { store } from "../Store"

const authBaseUri = "https://studapi.teachmeskills.by/auth/";

export const Registration = async (username: string, email: string, password: string) => {
    const url = (`${authBaseUri}users/authBaseUri`)
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
    const request = new Request(url, option)

    try {
        const response = await fetch(request)
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


export const Activation = async (uid: string, token: string) => {
    const url = (`${authBaseUri}/users/activation/`)
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
    const request = new Request(url, option)

    try {
        const response = await fetch(request)

        return {
            ok: response.ok,
            status: response.status,

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
    const url = (`${authBaseUri}/jwt/create`)
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
    const request = new Request(url, option)

    try {
        const response = await fetch(request)
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

export const RefreshTocken = async (refresh: string) => {
    const url = (`${authBaseUri}jwt/refresh`)
    const option = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            refresh
        })
    }
    const request = new Request(url, option)

    try {
        const response = await fetch(request)
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

export const GetUserName = async (token:string|undefined) => {
    const url = (`${authBaseUri}/users/me/`)
    const option = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    const request = new Request(url, option)

    try {
        const response = await fetch(request)
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

