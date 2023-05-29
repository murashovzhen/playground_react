import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import globalStyles from '../../App.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ChangeTheme = () => {
    const [theme, setTheme] = useState(globalStyles.light);
    const onClick = () => {
        if (theme === globalStyles.light) {
            setTheme(globalStyles.dark);
        } else {
            setTheme(globalStyles.light);
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ul className={[styles.asideMenu_list, styles.asideMenu_list_row].join(' ')}>
            {/* светлая тема  */}
            <li className={styles.list_item} onClick={onClick}>
                <FontAwesomeIcon icon={faSun} />
            </li>
            {/* темная тема */}
            <li className={styles.list_item} onClick={onClick}>
                <FontAwesomeIcon icon={faMoon} />
            </li>
        </ul>
    )
}

export default ChangeTheme
