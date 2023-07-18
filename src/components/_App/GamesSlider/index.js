import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import useGamesData from '@/states/stores/games-data';
import GamesCard from '@/components/GamesCard';
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
    margin: 25,
    autoplayHoverPause: true,
    autoplay: false,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            autoplay: false,
        },
        576: {
            items: 2,
            margin: 10,
            autoplay: false,
        },
        768: {
            items: 2,
            margin: 10,
            autoplay: false,
        },
        1200: {
            items: 4,
            autoplay: false,
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
                    <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} stageOuterClass={"owl-stage-outer game-outer"}>
                        {
                            (!loading && games && games.categories.list && games?.affiliate != undefined && games.categories.list.length > 0)
                                ?
                                games?.categories.list.map(item => {
                                    const { id, slug, image, icon, category_name } = item
                                    return (
                                        <GamesCard
                                            key={id}
                                            dynamicClass={`col-ie-4 ti-box game-${id}`}
                                            link={games.affiliate.city.toLowerCase()}
                                            slug={slug}
                                            imgSrc={image}
                                            icon={icon}
                                            categoryName={category_name}
                                            caption={item.category_caption}

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