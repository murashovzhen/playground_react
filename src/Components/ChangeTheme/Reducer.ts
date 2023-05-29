import { ActionType, StateType } from "../../Types/ChangeTheme"


export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET LIGHT THEME':
            return {
                ...state,
                theme: 'light'
            }
        case 'SET DARK THEME':
            return {
                theme: 'dark'
            }
        default:
            return state
    }
}