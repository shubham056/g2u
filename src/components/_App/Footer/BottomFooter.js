import React from 'react'
import Link from 'next/link'

const BottomFooter = () => {
    return (
        <div className="row no-padding no-margin" id="bottomFooter">
            <div className="ti-content limited-width">
                <div className="pull-left" id="bottomFooterNav">
                    <Link href="termsofuse">Terms of Use</Link>
                    <Link href="privacypolicy">Privacy Policy</Link>
                    <Link href="cancelationpolicy">Our Cancelation Policy</Link>
                    <Link href="sitemap">Site Map</Link>
                </div>
                <div className="pull-right" id="bottomFooterCopyright">
                    <span className="pull-right">© 2023 Games2U Entertainment, All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter