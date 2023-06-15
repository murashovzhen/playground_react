import { useSelector } from "react-redux"
import { AppState } from "../../../Store"
import SearchPosts from "../SearchPosts"

const SearchPage = () => {
    const searchValue = useSelector((state: AppState) => state.search.search)

    return (
        <>
            <h2>Search results "{searchValue}"</h2>
            <SearchPosts />
        </>
    )
}

export default SearchPage