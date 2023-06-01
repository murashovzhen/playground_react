import React from 'react'
import styles from "./styles.module.scss"

type Props = {
    text: string
};

const HeaderTitle = (props: Props) => {

    return (
        <h1 className={styles.headerTitle}>
            {props.text}
        </h1>
    ) 
};

export default HeaderTitle
