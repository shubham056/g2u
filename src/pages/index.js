import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
//const inter = Inter({ subsets: ['latin'] })
import Footer from '../components/_App/Footer/Footer';
import Header from '@/components/_App/Header';
import BrandLogo from '@/components/_App/BrandLogo';
import FindLocation from '@/components/_App/FindLocation';
import Video from '@/components/_App/Video';
import TopHomePageBanner from '@/components/_App/TopHomePageBanner';
import PlanYourParty from '@/components/_App/PlanYourParty';
import RequestInfo from '@/components/_App/RequestInfo';
import GamesForEveryOne from '@/components/_App/GamesForEveryOne';
import GamesList from '@/components/_App/GamesList';
import GamesSlider from '@/components/_App/GamesSlider';


export default function Home({ content, page_name, testimonialsData, investorsData }) {

  return (
    <>
      <Head>
        <title>Austin Game Trucks, Laser Tag & Hamster Balls from Games2U</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-32x32.png" />
        <link rel="shortcut icon" href="/assets/favicon-16x16.png" />
      </Head>

      < div className="container-fluid" >
        {/* ----------- Header section start with mobile naviagtion --------  */}
        < Header />
        {/* ----------- End Header section start with mobile naviagtion ------ */}

        {/* ----------- Start section for Video, Find a Location and Brand Logo ------ */}
        <div className="row no-padding " id="headerBanner">
          <div className="ti-page-header row clearfix">

            <Video />

            <FindLocation />

            <BrandLogo investors={investorsData} />

          </div>
        </div>
        {/* ----------- End section for Video, Find a Location and Brand Logo --------- */}
      </div >
      <div className="container-fluid">

        <TopHomePageBanner />

        <GamesForEveryOne
          heading={page_name}
          description={content}
        />

        <div className="row ti-orange-background no-margin no-padding" id="gamesTheyLove">
          <div className="col-xs-12 no-padding">
            <div className="ti-orange-background clearfix">
              <div className="col-sm-12 no-padding">
                <h2 className="limited-width">Games They'll Love!</h2>
                <div className="row ti-row no-side-padding no-side-margin remove-overflow">
                  <div className="ti-slider-parents">
                    <GamesSlider />
                  </div>
                </div>

                <GamesList />

              </div>
            </div>
          </div>
        </div>

        <RequestInfo
          content="Ready to host the event they'll never forget?"
          classNameStyle="ti-dark-orange-background"
        />

        <PlanYourParty />

        <RequestInfo
          content="Book Today and be the Hero of Your Next Event!"
          classNameStyle="ti-blue-gradient-background"
        />
      </div>

      <Footer testimonials={testimonialsData} />

    </>
  )
}

export async function getStaticProps() {
  try {
    const gamesForEveryonePayload = { url: `${apiBaseUrl}/content/games-for-everyone`, method: 'GET' }
    const testimonialsPayload = { url: `${apiBaseUrl}/testimonials`, method: 'POST', data: { page_limit: 20, page_record: 1 } }
    const investorsPayload = { url: `${apiBaseUrl}/investors`, method: 'POST', data: { page_limit: 20, page_record: 1 } }

    const gamesForEveryone = await fetchApi(gamesForEveryonePayload); // call contact us API
    const testimonialsContent = await fetchApi(testimonialsPayload); // call testimonials API
    const investorsContent = await fetchApi(investorsPayload); // call investors API

    const gamesForEveryoneData = gamesForEveryone.data.content;
    const testimonialsData = testimonialsContent.data.testimonials;
    const investorsData = investorsContent.data.investors;

    console.log("testimonialsData", testimonialsData)

    if (gamesForEveryoneData && gamesForEveryoneData.content != undefined && gamesForEveryoneData.content == '' && testimonialsData && testimonialsData != undefined && testimonialsData.length == 0) {
      return {
        notFound: true,
        revalidate: 5,
      };
    } else {
      const { content, page_name } = gamesForEveryoneData

      return {
        props: {
          content,
          page_name,
          testimonialsData,
          investorsData,
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
