import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';


const corporateevents = () => {
  const SEO = {
    title: "Corporate Events | Company Parties & Team Building | Games2U",
    description: "Find out why Games2U is America's most trusted provider of mobile entertainment for business parties, corporate outings, grand openings, team building events and more! Book today for an experience they'll never forget!",
    canonical: "https://www.g2u.com/corporateevents",
    openGraph: {
      type: 'website',
      title: 'Corporate Events | Company Parties & Team Building | Games2U',
      description: "Find out why Games2U is America's most trusted provider of mobile entertainment for business parties, corporate outings, grand openings, team building events and more! Book today for an experience they'll never forget!",
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
        <div class="row no-padding not-home all-events-page" id="headerBanner">
          <div class="ti-page-header row clearfix">
            <div class="row ti-row">
              <div class="limited-width">
                <h1>Corporate Events</h1>
                <p>Nobody does business like Games2U!</p>
                <a href="#footerContact" class="ti-yellow-button">Request Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* content section start */}
      <div className="container-fluid" id="contentParent">
        <div className="row ti-row content-padding">
          <div className="limited-width">
            <div className="col-xs-12 default-container text-container">
              <div className="col-sm-12 col-md-12">
                <h2>At Games2U, we can bring out the kid in anyone!</h2>
                <p>From company parties and picnics - to corporate team building events, promotions, and grand openings - we've got
                  the activities, and the experience to make your event a guaranteed success!</p>
                <p>&nbsp;</p>
                <p>At Games2U we offer a fully mobile, on site experience they'll never forget. With more than a dozen unique and
                  exhilarating entertainment options, we can help you entertain five people, or five hundred. And, with an
                  entertainment package for every budget, we're experts at providing big-time fun without the big-time price tag.
                </p>
                <p>&nbsp;</p>
                <p>Call today to speak with a corporate event specialist and let us show you why Games2U should be your only choice
                  when you need an event guaranteed to impress your customers, your employees, and even you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content section end */}


    </>
  )
}

export default corporateevents