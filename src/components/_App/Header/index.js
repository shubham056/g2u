import React from 'react'

const index = () => {
    return (
        <div id="navigation" className="clearfix">
            <div className="col-sm-4 ti-main-logo">
                <a href="index.html"><img src="assets/img/g2u-logo.png" /></a>
            </div>
            <div className="col-md-8 col-sm-12">
                <div className="ti-underline-element clearfix hidden-sm hidden-xs">
                    <div className="col-sm-6 ti-location location-update-wrap" id="locationNav">
                        <span className="ti-sprite location-pin" />
                        <span className="selected-location">
                            <span id="navbarLocation"><strong /></span>
                            <span className="ti-light-orange-text">(&nbsp;<a href="javascript:void(0);" className="ti-light-orange-text location-edit-link">Enter Zip Code</a>&nbsp;)</span>
                        </span>
                        <span className="update-location">
                            <form id="frmLocNav" name="frmLocNav" method="post" action="/">
                                <span className="close-btn" />
                                <input type="hidden" id="franchiseNameNav" name="franchiseName" defaultValue />
                                <div className="ti-input">
                                    <input type="tel" id="headerZip" name="headerZip" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                </div>
                                <a className="ti-yellow-button">Go!</a>
                            </form>
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
                            <span className="update-location">
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
                        <div className="no-padding" id="ourGamesNav">
                            <a href="#footerContact" className="visible-sm visible-xs ti-blue-background">BOOK YOUR
                                EVENT</a>
                            <a href="ourgames.html">OUR GAMES</a>
                            <div className="sub-menu">
                                <div className="ti-sub-head clearfix">
                                    <h2 className="no-border ti-dark-blue-text pull-left">Games They'll Love!</h2>
                                    <a href="ourgames.html" className="ti-orange-text pull-right ti-inline-block">View All
                                        Available Games</a>
                                </div>
                                <div className="col-md-4 padding-top">
                                    <a href="game/videogametruck.html"><img src="assets/img/ico-video-theater-2x.png" />Video Game Truck</a>
                                    <a href="game/lasertag.html"><img src="assets/img/ico-laser-tag-2x.png" />Laser
                                        Tag</a>
                                    <a href="game/hamsterball.html"><img src="assets/img/ico-hamster-ball-2x.png" />Hamster Ball</a>
                                    <a href="game/hamsterballwracetrack.html"><img src="assets/img/ico-hamster-ball-race-2x.png" />Hamster Ball with Race
                                        Track</a>
                                    <a href="game/bumperballs.html"><img src="assets/img/ico-bubble-ball-2x.png" />Bumper
                                        Balls</a>
                                    <a href="game/bubblesoccer.html"><img src="assets/img/ico-bubble-ball-2x.png" />Bubble Soccer</a>
                                    <a href="game/boogerwars.html"><img src="assets/img/ico-booger-wars-2x.png" />Booger
                                        Wars</a>
                                    <a href="game/candycannon.html"><img src="assets/img/ico-candy-cannon-2x.png" />Candy
                                        Cannon</a>
                                </div>
                                <div className="col-md-4">
                                    <a href="game/ulauncher.html"><img src="assets/img/ico-u-launcher-2x.png" />U:launcher</a>
                                    <a href="game/rockwall.html"><img src="assets/img/ico-rock-wall-2x.png" />Rock
                                        Wall</a>
                                    <a href="game/gyroscope.html"><img src="assets/img/ico-gyroscope-2x.png" />Gyroscope</a>
                                    <a href="game/foammachine.html"><img src="assets/img/ico-foam-party-2x.png" />Foam
                                        Machine</a>
                                    <a href="game/gaga.html"><img src="assets/img/ico-gaga-2x.png" />Gaga</a>
                                    <a href="game/bouncehouses.html"><img src="assets/img/ico-bounce-house-2x.png" />Bounce Houses</a>
                                    <a href="game/giantwaterslide.html"><img src="assets/img/ico-slide-2x.png" />Giant
                                        Water Slide</a>
                                    <a href="game/obstaclecourse.html"><img src="assets/img/ico-obstacle-course-2x.png" />Obstacle Course</a>
                                </div>
                                <div className="col-md-4">
                                    <a href="game/ubot.html"><img src="assets/img/ico-ubot-2x.png" />U:bot</a>
                                    <a href="game/beatthebucket.html"><img src="assets/img/ico-beat-the-bucket-2x.png" />Beat the Bucket</a>
                                    <a href="game/megascreen.html"><img src="assets/img/ico-av-cart-2x.png" />Mega
                                        Screen</a>
                                    <a href="game/videogamestation.html"><img src="assets/img/ico-video-game-2x.png" />Video Game Station</a>
                                    <a href="game/bungeejoust.html"><img src="assets/img/ico-inflatable-bungee-joust-2x.png" />Bungee Joust</a>
                                    <a href="game/socialphotobooth.html"><img src="assets/img/ico-social-photo-booth-2x.png" />Social Photo Booth</a>
                                    <a href="game/nerfwar.html"><img src="assets/img/ico-nerf-battle-2x.png" />Nerf
                                        War</a>
                                </div>
                            </div>
                        </div>
                        <div className="no-padding" id="g2uExperience">
                            <a href="theg2udifference.html">THE G2U DIFFERENCE</a>
                        </div>
                        <div className="no-padding" id="corporateEventsNav">
                            <a href="corporateevents.html">CORPORATE EVENTS</a>
                        </div>
                        <div className="no-padding" id="franchiseNav">
                            <a href="franchiseinformation.html">OWN A FRANCHISE</a>
                        </div>
                        <div className="no-padding" id="freePartyNav">
                            <a href="yourpartycouldbefree.html">YOUR PARTY COULD BE FREE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index