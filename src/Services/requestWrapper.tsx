import { Tokens } from "../Store/authentication/types"

export const makeRequest = async (requset: Request, tokens?: Tokens | undefined) => {
    try {
        const response = await fetch(requset)
        const result = await response.json()

        if (
            response.status === 401 && tokens?.refresh) {
        }

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

const refreshToken = async (refresh: string) => {
    const url = ("https://studapi.teachmeskills.by/auth/jwt/refresh/")
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
    const response = await fetch(request)
    const result = await response.json()

    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}