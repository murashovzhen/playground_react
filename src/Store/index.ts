import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { RegistrationReducer } from "./registration/reducer";
import { Action, combineReducers } from "redux"
import { AuthReducer } from "./authentication/reducer";

const rootReduser = combineReducers({
    registration: RegistrationReducer,
    authentication: AuthReducer
})

export const store = configureStore({
    reducer: rootReduser
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>