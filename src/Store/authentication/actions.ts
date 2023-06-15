
import { ResponseErrors } from "../../types/responseError"
import { Login } from "../../services/authServise"
import { AppThunk } from ".."
import { Tokens } from "./types"
import { access } from "fs"

export const AuthActionName = {
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAIL: "AUTH_FAIL"
} as const

const authSuccess = (tokens: Tokens) => {
    return {
        type: AuthActionName.AUTH_SUCCESS,
        payload: tokens
    }
}

const authFail = (errors: ResponseErrors | string) => {
    return {
        type: AuthActionName.AUTH_FAIL,
        payload: errors
    }
}

// const updateAccessTokenAction = (access) => {
//     return {
//         type: 'Update access'
//     }
// }

export const loginAction = (email: string, password: string, cb?: () => void): AppThunk => {
    return (dispatch) => {
        Login(email, password)
            .then(response => {
                if (!response) {
                    return dispatch(authFail("Неизвестная ошибка"))
                } else if (!response.ok) {
                    return dispatch(authFail(response.data))
                }

                dispatch(authSuccess(response.data))
                if (cb) {
                    cb()
                }

                //dispatch(getMeUserDataAction() )
                //https://studapi.teachmeskills.by/auth/users/me/
                //вызываем dispatch, кот. вызывает action для получения данных по пользователю (данные записать в отдельный state, сделать отдельный reducer по данным пользователя)

            })
    }
}

// export const refreshAction = (): AppThunk => {
//     return async (dispatch, getState) => {
//         const tokens = getState().authentication.tokens?.refresh
//         if (!refresh) {
//             return
//         }

//         refreshFetch(tokens.refresh)

//         dispatch(updateAccessTokenAction())
//     }
// }
