import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const contactus = () => {
  const SEO = {
    title: "Contact Us | Games2U Mobile Entertainment",
    description: "Telephone and email contact information for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
    canonical: "https://www.g2u.com/contactus",
    openGraph: {
      type: 'website',
      title: 'Contact Us | Games2U Mobile Entertainment',
      description: "Telephone and email contact information for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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

        <div className="row no-padding not-home faq-page" id="headerBanner">
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width">
                <h1>Contact Us</h1>
                <p>Questions? Comments? Feel like chatting? We're here to help!</p>
              </div>
            </div>
          </div>
        </div>

      </div >
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* content section start */}

      <div id="contactPage">
        <div className="container-fluid" id="contentParent">
          <div className="row ti-row content-padding">
            <div className="limited-width">
              <div className="col-xs-12 default-container text-container">
                <h2>By Phone:</h2>
                <p>To book your event or party call is at 1-800-71-GAMES</p>
                <p>To reach our corporate office call 1-512-717-8933</p>
                <h2>By email:</h2>
                <p>To send us an email <a href="/cdn-cgi/l/email-protection#caa3a4aca58aadf8bfe4a9a5a7"><span className="__cf_email__" data-cfemail="ec85828a83ac8bde99c28f8381">[email&nbsp;protected]</span></a></p>
                <h2>Address:</h2>
                <p>My Goodness Games, Inc.</p>
                <p>12345 Pauls Valley Rd. Unit 9</p>
                <p>Austin, TX</p>
                <p>78737</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content section end */}
    </>
  )
}

export default contactus