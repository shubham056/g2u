import React from 'react'
import Link from 'next/link'
import { SwrUtils } from '@/utils/SwrUtils';

const GamesList = () => {
    let g2uZipCode = localStorage.getItem('g2u_zipcode') ? localStorage.getItem('g2u_zipcode') : '00000'; // get zipcode from local storage
    const apicallUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const { data: gamesData, isLoading, isError, mutate } = SwrUtils(`${apicallUrl}/games/${g2uZipCode}`)

    return (
        <>

            <div className="row no-padding limited-width" id="gamesWithIcons">
                <div className="row">
                    {(gamesData && gamesData.data?.games.categories != undefined && gamesData.data?.games.categories.length > 0)
                        ?
                        gamesData.data?.games.categories.map(item => {
                            return (
                                <div className="col-md-3 col-sm-6 col-xs-12 col-ie-3">
                                    <div className="ti-inline-block home-icon">
                                        <Link href="/game/videogametruck">
                                            <img src={item.icon_dark != '' ? item.icon_dark : "assets/img/ico-video-game-theater-blue-2x.png"} />
                                        </Link>
                                    </div>
                                    <div className="ti-inline-block home-game-name">
                                        <Link href="/game/videogametruck">
                                            <p>{item.category_name}</p>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })

                        : null

                    }
                </div>

            </div>
        </>

    )
}

export default GamesList