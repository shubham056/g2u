import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const cancelationpolicy = () => {
    const SEO = {
        title: "Game Trucks, Laser Tag, Hamster Ball Parties from Games2U",
        description: "America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience theyâ€™ll never forget!",
        canonical: "https://www.g2u.com/cancelationpolicy",
        openGraph: {
            type: 'website',
            title: 'Game Trucks, Laser Tag, Hamster Ball Parties from Games2U',
            description: "America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience theyâ€™ll never forget!",
            url: 'https://www.g2u.com',
            // images: [
            //   {
            //     url: `${assetsURL}${metaImage}`,
            //     width: 800,
            //     height: 600,
            //     alt: 'Og Image Alt',
            //   }
            // ],
        },
        twitter: {
            handle: '@g2u',
            site: '@g2u',
            cardType: 'summary_large_image'
        },
    }
    return (
        <>
            <NextSeo {...SEO} />
            {/* <!-- top header and banner with mobile menu section start --> */}
            <div className="container-fluid">
                {/* <!-- header section start with mobile naviagtion  --> */}
                <Header />
                {/* <!-- header section end with mobile naviagtion  --> */}

                <div className="row no-padding not-home all-events-page" id="headerBanner">
                    <div className="ti-page-header row clearfix">
                        <div className="row ti-row">
                            <div className="limited-width">
                                <h1>Cancellation Policy</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            {/* <!-- top header and banner with mobile menu section start --> */}

            {/* content section start */}
            <div className="container-fluid" id="contentParent">
                <div className="row ti-row content-padding">
                    <div className="limited-width">
                        <div className="col-xs-12 default-container text-container">
                            <div className="col-sm-12 col-md-12">
                                <h2>Games2U Cancellation Policy</h2>
                                <p>Games2U events happen rain or shine. Events may only be cancelled or rescheduled as follows:</p>
                                <p>&nbsp;</p>
                                <p><b>Extreme Weather:</b> In the event of extreme weather that, at our sole discretion, we determine may interfere with a scheduled activity, Games2U reserves the right to substitute an alternate activity of equal or greater value. In the event of weather that we believe may put your participants, our employees, or our equipment at risk, we reserve the right to cancel an event and provide a full refund.</p>
                                <p>&nbsp;</p>
                                <p><b>Acts of God:</b> In the event that Games2U is forced to cancel a scheduled activity due to an Act of God, natural or man-made disaster, or other unforeseen circumstances beyond our control, you may reschedule your event, subject to our availability, for an alternate date up to one year in the future with no fees.</p>
                                <p>&nbsp;</p>
                                <p><b>Customer Cancelations:</b> You may cancel an event only with the following provisions. If you cancel 21 days before your scheduled event or earlier, you will be entitled to a full refund or you may reschedule your event for an alternate date up to one year in future with no fees. If you cancel less than 21 but more than 14 days before your scheduled event, you will be entitled to a 50% refund or you may reschedule your event, subject to our availability, for an alternate date up to one year in the future but you may be charged a rescheduling fee. If you cancel less than 14 days before your scheduled event, you will not be entitled to any refund or rescheduling of your event.</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* content section end */}
        </>)
}

export default cancelationpolicy