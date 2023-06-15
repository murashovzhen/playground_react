import { useSelector } from "react-redux"
import { AppState } from "../../../Store"
import styles from './styles.module.scss';
import globalStyles from '../../App.module.scss'
import { Link } from 'react-router-dom'
import CardFooter from "../../Body/AllCards/CardFooter";


const SearchPosts = () => {
    const posts = useSelector((state: AppState) => state.search.list)

    return (
        <>
            {
                posts.map(post => (
                    <div key={post.id} className={styles.searchCard}>
                        <div className={styles.cardContent}>
                            <img className={styles.cardImg} src={post.image} alt="Image" />
                            <div className={styles.cardText}>
                                <span className={styles.cardDate}>
                                    {new Date(post.createdAt).toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                                <Link to={`/post/${post.id}`} className={globalStyles.link}>
                                    <span className={styles.title}>{post.title}</span>
                                </Link>
                            </div>
                        </div>
                        <CardFooter dislikes={post.dislikes} likes={post.likes} postId={post.id} views={post.views} />
                    </div>
                ))
            }
        </>
    )
}

export default SearchPosts