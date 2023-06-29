import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
const options = {
    loop: true,
    nav: true,
    startPosition: 0,
    navText:
        [
            '<div class="scroll-arrow left"></div>',
            '<div class="scroll-arrow right"></div>'
        ],
    dots: false,
    smartSpeed: 500,
    margin: 0,
    width: 0,
    autoplayHoverPause: true,
    autoplay: false,
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

const BrandLogo = ({ investors }) => {
    const [display, setDisplay] = useState(false);
    if (investors && investors.length > 0) {
        display ? '' : setDisplay(true)
    }

    return (
        <>
            {
                display
                    ?
                    <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                        {
                            investors && investors.length > 0
                                ?
                                investors.map(item => <div className="as-seen-img"><img src={item.logo} alt={item.investor_name} /></div>)
                                :
                                <div className="as-seen-img"> <p>No data found!</p></div>
                        }
                    </OwlCarousel>
                    :
                    null
            }
            {/* {
                investors && investors.length > 0
                    ?
                    investors.map(item => <div className="as-seen-img" key={item.id}><img src={item.logo} alt={item.investor_name} /></div>)
                    :
                    <div className="as-seen-img"> <p>No data found!</p></div>
            } */}

        </>

    )
}

export default BrandLogo