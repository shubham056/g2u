import React, { useState } from 'react'
import trimString from '@/utils/trimString'
import dynamic from 'next/dynamic';
import useGamesData from '@/states/stores/games-data';
import GamesCard from '@/components/GamesCard';
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
                            (!loading && games && games.categories.list && games?.affiliate != undefined && games.categories.list.length > 0)
                                ?
                                games?.categories.list.map(item => {
                                    const { id, slug, image, icon, category_name } = item
                                    return (
                                        <GamesCard
                                            key={id}
                                            dynamicClass={"col-ie-4 ti-box game-1"}
                                            id={id}
                                            link={games.affiliate.city.toLowerCase()}
                                            slug={slug}
                                            imgSrc={image}
                                            icon={icon}
                                            categoryName={category_name}
                                            caption={trimString(item.category_caption, 85)}

                                        />
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