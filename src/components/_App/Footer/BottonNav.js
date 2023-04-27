import React from 'react'

const BottonNav = () => {
    return (
        <div className="row ti-orange-background" id="bottomNav">
            <div className="ti-content col-xs-12">
                <div className="row limited-width">
                    <div className="page-links col-md-9 col-sm-8 col-xs-12">
                        <ul className="page-link-columns">
                            <li className="ti-nav-content"><a href="ourgames.html">Our Games</a></li>
                            <li className="ti-nav-content"><a href="theg2udifference.html">The G2U Difference</a></li>
                            <li className="ti-nav-content"><a href="corporateevents.html">Corporate Events</a></li>
                        </ul>
                        <ul className="page-link-columns">
                            <li className="ti-nav-content"><a href="franchiseinformation.html">Own a Franchise</a></li>
                            <li className="ti-nav-content"><a href="contactus.html">Contact Us</a></li>
                            <li className="ti-nav-content"><a href="aboutus.html">About Us</a></li>
                            <li className="ti-nav-content"><a href="faq.html">FAQ</a></li>
                            <li className="ti-nav-content"><a href="sitemap.html">Site Map</a></li>
                        </ul>
                    </div>
                    <div className="social-media-links col-md-3 col-sm-4 col-xs-12">
                        <a href="https://www.facebook.com/Games2UEntertainment" target="_blank"><span className="ti-sprite facebook-icon" /></a>
                        <a href="https://twitter.com/Games2U" target="_blank"><span className="ti-sprite twitter-icon" /></a>
                        <a href="https://www.youtube.com/user/webmin007g2u" target="_blank"><span className="ti-sprite youtube-icon" /></a>
                        <a href="https://www.instagram.com/games2u_usa/?hl=en" target="_blank"><span className="ti-sprite instagram-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottonNav