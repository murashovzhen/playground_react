import { ActionType, StateType } from "../../Types/ChangeTheme"


export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_LIGHT_THEME':
            return {
                ...state,
                theme: 'light'
            }
        case 'SET_DARK_THEME':
            return {
                theme: 'dark'
            }
        default:
            return state
    }
}