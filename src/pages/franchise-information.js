import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
import FranchiseFooter from '@/components/_App/FooterForFranchise/FranchiseFooter';


const franchiseinformation = ({ testimonialsData }) => {
  const SEO = {
    title: "Own a Franchise | Franchises Available Nationwide | Games2U",
    description: "Information on opening a new franchise of America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
    canonical: "https://www.g2u.com/franchiseinformation",
    openGraph: {
      type: 'website',
      title: 'Own a Franchise | Franchises Available Nationwide | Games2U',
      description: "Information on opening a new franchise of America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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
        <div className="row no-padding not-home franchise-page" id="headerBanner">
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width">
                <h1>Franchise Information</h1>
                <p>Join the Mobile Entertainment Revolution that's sweeping that nation!</p>
                {/* <div>
                  <div className="text-center">
                    <a className="ti-seven-wide ti-white-box" href="#">What's New?</a>
                    <a className="ti-seven-wide ti-white-box" href="#">G2U Equipment</a>
                    <a className="ti-seven-wide ti-white-box" href="#">G2U Products</a>
                    <a className="ti-seven-wide ti-white-box" href="#">Why Buy?</a>
                    <a className="ti-seven-wide ti-white-box" href="#">Support</a>
                    <a className="ti-seven-wide ti-white-box" href="#">Ownership Process</a>
                    <a className="ti-seven-wide ti-white-box" href="#">FAQ</a>
                  </div>
                  <div className="ti-input visible-xs">
                    <select>
                      <option disabled selected>Franchise Information</option>
                      <option>What's New?</option>
                      <option>G2U Equipment</option>
                      <option>G2U Produts</option>
                      <option>Why Buy?</option>
                      <option>Support</option>
                      <option>Ownership Process</option>
                      <option>FAQ</option>
                    </select>
                    <span className="ti-sprite select-arrows" />
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div >
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* content section start */}
      <div className="container-fluid" id="franchiseParent">
        <div className="row ti-row limited-width" id="floatingBanner">
          <div className="banner-row first">
            <h2 className="no-border">The Games2U Difference:</h2>
          </div>
          <div className="banner-row">
            <span className="ti-break-line"><img src="https://www.g2u.com/assets/img/ico-global-2x.png" /></span>
            <p>Opportunities Worldwide</p>
          </div>
          <div className="banner-row">
            <span className="ti-break-line"><img src="https://www.g2u.com/assets/img/ico-moneybag-2x.png" /></span>
            <p>Tremendous Earning Potential</p>
          </div>
          <div className="banner-row">
            <span className="ti-break-line"><img src="https://www.g2u.com/assets/img/ico-arrows-2x.png" /></span>
            <p>Easy Expansion Opportunities</p>
          </div>
        </div>
        <div className="row ti-row content-padding" id="franchiseContent">
          <div className="limited-width">
            <div className="col-xs-12">
              <h2 className="ti-dark-blue-text orange-border hidden-lg hidden-md">Owning a franchise should be all fun and games.</h2>
              <div className="col-md-6 col-sm-6">
                <h2 className="ti-dark-blue-text orange-border hidden-sm hidden-xs">Owning a franchise should be all fun and games.</h2>
                <p className="franchise-text">Imagine being the life of the party as you cruise from place to place in amazing custom designed vehicles, video game theaters, outdoor laser tag, giant human hamster balls, foam machines and much more!  You'll be providing the most unique mobile entertainment on the planet and you'll be greeted with smiles wherever you go.</p>
              </div>
              <div className="col-sm-6">
                <div style={{ width: '100%', paddingTop: '56.25%', background: '#333', position: 'relative' }}>
                  <div style={{ position: 'absolute', color: '#fff', top: '50%', transform: 'translateY(-50%)', left: 0, right: 0, textAlign: 'center' }}>
                    <img src="https://www.g2u.com/assets/img/g2u-franchise-info-background.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row franchise-banner ti-row ti-small-banner no-margin">
          <div className="col-xs-12">
            <h2><strong>Interested in owning a franchise of your own?</strong></h2>
            <a href="#footerContact" className="ti-yellow-button">Send Me Information!</a>
          </div>
        </div>
        <div className="row ti-row ti-orange-background content-padding">
          <div className="limited-width">
            <div className="col-xs-12">
              <h2>We've Got Your Back! <span className="ti-white-text">From your initial training to marketing your franchise, we're here to help you succeed.</span></h2>
              <div className="row ti-box-row">
                <div className="ti-box">
                  <img src="https://www.g2u.com/assets/img/ico-development-2x.png" />
                  <div>
                    <h3>Pre-Opening Development</h3>
                    <p>Our development team helps you to identify, select, and approve the best possible geographical territories</p>
                  </div>
                </div>
                <div className="ti-box-spacer" />
                <div className="ti-box">
                  <img src="https://www.g2u.com/assets/img/ico-training-2x.png" />
                  <div>
                    <h3>Comprehensive Training &amp; Education</h3>
                    <p>Before you work your first Games2U event, we will provide you with extensive training.</p>
                  </div>
                </div>
                <div className="ti-box-spacer" />
                <div className="ti-box">
                  <img src="https://www.g2u.com/assets/img/ico-marketing-2x.png" />
                  <div>
                    <h3>Advertising, Marketing &amp; Street Promotions</h3>
                    <p>Games2U takes great pride in our brand and employ some of the best marketing professionals to promote it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row franchise-banner-orange ti-banner-two-col ti-row ti-small-banner no-margin">
          <div className="col-xs-12">
            <h2>Interested in learning more about opening a franchise of your own?</h2>
            <a href="#footerContact" className="ti-yellow-button">Send Me Information!</a>
          </div>
        </div>
        <div className="row ti-row content-padding">
          <div className="limited-width">
            <div className="col-xs-12">
              <h2 className="orange-border ti-dark-blue-text">Sounds better than being stuck in an office all day.</h2>
              <div className="col-sm-12 col-md-6 franchise-text">
                <p>
                  The Games2U franchise is designed with quality of life in mind.  Owner-operated or with multi-unit operations, there are minimal employees and proven systems that allow
                  you to focus on growing your business and maximizing revenue opportunities.  A Games2U franchise requires very little start-up capital, can be launched in less than 90 days,
                  and is the ideal business for fun-loving entrepreneurs.  We supply you with a comprehensive operation including amazing brand custom designed vehicles, theaters, and tons of
                  other games and equipment.  In fact, every franchise is equipped to run multiple events simultaneously, even in the same time slots.  We provide state-of-the-art training at
                  our headquarters, marketing and technical support, and a robust website featuring our proprietary G2UWare<sup>™</sup> operating system.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 franchise-text">
                <p>
                  G2UWare<sup>™</sup> is simple to operate, but delivers sophisticated results for scheduling, reports, credit card management, database, surveys, e-vites, training
                  tutorials, and so much more.
                </p>
                <p>
                  Games2U stands alone in the incredibly lucrative mobile entertainment segment.  We capitalize on the massive $21 Billion a year video game industry, maximize the kids party
                  industry, thrill corporate and business partners, align perfectly with schools and fundraisers, add excitement to camps and youth group activities, and speak to a majority
                  of the population with patent-pending products!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row franchise-banner visible-xs visible-sm ti-row ti-small-banner no-margin">
          <div className="col-xs-12">
            <h2><strong>Interested in owning a franchise of your own?</strong></h2>
            <a href="#footerContact" className="ti-yellow-button">Send Me Information!</a>
          </div>
        </div>
      </div>

      {/* content section end */}

      <FranchiseFooter testimonials={testimonialsData} />
    </>
  )
}

export default franchiseinformation

export async function getStaticProps() {
  try {
    const testimonialsPayload = { url: `${apiBaseUrl}/testimonials`, method: 'POST', data: { page_limit: 20, page_record: 1 } }
    const testimonialsContent = await fetchApi(testimonialsPayload); // call testimonials API
    const testimonialsData = testimonialsContent.data.testimonials;
    console.log("testimonialsData in fran", testimonialsData)

    if (testimonialsData && testimonialsData.testimonials != undefined && testimonialsData.testimonials == '') {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      return {
        props: {
          testimonialsData,
        },
        revalidate: 10, // In seconds
      };
    }
  } catch (error) {
    console.log('error in testimonials api call', error)
    return {
      notFound: true
    };
  }
}