import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '../../../Services/PostServise'
import { PostType } from '../../../Types/Post'
import { nameof } from 'ts-simple-nameof'
import FormLayout from '../FormLayout'
import genericStyles from '../../../App.module.scss'
import { Link } from 'react-router-dom'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
import styles from './styles.module.scss'

const AddPost = () => {
    const params = useParams()
    const [post, setPost] = useState<PostType>({} as PostType)
    const breadcrumbs = [<Link to="/" className={genericStyles.link}>Back to Home</Link>]

    useEffect(() => {
        if (params.id != undefined) {
            getPost(params.id)
                .then(post => setPost(post))
        }
    })
    if (params.id != undefined) {
        breadcrumbs.push(
            <Link to={`/posts/${post.id}`} className={genericStyles.link}>
                {post.title}
            </Link>);
    }

    return (
        <FormLayout
            title={params.id != undefined ? 'Edit Post' : 'Add Post'}
            breadcrumbs={breadcrumbs}
        >
            <div className={genericStyles.row}>
                <div className={[genericStyles.col_12].join(' ')}>
                    <form className={[styles.sing_in_box].join(' ')}>
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
                                    value={post.title}
                                    placeholder={' '}
                                    label={'Lesson number'}
                                    name={nameof<PostType>(p => p.title)}
                                    component='TextBox'
                                />
                            </div>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormElement
                                    type={'text'}
                                    value={post.title}
                                    placeholder={'filename.jpeg'}
                                    label={'Image'}
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
                                    placeholder={'Add your text'}
                                    label={'Description'}
                                    name={nameof<PostType>(p => p.text)}
                                    component='TextArea'
                                />
                            </div>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormElement
                                    type={'text'}
                                    value={post.text}
                                    placeholder={'Add your text'}
                                    label={'Text'}
                                    name={nameof<PostType>(p => p.text)}
                                    component='TextArea'
                                />
                            </div>
                        </div>
                        <div>
                            <a href="#" className={genericStyles.link}> Delete post</a>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormButton
                                    text="Cancel"
                                />
                            </div>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormButton
                                    text="Add post"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormLayout >
    )
}

export default AddPost