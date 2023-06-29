import React from 'react'

const TopBanner = ({ banner, icon, title, caption }) => {
    return (
        <div className="row no-padding not-home game-page video-game-theater" id="headerBanner">
            <div className="ti-page-header row clearfix">
                <div className="row ti-row">
                    <div className="limited-width">
                        <div className="text-center">
                            <img src={icon ? icon : "https://www.g2u.com/assets/img/ico-video-theater-2x.png"} />
                        </div>
                        <h1>{title}</h1>
                        <p>{caption}</p>
                        <div className="text-center">
                            <div class="text-center">
                                <a href="#footerContact" class="ti-yellow-button">Request Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner