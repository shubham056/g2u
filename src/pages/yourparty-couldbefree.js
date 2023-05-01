import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';


const yourpartycouldbefree = () => {
  const SEO = {
    title: "Your Party Could Be Free | Games2U Mobile Entertainment",
    description: "Information on how your Games2U event could be free.",
    canonical: "https://www.g2u.com/yourpartycouldbefree",
    openGraph: {
      type: 'website',
      title: 'Your Party Could Be Free | Games2U Mobile Entertainment',
      description: "Information on how your Games2U event could be free.",
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
                <h1>Your Party Could Be Free</h1>
                <a href="#footerContact" className="ti-yellow-button">Request Info</a>
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
                <h2>Your Party Could Be Free!</h2>
                <p>At Games2U we believe in transparency. And that belief extends from our corporate office, through our franchisees and company-owned locations, and straight to you, our customer. We want you to know that when you schedule a Games2U event, you'll get what you ordered, when you ordered it, and for the price that you were quoted.</p>
                <p>&nbsp;</p>
                <p>To help accomplish that, all Games2U locations are require to provide all customers a receipt at the time of their event. Your receipt will contain your event information and the exact prices you're paying for the activities that you schedule. It will also contain a secure ECN number that identifies your event in our systems.</p>
                <p>&nbsp;</p>
                <p>If you are not provided a receipt with a secure ECN number for your event, through no fault of your own, we will refund the cost of your event. It's as simple as that. No questions and, just this once, no games. It's our guarantee of transparency to you, our customer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* content section end */}
    </>
  )
}

export default yourpartycouldbefree