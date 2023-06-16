import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPages } from './getPages'
import styles from './styles.module.scss';
import globalStyles from './../../App.module.scss';

type Props = {   
    total: number, // общее кол-во стр
    itemPerPage: number, // кол-во постов на стр 
    currentPage: number, // текущая стр 
    endpoint: string,
    searchTerm?: string
}

export const Pager = ({ total, itemPerPage, currentPage, searchTerm, endpoint }: Props) => {
    const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

    useEffect(() => {
        setPages(getPages(total, itemPerPage, currentPage))

    }, [total, itemPerPage, currentPage])

    return (
        <div className={styles.pagination}>
            {
                pages.map((item, i) => (
                    item === '..'
                        ? (
                            <span
                                key={i}
                                className={styles.current_page}>
                                {item}
                            </span>
                        ) : (
                            <Link
                                key={i}
                                to={`${endpoint}?page=${item}${searchTerm?`&search=${searchTerm}`:""}`}
                                className={[styles.pager, globalStyles.link].join(' ')}>
                                {item}
                            </Link>
                        )
                ))
            }
        </div>
    )
}
