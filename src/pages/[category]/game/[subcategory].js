// import { useRouter } from "next/router";
// // pages/category/[category]/[subcategory].tsx
// const SubCategoryPage = () => {
//   const router = useRouter();
//   // Navigating to category/webdevelopment/react will return category = webdevelopment and subcategory = react
//   // Navigating to /category/webdevelopment/react/anothercategory will result in a 404 error
//   const { category, subcategory } = router.query;
//   return (
//     <div>
//       <pre>
//         Category: {category} , Subcategory: {subcategory}
//       </pre>
//     </div>
//   );
// };
// export default SubCategoryPage;

import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Header from '@/components/_App/Header';
import dynamic from 'next/dynamic';
import CommonSlider from '@/components/_App/Slider';
import GamesSlider from '@/components/_App/GamesSlider';
import TopBanner from '@/components/GameDetails/TopBanner';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import { useRouter } from 'next/router';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
import Footer from '@/components/_App/Footer/Footer';
import BrandLogo from '@/components/_App/BrandLogo';
import ErrorPage from 'next/error';

const options = {
  loop: true,
  nav: true,
  navText:
    [
      '<div class="ti-left-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-left"></span></div>',
      '<div class="ti-right-slider slick-arrow" style="display: block;"><span class="ti-sprite blue-arrow-right"></span></div>'
    ],
  dots: false,
  smartSpeed: 500,
  // margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 2
    },
    768: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};

