import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const sitemap = () => {
    const SEO = {
        title: "Site Map | Games2U Mobile Entertainment",
        description: "View the site map for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
        canonical: "https://www.g2u.com/sitemap",
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
                                    <li><a href="https://www.g2u.com/"><b>Games2U Mobile Entertainment</b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/game/videogametruck.html">Video Game Trucks</a></li>
                                                    <li><a href="https://www.g2u.com/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/game/hamsterball.html">Human Hamster Balls</a></li>
                                                    <li><a href="https://www.g2u.com/game/hamsterballwracetrack.html">Hamster Balls with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/game/bumperballs.html">Bumper Balls</a></li>
                                                    <li><a href="https://www.g2u.com/game/bubblesoccer.html">Bubble Soccer</a></li>
                                                    <li><a href="https://www.g2u.com/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/game/foammachine.html">Foam Machine Parties</a></li>
                                                    <li><a href="https://www.g2u.com/game/bouncehouses.html">Bounce Houses</a></li>
                                                    <li><a href="https://www.g2u.com/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/game/socialphotobooth.html">Photo Booths</a></li>
                                                    <li><a href="https://www.g2u.com/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/game/giantwaterslide.html">Giant Water Slide</a></li>
                                                    <li><a href="https://www.g2u.com/game/obstaclecourse.html">Obstacle Course</a></li>
                                                    <li><a href="https://www.g2u.com/game/bungeejoust.html">Bungee Joust</a></li>
                                                    <li><a href="https://www.g2u.com/game/rockwall.html">Rock Wall</a></li>
                                                    <li><a href="https://www.g2u.com/game/gyroscope.html">Gyroscope</a></li>
                                                    <li><a href="https://www.g2u.com/game/gaga.html">Gaga</a></li>
                                                    <li><a href="https://www.g2u.com/game/ubot.html">U:bot</a></li>
                                                    <li><a href="https://www.g2u.com/game/beatthebucket.html">Beat the Bucket</a></li>
                                                    <li><a href="https://www.g2u.com/game/megascreen.html">Mega Screen</a></li>
                                                    <li><a href="https://www.g2u.com/game/videogamestation.html">Video Game Station</a></li>
                                                    <li><a href="https://www.g2u.com/game/nerfwar.html">Nerf War</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/corporateevents.html">Corporate Events</a></li>
                                            <li><a href="https://www.g2u.com/aboutus.html">About Us</a></li>
                                            <li><a href="https://www.g2u.com/contactus.html">Contact Us</a></li>
                                            <li><a href="https://www.g2u.com/faq.html">Frequently Asked Questions</a></li>
                                            <li><a href="https://www.g2u.com/franchiseinformation.html">Own a Franchise</a></li>
                                            <li><a href="https://www.g2u.com/termsofuse.html">Terms of Use</a></li>
                                            <li><a href="https://www.g2u.com/privacypolicy.html">Privacy Policy</a></li>
                                            <li><a href="https://www.g2u.com/cancelationpolicy.html">Our Cancelation Policy</a></li>
                                            <li><a href="https://www.g2u.com/yourpartycouldbefree.html">Your Party Could be Free!</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <br /><br />
                                <ul className="sitemap">
                                    <li><a href="https://www.g2u.com/austintexas.html"><b>Games2U Austin, Texas</b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/austintexas/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/austintexas/game/videogametruck.html">Video Game Truck</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/hamsterball.html">Hamster Ball</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/hamsterballwracetrack.html">Hamster Ball with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/bumperballs.html">Bumper Balls</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/bubblesoccer.html">Bubble Soccer</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/foammachine.html">Foam Machine</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/bouncehouses.html">Bounce Houses</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/socialphotobooth.html">Social Photo Booth</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/bungeejoust.html">Bungee Joust</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/gaga.html">Gaga</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/beatthebucket.html">Beat the Bucket</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/nerfwar.html">Nerf War</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/game/watertag.html">Water Tag</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/austintexas/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/austintexas/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/austintexas/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/austintexas/corporateevents.html">Corporate Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.g2u.com/dallastexas.html"><b>Games2U Dallas, TX </b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/dallastexas/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/dallastexas/game/videogametruck.html">Video Game Truck</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/hamsterball.html">Hamster Ball</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/hamsterballwracetrack.html">Hamster Ball with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/bumperballs.html">Bumper Balls</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/foammachine.html">Foam Machine</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/socialphotobooth.html">Social Photo Booth</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/gaga.html">Gaga</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/beatthebucket.html">Beat the Bucket</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/game/nerfwar.html">Nerf War</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/dallastexas/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/dallastexas/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dallastexas/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/dallastexas/corporateevents.html">Corporate Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia.html"><b>Games2U DC, Maryland, Virginia </b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/videogametruck.html">Video Game Truck</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/hamsterball.html">Hamster Ball</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/hamsterballwracetrack.html">Hamster Ball with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bumperballs.html">Bumper Balls</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bubblesoccer.html">Bubble Soccer</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/foammachine.html">Foam Machine</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/bouncehouses.html">Bounce Houses</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/game/gaga.html">Gaga</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/dcmarylandnorthernvirginia/corporateevents.html">Corporate Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.g2u.com/sanantoniotexas.html"><b>Games2U San Antonio, TX</b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/sanantoniotexas/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/videogametruck.html">Video Game Truck</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/hamsterballwracetrack.html">Hamster Ball with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/foammachine.html">Foam Machine</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/bouncehouses.html">Bounce Houses</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/giantwaterslide.html">Giant Water Slide</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/obstaclecourse.html">Obstacle Course</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/bungeejoust.html">Bungee Joust</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/rockwall.html">Rock Wall</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/gaga.html">Gaga</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/beatthebucket.html">Beat the Bucket</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/game/videogamestation.html">Video Game Station</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/sanantoniotexas/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/sanantoniotexas/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/sanantoniotexas/corporateevents.html">Corporate Events</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://www.g2u.com/seattlewashington.html"><b>Games2U Seattle, WA</b></a>
                                        <br /><br />
                                        <ul className="sitemap">
                                            <li><a href="https://www.g2u.com/seattlewashington/ourgames.html">Our Games</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/videogametruck.html">Video Game Truck</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/lasertag.html">Laser Tag</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/hamsterball.html">Hamster Ball</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/hamsterballwracetrack.html">Hamster Ball with Race Track</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/bubblesoccer.html">Bubble Soccer</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/boogerwars.html">Booger Wars</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/foammachine.html">Foam Machine</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/candycannon.html">Candy Cannon</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/ulauncher.html">U:launcher</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/beatthebucket.html">Beat the Bucket</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/megascreen.html">Mega Screen</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/game/videogamestation.html">Video Game Station</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/seattlewashington/theg2udifference.html">The Games2U Difference</a>
                                                <br /><br />
                                                <ul className="sitemap">
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/kidsparties.html">Kid's Parties</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/teenparties.html">Teen Parties</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/birthdayparties.html">Birthday Parties</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/graduationparties.html">Graduation Parties</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/barmitzvahsbatmitzvahs.html">Bar and Bat Mitzvahs</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/festivalsandcarnivals.html">Festivals and Carnivals</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/summercamps.html">Summer Camps</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/communityevents.html">Community Events</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/schoolfundraisers.html">School Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/churchfundraisers.html">Church Fundraisers</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/charityevents.html">Charity Events</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/companyparties.html">Company Parties</a></li>
                                                    <li><a href="https://www.g2u.com/seattlewashington/event/customeremployeeappreciation.html">Customer Appreciation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="https://www.g2u.com/seattlewashington/corporateevents.html">Corporate Events</a></li>
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