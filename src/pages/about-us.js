import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";


const aboutus = ({ content }) => {
  console.log("content in page", content)
  const SEO = {
    title: "About Us | Games2U Mobile Entertainment",
    description: "Learn more about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
    canonical: "https://www.g2u.com/about-us",
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
              {content && <div className="col-sm-12 col-md-12" dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>
          </div>
        </div>
      </div>
      {/* content section end */}
    </>
  )
}

export default aboutus;

export async function getStaticProps({ params }) {
  try {
    const payload = { url: `${apiBaseUrl}/content/about-us`, method: 'GET' }
    const aboutUsContent = await fetchApi(payload);
    const aboutUsContentData = aboutUsContent.data.content;
    if (aboutUsContentData && aboutUsContentData.content != undefined && aboutUsContentData.content == '') {
      return {
        notFound: true
      };
    } else {
      const { content } = aboutUsContentData
      return {
        props: {
          content
        },
        revalidate: 10, // In seconds
      };
    }
  } catch (error) {
    console.log('error in about us api call', error)
    return {
      notFound: true
    };
  }
}