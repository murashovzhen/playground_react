import { useSelector } from 'react-redux'
import { AppState } from '../../../Store'

const SearchPage = () => {
    const searchValue = useSelector((state: AppState) => state.search.search)

    return (
        <>
            <h2>Search results "{searchValue}"</h2>
        </>
    )
}

export default SearchPage
