import React from "react";
import styles from "./styles.module.scss"
import HeaderInputSearch from "./HeaderInputSearch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Header = () => {

  return (
    <header className={styles.header}>

      <div className={styles.header_burger}>
        <button className={styles.burgerMenu}>
          <FontAwesomeIcon icon={faBars} className={styles.burger_img} />
        </button>
        <button className={styles.burgerClose}>
          <FontAwesomeIcon icon={faXmark} className={styles.burger_img} />
        </button>
      </div>

      <HeaderInputSearch
        placeholder={'Search ...'}
        name={'Search'} />

      <div className={styles.header_search}>
        <button className={styles.searchSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search_img} />
        </button>
        <button className={styles.searchUser}>
          <FontAwesomeIcon icon={faUser} className={styles.search_img} />
        </button>

      </div>
    </header>
  )
};

export default Header;
