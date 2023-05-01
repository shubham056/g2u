import React from 'react'
import Link from 'next/link'

const GamesList = ({ categoryData }) => {
    console.log("categoryData", categoryData)

    return (
        <>

            <div className="row no-padding limited-width" id="gamesWithIcons">
                <div className="row">
                    {(categoryData != undefined && categoryData.length > 0)
                        ?
                        categoryData.map(item => {
                            return (
                                <div className="col-md-3 col-sm-6 col-xs-12 col-ie-3">
                                    <div className="ti-inline-block home-icon">
                                        <Link href="/game/videogametruck">
                                            <img src={item.icon != '' ? item.icon : "assets/img/ico-video-game-theater-blue-2x.png"} />
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