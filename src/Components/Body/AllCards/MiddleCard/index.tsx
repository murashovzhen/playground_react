import React, { useEffect, useState } from 'react'
import { PostType } from '../../../../Types/Post'
import { getPost } from '../../../../Services/PostServise'
import styles from './styles.module.scss'
import CardDate from '../Date'
import CardFooter from '../CardFooter/index'
import { Link } from 'react-router-dom'


const MiddleCard = (props: { post: PostType | undefined }) => {
    if (props.post == undefined) {
        return <div></div>;
    }

    return (
        <div className={styles.middleCard}>
            <div>
                <img className={styles.middleCardImg} src={props.post.image} alt="MiddleCard" />
                <CardDate />
                <Link to={`/posts/${props.post.id}`}>
                    <h3>{props.post.title}</h3>
                </Link>
            </div>
            <CardFooter />
        </div>
    )
};

export default MiddleCard;
