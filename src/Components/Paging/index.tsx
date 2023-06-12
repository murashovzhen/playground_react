import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPages } from './getPages'
import styles from "./styles.module.scss";
import globalStyles from "./../../App.module.scss";

type Props = {
    total: number, // общее кол-во стр
    itemPerPage: number, // кол-во постов на стр 
    currentPage: number, // текущая стр

    // endpoint:string или отдельный Pager для Search
}

export const Pager = ({ total, itemPerPage, currentPage }: Props) => {
    const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

    useEffect(() => {
        setPages(getPages(total, itemPerPage, currentPage))

    }, [total, itemPerPage, currentPage])

    return (
        <div className={styles.pagination}>
            {
                pages.map(item => (
                    item === '..'
                        ? (
                            <span >{item}</span>
                        ) : 
                        item ===  currentPage ?
                        (<span className={styles.current_page}>{item}</span>):
                        (
                            <Link to={'?page=' + item} className={[styles.pager, globalStyles.link].join(" ")}>{item}</Link>
                        )
                ))
            }
        </div>
    )
}
