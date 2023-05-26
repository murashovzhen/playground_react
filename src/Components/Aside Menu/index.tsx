import React from 'react'
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun} from '@fortawesome/free-regular-svg-icons';



const AsideMenu = () => {



  return (
    <div className={styles.asideMenu_box}>

      <ul className={styles.asideMenu_list}>
        <li className={[styles.list_item, styles.list_item_blue].join(' ')}>
          <a href="#" className={[styles.item_link,styles.item_link_blue].join(' ')}>User</a>
        </li>
        <li className={styles.list_item}>
          <Link to='/'
            style={{ textDecoration: 'none' }}>
            <a href="#" className={styles.item_link}>Home</a>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link to='/posts/create'
            style={{ textDecoration: 'none'}}>
            <a href="#" className={styles.item_link}>Add Post</a>
          </Link>
        </li>
      </ul>

      <div>
        <ul className={[styles.asideMenu_list, styles.asideMenu_list_row].join(' ') }>
          <li className={styles.list_item}>
            <a href="#" className={styles.item_link}>
              <FontAwesomeIcon icon={faSun} />
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#" className={styles.item_link}>
              <FontAwesomeIcon icon={faMoon} />
            </a>
          </li>
        </ul>

        <ul className={styles.asideMenu_list}>
          <li className={[styles.list_item, styles.list_item_grey].join(' ')}>
            <a href="#" className={[styles.item_link, styles.item_link_grey].join(' ')}>Log Out</a>
          </li>
          <li className={[styles.list_item, styles.list_item_grey].join(' ')}>
            <Link to="/singin"
              style={{textDecoration: 'none'}} >
              <a href="#" className={[styles.item_link, styles.item_link_grey].join(' ')}>Sign In</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AsideMenu
