
import { ResponseErrors } from "../../Types/ResponseError1"
import { GetUserName, Login, RefreshTocken } from "../../Services/authServise"
import { AppThunk } from ".."
import { Tokens, UserInfoType } from "./types"
import { access } from "fs"

export const AuthActionName = {
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAIL: "AUTH_FAIL",
    LOGOUT: "LOGOUT",
    SET_USER_INFO: "SET_USER_INFO",
} as const

const authSuccess = (tokens: Tokens) => {
    return {
        type: AuthActionName.AUTH_SUCCESS,
        payload: tokens
    }
}

const setUserInfo = (user: UserInfoType) => {
    return {
        type: AuthActionName.SET_USER_INFO,
        payload: user
    }
}

const authFail = (errors: ResponseErrors | string) => {
    return {
        type: AuthActionName.AUTH_FAIL,
        payload: errors
    }
}

export const loginAction = (email: string, password: string, cb?: () => void): AppThunk => {
    return (dispatch, getState) => {
        Login(email, password)
            .then(response => {
                if (!response) {
                    return dispatch(authFail("Неизвестная ошибка"))
                } else if (!response.ok) {
                    return dispatch(authFail(response.data))
                }

                dispatch(authSuccess(response.data))

                const tokens = getState().authentication.tokens;
                GetUserName(tokens?.access).then(userResponse => {
                    if (userResponse.ok) {
                        dispatch(setUserInfo(userResponse.data))
                    }
                })


                if (cb) {
                    cb()
                }              
            })
    }
}

export const refreshTockenAction = (token:  string, cb?: () => void): AppThunk => {
    return  (dispatch, getState) => {
         RefreshTocken(token)
            .then(response => {
                if (!response ||  !response.ok) {
                    return dispatch({
                        type: AuthActionName.LOGOUT
                    })
                }

                dispatch(authSuccess({
                    access: response.data,
                    refresh: token
                } as Tokens))
     
            })
    }
}

