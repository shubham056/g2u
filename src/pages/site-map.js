import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const sitemap = () => {
    const SEO = {
        title: "Site Map | Games2U Mobile Entertainment",
        description: "View the site map for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
        canonical: "https://www.g2u.com/site-map",
        openGraph: {
            type: 'website',
            title: 'Site Map | Games2U Mobile Entertainment',
            description: "View the site map for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
            url: 'https://www.g2u.com',
            // images: [
            //   {
            //     url: `${assetsURL}${metaImage}`,
            //     width: 800,
            //     height: 600,
            //     alt: 'Og Image Alt',
            //   }
            // ],
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

                <div className="row no-padding not-home all-events-page" id="headerBanner">
                    <div className="ti-page-header row clearfix">
                        <div className="row ti-row">
                            <div className="limited-width">
                                <h1>Site Map</h1>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
            {/* <!-- top header and banner with mobile menu section start --> */}

            {/* content section start */}

            <div className="container-fluid" id="contentParent">
                <div className="row ti-row content-padding">
                    <div className="limited-width">
                        <div className="col-xs-12 default-container text-container">
                            <div className="col-sm-12 col-md-12">
                                <ul className="sitemap">
                                    <li><Link href="https://www.g2u.com/"><b>Games2U Mobile Entertainment</b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/game/videogametruck">Video Game Trucks</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/hamsterball">Human Hamster Balls</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/hamsterballwracetrack">Hamster Balls with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/bumperballs">Bumper Balls</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/bubblesoccer">Bubble Soccer</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/foammachine">Foam Machine Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/bouncehouses">Bounce Houses</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/socialphotobooth">Photo Booths</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/giantwaterslide">Giant Water Slide</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/obstaclecourse">Obstacle Course</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/bungeejoust">Bungee Joust</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/rockwall">Rock Wall</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/gyroscope">Gyroscope</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/gaga">Gaga</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/ubot">U:bot</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/beatthebucket">Beat the Bucket</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/megascreen">Mega Screen</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/videogamestation">Video Game Station</Link></li>
                                                    <li><Link href="https://www.g2u.com/game/nerfwar">Nerf War</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/corporateevents">Corporate Events</Link></li>
                                            <li><Link href="https://www.g2u.com/about-us">About Us</Link></li>
                                            <li><Link href="https://www.g2u.com/contact-us">Contact Us</Link></li>
                                            <li><Link href="https://www.g2u.com/faq">Frequently Asked Questions</Link></li>
                                            <li><Link href="https://www.g2u.com/franchiseinformation">Own a Franchise</Link></li>
                                            <li><Link href="https://www.g2u.com/terms-of-use">Terms of Use</Link></li>
                                            <li><Link href="https://www.g2u.com/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link href="https://www.g2u.com/cancelation-policy">Our Cancelation Policy</Link></li>
                                            <li><Link href="https://www.g2u.com/yourpartycouldbefree">Your Party Could be Free!</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <br /><br />
                                <ul className="sitemap">
                                    <li><Link href="https://www.g2u.com/austintexas"><b>Games2U Austin, Texas</b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/austintexas/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/austintexas/game/videogametruck">Video Game Truck</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/hamsterball">Hamster Ball</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/hamsterballwracetrack">Hamster Ball with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/bumperballs">Bumper Balls</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/bubblesoccer">Bubble Soccer</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/foammachine">Foam Machine</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/bouncehouses">Bounce Houses</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/socialphotobooth">Social Photo Booth</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/bungeejoust">Bungee Joust</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/gaga">Gaga</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/beatthebucket">Beat the Bucket</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/nerfwar">Nerf War</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/game/watertag">Water Tag</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/austintexas/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/austintexas/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/austintexas/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/austintexas/corporateevents">Corporate Events</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="https://www.g2u.com/dallastexas"><b>Games2U Dallas, TX </b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/dallastexas/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/videogametruck">Video Game Truck</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/hamsterball">Hamster Ball</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/hamsterballwracetrack">Hamster Ball with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/bumperballs">Bumper Balls</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/foammachine">Foam Machine</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/socialphotobooth">Social Photo Booth</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/gaga">Gaga</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/beatthebucket">Beat the Bucket</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/game/nerfwar">Nerf War</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/dallastexas/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dallastexas/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/dallastexas/corporateevents">Corporate Events</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia"><b>Games2U DC, Maryland, Virginia </b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/videogametruck">Video Game Truck</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/hamsterball">Hamster Ball</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/hamsterballwracetrack">Hamster Ball with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bumperballs">Bumper Balls</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bubblesoccer">Bubble Soccer</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/foammachine">Foam Machine</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bouncehouses">Bounce Houses</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/game/gaga">Gaga</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/dcmarylandnorthernvirginia/corporateevents">Corporate Events</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="https://www.g2u.com/sanantoniotexas"><b>Games2U San Antonio, TX</b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/sanantoniotexas/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/videogametruck">Video Game Truck</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/hamsterballwracetrack">Hamster Ball with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/foammachine">Foam Machine</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/bouncehouses">Bounce Houses</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/giantwaterslide">Giant Water Slide</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/obstaclecourse">Obstacle Course</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/bungeejoust">Bungee Joust</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/rockwall">Rock Wall</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/gaga">Gaga</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/beatthebucket">Beat the Bucket</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/game/videogamestation">Video Game Station</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/sanantoniotexas/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/sanantoniotexas/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/sanantoniotexas/corporateevents">Corporate Events</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="https://www.g2u.com/seattlewashington"><b>Games2U Seattle, WA</b></Link>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><Link href="https://www.g2u.com/seattlewashington/ourgames">Our Games</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/videogametruck">Video Game Truck</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/lasertag">Laser Tag</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/hamsterball">Hamster Ball</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/hamsterballwracetrack">Hamster Ball with Race Track</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/bubblesoccer">Bubble Soccer</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/boogerwars">Booger Wars</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/foammachine">Foam Machine</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/candycannon">Candy Cannon</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/ulauncher">U:launcher</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/beatthebucket">Beat the Bucket</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/megascreen">Mega Screen</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/game/videogamestation">Video Game Station</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/seattlewashington/theg2udifference">The Games2U Difference</Link>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/kidsparties">Kid's Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/teenparties">Teen Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/birthdayparties">Birthday Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/graduationparties">Graduation Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/barmitzvahsbatmitzvahs">Bar and Bat Mitzvahs</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/festivalsandcarnivals">Festivals and Carnivals</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/summercamps">Summer Camps</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/communityevents">Community Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/schoolfundraisers">School Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/churchfundraisers">Church Fundraisers</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/charityevents">Charity Events</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/companyparties">Company Parties</Link></li>
                                                    <li><Link href="https://www.g2u.com/seattlewashington/event/customeremployeeappreciation">Customer Appreciation</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="https://www.g2u.com/seattlewashington/corporateevents">Corporate Events</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* content section end */}
        </>)
}

export default sitemap