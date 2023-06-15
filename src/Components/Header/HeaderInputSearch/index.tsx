import styles from '../HeaderInputSearch/styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../Store'
import { ChangeEvent, useCallback } from 'react'
import { setSearchValueAction } from '../../../Store/post/action'
import { useNavigate } from 'react-router-dom'

const HeaderSearchInput = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const searchValue = useSelector((state: AppState) => state.post.term)

    const handleSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){ 
            dispatch(setSearchValueAction(e.target.value))
            navigate('/search')
        }       
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
