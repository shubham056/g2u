import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import GamesSlider from '../../GamesSlider';
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

const Theg2udifferenceContent = () => {
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
                                <p>At Games2U, we’re the largest provider of mobile entertainment in the world. That means that
                                    more people come to us than any other company when they need a game truck, laser tag,
                                    hamster balls, or any of our others great activities. Why? Well, we like to think it’s
                                    because we’re different. Different because we offer more activities than anyone else.
                                    Different because of our highly-trained and smiling game coaches. And different because
                                    we’re the only people in the world who want your event to be a success more than you do.
                                </p>
                                <p>&nbsp;</p>
                                <p>When you need your event to come off without a hitch, call us first and let us show you the
                                    difference.</p>
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
                            <a className="col-md-4 col-sm-6" href="event/kidsparties.html">
                                <div><img src="/assets/img/ico-kids-parties-2x.png" /></div>
                                <div>Kids Parties</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/schoolfundraisers.html">
                                <div><img src="/assets/img/ico-school-fundraiser-2x.png" /></div>
                                <div>School Fundraisers</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/teenparties.html">
                                <div><img src="/assets/img/ico-teen-parties-2x.png" /></div>
                                <div>Teen Parties</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/churchfundraisers.html">
                                <div><img src="/assets/img/ico-church-fundraisers-2x.png" /></div>
                                <div>Church Fundraisers</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/birthdayparties.html">
                                <div><img src="/assets/img/ico-birthday-parties-2x.png" /></div>
                                <div>Birthday Parties</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/charityevents.html">
                                <div><img src="/assets/img/ico-charity-2x.png" /></div>
                                <div>Charity Events</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/graduationparties.html">
                                <div><img src="/assets/img/ico-graduation-parties-2x.png" /></div>
                                <div>Graduation Parties</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/festivalsandcarnivals.html">
                                <div><img src="/assets/img/ico-festival-2x.png" /></div>
                                <div>Festivals &amp; Carnivals</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/summercamps.html">
                                <div><img src="/assets/img/ico-summer-camps-2x.png" /></div>
                                <div>Summer Camps</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/communityevents.html">
                                <div><img src="/assets/img/ico-community-2x.png" /></div>
                                <div>Community Events</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/companyparties.html">
                                <div><img src="/assets/img/ico-company-parties-2x.png" /></div>
                                <div>Company Parties</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/barmitzvahsbatmitzvahs.html">
                                <div><img src="/assets/img/ico-mitzvahs-2x.png" /></div>
                                <div>Bar &amp; Bat Mitzvahs</div>
                            </a>
                            <a className="col-md-4 col-sm-6" href="event/customeremployeeappreciation.html">
                                <div><img src="/assets/img/ico-appreciation-2x.png" /></div>
                                <div>Customer &amp; Employee Appreciation</div>
                            </a>
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
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" /></div>
                        </div>
                        <div className="as-seen-images as-seen-desktop">
                            <div className="as-seen-img"><img src="/assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="/assets/img/entrepreneur-opt.png" /></div>
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