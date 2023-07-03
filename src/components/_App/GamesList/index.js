import React from 'react'
import Link from 'next/link'
import useGamesData from '@/states/stores/games-data';

const GamesList = () => {
    const { zipcode, games, loading, error, updateGamesData } = useGamesData();

    return (
        <>

            <div className="row no-padding limited-width" id="gamesWithIcons">
                <div className="row">
                    {(!loading && games && games.categories.list && games.categories.list.length > 0)
                        ?
                        games?.categories.map(item => {
                            return (
                                <div className="col-md-3 col-sm-6 col-xs-12 col-ie-3" key={`game-list-${item.id}`}>
                                    <div className="ti-inline-block home-icon">
                                        <Link href={`/game/${item.slug}`}>
                                            <img src={item.icon_dark != '' ? item.icon_dark : "assets/img/ico-video-game-theater-blue-2x.png"} />
                                        </Link>
                                    </div>
                                    <div className="ti-inline-block home-game-name">
                                        <Link href={`/game/${item.slug}`}>
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