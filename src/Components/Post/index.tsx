import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../Services/PostServise'
import { PostType } from '../../Types/Post'
import FormLayout from '../FormLayout'



const Post = () => {
  const params = useParams()

  const [post, setPost] = useState<PostType>({} as PostType)


  useEffect(() => {
    getPost(params.id)
      .then(post => setPost(post))
  })

  return (
    <FormLayout title={post.title} breadcrumbs={['Home']}>
      <div>
        {post.text}
      </div>
      </FormLayout >
  )
}

export default Post
