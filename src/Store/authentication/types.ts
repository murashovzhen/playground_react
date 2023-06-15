import { ResponseErrors } from "../../Types/ResponseError1"

export type Tokens = {
    access: string
    refresh: string
}

export type AuthUserState = {
    isAuthenticated: boolean
    errors?: ResponseErrors | string
    tokens?: Tokens
}

export type AuthActionType = {
    type: string
    payload: Tokens | ResponseErrors
}