import styles from "./styles.module.scss";
import { Link } from 'react-router-dom'


const Menu = () => {

    return (
        <div className={styles.menu}>
            <ul>
                {/* <li>
                    <Link to='/'>Home</Link>
                </li> */}
                <li>
                    <Link to='/posts/create'>Add Post</Link>
                </li>
                {/* <li>
                    <Link to='/singin'>Sing In</Link>
                </li> */}
                <li>
                    <Link to='/singup'>Sing Up</Link>
                </li>
                <li>
                    <Link to='/resetpass1'>ResetPass1</Link>
                </li>
                <li>
                    <Link to='/resetpass2'>ResetPass2</Link>
                </li>
                <li>
                    <Link to='/newpass'>New password</Link>
                </li>
                <li>
                    <Link to='/singinNewpass'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/registrationConfirmation'>Registration Confirmation</Link>
                </li>
                <li>
                    <Link to='/success'>Success</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
