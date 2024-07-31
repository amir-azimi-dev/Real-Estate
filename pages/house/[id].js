import React from 'react'
import { useRouter } from 'next/router'
import db from "@/database/db.json"
import Head from 'next/head'
import HouseDetails from '@/components/templates/singleHouse/HouseDetails'
import NotFound from '../404'

function House() {
    const route = useRouter()
    const houseId = route.query?.id;
    const houseData = db.houses?.find(house => house.id.toString() === houseId)

    return (
        <>
            {houseData ? (
                <>
                    <Head>
                        <title>{houseData}</title>
                        <meta name="author" content="Amir Azimi" />
                        <meta name="description" content="A NextJS practice application." />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <HouseDetails data={houseData} />
                </>
            ) : <NotFound />}
        </>

    )
}

export default House