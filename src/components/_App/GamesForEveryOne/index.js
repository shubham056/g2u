import React from 'react'

const index = () => {
    return (
        <div className="row something-for-everyone no-margin no-padding">
            <div className="col-xs-12 no-padding">
                <div className="row limited-width" id="somethingForEveryone">
                    <div className="col-sm-6 col-xs-9 col-ie-6 top-index">
                        <h2>Games for Everyone and Every Age!</h2>
                        <p className="ti-row-top">We've got the perfect game for the perfect event. From birthday parties
                            and school fundraisers to corporate parties and team-building events, we've got the games!
                        </p>
                        <a href="#footerContact" className="hidden-xs ti-yellow-button">Request Info</a>
                    </div>
                    <div className="col-xs-6 excited-kid-parent">
                        <div className="excited-kid" />
                    </div>
                    <div className="visible-xs col-xs-12 text-center"><a href="#footerContact" className="ti-yellow-button">Request Info</a></div>
                </div>
            </div>
        </div>
    )
}

export default index