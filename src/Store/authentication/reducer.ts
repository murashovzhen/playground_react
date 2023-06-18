import { Console } from "console";
import { ResponseErrors } from "../../Types/ResponseError1";
import { AuthActionName } from "./actions";
import { AuthActionType, AuthUserState, Tokens, UserInfoType } from "./types";

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
                isAuthenticated: false
            }
        case AuthActionName.SET_USER_INFO:
            return {
                ...state, 
                user: action.payload as (UserInfoType)
              }
            
        default:
            return state
    }
}