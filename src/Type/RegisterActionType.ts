import { ResponseErrorsType } from "./ResponseErrorsType"
import { UserRegistrtionType } from "./UserInfoType"

export type RegisterActionType = {
    type: string
    payload: UserRegistrtionType | ResponseErrorsType
}