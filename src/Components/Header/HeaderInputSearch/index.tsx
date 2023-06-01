import styles from '../HeaderInputSearch/styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { SearchType } from '../../../Types/SearchType'

const HeaderInputSearch = (props: SearchType) => {
    const { text, placeholder, name } = props

    return (
        <form className={styles.headerFormSearch}>
            <input
                type="search"
                name={name}
                value={text}
                placeholder={placeholder}
            />
            <button>
                <FontAwesomeIcon icon={faXmark} className={styles.searchClose_img} />
            </button>
        </form>
    )
}

export default HeaderInputSearch
