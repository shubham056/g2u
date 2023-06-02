import React from 'react'
import Link from 'next/link'

const BottonNav = () => {
    return (
        <div className="row ti-orange-background" id="bottomNav">
            <div className="ti-content col-xs-12">
                <div className="row limited-width">
                    <div className="page-links col-md-9 col-sm-8 col-xs-12">
                        <ul className="page-link-columns">
                            <li className="ti-nav-content"><Link href="/our-games">Our Games</Link></li>
                            <li className="ti-nav-content"><Link href="/the-g2u-difference">The G2U Difference</Link></li>
                            <li className="ti-nav-content"><Link href="/corporate-events">Corporate Events</Link></li>
                        </ul>
                        <ul className="page-link-columns">
                            <li className="ti-nav-content"><Link href="/franchise-information">Own a Franchise</Link></li>
                            <li className="ti-nav-content"><Link href="/contactus">Contact Us</Link></li>
                            <li className="ti-nav-content"><Link href="/aboutus">About Us</Link></li>
                            <li className="ti-nav-content"><Link href="/faq">FAQ</Link></li>
                            <li className="ti-nav-content"><Link href="/sitemap">Site Map</Link></li>
                        </ul>
                    </div>
                    <div className="social-media-links col-md-3 col-sm-4 col-xs-12">
                        <Link href="https://www.facebook.com/Games2UEntertainment" target="_blank"><span className="ti-sprite facebook-icon" /></Link>
                        <Link href="https://twitter.com/Games2U" target="_blank"><span className="ti-sprite twitter-icon" /></Link>
                        <Link href="https://www.youtube.com/user/webmin007g2u" target="_blank"><span className="ti-sprite youtube-icon" /></Link>
                        <Link href="https://www.instagram.com/games2u_usa/?hl=en" target="_blank"><span className="ti-sprite instagram-icon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottonNav