import React, { useState } from 'react'
import dynamic from 'next/dynamic';
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
    margin: 0,
    width:0,
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
        <div className="ti-blue-background as-seen-banner clearfix">
            <div className="col-xs-12">
                <div className="scroll-arrow left" />
                <div className="as-seen-title">
                    <span>As Seen On:</span>
                    <div className="as-seen-truck"><img src="assets/img/truck-2x-528.png" alt="truck" /></div>
                </div>
                <div className="as-seen-images">
                    {/* {
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
                            ''
                    } */}
                    {
                        investors && investors.length > 0
                            ?
                            investors.map(item => <div className="as-seen-img" key={item.id}><img src={item.logo} alt={item.investor_name} /></div>)
                            :
                            <div className="as-seen-img"> <p>No data found!</p></div>
                    }
                    
                </div>
                <div className="scroll-arrow right" />
            </div>
        </div>
    )
}

export default BrandLogo