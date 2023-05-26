import React, { useContext, useState } from "react";
import styles from "./styles.module.scss"
import HeaderInputSearch from "./HeaderInputSearch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { MenuContext } from "../../Helpers/menuContext";

const Header = () => {

  const { isOpen, setIsOpen } = useContext(MenuContext)
  const [btnText, setBtnText] = useState(<FontAwesomeIcon icon={faBars} className={styles.burger_img} />)

  const onClick = () => {
    setIsOpen(!isOpen)
    setBtnText(
      !isOpen
        ?
        <FontAwesomeIcon icon={faXmark} className={styles.burger_img} />
        :
        <FontAwesomeIcon icon={faBars} className={styles.burger_img} />
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_burger}>
        <button onClick={onClick} className={styles.burgerMenu}>
          {btnText}
        </button>      </div>
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
