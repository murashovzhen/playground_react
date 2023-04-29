import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { PostType } from '../../../Types/Post'
import CardFooter from '../AllCards/CardFooter/index'

const BodyContent = () => {
  const [posts, setPosts] = useState<PostType[]>();

  const getApiData = async () => {
    const data = await (await fetch(
      "https://mockside.vercel.app/api/posts"
    )).json();

    setPosts(data.items);
  };

  useEffect(() => {
    getApiData();
  }, []);


 

  const Card = (props: { post: PostType | undefined, style : string }) => {
    if(props.post == undefined){
      return <div></div>;
    }
    
    const createdAt = new Date(props.post.createdAt).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <div className={[styles.card, props.style].join(' ')}>
        <img className={styles.card_image} src={props.post.image} />
        <span className={styles.card_date}> {createdAt} </span>
        <p className={styles.card_title}>{props.post.title}</p>
        <div className={styles.card_content}>{props.post.text}</div>
        <CardFooter /> 
      </div>
    );
  };


  return (
    <div>
      <div className={styles.card_row}>
        <div className={styles.card_col_66}>
            <Card post={posts && posts[0]} style={styles.big_card}/>     
        </div>   
        <div className={styles.card_col_33}>
            <Card post={posts && posts[1]} style={styles.small_card}/> 
            <Card post={posts && posts[2]} style={styles.small_card}/>
        </div>
      </div>
      <div className={styles.card_row}>
        <div className={styles.card_col_33}>
            <Card post={posts && posts[3]} style={styles.middle_card}/>     
        </div>   
        <div className={styles.card_col_33}>
            <Card post={posts && posts[4]} style={styles.middle_card}/>     
        </div>   
        <div className={styles.card_col_33}>
            <Card post={posts && posts[5]} style={styles.small_card}/> 
            <Card post={posts && posts[6]} style={styles.small_card}/>
        </div>
      </div>
      <div className={styles.card_row}>
        <div className={styles.card_col_33}>
            <Card post={posts && posts[7]} style={styles.middle_card}/>     
        </div>   
        <div className={styles.card_col_33}>
            <Card post={posts && posts[8]} style={styles.middle_card}/>     
        </div>   
        <div className={styles.card_col_33}>
            <Card post={posts && posts[9]} style={styles.small_card}/> 
            <Card post={posts && posts[10]} style={styles.small_card}/>
        </div>
      </div>  
    </div>
  )
}

export default BodyContent;
