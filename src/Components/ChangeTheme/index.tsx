import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import globalStyles from '../../App.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ChangeTheme = () => {
    const [theme, setTheme] = useState(globalStyles.light);
    const onClick = (theme: string) => {
        setTheme(theme);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ul className={[styles.asideMenuList, styles.asideMenuList_row].join(' ')}>
            {/* светлая тема  */}
            <li className={styles.listItem} id="lightControl" onClick={() => onClick(globalStyles.light)}>
                <FontAwesomeIcon icon={faSun} />
            </li>
            {/* темная тема */}
            <li className={styles.listItem} id="darkControl" onClick={() => onClick(globalStyles.dark)}>
                <FontAwesomeIcon icon={faMoon} />
            </li>
        </ul>
    )
}


export default ChangeTheme
