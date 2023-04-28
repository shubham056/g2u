import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const faq = () => {
  const SEO = {
    title: "Frequently Asked Questions | Games2U Mobile Entertainment",
    description: "Find answers to the most frequently asked question about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
    canonical: "https://www.g2u.com/faq",
    openGraph: {
      type: 'website',
      title: 'Frequently Asked Questions | Games2U Mobile Entertainment',
      description: "Find answers to the most frequently asked question about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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
                <h1>FAQ</h1>
                <p>Answers to our most commonly asked questions</p>
              </div>
            </div>
          </div>
        </div>

      </div >
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* content section start */}
      <div className="container-fluid" id="faqParent">
        <div className="row" id="faqContent">
          <div className="limited-width">
            <div className="faq-container">
              <h2>How much does it cost?</h2>
              <p>Our prices are based on many factors including the games you select and the length of your event. So, while we can't quote a one-size-fits-all price, we can promise you that we can create an incredible experience to fit almost any budget. Call us today and find out for yourself!</p>
            </div>
            <div className="faq-container">
              <h2>Is there an age limit?</h2>
              <p>No. At Games2U we have more great games and then anyone and we can offer you activities appropriate for any age range.</p>
            </div>
            <div className="faq-container">
              <h2>Do parents have to supervise?</h2>
              <p>No. Our Games2U events are managed by our trained Game Coaches who are there for the safety of your participants and to make sure your event is a success!</p>
            </div>
            <div className="faq-container">
              <h2>Do you need to plug in for electricity?</h2>
              <p>Not usually. Our video game trucks are powered by on-board generators and other equipment is fully charged before your event. If we do require a power source for your event, you'll be told at the time of booking.</p>
            </div>
            <div className="faq-container">
              <h2>How many players do your games accommodate? </h2>
              <p>As many as you need! We're equally at home entertaining a party of 10 or servicing an event with hundreds of attendees. No matter the size or scope of your event, we have the activities to make it a success!</p>
            </div>
            <div className="faq-container">
              <h2>Can I book a combination party featuring multiple games and equipment like laser tag, hamster balls and video game trucks?</h2>
              <p>Of course. We offer multiple packages and add-ons to help you create an event they	ll never forget.</p>
            </div>
            <div className="faq-container">
              <h2>What video games are available on your game trucks?</h2>
              <p>We're gamers at heart and our current games are constantly changing. But you can rest assured that we'll show up with the best and newest games available.</p>
            </div>
            <div className="faq-container">
              <h2>Can I choose the video games that are used on your game trucks?</h2>
              <p>Our game coaches will be happy to discuss the games currently offered when they arrive for your event and we understand that parents may wish to only utilize certain games from our catalog.</p>
            </div>
            <div className="faq-container">
              <h2>Are your events always outdoors?</h2>
              <p>No. Most of our equipment can be used both indoors and outdoors with adequate space.</p>
            </div>
            <div className="faq-container">
              <h2>Do we need a lot of space for games like Laser Tag? </h2>
              <p>Not as much as you might think. We can set up in many front or backyards, cul-de-sacs or neighborhood parks or school yards. We're experts at turning your landscape into a challenging battlefield!</p>
            </div>
            <div className="faq-container">
              <h2>Are the laser tag guns safe? Can they hurt a player's eyes? </h2>
              <p>Games2U laser tag guns are perfectly safe and are not harmful to the eyes.</p>
            </div>
            <div className="faq-container">
              <h2>What if it's bad weather? Do you have a cancelation policy?</h2>
              <p>Games2U events happen rain or shine and we'll only cancel an event in the rare instance when we believe the conditions are not safe for the participants or our equipment. For more details, please see our Cancelation Policy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* content section end */}
    </>)
}

export default faq