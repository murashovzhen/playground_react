import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../../services/postServise'
import { PostType } from '../../../types/post'
import FormLayout from '../FormLayout'
import genericStyles from '../../../App.module.scss'
import styles from '../PostPage/styles.module.scss'
import { Link } from 'react-router-dom'
import { Pager } from '../../Paging'

const Post = () => {
  const params = useParams()

  const [post, setPost] = useState<PostType>({} as PostType)

  const breadcrumbs = [<Link to="/" className={genericStyles.link}>Home</Link>];

  useEffect(() => {
    getPost(params.id)
      .then(post => setPost(post))
  })

  return (
    <FormLayout
      title={post.title}
      breadcrumbs={breadcrumbs}
    >
      <div className={genericStyles.row}>
        <div className={styles.cardImgWrappper}>
          <img className={styles.cardImg} src={post.image} alt='Image' />
        </div>
        <div className={[genericStyles.m_t_25].join('')}>
          <div className={styles.cardTextWrappper}>
            <p className={styles.cardText}>
              {post.text}
            </p>
          </div>
        </div>
      </div>

    </FormLayout >
  )
}

export default Post
