import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { RegistrationReducer } from "./registration/reducer";
import { Action, combineReducers } from "redux"
import { AuthReducer } from "./authentication/reducer";
import { PostReducer } from "./post/reducer";
import jwtRefreshMiddleware from "../midddleware/jwtRefreshMiddleware";

const rootReduser = combineReducers({
    registration: RegistrationReducer,
    authentication: AuthReducer,
    post: PostReducer
})

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jwtRefreshMiddleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>