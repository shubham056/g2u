import React from 'react'
import useGamesData from '@/states/stores/games-data';

const FindLocation = () => {
    const { zipcode, games, loading, error } = useGamesData();
    console.log('games=======find location', games, zipcode)

    return (
        <>
            {(!loading && games && games.affiliate != undefined)
                ?
                <div className="location-box">
                    <div className="location-container">
                        <div className="location-holder location-update-wrap" id="locationBox">
                            <div className="selected-location">
                                <div className="ti-inline-block">
                                    <img src={games && games?.affiliate.logo != '' ? games && games?.affiliate.logo : "https://www.g2u.com/assets/img/franchise/franchise-swa.png"} />
                                </div>
                                <div className="ti-inline-block location-holder-place">
                                    <h3> <span id="locationBoxName"><strong>{games && games?.affiliate.company_name}</strong></span></h3>
                                    <a href="#" className="ti-orange-text location-edit-link">( change location )</a>
                                </div>
                            </div>
                            <div className="update-location">
                                <form method="post" id="frmlocationBox" name="frmLocationBox" action="/">
                                    <span className="close-btn" />
                                    <input type="hidden" id="franchiseNameLocBox" name="franchiseName" defaultValue />
                                    <div className="ti-input">
                                        <input type="tel" name="locationBoxZip" id="locationBoxZip" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                    </div>
                                    <a className="ti-yellow-button location-button">Go!</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="location-information">
                        <h3>Locally Owned &amp; Operated</h3>
                        <p className="ti-orange-text">  1,700+ events since 2008</p>
                        <div>
                            <a href="#testimonialContent">
                                <span className="ti-sprite large-yellow-star" /><span className="ti-sprite large-yellow-star" /><span className="ti-sprite large-yellow-star" /><span className="ti-sprite large-yellow-star" /><span className="ti-sprite large-yellow-star" />
                            </a>
                        </div>
                        <div>
                            <a href="#footerContact" className="ti-yellow-button">Request Info</a>
                        </div>
                    </div>
                </div>

                :
                <div className="location-box no-zipcode-parent" id="locationBox" style={{ height: 370 }}>
                    {/* <div className="location-container">
                        <div className="text-center">
                            <img src="assets/img/no-location-opt.png" className="no-location-icon" />
                        </div>
                        <h2 className="text-center no-border ti-dark-blue-text">Find a Location!</h2>
                        <form
                            method="post"
                       
                        >
                            <div className="banner-zip-input-container">
                                <input type="hidden" id="franchiseNameLocBox" name="franchiseName" defaultValue />
                                <div className="ti-input">
                                    <input
                                        type="tel"
                                        name="locationBoxZip"
                                        id="locationBoxZip"
                                        placeholder="Enter Your ZIP Code"
                                    />
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
                    </div> */}
                </div>
            }

        </>

    )
}

export default FindLocation