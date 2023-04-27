import React from 'react'

const ZipCodeFormFooter = () => {
    return (
        <div className="row no-zipcode" id="mapAndContact">
            <div className="col-md-5 pull-right" id="footerContact">
                <h3>Find a Location to Book Your Event!</h3>
                <p>Call us today at
                    <strong><span className="ti-orange-text">1-800-71-GAMES</span></strong> or enter your ZIP Code below
                    to find a location near you.
                </p>
                <form method="post" id="frmFooterZip" name="frmFooterZip" action="/">
                    <input type="hidden" id="franchiseNameFooter" name="franchiseName" defaultValue />
                    <div className="ti-input col-xs-12">
                        <label htmlFor="footerZipcode">Enter Your ZIP Code</label>
                        <input type="tel" id="footerZipcode" />
                        <button id="btnFooter" className="ti-yellow-button pull-right">GO!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ZipCodeFormFooter