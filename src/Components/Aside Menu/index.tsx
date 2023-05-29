import React, { useContext } from 'react'
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import { MenuContext } from '../../Helpers/menuContext';
import ChangeTheme from '../ChangeTheme';

const AsideMenu = () => {
  const { isOpen } = useContext(MenuContext)

  return (
    <div className={[styles.asideMenu_box, styles[`${isOpen ? 'asideMenu_open' : 'asideMenu_hiden'}`]].join(' ')}>
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
        <ChangeTheme />
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
