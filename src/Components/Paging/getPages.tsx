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

        pages = getNumbers(1, currentPage >= pageCount - 1 ? pageCount : currentPage + 2)

        if (currentPage + 3 < pageCount) {
            pages.push('..')

            if (currentPage + 2 < pageCount) {
                pages.push(pageCount)
            }

            // 2
        } else if (currentPage >= 5 && currentPage <= pageCount - 4) {
            pages.push(
                1,
                '..',
                ...getNumbers(currentPage - 2, currentPage + 2),
                '..',
                pageCount
            )

            // 3
        } else  /*(currentPage > pageCount-4) все остальные стр*/ {
            pages.push(
                1,
                '..',
                ...getNumbers(currentPage - 2, pageCount)
            )

        }

    }
    return pages
}

export function PageNum() {
    const currentPage = 2
    return (
        <div>
            <h1>currentPage </h1>
            {
                getPages(100, 12, currentPage).map((item, i) => (
                    <span key={i} > {item} </span>))
            }
        </div>
    )
}