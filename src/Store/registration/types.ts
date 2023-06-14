import { ReactNode } from "react";
import { ResponseErrors } from "../../Types/ResponseError";
import { User } from "../../Types/UserRegistration";

export type RegisterUserState = {
    email?: ReactNode;
    isRegister: boolean
    errors?: ResponseErrors 
    user?: User 
}

export type RegisterActionType = {
    type: string
    payload: User | ResponseErrors
}