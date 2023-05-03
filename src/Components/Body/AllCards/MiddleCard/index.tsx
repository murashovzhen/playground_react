import React, { useEffect, useState } from 'react'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'
import styles from './styles.module.scss'
import CardDate from '../Date'
import CardFooter from '../CardFooter/index'


const MiddleCard = () => {
    const [post, setPost] = useState<PostType>({} as PostType)

    useEffect(() => {
        getPost('640f2d6af5d04dbff2c5ab3a')
            .then(post => setPost(post))
    })

    return (
        <div className={styles.middleCard}>
            <div>
                <img className={styles.middleCardImg} src={post.image} alt="MiddleCard" />
                <CardDate />
                <h3>{post.title}</h3>
            </div>
            <CardFooter />
        </div>
    )
};

export default MiddleCard;
