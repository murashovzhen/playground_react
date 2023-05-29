import { useReducer } from 'react'
import styles from './styles.module.scss'
import { ActionType, StateType } from '../../Types/ChangeTheme'

const reducer = (state: StateType, action: ActionType): StateType => {
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

const ChangeTheme = () => {
    const initialValue: StateType = { theme: 'light' }
    const [state, dispatch] = useReducer(reducer, initialValue)

    const onClick = (theme: string) => {
        dispatch({
            type: theme === 'light' ?
                'SET LIGHT THEME' :
                'SET DARK THEME'
        })
    }


    return (
        <div className={[styles.theme_wrapper, styles[state.theme]].join(' ')}>
            <button className={styles.btn} onClick={() => onClick('light')} >Light</button>
            <button className={styles.btn} onClick={() => onClick('dark')}>Dark</button>
        </div>
    )
}

export default ChangeTheme
