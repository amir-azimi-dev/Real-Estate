import React, { useState, useEffect } from 'react'
import styles from "./pagination.module.css"

function Pagination({ houses, setVisibleHouses, activePageNumber, setActivePageNumber }) {
    const [pageCount, setPageCount] = useState(6)

    useEffect(() => {
        const pageItemCount = 2
        const pageCount = Math.ceil(houses.length / pageItemCount)
        setPageCount(pageCount)

        const firstIndex = pageItemCount * (activePageNumber - 1)
        const lastIndex = firstIndex + pageItemCount
        const visibleHouses = houses.slice(firstIndex, lastIndex)
        setVisibleHouses(visibleHouses)
    }, [houses, activePageNumber])

    return (
        <ul className={styles["pagination__list"]}>
            <li
                className={styles["pagination__item"]}
                onClick={() => (activePageNumber !== 1 && setActivePageNumber(activePageNumber - 1))}
            >
                <span>{'\u2192'}</span>
            </li>
            {Array(pageCount).fill("").map((_, index) => (
                <li
                    key={index}
                    className={`${styles["pagination__item"]} ${activePageNumber === index + 1 ? styles["active"] : null}`}
                    onClick={() => setActivePageNumber(index + 1)}
                >
                    <span>{index + 1}</span>
                </li>
            ))}
            <li
                className={styles["pagination__item"]}
                onClick={() => (activePageNumber !== pageCount && setActivePageNumber(activePageNumber + 1))}
            >
                <span>{'\u2190'}</span>
            </li>
        </ul>
    )
}

export default Pagination