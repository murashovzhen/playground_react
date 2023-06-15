import { ReactNode } from "react";
import { ResponseErrors } from "../../Types/ResponseError1";
import { User } from "../../Types/UserRegistration";

export type RegisterUserState = {
    email?: ReactNode;
    isRegister: boolean
    errors?: ResponseErrors | string
    user?: User
}

export type RegisterActionType = {
    type: string
    payload: User | ResponseErrors
}