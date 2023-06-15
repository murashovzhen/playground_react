import styles from '../HeaderInputSearch/styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../Store'
import { ChangeEvent, useCallback } from 'react'
import { setSearchValueAction } from '../../../Store/search/action'

const HeaderSearchInput = () => {
    // const { text, placeholder, name } = props
    const dispatch = useDispatch<AppDispatch>()
    const searchValue = useSelector((state: AppState) => state.search.search)

    const handleSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target)
        const text = e.target.value
        dispatch(setSearchValueAction(text))
    }, [])

    return (
        <form className={styles.headerFormSearch}>
            <input
                onChange={handleSearchValue}
                type="search"
                name={"Search"}
                value={searchValue} 
                placeholder={"Search ..."}
            />
            {/* <button>
                <FontAwesomeIcon icon={faXmark} className={styles.searchClose_img} />
            </button> */}
        </form>
    )
}

export default HeaderSearchInput
