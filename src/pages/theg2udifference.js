import React from 'react'
import Header from '@/components/_App/Header'
import Theg2udifferenceContent from '@/components/_App/WebPages/theg2udifference'
import { NextSeo } from 'next-seo';


const theg2udifference = () => {
  const SEO = {
    title: "The Games2U Difference | As Seen on Shark Tank | Games2U",
    description: "Find out why Games2U is America's #1 rated provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, photo booths and more! Book today for an experience they'll never forget!",
    canonical: "https://www.g2u.com/theg2udifference",
    openGraph: {
      type: 'website',
      title: 'The Games2U Difference | As Seen on Shark Tank | Games2U',
      description: "Find out why Games2U is America's #1 rated provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, photo booths and more! Book today for an experience they'll never forget!",
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

      <div className="container-fluid">
        <Header />
        <div className="row no-padding not-home all-events-page" id="headerBanner">
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width">
                <h1>The G2U Difference</h1>
                <p>Host the perfect event with activities for all ages and group sizes!</p>
                <a href="#footerContact" className="ti-yellow-button">Request Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Theg2udifferenceContent />

    </>
  )
}

export default theg2udifference