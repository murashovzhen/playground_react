
import { User } from "../../Types/UserRegistration"
import { ResponseErrors } from "../../Types/ResponseError"
import { Registration } from "../../Services/authServise"
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

export const registrationAction = (username: string, email: string, password: string, cb?: ()=> void): AppThunk => {

    return (dispatch) => {
        Registration(username, email, password)
            .then(response => {
                if (!response) {
                    return dispatch(registrationFail("Неизвестная ошибка"))
                } else if (!response.ok) {
                    return dispatch(registrationFail(response.data))
                }
                
                dispatch(registrationSuccess(response.data))
                if (cb) {
                    cb()
                }
            })
    }
}