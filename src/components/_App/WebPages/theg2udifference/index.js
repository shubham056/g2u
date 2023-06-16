import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import GamesSlider from '../../GamesSlider';
import Link from 'next/link';
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

const Theg2udifferenceContent = ({ content, eventList }) => {
    console.log("event list", eventList)
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {/* content section start */}
            <div className="container-fluid" id="contentParent">
                <div className="row ti-row content-padding">
                    <div className="limited-width">
                        <div className="col-xs-12 default-container text-container">
                            <div className="col-sm-12 col-md-12">
                                {content && <div className="col-sm-12 col-md-12" dangerouslySetInnerHTML={{ __html: content }}></div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content section end */}
            {/* Perfect for Any Event! section start  */}
            <div className="container-fluid" id="allEventsParent">
                <div className="row ti-row ti-orange-background" id="anyEvent">
                    <div className="limited-width">
                        <h2>Perfect for Any Event!</h2>
                        <div className="row">
                            {
                                eventList && (eventList.length > 0)
                                    ?
                                    eventList.map(item => {
                                        return (
                                            <Link className="col-md-4 col-sm-6" href={`event/${item.slug}`} key={item.id}>
                                                <div><img src={`${item.icon}`} /></div>
                                                <div>{item.event_name}</div>
                                            </Link>
                                        )
                                    })
                                    :
                                    <div className='text-center'>
                                        <p>No records found!</p>
                                    </div>
                            }

                        </div>
                    </div>
                </div>
                <div className="row ti-dark-orange-background ti-row ti-small-banner no-margin">
                    <div className="col-xs-12" id="testimonialContent">
                        <h2><strong>Book Today</strong> and be the Hero of Your Next Event!</h2>
                        <a href="#footerContact" className="ti-yellow-button">Request Info</a>
                    </div>
                </div>
                <div className="row" id="allEventsSlider">
                    <h2 className="blue-border ti-dark-blue-text">Games They'll Love!</h2>
                    <div className="row ti-row no-padding no-side-margin remove-overflow">
                        <div className="ti-slider-parents">
                            <GamesSlider />
                        </div>
                    </div>
                </div>
                <div className="row ti-blue-background as-seen-banner mobile-wrap not-home">
                    <div className="limited-width">
                        <div className="scroll-arrow left" />
                        <div className="as-seen-images as-seen-mobile">
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" alt="brand-logo" /></div>
                        </div>
                        <div className="as-seen-images as-seen-desktop">
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" alt="brand-logo" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" alt="brand-logo" /></div>
                        </div>
                        <div className="scroll-arrow right" />
                    </div>
                </div>
            </div>
            {/* Perfect for Any Event! section end  */}

        </>
    )
}

export default Theg2udifferenceContent