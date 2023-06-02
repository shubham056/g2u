import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import useGamesData from '@/states/stores/games-data';
import trimString from '@/utils/trimString'
import Link from 'next/link';


const ourgames = () => {

  const { zipcode, games, loading, error } = useGamesData();

  const SEO = {
    title: "Our Games | Video Game Trucks, Laser Tag & More | Games2U",
    description: "See a complete listing of games and activities from America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book today for an experience they'll never forget!",
    canonical: "https://www.g2u.com/ourgames",
    openGraph: {
      type: 'website',
      title: 'Our Games | Video Game Trucks, Laser Tag & More | Games2U',
      description: "See a complete listing of games and activities from America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book today for an experience they'll never forget!",
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

        {/*  Find the Perfect Game section start */}
        <div className="row no-padding not-home all-games-page" id="headerBanner">
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width">
                <h1>Find the Perfect Game</h1>
                <p>Enter the details below, and we'll give you our suggestions.</p>
                <div className="text-center">
                  <form id="frmSuggestGame" name="frmSuggestGame" action="/main/vfPerfectGame" method="post">
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <select id="sAgeRange" name="sAgeRange">
                          <option value='defaultValue'>Please select...</option>
                          <option value="5:7">5 - 7 years old</option>
                          <option value="8:11">8 - 11 years old</option>
                          <option value="12:16">12 - 16 years old</option>
                          <option value="17:100">Ages 16 and over</option>
                        </select>
                        <span className="ti-sprite select-arrows" />
                      </div>
                    </div>
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <select id="sGroupSize" name="sGroupSize">
                          <option value='defaultValue'>Please select...</option>
                          <option value="8:25">8 - 25 Attendees</option>
                          <option value="26:40">25 - 40 Attendees</option>
                          <option value="41:100">40+ Attendees</option>
                        </select>
                        <span className="ti-sprite select-arrows" />
                      </div>
                    </div>
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <a href="#" className="ti-yellow-button view-suggestions">VIEW SUGGESTIONS</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Find the Perfect Game section end */}


      </div >
      {/* <!-- top header and banner with mobile menu section start --> */}

      {/* content section start */}

      {/* Our Complete Game Catalog section start */}
      <div className="container-fluid no-padding">
        <div className="row ti-row ti-orange-background clearfix" id="allGamesContent">
          <div className="limited-width">
            <h2>Our Complete Game Catalog</h2>
            <div className="row">
              {
                (!loading && games && games.categories && games.categories.length > 0)
                  ?
                  games?.categories.map(item => {
                    return (
                      <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-1" data-original="true" key={`game-gallery-${item.id}`}>
                        <Link href={`/game/${item.slug}`}>
                          <div className="box-heading video-game-theater" >
                          <img src={item.image != '' ? item.image : "/assets/img/ico-video-theater-2x.png"} height={"100%"} />
                          </div>
                          <div className="circle-img"><img src={item.icon != '' ? item.icon : "/assets/img/ico-video-theater-2x.png"} alt={item.slug} />
                          </div>
                          <h3>{item.category_name}</h3>
                          <p>{trimString(item.category_caption, 85)}</p>
                          <span className="explore-link">Explore {item.category_name} »</span>
                        </Link>
                      </div>
                    )
                  })
                  :
                  null
              }
            </div>
          </div>
        </div>
        <div className="row ti-blue-background as-seen-banner mobile-wrap not-home">
          <div className="limited-width">
            <div className="scroll-arrow left" />
            <div className="as-seen-images as-seen-mobile">
              <div className="as-seen-img"><img src="assets/img/sharktank-opt.png" /></div>
              <div className="as-seen-img"><img src="assets/img/rachel.png" /></div>
              <div className="as-seen-img"><img src="assets/img/wall-street-journal.png" /></div>
              <div className="as-seen-img"><img src="assets/img/inc.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fox.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fortune.png" /></div>
              <div className="as-seen-img"><img src="assets/img/entrepreneur-opt.png" /></div>
              <div className="as-seen-img"><img src="assets/img/sharktank-opt.png" /></div>
              <div className="as-seen-img"><img src="assets/img/rachel.png" /></div>
              <div className="as-seen-img"><img src="assets/img/wall-street-journal.png" /></div>
              <div className="as-seen-img"><img src="assets/img/inc.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fox.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fortune.png" /></div>
              <div className="as-seen-img"><img src="assets/img/entrepreneur-opt.png" /></div>
            </div>
            <div className="as-seen-images as-seen-desktop">
              <div className="as-seen-img"><img src="assets/img/sharktank-opt.png" /></div>
              <div className="as-seen-img"><img src="assets/img/rachel.png" /></div>
              <div className="as-seen-img"><img src="assets/img/wall-street-journal.png" /></div>
              <div className="as-seen-img"><img src="assets/img/inc.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fox.png" /></div>
              <div className="as-seen-img"><img src="assets/img/fortune.png" /></div>
              <div className="as-seen-img"><img src="assets/img/entrepreneur-opt.png" /></div>
            </div>
            <div className="scroll-arrow right" />
          </div>
        </div>
      </div>
      {/* Our Complete Game Catalog section end */}



      {/* content section end */}
    </>
  )
}

export default ourgames