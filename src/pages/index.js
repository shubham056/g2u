import React, { useState, useEffect } from 'react';
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
import PlanYourParty from '@/components/_App/PlanYourParty';
import RequestInfo from '@/components/_App/RequestInfo';
import GamesForEveryOne from '@/components/_App/GamesForEveryOne';
import ZipCodePopup from '@/components/_App/ZipCodePopup';
import { useSelector, useDispatch } from 'react-redux';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
import GamesList from '@/components/_App/GamesList';
import GamesSlider from '@/components/_App/GamesSlider';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import {
  getGamesList
} from '../utils/api'
import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../utils/fetchApi";





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
  margin: 30,
  autoplayHoverPause: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};
const modalSchema = Yup.object().shape({
  zipcode: Yup.number()
    .required('Zip code is a required field')// optional
    .typeError('Please enter valid zip code.')// optional as well
  // .test('len', 'Please enter valid zip code.', val => val.toString().length === 5)
})

const bg = {
  overlay: {
    background: "rgba(128, 128, 128, 0.5)"
  }
};

export default function Home() {

  let g2uZipCode = localStorage.getItem('g2u_zipcode'); // get zipcode from local storage

  const [open, setOpen] = useState((g2uZipCode != null && g2uZipCode != 'undefined') ? false : true);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [zipCode, setzipCode] = useState('00000');
  const [submittedZipCode, setSubmittedZipCode] = useState();
  const [gamesData, setGamesData] = useState([])
  const [zipCodeServiceStaus, setZipCodeServiceStatus] = useState('')

  const modalFormOptions = { resolver: yupResolver(modalSchema) }
  const { register, setValue, formState: { errors, isSubmitting }, handleSubmit, } = useForm(modalFormOptions);

  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);
  }, [])

  useEffect(() => {
    if (g2uZipCode != null && g2uZipCode != 'undefined') {
      console.log("use effect zipcode", g2uZipCode)
      getGamesList(g2uZipCode).then(res => {
        console.log("res", res.data)
        const { games } = res.data
        if (games !== "") {
          console.log(games.affiliate)
          setGamesData(games)
          setOpen(false)
          localStorage.setItem('g2u_zipcode', g2uZipCode);
        }
      }).catch(err => console.log("fetch err", err))

    }
  }, [])





  console.log("zipcode from local stroage", g2uZipCode)

  // let apicallUrl;

  // if (submittedZipCode != null) {
  //   console.log("ssss")
  //   apicallUrl = `${apiBaseUrl}/games/${submittedZipCode}`
  // } else if (g2uZipCode != null && g2uZipCode != 'undefined') {
  //   console.log("dddd", g2uZipCode)
  //   apicallUrl = `${apiBaseUrl}/games/${g2uZipCode}`
  // } else {
  //   console.log('vv')
  //   apicallUrl = `${apiBaseUrl}/games/${zipCode}`
  // }
  // console.log("api call urll ++++++", apicallUrl)

  // const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
  // const { data: gamesData, error, isLoading, isValidating, mutate } = useSWR({ url: apicallUrl, method: 'GET' }, fetcher, { refreshInterval: 20000 })


  // console.log("isLoading", isLoading)
  // console.log("isValidating", isValidating)
  // console.log("games data !!!!!", gamesData?.games ?? "")

  // if (gamesData?.games != null) {
  //   if (gamesData.games !== "" && gamesData.games.affiliate) {
  //     localStorage.setItem('g2u_zipcode', submittedZipCode);
  //   }
  // }

  //login submit handler
  const onSubmit = async formValue => {

    const { zipcode } = formValue
    //setzipCode(zipcode)

    // setSubmittedZipCode(zipcode)
    // mutate(`${apiBaseUrl}/games/${zipcode}`, fetcher)


    // setisLoading(true)

    getGamesList(zipcode).then(res => {
      console.log("res", res.data)
      const { games } = res.data
      if (games !== "") {
        console.log(games.affiliate)
        setGamesData(games)
        setOpen(false)
        localStorage.setItem('g2u_zipcode', zipcode);
      } else {
        alert(res.message)
        setValue('zipcode', '')
        setZipCodeServiceStatus(res.message)
      }
    }).catch(err => console.log("fetch err", err))

  }

  if (errors?.zipcode != null) {
    setValue('zipcode', '')
    console.log("errrr", errors)
  }
  console.log("zipCodeServiceStaus", zipCodeServiceStaus)

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

      {/* /.modal box*/}

      {/* <ZipCodePopup /> */}

      <Modal
        open={open}
        onClose={onCloseModal}
        closeOnOverlayClick={false}
        styles={{ bg }}
      >
        <div className="container-modal">
          <div className="logo-container">
            <img data-em="logo" src="assets/img/g2u-logo.png" />
          </div>
          <div className="text-container">
            <div data-em="text-line-1" className="zip-text-line-1">Please enter your zipcode so we can provide you
              with local pricing and options:</div>
            <div className="border-container">
              <span className="arrow arrow-bg-color" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" id="modalFranchiseName" name="modalFranchiseName" defaultValue />
                <div className="template-inputs">
                  <input
                    {...register("zipcode")}
                    type="zip"
                    placeholder={errors?.zipcode != null ? (errors.zipcode.message) ? errors.zipcode.message : zipCodeServiceStaus : "Enter your zip code"}
                    data-required="Zip code is required"
                    autoComplete="off"
                    className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
                  />
                  {/* <span style={{ color: 'red' }}>{errors.zipcode?.message}</span> */}
                </div>
                <div className="buttons-container">
                  <button
                    data-em="button"
                    type="submit"
                    className="submit btn-bg-color jsBtnPopupSubmit"
                    //id="submit-button"
                    target
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal >

      {/* /.modal box*/}
      < div className="container-fluid" >
        {/* ----------- Header section start with mobile naviagtion --------  */}
        < Header
          categoryData={gamesData.categories}
          affiliate={gamesData.affiliate}
          
        />
        {/* ----------- End Header section start with mobile naviagtion ------ */}

        {/* ----------- Start section for Video, Find a Location and Brand Logo ------ */}
        <div className="row no-padding " id="headerBanner">
          <div className="ti-page-header row clearfix">
            <Video />
            <FindLocation
              affiliate={gamesData.affiliate}
            />
            <BrandLogo />
          </div>
        </div>
        {/* ----------- End section for Video, Find a Location and Brand Logo --------- */}
      </div >
      <div className="container-fluid">
        <TopHomePageBanner />

        <GamesForEveryOne />

        <div className="row ti-orange-background no-margin no-padding" id="gamesTheyLove">
          <div className="col-xs-12 no-padding">
            <div className="ti-orange-background clearfix">
              <div className="col-sm-12 no-padding">
                <h2 className="limited-width">Games They'll Love!</h2>
                <div className="row ti-row no-side-padding no-side-margin remove-overflow">
                  <div className="ti-slider-parents">
                    {
                      display ?
                        <OwlCarousel className="clients-slides owl-carousel owl-theme " {...options} >
                          <GamesSlider
                            sliderData={gamesData.categories}
                          />
                        </OwlCarousel> : ''
                    }
                  </div>
                </div>
                <GamesList
                  categoryData={gamesData.categories}
                />
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

      {/* <Footer /> */}

    </>
  )
}
