import React from 'react'
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom'


const Menu = () => {

    return (
        <div className={styles.menu}>
            <ul>
                <li>Home </li>
                <li><Link to={`/singin`}>Sing In</Link></li>
            </ul>
        </div>
    )
}

export default Menu
