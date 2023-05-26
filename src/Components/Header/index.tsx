import React, { useContext, useState } from "react";
import styles from "./styles.module.scss"
import HeaderInputSearch from "./HeaderInputSearch"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { MenuContext } from "../../Helpers/menuContext";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(<FontAwesomeIcon icon={faBars}/>)
  const { isOpen, setIsOpen } = useContext (MenuContext)
  const [btnText, setBtnText] = useState('open')
  
  const onClick = () => {
    // setIsOpen(isOpen === <FontAwesomeIcon icon={faBars} /> ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars} />)
    setIsOpen(!isOpen)
    setBtnText(!isOpen ? 'close' : 'open')
    
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_burger}>

        <button onClick={onClick} className={styles.burgerMenu}>
          {/* <FontAwesomeIcon icon={faBars} className={styles.burger_img} /> */}
          {btnText}
        </button>

        {/* <button className={styles.burgerClose}>
          <FontAwesomeIcon icon={faXmark} className={styles.burger_img} />
        </button> */}

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
