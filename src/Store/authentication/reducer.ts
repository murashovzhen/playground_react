import { ResponseErrors } from '../../Types/ResponseError1';
import { AuthActionName } from './actions';
import { AuthActionType, AuthUserState, Tokens, UserInfoType } from './types';


const initValue: AuthUserState = {
    isAuthenticated:  localStorage.getItem('access') ? true : false,
    tokens: 
    {
        access: localStorage.getItem('access'),
        refresh: localStorage.getItem('refresh')
    } as Tokens
}

export const AuthReducer = (state: AuthUserState = initValue, action: AuthActionType): AuthUserState => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case AuthActionName.AUTH_SUCCESS:
            var tockens = action.payload as Tokens;
            localStorage.setItem('access', tockens.access);
            localStorage.setItem('refresh', tockens.refresh);
            return {
                isAuthenticated: true,
                tokens: tockens
            }
        case AuthActionName.AUTH_FAIL:
            return {
                isAuthenticated: false,
                errors: action.payload as (ResponseErrors)
            }
        case AuthActionName.LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
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