import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const corporateevents = ({ content, page_name, page_caption, banner_img, meta_title, meta_description }) => {
  const SEO = {
    title: meta_title && meta_title != '' ? meta_title : "Corporate Events | Company Parties & Team Building | Games2U",
    description: meta_description && meta_description != '' ? meta_description : "Find out why Games2U is America's most trusted provider of mobile entertainment for business parties, corporate outings, grand openings, team building events and more! Book today for an experience they'll never forget!",
    canonical: "https://www.g2u.com/corporateevents",
    openGraph: {
      type: 'website',
      title: meta_title && meta_title != '' ? meta_title : 'Corporate Events | Company Parties & Team Building | Games2U',
      description: meta_description && meta_description != '' ? meta_description : "Find out why Games2U is America's most trusted provider of mobile entertainment for business parties, corporate outings, grand openings, team building events and more! Book today for an experience they'll never forget!",
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
        <div
          className="row no-padding not-home-additional content-banner"
          id="headerBanner"
          style={{
            backgroundImage: `url(${banner_img && banner_img != '' ? banner_img : 'assets/img/allevents-banner.jpg'})`
          }}
        >
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width text-center">
                <h1>{page_name && page_name}</h1>
                <p>{page_caption && page_caption}</p>
                <a href="#footerContact" className="ti-yellow-button">Request Info</a>
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
                {content && <div className="col-sm-12 col-md-12" dangerouslySetInnerHTML={{ __html: content }}></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content section end */}


    </>
  )
}

export default corporateevents;

export async function getStaticProps() {
  try {
    const payload = { url: `${apiBaseUrl}/content/corporate-events`, method: 'GET' }
    const corporateEventsContent = await fetchApi(payload);
    const corporateEventsContentData = corporateEventsContent.data.content;
    if (corporateEventsContentData && corporateEventsContentData.content != undefined && corporateEventsContentData.content == '') {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      const { content, page_name, page_caption, banner_img, meta_title, meta_description } = corporateEventsContentData
      return {
        props: {
          content,
          page_name,
          page_caption,
          banner_img,
          meta_title,
          meta_description
        },
        revalidate: 5, // In seconds
      };
    }
  } catch (error) {
    console.log('error in corporate events api call', error)
    return {
      notFound: true
    };
  }
}