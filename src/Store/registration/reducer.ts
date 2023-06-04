import { ResponseErrors } from "../../Types/ResponseError";
import { User } from "../../Types/UserRegistration";
import { RegistrationActionName } from "./actions";
import { RegisterActionType, RegisterUserState } from "./types";

const initValue: RegisterUserState = {
    isRegister: false,
}

export const RegistrationReducer = (
    state: RegisterUserState = initValue,
    action: RegisterActionType
): RegisterUserState => {
    switch (action.type) {
        case RegistrationActionName.REGISTRATION_SUCCESS:
            return {
                isRegister: true,
                user: action.payload as User
            }
        case RegistrationActionName.REGISTRATION_FAIL:
            return {
                isRegister: false,
                errors: action.payload as (string | ResponseErrors)
            }
        default:
            return state
    }
}