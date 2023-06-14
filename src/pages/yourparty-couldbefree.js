import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const yourpartycouldbefree = ({ content, page_name, page_caption, banner_image }) => {
  const SEO = {
    title: "Your Party Could Be Free | Games2U Mobile Entertainment",
    description: "Information on how your Games2U event could be free.",
    canonical: "https://www.g2u.com/yourpartycouldbefree",
    openGraph: {
      type: 'website',
      title: 'Your Party Could Be Free | Games2U Mobile Entertainment',
      description: "Information on how your Games2U event could be free.",
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
                <h1>{page_name && page_name}</h1>
                <p>{page_caption && page_caption}</p>
                <a href="#footerContact" className="ti-yellow-button">Request Info</a>
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

export default yourpartycouldbefree;

export async function getStaticProps() {
  try {
    const payload = { url: `${apiBaseUrl}/content/your-party-could-be-free`, method: 'GET' }
    const partyCouldFreeContent = await fetchApi(payload);
    const partyCouldFreeContentData = partyCouldFreeContent.data.content;
    if (partyCouldFreeContentData && partyCouldFreeContentData.content != undefined && partyCouldFreeContentData.content == '') {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      const { content, page_name, page_caption, banner_image } = partyCouldFreeContentData
      return {
        props: {
          content,
          page_name,
          page_caption,
          banner_image
        },
        revalidate: 5, // In seconds
      };
    }
  } catch (error) {
    console.log('error in your-party-could-be-free api call', error)
    return {
      notFound: true
    };
  }
}
