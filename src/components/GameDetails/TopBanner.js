import React from 'react'

const TopBanner = () => {
    return (
        <div className="row no-padding not-home game-page video-game-theater" id="headerBanner">
            <div className="ti-page-header row clearfix">
                <div className="row ti-row">
                    <div className="limited-width">
                        <div className="text-center">
                            <img src="https://www.g2u.com/assets//img/ico-video-theater-2x.png" />
                        </div>
                        <h1>Video Game Truck</h1>
                        <p>Play the hottest games in one of our climate controlled mobile game theaters!</p>
                        <div className="text-center">
                            <a href="javascript:void(0);" className="ti-yellow-button green-button video-trigger" data-video="https://www.g2u.com/assets/video/g2u-video-game-truck.mp4"><i className="fa fa-lg fa-play-circle-o" aria-hidden="true" /> SEE IT IN ACTION!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner