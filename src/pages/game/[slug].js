import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import {
    getAllBlogPosts
} from '../../utils/api';
import Header from '@/components/_App/Header';
import RequestInfo from '@/components/_App/RequestInfo';
import dynamic from 'next/dynamic';
import CommonSlider from '@/components/_App/Slider';
import GamesSlider from '@/components/_App/GamesSlider';
import TopBanner from '@/components/GameDetails/TopBanner';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import { useRouter } from 'next/router';

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
    // margin: 30,
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
const gamesSliderOptions = {
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


const GamesDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log("slug", slug)
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setDisplay(true);
    }, [])

    const SEO = {
        title: "Game Truck Video Games Parties | #1 Rated from Games2U",
        description: "America's most trusted provider of video game trucks for birthday parties, school carnivals and fairs, summer camps, corporate team-building events and more!",
        canonical: "https://www.g2u.com",
        openGraph: {
            type: 'website',
            url: 'https://www.g2u.com/',
            title: "Game Truck Video Games Parties | #1 Rated from Games2U",
            description: "America's most trusted provider of video game trucks for birthday parties, school carnivals and fairs, summer camps, corporate team-building events and more!"
            // images: [
            //     {
            //       url: '/images/banner-two/banner_main.jpg',
            //       width: 800,
            //       height: 600,
            //       alt: 'Og Image Alt',
            //     },
            //     {
            //       url: '/images/banner-two/banner_main.jpg',
            //       width: 800,
            //       height: 600,
            //       alt: 'Og Image Alt 2',
            //     },
            //   ],
        },
        twitter: {
            handle: '@g2u',
            site: '@g2u',
            cardType: 'summary_large_image'
        },
    }

    return (
        <>
            <NextSeo {...SEO} />
            {/* <!-- top header and banner with mobile menu section start --> */}
            <div className="container-fluid">
                {/* <!-- header section start with mobile naviagtion  --> */}
                <Header />
                {/* <!-- header section end with mobile naviagtion  --> */}

                <TopBanner

                />

            </div >
            {/* <!-- top header and banner with mobile menu section start --> */}

            {/* Get the Stats! include seven section start */}
            <div className="container-fluid" id="gamePage">
                <div className="row ti-dark-orange-background ti-row ti-small-banner no-margin">
                    <div className="col-xs-12">
                        <h2>Ready to book the most epic video game truck party?</h2>
                        <a href="#footerContact" className="ti-yellow-button">Request Info</a>
                    </div>
                </div>
                <div className="row ti-row ti-orange-background ti-box-container">
                    <div className="limited-width">
                        <h2>Get the Stats! <p className="ti-white-text">Check out these stats to see if the Video Game Truck Party is a
                            great fit for your next event.</p>
                        </h2>
                        <div className="row ti-box-row">
                            <div className="ti-box">
                                <img src="../assets/img/ico-starting-price-2x.png" />
                                <div>
                                    <h3 className="text-uppercase">Starting Price</h3>
                                    <p className="text-sm">Enter a zip code to see pricing in your area</p>
                                    <form method="post" className="ti-box-form" id="frmStartPrice" name="frmStartPrice" action="/">
                                        <input type="hidden" id="franchiseNamePrix" name="franchiseNamePrix" defaultValue />
                                        <input type="hidden" id="pathInfo" name="pathInfo" defaultValue="/game/videogametruck.html" />
                                        <div className="ti-input">
                                            <input type="tel" name="startPriceZip" id="startPriceZip" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                        </div>
                                        <a id="btnStartPrice" className="ti-yellow-button price-button">Go!</a>
                                    </form>
                                </div>
                            </div>
                            <div className="ti-box-spacer" />
                            <div className="ti-box">
                                <img src="../assets/img/ico-ages-2x.png" />
                                <div>
                                    <h3 className="text-uppercase">Recommended Age Range</h3>
                                    <p><strong>6 &amp; Older</strong></p>
                                </div>
                            </div>
                            <div className="ti-box-spacer" />
                            <div className="ti-box">
                                <img src="../assets/img/ico-participants-2x.png" />
                                <div>
                                    <h3 className="text-uppercase">Number of Participants</h3>
                                    <p><strong>20+ players</strong> at a time!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ti-row no-padding no-side-margin remove-overflow" id="tiImageSlider">
                    <div className="ti-slider-parents ti-slider-gallery">
                        {
                            display ?
                                <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                                    <CommonSlider />
                                </OwlCarousel> : ''
                        }
                    </div>
                </div>
                <div className="row ti-row game-content">
                    <div className="limited-width">
                        <h2 className="orange-border ti-dark-blue-text">Laser Tag</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Laser Tag is an exciting combination of tag and hide &amp; seek with a little Star Trek thrown in for good measure.
                                    Players compete in teams to find and tag their opponents using high-tech lasers. Obstacles on the battlefield
                                    create opportunities to hide and ambush opponents. With a little bit of strategy, some quick wits (and even
                                    quicker reflexes) your team will emerge victorious. It's a blast for kids from 8 to 80, and an awesome way to
                                    boost office morale.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Laser Tag is just one of the exhilarating activities available when you book your event with Games2U. Since 2007
                                    we’ve entertained millions of kids, teenagers and grownups all over the world and created memories that will
                                    last a lifetime. Book your event today and find out why Games2U is America's most popular and most trusted
                                    provider of mobile entertainment!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ti-blue-gradient-background ti-row ti-small-banner no-margin">
                    <div className="col-xs-12">
                        <h2>Sound like a perfect fit for your group?</h2>
                        <a href="#footerContact" className="ti-yellow-button">Request Info</a>
                    </div>
                </div>
                <div className="row" id="recentlyViewed">
                    <div className="limited-width">
                        <h2 className="orange-border ti-dark-blue-text">You May Also Enjoy</h2>
                    </div>
                    <div className="row ti-row no-top-padding no-side-margin remove-overflow">
                        <div className="ti-slider-parents">
                            {
                                display ?
                                    <OwlCarousel className="clients-slides owl-carousel owl-theme " {...gamesSliderOptions} >
                                        <GamesSlider />
                                    </OwlCarousel> : ''
                            }

                        </div>
                    </div>
                </div>
                <div className="row ti-blue-background as-seen-banner mobile-wrap not-home">
                    <div className="limited-width">
                        <div className="scroll-arrow left" />
                        <div className="as-seen-images as-seen-mobile">
                            <div className="as-seen-img"><img src="../assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/entrepreneur-opt.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/entrepreneur-opt.png" /></div>
                        </div>
                        <div className="as-seen-images as-seen-desktop">
                            <div className="as-seen-img"><img src="../assets/img/sharktank-opt.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/rachel.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/wall-street-journal.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/inc.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fox.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/fortune.png" /></div>
                            <div className="as-seen-img"><img src="../assets/img/entrepreneur-opt.png" /></div>
                        </div>
                        <div className="scroll-arrow right" />
                    </div>
                </div>
            </div>
            {/* Get the Stats! include seven section end */}

        </>

    )
}

export default GamesDetails


