import React, { useState } from 'react'
import trimString from '@/utils/trimString'
import dynamic from 'next/dynamic';
import useGamesData from '@/states/stores/games-data';
import Link from 'next/link'


const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });

const options = {
    loop: true,
    nav: true,
    startPosition: 0,
    navText:
        [
            '<div class="ti-left-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-left"></span></div>',
            '<div class="ti-right-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-right"></span></div>'
        ],
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 2
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
    const { zipcode, games, loading, error } = useGamesData();

    const [display, setDisplay] = useState(false);
    if (!loading && games && games.categories.list && games.categories.list.length > 0) {
        display ? '' : setDisplay(true)
    }

    return (
        <>
            {
                display ?
                    <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                        {
                            (!loading && games && games.categories.list && games.categories.list.length > 0)
                                ?
                                games?.categories.map(item => {
                                    return (
                                        <div className="col-ie-4 ti-box game-1" data-original="true" key={`game-slider-${item.id}`}>
                                            <Link href={`/game/${item.slug}`}>
                                                <div className="box-heading video-game-theater" >
                                                    <img src={item.image != '' ? item.image : "/assets/img/ico-video-theater-2x.png"} height={"100%"} />
                                                </div>
                                                <div className="circle-img"><img src={item.icon != '' ? item.icon : "/assets/img/ico-video-theater-2x.png"} /></div>
                                                <h3>{item.category_name}</h3>
                                                <p>{trimString(item.category_caption, 85)}</p>
                                                <span className="explore-link">Explore {item.category_name} »</span>
                                            </Link>
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