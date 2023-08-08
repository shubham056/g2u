import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import useGamesData from '@/states/stores/games-data';
import Image from 'next/image';
import LoadMoreButton from '@/components/LoadMoreButton';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";


const GamesList = () => {
    const { zipcode, games, loading, error, updateGamesData } = useGamesData(); // ftech initail data  

    const [isLoading, setisLoading] = useState(false);
    const [loadingBtnText, setLoadingBtnText] = useState('Load More');
    //const [isDisablebtn, setisDisablebtn] = useState(false);
    const [suggestionDataPagination, setSuggestionDataPagination] = useState({});
    const [page, setPage] = useState(1);
    const [gamesData, setGamesData] = useState([]);


    // for complete game catalog
    useEffect(() => {
        if (!loading && games && games.categories.list.length > 0) {
            setGamesData(games.categories.list)
            setPage(games.categories.pagination.next)
        }
    }, [games])

    // for suggested games
    useEffect(() => {
        if (suggestionDataPagination && Object.keys(suggestionDataPagination).length > 0) {
            setSuggestionDataPagination(suggestionDataPagination.total)
            setSuggGamePage(suggestionDataPagination?.next ?? 1)
        }
    }, [suggestionDataPagination])

    // get more games data
    const getMoreGames = async () => {
        setisLoading(true)
        setLoadingBtnText('Loading...')
        const payload = { url: `${apiBaseUrl}/games/${zipcode}/${page}/24`, method: 'GET' }
        const response = await fetchApi(payload); // call event list API
        const responseData = response.data.games;
        //merging two arrays
        if (responseData && responseData.categories.list.length > 0) {
            setGamesData([...gamesData, ...responseData.categories.list])
            setPage(page + 1)
            setisLoading(false)
            setLoadingBtnText('Load More')
        } else {
            setGamesData(gamesData)
            setisLoading(false)
            setLoadingBtnText('Load More')
        }
    };

    return (
        <>

            <div className="row no-padding limited-width" id="gamesWithIcons">
                <div className="row">
                    {(!loading && gamesData && gamesData.length > 0)
                        ?
                        gamesData.map(item => {
                            return (
                                <div className="col-md-3 col-sm-6 col-xs-12 col-ie-3" key={`game-list-${item.id}`}>
                                    <div className="ti-inline-block home-icon">
                                        <Link href={`/game/${item.slug}`}>
                                            <Image src={item.icon_dark != '' ? item.icon_dark : "assets/img/ico-video-game-theater-blue-2x.png"} width={500} height={500} alt={item.slug? item.slug: 'game-image'} />
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
                <div className='row'>
                    {
                        (gamesData && games && (gamesData.length != games.categories.pagination.total))
                            ?
                            <LoadMoreButton
                                getMoreData={getMoreGames}
                                isLoading={isLoading}
                                loadingBtnText={loadingBtnText}
                            />
                            :
                            null
                    }
                </div>
            </div>
        </>

    )
}

export default GamesList