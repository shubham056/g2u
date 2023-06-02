import React from 'react'

const TopBanner = ({ icon, title, caption }) => {
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
                            <a href="#" className="ti-yellow-button green-button video-trigger" data-video="https://www.g2u.com/assets/video/g2u-video-game-truck.mp4"><i className="fa fa-lg fa-play-circle-o" aria-hidden="true" /> SEE IT IN ACTION!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner