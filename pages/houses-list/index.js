import React, { useState, useEffect, useRef } from 'react'
import db from "@/database/db.json"
import HouseCard from '@/components/modules/HouseCard'
import styles from "@/styles/housesList.module.css"
import Pagination from '@/components/modules/Pagination/Pagination'

function HousesList() {
    const [filteredHouses, setFilteredHouses] = useState([])
    const [sortedHouses, setSortedHouses] = useState([])
    const [visibleHouses, setVisibleHouses] = useState([])
    const [activePageNumber, setActivePageNumber] = useState(1)
    const [searchValue, setSearchValue] = useState("")
    const [sortOption, setSortOption] = useState("-1")

    const containerRef = useRef()

    useEffect(() => {
        setFilteredHouses(db?.houses)
        setSortedHouses(db?.houses)
    }, [])

    useEffect(() => {
        setActivePageNumber(1)

        if (!searchValue) {
            return setFilteredHouses(db?.houses)
        }

        const filteredHouses = db.houses?.filter(house => {
            const regex = new RegExp(`${searchValue}`)
            return regex.test(house.title)
        })

        setFilteredHouses(filteredHouses)
    }, [searchValue])

    useEffect(() => {
        setActivePageNumber(1)

        if (!filteredHouses.length) {
            return setSortedHouses([])
        }

        switch (sortOption) {
            case "price": {
                const sortedHouses = [...filteredHouses].sort(((a, b) => a.price - b.price))
                return setSortedHouses(sortedHouses);
            }
            case "rooms": {
                const sortedHouses = [...filteredHouses].sort(((a, b) => a.roomCount - b.roomCount))
                return setSortedHouses(sortedHouses);
            }
            case "meterage": {
                const sortedHouses = [...filteredHouses].sort(((a, b) => a.meterage - b.meterage))
                return setSortedHouses(sortedHouses);
            }
            default: {
                console.log([...filteredHouses]);
                return setSortedHouses([...filteredHouses])
            }
        }
    }, [sortOption, filteredHouses])

    const changeActivePage = activePage => {
        setVisibleHouses(activePage)
        containerRef.current?.scrollIntoView({behavior: "smooth"})
    }

    return (
        <div ref={containerRef} className={styles["home-section"]} id="houses">
            <div className={styles["home-filter-search"]}>
                <div className={styles["home-filter"]}>
                    <select
                        value={sortOption}
                        onChange={event => setSortOption(event.target.value)}
                    >
                        <option value="-1">انتخاب کنید</option>
                        <option value="price">بر اساس قیمت</option>
                        <option value="rooms">بر اساس تعداد اتاق</option>
                        <option value="meterage">بر اساس اندازه</option>
                    </select>
                </div>
                <div className={styles["home-search"]}>
                    <input
                        type="text"
                        placeholder="جستجو کنید"
                        value={searchValue}
                        onChange={event => setSearchValue(event.target.value)}
                    />
                </div>
            </div>
            {sortedHouses?.length ? (
                <>
                    <div className="homes">
                        {visibleHouses.map(houseData => <HouseCard key={houseData.id} {...houseData} />)}
                    </div>
                    <Pagination houses={sortedHouses} setVisibleHouses={activePage => changeActivePage(activePage)} activePageNumber={activePageNumber} setActivePageNumber={setActivePageNumber} />
                </>
            ) : (
                <>
                    <h1>متاسفانه خانه‌ای یافت نشد.</h1>

                    <style jsx>{`
                        h1 {
                            grid-column: 2 / 12;
                            text-align: center;
                            margin: 5rem 1rem;
                            padding: 1rem;
                            background-color: #cdcdcd;
                        }
                        `}</style>
                </>
            )}
        </div>
    )
}

export default HousesList