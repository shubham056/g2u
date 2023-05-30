import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Header from '@/components/_App/Header';
import dynamic from 'next/dynamic';
import CommonSlider from '@/components/_App/Slider';
import GamesSlider from '@/components/_App/GamesSlider';
import TopBanner from '@/components/GameDetails/TopBanner';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import { useRouter } from 'next/router';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
import RequestInfo from '@/components/_App/RequestInfo';


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


const EventDetails = ({ eventDetails }) => {
    console.log("eventDetails#########!!!!!!!!!", eventDetails)
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
            <div className="modal" id="priceModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p>Rate quoted is for weekday, off-peak, zero-travel, multiple-hour events. Other rates may be higher.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>{/* /.modal-content */}
                </div>{/* /.modal-dialog */}
            </div>{/* /.modal */}
            <NextSeo {...SEO} />
            {/* <!-- top header and banner with mobile menu section start --> */}
            <div className="container-fluid">
                {/* <!-- header section start with mobile naviagtion  --> */}
                <Header />
                {/* <!-- header section end with mobile naviagtion  --> */}

                {eventDetails && <TopBanner
                    icon={eventDetails.icon}
                    title={eventDetails.title}
                    caption={eventDetails.sub_title}
                />}

            </div >
            {/* <!-- top header and banner with mobile menu section start --> */}

            {/* Get the Stats! include seven section start */}
            <div className="container-fluid" id="eventPage">

                <div className="row ti-row ti-blue-background games" id="">
                    <div className="limited-width">
                        <h2 className="">We've got the games they'll love!</h2>
                    </div>
                    <div className="row ti-row no-top-padding no-side-margin remove-overflow">
                        <div className="ti-slider-parents">

                            <GamesSlider />

                        </div>
                    </div>
                </div>
                <RequestInfo
                    content="Ready to host the event they'll never forget?"
                    classNameStyle="ti-light-blue-background"
                />
                <div className="row ti-row game-content">
                    <div className="limited-width">
                        <h2 className="orange-border ti-dark-blue-text">{eventDetails && eventDetails.title}</h2>
                        <div className="row">
                            <div className="col-md-12">
                                {eventDetails && <div dangerouslySetInnerHTML={{ __html: eventDetails.sub_title }}></div>}
                            </div>
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

export default EventDetails

export const getStaticPaths = async () => {
    // try {
    //     const payload = { url: `${apiBaseUrl}/categoty/get-all-slug`, method: 'GET' }
    //     let categories = await fetchApi(payload);
    //     console.log("datata", payload, categories)
    //     categories = categories.data.slug
    //     if (categories && categories.length > 0) {
    //         const slugs = categories.map(category => category.slug);
    //         const paths = slugs.map(slug => ({ params: { slug } }));
    //         console.log("path!!!!!", paths)
    //         return {
    //             paths,
    //             fallback: false
    //         };
    //     } else {
    //         console.log("else path")
    //         return { paths: [], fallback: false };
    //     }
    // } catch (error) {
    //     console.log("path errrr!!!",error)
    //     return { paths: [], fallback: false };
    // }

    return { paths: [], fallback: false };
};

export const getStaticProps = async ({ params: { slug } }) => {
    console.log("event slug", slug)

    let eventDetails = {
        // icon: slug,
        title: slug,
        sub_title: slug,

    }

    return {
        props: {
            eventDetails
        },
    }
    // try {
    //     const payload = { url: `${apiBaseUrl}/categoty/category-details/${slug}`, method: 'GET' }
    //     const categories = await fetchApi(payload);
    //     const categoriesData = categories.data
    //     if (categoriesData && categoriesData.eventDetails != undefined && categoriesData.eventDetails == '') {
    //         return {
    //             notFound: true
    //         };
    //     } else {
    //         const { eventDetails } = categoriesData
    //         return {
    //             props: {
    //                 eventDetails
    //             },
    //             revalidate: 10, // In seconds
    //         };
    //     }
    // } catch (error) {
    //     console.log('error in detail api call', error)
    //     return {
    //         notFound: true
    //     };
    // }

};


