import React from 'react'
import HouseCard from '@/components/modules/HouseCard'
import db from "@/database/db.json"

function Houses() {

    return (
        <div className="homes">
            {db.houses?.slice(0, 6).map(houseData => <HouseCard key={houseData.id} {...houseData} />)}
        </div>
    )
}

export default Houses