import React, { useState } from 'react'
import Link from 'next/link'

const Header = ({ categoryData, affiliate }) => {
    const [isShownMenu, setIsShownMenu] = useState(false);
    const [topBarchangeLocation, setTopBarchangeLocation] = useState(false)

    return (
        <div id="navigation" className="clearfix">
            <div className="col-sm-4 ti-main-logo">
                <Link href="/"><img src="/assets/img/g2u-logo.png" /></Link>
            </div>
            <div className="col-md-8 col-sm-12">
                <div className="ti-underline-element clearfix hidden-sm hidden-xs">
                    <div className="col-sm-6 ti-location location-update-wrap" id="locationNav">
                        <span className="ti-sprite location-pin" />
                        <span className="selected-location">
                            <span id="navbarLocation"><strong /></span>

                            {
                                (affiliate == undefined || Object.keys(affiliate).length === 0 && affiliate.constructor === Object)
                                    ?
                                    <span className="ti-light-orange-text">(&nbsp;<a href="javascript:void(0);" className="ti-light-orange-text location-edit-link">Enter Zip Code</a>&nbsp;)</span>
                                    :
                                    <>
                                        <span class="selected-location" style={{ display: topBarchangeLocation ? 'none' : '' }}>
                                            <span id="navbarLocation"><strong>{affiliate.company_name} {topBarchangeLocation}</strong></span>
                                            <span class="ti-light-orange-text">(&nbsp;<a href="javascript:void(0);" class="ti-light-orange-text location-edit-link" onClick={() => setTopBarchangeLocation(true)} >change location</a>&nbsp;)</span>
                                        </span>

                                        <span className="update-location" style={{ display: topBarchangeLocation ? 'block' : 'none', margin: '-25px', paddingLeft: 40 }}>
                                            <form id="frmLocNav" name="frmLocNav" method="post" action="/">
                                                <span className="close-btn" onClick={() => setTopBarchangeLocation(false)} />
                                                <input type="hidden" id="franchiseNameNav" name="franchiseName" defaultValue />
                                                <div className="ti-input">
                                                    <input type="tel" id="headerZip" name="headerZip" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                                </div>
                                                <a className="ti-yellow-button">Go!</a>
                                            </form>
                                        </span>
                                    </>


                            }
                        </span>

                    </div>
                    <div className="col-sm-6 ti-align-right" id="headerPhone">Book Your Event Today! <strong><a href="tel:18007142637" className="ti-dark-blue-text">1‑800‑71‑<span className="ti-orange-text">GAMES</span></a></strong></div>
                </div>
                <div id="navLinks" className="clearfix">
                    <span id="mobileMenu"><span className="ti-sprite hamburger-icon" /><span className="hidden-xs">
                        MENU</span></span>
                    <a href="javascript:void(0);" className="visible-sm" id="mobileLocationIcon">
                        <span className="ti-sprite blue-location-pin" />
                    </a>
                    <a href="tel:18007142637" className="visible-xs visible-sm" id="mobilePhoneIcon">
                        <span className="ti-sprite blue-phone" />
                    </a>
                    <div className="links-container">
                        <div className="visible-sm visible-xs mobile-location location-update-wrap">
                            <span className="ti-sprite location-pin" />
                            <span className="selected-location">
                                <strong />
                                <span className="ti-light-orange-text">( <a href="javascript:void(0);" className="ti-light-orange-text location-edit-link">change location</a> )</span>
                            </span>
                            <span className="update-location" >
                                <form method="post" id="frmMobileZipNav" name="frmMobileZipNav" action="/">
                                    <input type="hidden" id="franchiseNameMobNav" name="franchiseName" defaultValue />
                                    <span className="close-btn" />
                                    <div className="ti-input">
                                        <input type="tel" name="mobileZipNav" id="mobileZipNav" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                    </div>
                                    <button id="btnMobileZip" className="ti-yellow-button">Go!</button>
                                </form>
                            </span>
                        </div>
                        <div className="no-padding" id="ourGamesNav" onMouseEnter={() => setIsShownMenu(true)} onMouseLeave={() => setIsShownMenu(false)}>
                            <a href="#footerContact" className="visible-sm visible-xs ti-blue-background">BOOK YOUR
                                EVENT</a>
                            <a href="/ourgames">OUR GAMES</a>
                            <div className="sub-menu" style={{ display: isShownMenu ? 'block' : 'none' }}>
                                <div className="ti-sub-head clearfix">
                                    <h2 className="no-border ti-dark-blue-text pull-left">Games They'll Love!</h2>
                                    <Link href="/ourgames" className="ti-orange-text pull-right ti-inline-block">View All
                                        Available Games</Link>
                                </div>
                                <div className="col-md-4 padding-top">
                                    {
                                        (categoryData != undefined && categoryData.length > 0)
                                            ?
                                            categoryData.map(item => {
                                                return (
                                                    <Link href={`/game/${item.category_name}`}><img src={item.icon != '' ? item.icon : "assets/img/ico-video-game-theater-blue-2x.png"} />{item.category_name}</Link>
                                                )
                                            })

                                            :
                                            null
                                    }
                                    {/* <Link href="/game/lasertag"><img src="/assets/img/ico-laser-tag-2x.png" />Laser
                                        Tag</Link>
                                    <Link href="/game/hamsterball"><img src="/assets/img/ico-hamster-ball-2x.png" />Hamster Ball</Link>
                                    <Link href="/game/hamsterballwracetrack"><img src="/assets/img/ico-hamster-ball-race-2x.png" />Hamster Ball with Race
                                        Track</Link>
                                    <Link href="/game/bumperballs"><img src="/assets/img/ico-bubble-ball-2x.png" />Bumper
                                        Balls</Link>
                                    <Link href="/game/bubblesoccer"><img src="/assets/img/ico-bubble-ball-2x.png" />Bubble Soccer</Link>
                                    <Link href="/game/boogerwars"><img src="/assets/img/ico-booger-wars-2x.png" />Booger
                                        Wars</Link>
                                    <Link href="/game/candycannon"><img src="/assets/img/ico-candy-cannon-2x.png" />Candy
                                        Cannon</Link> */}
                                </div>
                                {/* <div className="col-md-4">
                                    <Link href="/game/ulauncher"><img src="/assets/img/ico-u-launcher-2x.png" />U:launcher</Link>
                                    <Link href="/game/rockwall"><img src="/assets/img/ico-rock-wall-2x.png" />Rock
                                        Wall</Link>
                                    <Link href="/game/gyroscope.html"><img src="/assets/img/ico-gyroscope-2x.png" />Gyroscope</Link>
                                    <Link href="/game/foammachine"><img src="/assets/img/ico-foam-party-2x.png" />Foam
                                        Machine</Link>
                                    <Link href="/game/gaga"><img src="/assets/img/ico-gaga-2x.png" />Gaga</Link>
                                    <Link href="/game/bouncehouses"><img src="/assets/img/ico-bounce-house-2x.png" />Bounce Houses</Link>
                                    <Link href="/game/giantwaterslide"><img src="/assets/img/ico-slide-2x.png" />Giant
                                        Water Slide</Link>
                                    <Link href="/game/obstaclecourse"><img src="/assets/img/ico-obstacle-course-2x.png" />Obstacle Course</Link>
                                </div>
                                <div className="col-md-4">
                                    <Link href="/game/ubot"><img src="/assets/img/ico-ubot-2x.png" />U:bot</Link>
                                    <Link href="/game/beatthebucket"><img src="/assets/img/ico-beat-the-bucket-2x.png" />Beat the Bucket</Link>
                                    <Link href="/game/megascreen"><img src="/assets/img/ico-av-cart-2x.png" />Mega
                                        Screen</Link>
                                    <Link href="/game/videogamestation"><img src="/assets/img/ico-video-game-2x.png" />Video Game Station</Link>
                                    <Link href="/game/bungeejoust"><img src="/assets/img/ico-inflatable-bungee-joust-2x.png" />Bungee Joust</Link>
                                    <Link href="/game/socialphotobooth"><img src="/assets/img/ico-social-photo-booth-2x.png" />Social Photo Booth</Link>
                                    <Link href="/game/nerfwar"><img src="/assets/img/ico-nerf-battle-2x.png" />Nerf
                                        War</Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="no-padding" id="g2uExperience">
                            <Link href="/theg2u-difference">THE G2U DIFFERENCE</Link>
                        </div>
                        <div className="no-padding" id="corporateEventsNav">
                            <Link href="/corporate-events">CORPORATE EVENTS</Link>
                        </div>
                        <div className="no-padding" id="franchiseNav">
                            <Link href="/franchise-information">OWN A FRANCHISE</Link>
                        </div>
                        <div className="no-padding" id="freePartyNav">
                            <Link href="/yourparty-couldbefree">YOUR PARTY COULD BE FREE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header