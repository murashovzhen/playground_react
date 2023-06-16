import { Console } from "console";
import { ResponseErrors } from "../../Types/ResponseError1";
import { AuthActionName } from "./actions";
import { AuthActionType, AuthUserState, Tokens } from "./types";

const initValue: AuthUserState = {
    isAuthenticated: false,
}

export const AuthReducer = (
    state: AuthUserState = initValue,
    action: AuthActionType
): AuthUserState => {

    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case AuthActionName.AUTH_SUCCESS:
            return {
                isAuthenticated: true,
                tokens: action.payload as Tokens
            }
        case AuthActionName.AUTH_FAIL:
            return {
                isAuthenticated: false,
                errors: action.payload as (ResponseErrors)
            }
        case AuthActionName.LOGOUT:
            return {
                isAuthenticated: false,
                tokens: undefined
            }
        default:
            return state
    }
}