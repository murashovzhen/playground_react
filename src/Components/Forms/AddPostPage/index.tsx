import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createPost, getPost } from '../../../services/postServise'
import { PostType } from '../../../types/post'
import { nameof } from 'ts-simple-nameof'
import FormLayout from '../FormLayout'
import genericStyles from '../../../App.module.scss'
import { Link } from 'react-router-dom'
import FormElement from '../FormElement'
import FormButton from '../FormButton'
import styles from './styles.module.scss'

type FormType = {
    title: string
    text: string
    discription: string
    lesson_number: string
}

const AddPostPage = () => {
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

    //******************************************************************** */
    const [form, setForm] = useState({} as FormType)
    const [image, setImage] = useState<File | string>('')

    const loadImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if (file) {
            setImage(file)
        }
    }

    const onChangeFormElement = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onPostCreatClick = async () => {
        const { title, text, discription, lesson_number } = form
        const token = await fetch(new Request('https://studapi.teachmeskills.by/auth/jwt/create/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "email": "woyewis704@cutefier.com",
                "password": "1311Qwqq!!"
            })
        }))
            .then(response => response.json())
            .then(result => result.access as string)


        createPost(title, text, discription, lesson_number, image, token)
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
                                    onChange={onChangeFormElement}
                                />
                            </div>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormElement
                                    type={'number'}
                                    value={post.title}
                                    placeholder={' '}
                                    label={'Lesson number'}
                                    name={nameof<PostType>(p => p.title)}
                                    component='TextBox'
                                    onChange={onChangeFormElement}
                                />
                            </div>
                        </div>
                        <div className={genericStyles.row}>
                            <div className={genericStyles.col_12}>
                                <FormElement
                                    type={'file'}
                                    value={post.title}
                                    placeholder={'filename.jpeg'}
                                    label={'Image'}
                                    name={nameof<PostType>(p => p.title)}
                                    component='TextBox'
                                    onChange={loadImageHandler}
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
                                    onChange={onChangeFormElement}
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
                                    onChange={onChangeFormElement}
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
                                    onClick={onPostCreatClick}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </FormLayout >
    )
}

export default AddPostPage