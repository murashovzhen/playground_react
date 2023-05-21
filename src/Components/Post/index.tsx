import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../Services/PostServise'
import { PostType } from '../../Types/Post'
import FormLayout from '../FormLayout'
import genericStyles from '../../App.module.scss'
import { Link } from 'react-router-dom'

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
      breadcrumbs={breadcrumbs}>
      <div className={[genericStyles.row, genericStyles.m_t_25].join('')}>
        <div className={[genericStyles.col_12].join(' ')}>
          <Link to={`/posts/edit/${post.id}`}>Edit Post</Link>
        </div>
      </div>
      <div className={[genericStyles.row, genericStyles.m_t_25].join('')}>
        <div className={[genericStyles.col_lg_6, genericStyles.offset_lg_3, genericStyles.col_12].join(' ')}>
          <img src={post.image} alt='Image' />
        </div>
      </div>
      <div className={[genericStyles.row, genericStyles.m_t_25].join('')}>
        <div className={genericStyles.col_12}>
          <p>
            {post.text}
          </p>
        </div>
      </div>
    </FormLayout >
  )
}

export default Post
