import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'
//const inter = Inter({ subsets: ['latin'] })
import Footer from '../components/_App/Footer/Footer';
import Header from '@/components/_App/Header';
import BrandLogo from '@/components/_App/BrandLogo';
import FindLocation from '@/components/_App/FindLocation';
import Video from '@/components/_App/Video';
import TopHomePageBanner from '@/components/_App/TopHomePageBanner';
import GamesTheyLove from '@/components/_App/GamesTheyLove';
import PlanYourParty from '@/components/_App/PlanYourParty';
import RequestInfo from '@/components/_App/RequestInfo';
import GamesForEveryOne from '@/components/_App/GamesForEveryOne';
import ZipCodePopup from '@/components/_App/ZipCodePopup';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  // redux dispatch
  const dispatch = useDispatch();
 // const { message } = useSelector((state) => state.message);
  //console.log("message", message)
  return (
    <>
      <Head>
        <title>Austin Game Trucks, Laser Tag & Hamster Balls from Games2U</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon." /> */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-32x32.png" />
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>

      {/* /.modal box*/}
      <ZipCodePopup />
      {/* /.modal box*/}
      <div className="container-fluid">
        {/* ----------- Header section start with mobile naviagtion --------  */}
        <Header />
        {/* ----------- End Header section start with mobile naviagtion ------ */}

        {/* ----------- Start section for Video, Find a Location and Brand Logo ------ */}
        <div className="row no-padding " id="headerBanner">
          <div className="ti-page-header row clearfix">
            <Video />
            <FindLocation />
            <BrandLogo />
          </div>
        </div>
        {/* ----------- End section for Video, Find a Location and Brand Logo --------- */}
      </div>
      <div className="container-fluid">
        <TopHomePageBanner />
        <GamesForEveryOne />
        <GamesTheyLove />

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

      {/* <Footer /> */}

    </>
  )
}