const GamesDetails = ({ categoryDetails, testimonialsData, investorsData, siteSettingData }) => {
  const router = useRouter();
  console.log("categoryDetails", categoryDetails)
  if (!categoryDetails.category_name || Object.keys(categoryDetails).length == 0) {
    return <ErrorPage statusCode={404} withDarkMode={false} />
  }
  const { banner_image, icon, category_name, category_caption, category_description, video } = categoryDetails

  const { category, subcategory } = router.query;
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, [])

  const SEO = {
    title: "Game Truck Video Games Parties | #1 Rated from Games2U",
    description: "America's most trusted provider of video game trucks for birthday parties, school carnivals and fairs, summer camps, corporate team-building events and more!",
    canonical: "https://www.g2u.com",
    openGraph: {
      type: 'website',
      url: 'https://www.g2u.com/',
      title: "Game Truck Video Games Parties | #1 Rated from Games2U",
      description: "America's most trusted provider of video game trucks for birthday parties, school carnivals and fairs, summer camps, corporate team-building events and more!"
      // images: [
      //     {
      //       url: '/images/banner-two/banner_main.jpg',
      //       width: 800,
      //       height: 600,
      //       alt: 'Og Image Alt',
      //     },
      //     {
      //       url: '/images/banner-two/banner_main.jpg',
      //       width: 800,
      //       height: 600,
      //       alt: 'Og Image Alt 2',
      //     },
      //   ],
    },
    twitter: {
      handle: '@g2u',
      site: '@g2u',
      cardType: 'summary_large_image'
    },
  }

  return (
    <>
      <div className="modal" id="priceModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <p>Rate quoted is for weekday, off-peak, zero-travel, multiple-hour events. Other rates may be higher.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>{/* /.modal-content */}
        </div>{/* /.modal-dialog */}
      </div>{/* /.modal */}
      <NextSeo {...SEO} />
      {/* <!-- top header and banner with mobile menu section start --> */}
      <div className="container-fluid">
        {/* <!-- header section start with mobile naviagtion  --> */}
        <Header siteSettings={siteSettingData} />
        {/* <!-- header section end with mobile naviagtion  --> */}

        {categoryDetails && <TopBanner
          banner={banner_image}
          icon={icon}
          title={category_name}
          caption={category_caption}
          video={video}
        />}

      </div >
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* Get the Stats! include seven section start */}
      <div className="container-fluid" id="gamePage">
        <div className="row ti-dark-orange-background ti-row ti-small-banner no-margin">
          <div className="col-xs-12">
            <h2>Ready to book the most epic video game truck party?</h2>
            <a href="#footerContact" className="ti-yellow-button">Request Info</a>
          </div>
        </div>
        <div className="row ti-row ti-orange-background ti-box-container">
          <div className="limited-width">
            <h2>Get the Stats! <p className="ti-white-text">Check out these stats to see if the Video Game Truck Party is a
              great fit for your next event.</p>
            </h2>
            <div className="row ti-box-row">
              <div className="ti-box">
                <img src="https://www.g2u.com/assets/img/ico-starting-price-2x.png" />
                <div>
                  <h3 className="text-uppercase">Starting Price</h3>
                  <p>as low as <strong> $99</strong>
                    per hour <button type="button" className="btn btn-link"><i className="fa fa-question-circle-o" data-toggle="modal" data-target="#priceModal" /></button>
                  </p>
                </div>
              </div>

              <div className="ti-box-spacer" />
              <div className="ti-box">
                <img src="/assets/img/ico-ages-2x.png" />
                <div>
                  <h3 className="text-uppercase">Recommended Age Range</h3>
                  <p><strong>6 &amp; Older</strong></p>
                </div>
              </div>
              <div className="ti-box-spacer" />
              <div className="ti-box">
                <img src="/assets/img/ico-participants-2x.png" />
                <div>
                  <h3 className="text-uppercase">Number of Participants</h3>
                  <p><strong>20+ players</strong> at a time!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ti-row no-padding no-side-margin remove-overflow" id="tiImageSlider">
          <div className="ti-slider-parents ti-slider-gallery">
            {
              display ?
                <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                  <CommonSlider />
                </OwlCarousel> : ''
            }
          </div>
        </div>
        <div className="row ti-row game-content">
          <div className="limited-width">
            <h2 className="orange-border ti-dark-blue-text">{categoryDetails && category_name}</h2>
            <div className="row">
              <div className="col-md-12">
                {categoryDetails && <div dangerouslySetInnerHTML={{ __html: category_description }}></div>}
              </div>
            </div>
          </div>
        </div>
        <div className="row ti-blue-gradient-background ti-row ti-small-banner no-margin">
          <div className="col-xs-12">
            <h2>Sound like a perfect fit for your group?</h2>
            <a href="#footerContact" className="ti-yellow-button">Request Info</a>
          </div>
        </div>
        <div className="row" id="recentlyViewed">
          <div className="limited-width">
            <h2 className="orange-border ti-dark-blue-text">You May Also Enjoy</h2>
          </div>
          <div className="row ti-row no-top-padding no-side-margin remove-overflow">
            <div className="ti-slider-parents">

              <GamesSlider />

            </div>
          </div>
        </div>
        <div className="row ti-blue-background as-seen-banner mobile-wrap not-home">
          <div className="limited-width">
            <div className="as-seen-images as-seen-mobile">
              <BrandLogo investors={investorsData} />
            </div>
            <div className="as-seen-images as-seen-desktop">
              <BrandLogo investors={investorsData} />
            </div>
          </div>
        </div>
      </div>
      {/* Get the Stats! include seven section end */}

      <Footer
        testimonials={testimonialsData}
        siteSettings={siteSettingData}
      />
    </>

  )
}

export default GamesDetails



export const getServerSideProps = async ({ params: { subcategory }, res }) => {
  try {
    const payload = { url: `${apiBaseUrl}/categoty/category-details/${subcategory}`, method: 'GET' }
    const testimonialsPayload = { url: `${apiBaseUrl}/testimonials`, method: 'POST', data: { page_limit: 20, page_record: 1 } }
    const investorsPayload = { url: `${apiBaseUrl}/investors`, method: "POST", data: { page_limit: 20, page_record: 1 } };
    const siteSettingsPayload = { url: `${apiBaseUrl}/site-settings`, method: "GET", };

    const categories = await fetchApi(payload);
    const testimonialsContent = await fetchApi(testimonialsPayload); // call testimonials API
    const investorsContent = await fetchApi(investorsPayload); // call investors API
    const siteSettingContent = await fetchApi(siteSettingsPayload); // call site setting API

    const testimonialsData = testimonialsContent.data.testimonials;
    const categoriesData = categories.data
    const investorsData = investorsContent.data.investors;
    const siteSettingData = siteSettingContent.data.settings;

    const { categoryDetails } = categoriesData
    return {
      props: {
        categoryDetails,
        testimonialsData,
        investorsData,
        siteSettingData,
      }
    };
  } catch (error) {
    res.statusCode = 404
    return {
      props: {
        categoryDetails: {}
      }
    }
  }

};


