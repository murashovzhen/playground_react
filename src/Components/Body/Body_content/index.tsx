import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { PostType } from '../../../Types/Post'
import CardFooter from '../AllCards/CardFooter';
import MiddleCard from '../AllCards/MiddleCard';
import SmallCard from '../AllCards/SmallCard';
import BigCard from '../AllCards/BigCard';


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

//***************************************************************************************** */
  const Card = (props: { post: PostType | undefined, style: string }) => {
    if (props.post == undefined) {
      return <div></div>;
    }

    const createDate = new Date(props.post.createDate).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className={[styles.card, props.style].join(' ')}>
        <div>
          <img className={styles.card_image} src={props.post.image} />
          <span className={styles.card_date}> {createDate} </span>
          <p className={styles.card_title}>{props.post.title}</p>
          <div className={styles.card_content}>{props.post.text}</div>
        </div>
        <CardFooter />
      </div>
    );
  };

//*********************************************************************** */
  
  return (
    <div>

      <div className={styles.bigAndSmallContent}>
        <BigCard />
        <div className={styles.smallAndSmallContent}>
          <SmallCard />
          <SmallCard />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard />
          <MiddleCard />
        </div>
        <div className={styles.smallAndSmallContent}>
          <SmallCard />
          <SmallCard />
        </div>
      </div>

      <div className={styles.middleAndSmallContent}>
        <div className={styles.middleAndMiddleContent} >
          <MiddleCard />
          <MiddleCard />
        </div>
        <div className={styles.smallAndSmallContent}>
          <SmallCard />
          <SmallCard />
        </div>
      </div>
      
    </div>
  )
}


export default BodyContent;
