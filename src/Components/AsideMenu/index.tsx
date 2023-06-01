import React, { useContext } from 'react'
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { MenuContext } from "../../Helpers/menuContext";
import ChangeTheme from "../ChangeTheme";

const AsideMenu = () => {
  const { isOpen } = useContext(MenuContext)

  return (
    <div className={[styles.asideMenuBox, styles[`${isOpen ? "asideMenuOpen" : "asideMenuHiden"}`]].join(' ')}>
      <ul className={styles.asideMenuList}>
        <li className={[styles.listItem, styles.listItemBlue].join(' ')}>
          <Link to="#" className={[styles.itemLink, styles.itemLinkBlue].join(' ')}>User</Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/" className={styles.itemLink}>
            Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link to="/posts/create" className={styles.itemLink}>
            Add Post
          </Link>
        </li>
      </ul>
      <div>
        <ChangeTheme />
        <ul className={styles.asideMenuList}>
          <li className={[styles.listItem, styles.listItemGrey].join(' ')}>
            <Link to="#" className={[styles.itemLink, styles.itemLinkGrey].join(' ')}>Log Out</Link>
          </li>
          <li className={[styles.listItem, styles.listItemGrey].join(' ')}>
            <Link to="/singin" className={[styles.itemLink, styles.itemLinkGrey].join(' ')}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AsideMenu
