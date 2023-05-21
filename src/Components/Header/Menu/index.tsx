import styles from "./styles.module.scss";
import { Link } from 'react-router-dom'


const Menu = () => {

    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/posts/create'>Create Post</Link>
                </li>
                <li>
                    <Link to='/singin'>Sing In</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
