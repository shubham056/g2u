import React from 'react'

const BottomFooter = () => {
    return (
        <div className="row no-padding no-margin" id="bottomFooter">
            <div className="ti-content limited-width">
                <div className="pull-left" id="bottomFooterNav">
                    <a href="termsofuse.html">Terms of Use</a>
                    <a href="privacypolicy.html">Privacy Policy</a>
                    <a href="cancelationpolicy.html">Our Cancelation Policy</a>
                    <a href="sitemap.html">Site Map</a>
                </div>
                <div className="pull-right" id="bottomFooterCopyright">
                    <span className="pull-right">© 2023 Games2U Entertainment, All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter