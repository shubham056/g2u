import React from 'react'

const index = () => {
    return (
        <div className="location-box no-zipcode-parent" id="locationBox">
            <div className="location-container">
                <div className="text-center">
                    <img src="assets/img/no-location-opt.png" className="no-location-icon" />
                </div>
                <h2 className="text-center no-border ti-dark-blue-text">Find a Location!</h2>
                <form
                    method="post"
                    //id="frmlocationBox"
                    //name="frmLocationBox"
                    //action="/"
                >
                    <div className="banner-zip-input-container">
                        <input type="hidden" id="franchiseNameLocBox" name="franchiseName" defaultValue />
                        <div className="ti-input">
                            <label htmlFor="locationBoxZip">Enter Your ZIP Code</label>
                            <input type="tel" name="locationBoxZip" id="locationBoxZip" />
                        </div>
                        <div>
                            <button id="btn" href="#" type='button' className="ti-yellow-button">GO!</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="location-information">
                <p className="ti-call-us">or call us at</p>
                <p className="telNumber"><strong><span className="telephone">1-800-71-</span><span className="ti-orange-text">GAMES</span></strong></p>
                <a className="view-game-selection" href="#gamesTheyLove">
                    <span className="ti-sprite yellow-chevron-down" /> View our game selection! <span className="ti-sprite yellow-chevron-down" />
                </a>
            </div>
        </div>
    )
}

export default index