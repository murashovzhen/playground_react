import React from "react";
import styles from "./styles.module.scss";
import MainHeader from "./Main_header";

const Body = () => {

    return (
    <body className = { styles.body } >
        <MainHeader/>
    </body>
    )     
};

export default Body;
