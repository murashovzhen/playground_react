import { ResponseErrorsType } from "./ResponseErrorsType"
import { TokensType } from "./TokensType"
import { UserInfoType } from "./UserInfoType"

export type AuthUserStateType = {
    isAuthenticated: boolean
    errors?: ResponseErrorsType
    tokens?: TokensType | undefined
    user?: UserInfoType
}