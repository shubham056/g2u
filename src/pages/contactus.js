import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const contactus = ({ content }) => {
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
              {content && <div className="col-xs-12 default-container text-container" dangerouslySetInnerHTML={{ __html: content }}></div>}
            </div>
          </div>
        </div>
      </div>

      {/* content section end */}
    </>
  )
}

export default contactus;

export async function getStaticProps() {
  try {
    const payload = { url: `${apiBaseUrl}/content/contact-us`, method: 'GET' }
    const contactUsContent = await fetchApi(payload);
    const contactUsContentData = contactUsContent.data.content;
    if (contactUsContentData && contactUsContentData.content != undefined && contactUsContentData.content == '') {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      const { content } = contactUsContentData
      return {
        props: {
          content
        },
        revalidate: 5, // In seconds
      };
    }
  } catch (error) {
    console.log('error in contact us api call', error)
    return {
      notFound: true
    };
  }
}