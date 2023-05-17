import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../Services/PostServise'
import { PostType } from '../../Types/Post'
import { nameof } from 'ts-simple-nameof'
import FormLayout from '../FormLayout'
import genericStyles from '../../App.module.scss'
import { Link } from 'react-router-dom'
import FormElement from '../FormElement'
import FormButton from '../FormButton'

const Post = () => {
  const params = useParams()
  const [post, setPost] = useState<PostType>({} as PostType)
  const breadcrumbs = [<Link to="/" className={genericStyles.link}>Back to Home</Link>];
  
    useEffect(() => {
      if(params.id != undefined)  {
        getPost(params.id)
          .then(post => setPost(post))
        }
    })
  if(params.id != undefined)  {
      breadcrumbs.push(<Link to={`/posts/${post.id}`}  className={genericStyles.link}>{post.title}</Link>);     
  }

 
  return (
    <FormLayout
      title={params.id != undefined ? 'Edit Post' : 'Create Post'}
      breadcrumbs={breadcrumbs}>
        <div className={[genericStyles.row].join(' ')}>
        <div className={[genericStyles.col_12].join(' ')}>
        <form className={[genericStyles.bordered_box].join(' ')}>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
             <FormElement             
              type={'text'}
              value={post.title}
              placeholder={'Title'}
              label={'Title'} 
              name={nameof<PostType>(p => p.title)}
              component='TextBox'
              />
         </div>
      </div>
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
         <FormElement
          type={'text'}
          value={post.text}
          placeholder={'Content'}
          label={'Content'} 
          name={nameof<PostType>(p => p.text)}
          component='TextArea'/>
         </div>
      </div>
      
      <div className={genericStyles.row}>
         <div className={genericStyles.col_12}>
            <FormButton text="Create" />
         </div>
      </div>
      
      </form>
         </div>
          </div>
    
    </FormLayout >
  )
}

export default Post
