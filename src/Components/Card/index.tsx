import CardFooter from '../Body/AllCards/CardFooter'
import styles from '../Card/styles.module.scss'
import globalStyles from '../../App.module.scss'
import { PostCardType } from '../../Types/Post'
import { Link } from 'react-router-dom'

const Card = (props: PostCardType) => {
  if (props.post == undefined) {
    return <div></div>;
  }

    return (
      <div className={props.cardstyle}>
        <div className={styles.cardContent}>
          <img className={styles.cardImg_Upper} src={props.post.image} alt='Image' />
          <div className={styles.cardText}>
            <span className={styles.cardDate}>
              {new Date(props.post.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <Link to={`/posts/${props.post.id}`} className={globalStyles.link}>
              <span className={styles.title}>{props.post.title}</span>
            </Link>
            <p>{props.post.text}</p>
          </div>
          <img className={styles.cardImg} src={props.post.image} alt="Image" />
        </div>
        <CardFooter dislikes={props.post.dislikes} likes={props.post.likes} postId={props.post.id} views={props.post.views} />
      </div>
    );
  }
  export default Card