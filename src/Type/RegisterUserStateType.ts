import { ReactNode } from "react";
import { ResponseErrorsType } from "./ResponseErrorsType";
import { UserInfoType, UserRegistrtionType } from "./UserInfoType";

export type RegisterUserStateType = {
    email?: ReactNode;
    isRegister: boolean
    errors?: ResponseErrorsType
    user?: UserRegistrtionType
}