import React from 'react'
import Header from '../components/_App/Header';
import Link from 'next/link'

const Custom404 = () => {
    return (
        <>
            <div className="container-fluid">
                <Header />

                <div className="row no-padding not-home all-events-page" id="headerBanner">
                    <div className="ti-page-header row clearfix">
                        <div className="row ti-row">
                            <div className="limited-width">
                                <h1>404 Oops! Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className="container-fluid" id="contentParent">
                    <div className="row ti-row content-padding">
                        <div className="limited-width">
                            <div className="col-xs-12 default-container text-container">
                                <div className="col-sm-12 col-md-12">
                                    <h2>The Page you are looking for doesn't seem to exists. </h2>
                                    <p>&nbsp;</p>
                                    <p><Link href="/">Return to Games2U</Link></p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Custom404