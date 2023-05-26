import React, { useContext } from 'react'
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { MenuContext } from '../../Helpers/menuContext';



const AsideMenu = () => {
  const { isOpen } = useContext(MenuContext)


  return (
    <div className={`styles.asideMenu_box  ${isOpen ? 'styles.open' : ''}`}>
      <ul className={styles.asideMenu_list}>
        <li className={[styles.list_item, styles.list_item_blue].join(' ')}>
          <a href="#" className={[styles.item_link, styles.item_link_blue].join(' ')}>User</a>
        </li>
        <li className={styles.list_item}>
          <Link to='/' className={styles.item_link}>
            Home
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link to='/posts/create' className={styles.item_link}>
            Add Post
          </Link>
        </li>
      </ul>
      <div>
        <ul className={[styles.asideMenu_list, styles.asideMenu_list_row].join(' ')}>
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
            <Link to="/singin" className={[styles.item_link, styles.item_link_grey].join(' ')}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AsideMenu
