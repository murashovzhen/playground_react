import { current } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPages } from './getPages'

type Props = {
    total: number,
    itemPerPage: number,
    currentPage: number,
}

export const Pager = ({ total, itemPerPage, currentPage }: Props) => {
    const [pages, setPages] = useState<ReturnType<typeof getPages>>([])

    useEffect(() => {
        setPages(getPages(total, itemPerPage, currentPage))

    }, [total, itemPerPage, currentPage])

    return (
        <div>
            {
                pages.map(item => (
                    item === ' '
                        ?
                        (
                            <span>{item}</span>
                        ) :
                        (
                            <Link to={'/posts' + item}>{item}</Link>
                        )
                ))
            }
        </div>
    )
}
