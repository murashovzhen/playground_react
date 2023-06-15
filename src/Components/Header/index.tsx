import { useContext, useState } from "react";
import styles from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { MenuContext } from "../../Helpers/menuContext";
import HeaderSearchInput from "./HeaderInputSearch";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const [btnText, setBtnText] = useState(<FontAwesomeIcon icon={faBars} className={styles.burger_img} />)

  const onClick = () => {
    setIsOpen(!isOpen)
    setBtnText(!isOpen
      ?
      <FontAwesomeIcon icon={faXmark} className={styles.burgerImg} />
      :
      <FontAwesomeIcon icon={faBars} className={styles.burgerImg} />
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerBurger}>
        <button onClick={onClick} className={styles.burgerMenu}>
          {btnText}
        </button>
      </div>
      <HeaderSearchInput
        // placeholder={"Search ..."}
        // name={"Search"}
      />
      <div className={styles.headerSearch}>
        <button className={styles.searchSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchImg} />
        </button>
        <button className={styles.searchUser}>
          <FontAwesomeIcon icon={faUser} className={styles.searchImg} />
        </button>
      </div>
    </header>
  )
};

export default Header;
