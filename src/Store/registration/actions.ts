
import { User } from "../../Types/UserRegistration"
import { ResponseErrors } from "../../Types/ResponseError"
import { Activation, Registration } from "../../Services/authServise"
import { AppThunk } from ".."
import { ReactNotifications, Store } from 'react-notifications-component'

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

export const registrationAction = (username: string, email: string, password: string, cb?: () => void): AppThunk => {
    return (dispatch) => {
        Registration(username, email, password)
            .then(response => {
                if (!response || !response.ok) {
                   
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
                
                if (!response.ok) {

                    Store.addNotification({
                        title: "Activation error",
                        message: response.data.detail ?? response.data,
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        
                      });
                    console.log(response)
                    return
                }

                if (cb) {
                    cb()
                }
            })
    }
}