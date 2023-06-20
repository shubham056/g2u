import React from 'react'
import Header from '@/components/_App/Header'
import Theg2udifferenceContent from '@/components/_App/WebPages/theg2udifference'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const theg2udifference = ({ content, page_name, page_caption, banner_img, meta_title, meta_description, eventListData }) => {

  const SEO = {
    title: meta_title && meta_title != '' ? meta_title : "The Games2U Difference | As Seen on Shark Tank | Games2U",
    description: meta_description && meta_description != '' ? meta_description : "Find out why Games2U is America's #1 rated provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, photo booths and more! Book today for an experience they'll never forget!",
    canonical: "https://www.g2u.com/theg2udifference",
    openGraph: {
      type: 'website',
      title: meta_title && meta_title != '' ? meta_title : 'The Games2U Difference | As Seen on Shark Tank | Games2U',
      description: meta_description && meta_description != '' ? meta_description : "Find out why Games2U is America's #1 rated provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, photo booths and more! Book today for an experience they'll never forget!",
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

      <Theg2udifferenceContent
        content={content}
        eventList={eventListData}
      />

    </>
  )
}

export default theg2udifference;

export async function getStaticProps() {
  try {
    const payload = { url: `${apiBaseUrl}/content/the-g2u-difference`, method: 'GET' }
    const enevtListPayload = { url: `${apiBaseUrl}/events`, method: 'POST', data: { page_limit: 20, page_record: 1 } }
    const g2uDifferenceContent = await fetchApi(payload);
    const eventList = await fetchApi(enevtListPayload);
    const eventListData = eventList.data.events;
    const g2uDifferenceContentData = g2uDifferenceContent.data.content;

    if (g2uDifferenceContentData && g2uDifferenceContentData.content == '') {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      const { content, page_name, page_caption, banner_img, meta_title, meta_description } = g2uDifferenceContentData
      return {
        props: {
          content,
          page_name,
          page_caption,
          banner_img,
          eventListData,
          meta_title,
          meta_description
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