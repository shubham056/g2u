import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const aboutus = () => {
  const SEO = {
    title: "About Us | Games2U Mobile Entertainment",
    description: "Learn more about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
    canonical: "https://www.g2u.com/aboutus",
    openGraph: {
      type: 'website',
      title: 'About Us | Games2U Mobile Entertainment',
      description: "Learn more about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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
                <h1>About us</h1>
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
                <p>Founded in 2007, Games2U is the world's largest provider of mobile entertainment.</p>
                <p>&nbsp;</p>
                <p>Born in Austin, TX, Games2U was an entirely new concept in the world of on-site events and parties. Today, more than 10 years later, Games2U is the world's largest provider of mobile entertainment having entertained millions of happy customers with our unique combination of exhilarating entertainment, smiling service, and family-friendly affordability.</p>
                <p>&nbsp;</p>
                <p>Our incredible growth has not gone unnoticed. Games2U has been recognized by Entrepreneur Magazine as part of their annual Franchise 500 - the world's most comprehensive franchise ranking based on objective, quantifiable measures of success. We've also been ranked by Dun &amp; Bradstreet as one of the "best of the best" franchise companies in America. And, of course, our appearance on Shark Tank, in which we declined an investment from "Mr. Wonderful" himself, Kevin O'Leary, has been viewed by millions of people around the world.</p>
                <p>&nbsp;</p>
                <p>As we continue to grow and enjoy our success, there's still one thing we think about every day. You. Our customer.  You see, our job is really about one thing, providing world-class entertainment to our valuable customers, their friends, their families, their customer, and their clients. That's something we'll never forget.</p>
                <p>&nbsp;</p>
                <p>We love what we do. And it shows in the way we run our business. We think you're going to love what we do even more.</p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content section end */}
    </>
  )
}

export default aboutus