const getNumbers = (startPage: number, endPage: number): number[] => {  //массив стр по порядку 1 2 3
    const result: number[] = []
    for (let i = startPage; i < startPage + endPage; i++) {
        result.push(i)
    }
    return result
}

export const getPages = (
    postTotal: number,
    postPerPage: number,
    currentPage: number,
): (number | string)[] => {   //список ссылок 
    const pageCount = Math.ceil(postTotal / postPerPage)  //количество страниц

    let pages: (number | string)[] = []

    // 1
    if (currentPage <= 4) {
        // 1 -> 1 2 3 .. 42
        // 2 -> 1 2 3 4 .. 42
        // 3 -> 1 2 3 4 5 .. 42
        // 4 -> 1 2 3 4 5 6 .. 42
        pages = getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2)

        if (currentPage + 3 < pageCount) {
            pages.push('..')
        }
        if (currentPage + 2 < pageCount) {
            pages.push(pageCount)
        }

        // 2
    } else if (currentPage >= 5 && currentPage <= pageCount - 4) {
        //         5 -> 1 .. 3 4 5 6 7 .. 42
        //         6 -> 1 .. 4 5 6 7 8 .. 42
        //         7 -> 1 .. 5 6 7 8 9 .. 42
        // ...
        // 37 -> 1 .. 35 36 37 38 39 .. 42
        // 38 -> 1 .. 36 37 38 39 40 .. 42
        pages.push(
            1,
            '..',
            ...getNumbers(currentPage - 2, currentPage + 2),
            '..',
            pageCount
        )

        // 3
    } else  /*(currentPage > pageCount-4) все остальные стр*/ {
        // 39 -> 1 .. 37 38 39 40 41 42
        // 40 -> 1 .. 38 39 40 41 42
        // 41 -> 1 .. 39 40 41 42
        // 42 -> 1 .. 40 41 42
        pages.push(
            1,
            '..',
            ...getNumbers(currentPage - 2, pageCount)
        )
    }
    return pages
}

export function PageNum() {
    const currentPage = 2

    return (
        <div>
            <h1>currentPage </h1>
            {
                getPages(100, 12, currentPage).map((item, index) => (
                    <span key={index}>{item} </span>))
            }
        </div>
    )
}
