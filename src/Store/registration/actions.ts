
import { User } from "../../Types/UserRegistration"
import { ResponseErrors } from "../../Types/ResponseError1"
import { Activation, Registration } from "../../Services/AuthServise"
import { AppThunk } from ".."

export const RegistrationActionName = {
    REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
    REGISTRATION_FAIL: "REGISTRATION_FAIL"
} as const

const registrationSuccess = (user: User) => {
    return {
        type: RegistrationActionName.REGISTRATION_SUCCESS,
        payload: user
    }
}

const registrationFail = (errors: ResponseErrors | string) => {
    return {
        type: RegistrationActionName.REGISTRATION_FAIL,
        payload: errors
    }
}

export const registrationAction = (username: string, email: string, password: string, cb?: () => void, failedCb?: (data: any) => void): AppThunk => {
    return (dispatch) => {
        Registration(username, email, password)
            .then(response => {
                if (!response || !response.ok) {
                    if (failedCb) {
                        failedCb(response.data);
                    }
                    return dispatch(!response.ok ? registrationFail(response.data) : registrationFail("Неизвестная ошибка"))
                }

                dispatch(registrationSuccess(response.data))
                if (cb) {
                    cb()
                }
            })
    }
}

export const activationAction = (uid: string, token: string, cb?: () => void): AppThunk => {
    return (dispatch) => {
        Activation(uid, token)
            .then(response => {
                // if (!response) {
                //     return dispatch(registrationFail("Неизвестная ошибка"))
                // } else if (!response.ok) {
                //     return dispatch(registrationFail(response.data))
                // }

                //dispatch(registrationSuccess(response.data))

                if (!response.ok) {
                    console.log(response)
                    return
                }

                if (cb) {
                    cb()
                }
            })
    }
}