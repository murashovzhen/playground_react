import { ReactNode } from "react";
import { ResponseErrors } from "../../types/responseError";
import { User } from "../../types/userRegistration";

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