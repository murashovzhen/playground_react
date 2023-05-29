import { useEffect, useReducer } from 'react'
import styles from './styles.module.scss'
import { ActionType, StateType } from '../../Types/ChangeTheme'
import { reducer } from './Reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ChangeTheme = () => {
    const initialValue: StateType = { theme: 'light' }
    const [state, dispatch] = useReducer(reducer, initialValue)

    const onClickTheme = (theme: string) => {
        dispatch({
            type: theme === 'light' ?
                'SET LIGHT THEME' :
                'SET DARK THEME'
        })
    }

    useEffect(() => {
        document.body.className = styles[state.theme];
    }, [state.theme]);

    return (
        <div className={[styles.theme_wrapper, styles[state.theme]].join(' ')}>
            <ul className={[styles.asideMenu_list, styles.asideMenu_list_row].join(' ')}>
                {/* светлая тема  */}
                <li className={styles.list_item} onClick={() => onClickTheme('light')}>
                    <a href="#" className={styles.item_link}>
                        <FontAwesomeIcon icon={faSun} />
                    </a>
                </li>
                {/* темная тема */}
                <li className={styles.list_item} onClick={() => onClickTheme('dark')}>
                    <a href="#" className={styles.item_link}>
                        <FontAwesomeIcon icon={faMoon} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ChangeTheme
