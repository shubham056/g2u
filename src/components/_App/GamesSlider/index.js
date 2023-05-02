import React, { useState } from 'react'
import trimString from '@/utils/trimString'
import dynamic from 'next/dynamic';
import { SwrUtils } from '@/utils/SwrUtils';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const options = {
    loop: true,
    nav: true,
    navText:
        [
            '<div class="ti-left-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-left"></span></div>',
            '<div class="ti-right-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-right"></span></div>'
        ],
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
};



const GamesSlider = () => {
    const [display, setDisplay] = useState(false);

    let g2uZipCode = localStorage.getItem('g2u_zipcode') ? localStorage.getItem('g2u_zipcode') : '00000'; // get zipcode from local storage
    const apicallUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const { data: gamesData, isLoading, isError, mutate } = SwrUtils(`${apicallUrl}/games/${g2uZipCode}`)
    if (gamesData && gamesData.data?.games != null) {
        if (gamesData.data.games !== "" && gamesData.data.games.affiliate) {
            display ? '' : setDisplay(true)
        }
    }

    return (
        <>
            {
                display ?
                    <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                        {

                            (gamesData != undefined && gamesData && gamesData.data?.games.categories != undefined && gamesData.data?.games.categories.length > 0)
                                ?
                                gamesData?.data.games.categories.map(item => {
                                    return (
                                        <div className="col-ie-4 ti-box game-1" data-original="true">
                                            <a href="game/videogametruck.html">
                                                <div className="box-heading video-game-theater" >
                                                    <img src={item.image != '' ? item.image : "/assets/img/ico-video-theater-2x.png"} height={"100%"} />
                                                </div>
                                                <div className="circle-img"><img src={item.icon != '' ? item.icon : "/assets/img/ico-video-theater-2x.png"} /></div>
                                                <h3>{item.category_name}</h3>
                                                <p>{trimString(item.category_caption, 88)}</p>
                                                <span className="explore-link">Explore {item.category_name} »</span>
                                            </a>
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                    </OwlCarousel> : ''
            }
        </>
    )
}

export default GamesSlider