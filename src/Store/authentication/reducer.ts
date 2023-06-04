import { ResponseErrors } from "../../Types/ResponseError";
import { AuthActionName} from "./actions";
import { AuthActionType, AuthUserState, Tokens} from "./types";

const initValue: AuthUserState = {
    isAuthenticated: false,
}

export const AuthReducer = (
    state: AuthUserState = initValue,
    action: AuthActionType
): AuthUserState => {
    switch (action.type) {
        case AuthActionName.AUTH_SUCCESS:
            return {
                isAuthenticated: true,
                tokens: action.payload as Tokens
            }
        case AuthActionName.AUTH_FAIL:
            return {
                isAuthenticated: false,
                errors: action.payload as (string | ResponseErrors) 
            }
        default:
        return state
    }
}