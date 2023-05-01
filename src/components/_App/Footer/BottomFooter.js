import React from 'react'
import Link from 'next/link'

const BottomFooter = () => {
    return (
        <div className="row no-padding no-margin" id="bottomFooter">
            <div className="ti-content limited-width">
                <div className="pull-left" id="bottomFooterNav">
                    <Link href="/terms-of-use">Terms of Use</Link>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/cancelation-policy">Our Cancelation Policy</Link>
                    <Link href="/sitemap">Site Map</Link>
                </div>
                <div className="pull-right" id="bottomFooterCopyright">
                    <span className="pull-right">© 2023 Games2U Entertainment, All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default BottomFooter