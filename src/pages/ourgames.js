import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const ourgames = () => {
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
                          <option value selected="SELECTED">Please select...</option>
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
                          <option value selected="SELECTED">Please select...</option>
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
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-1" data-original="true">
                <a href="game/videogametruck.html">
                  <div className="box-heading video-game-theater" />
                  <div className="circle-img"><img src="assets/img/ico-video-theater-2x.png" />
                  </div>
                  <h3>Video Game Truck</h3>
                  <p>Play the hottest games in one of our climate controlled mobile game theaters!</p>
                  <span className="explore-link">Explore Video Game Truck »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-4" data-original="true">
                <a href="game/lasertag.html">
                  <div className="box-heading laser-tag" />
                  <div className="circle-img"><img src="assets/img/ico-laser-tag-2x.png" /></div>
                  <h3>Laser Tag</h3>
                  <p>Let the battle and fun begin when you throw a laser tag party they'll never forget!</p>
                  <span className="explore-link">Explore Laser Tag »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-3" data-original="true">
                <a href="game/hamsterballwracetrack.html">
                  <div className="box-heading hamster-ball-w-race-track" />
                  <div className="circle-img"><img src="assets/img/ico-hamster-ball-race-2x.png" />
                  </div>
                  <h3>Hamster Ball with Race Track</h3>
                  <p>Combine our popular Hamster Balls with a giant inflatable race track for the ultimate
                    contest!</p>
                  <span className="explore-link">Explore Hamster Ball with Race Track »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-11" data-original="true">
                <a href="game/bumperballs.html">
                  <div className="box-heading bumper-balls" />
                  <div className="circle-img"><img src="assets/img/ico-bubble-ball-2x.png" /></div>
                  <h3>Bumper Balls</h3>
                  <p>They’ll have a ball bouncing, flipping &amp; crashing inside their own protective bubble!</p>
                  <span className="explore-link">Explore Bumper Balls »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-5" data-original="true">
                <a href="game/boogerwars.html">
                  <div className="box-heading booger-wars" />
                  <div className="circle-img"><img src="assets/img/ico-booger-wars-2x.png" /></div>
                  <h3>Booger Wars</h3>
                  <p>It's dodgeball meets capture the flag with a twist in a high-energy Games2U exclusive!</p>
                  <span className="explore-link">Explore Booger Wars »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-6" data-original="true">
                <a href="game/candycannon.html">
                  <div className="box-heading candy-cannon" />
                  <div className="circle-img"><img src="assets/img/ico-candy-cannon-2x.png" /></div>
                  <h3>Candy Cannon</h3>
                  <p>The perfect way to end your event with a sky-high blast of candy and a scramble to get yours!
                  </p>
                  <span className="explore-link">Explore Candy Cannon »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-7" data-original="true">
                <a href="game/ulauncher.html">
                  <div className="box-heading u-launcher" />
                  <div className="circle-img"><img src="assets/img/ico-u-launcher-2x.png" /></div>
                  <h3>U:launcher</h3>
                  <p>Catapult soft projectiles and water balloons up to 100 yards with the incredible U:launcher!
                  </p>
                  <span className="explore-link">Explore U:launcher »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-8" data-original="true">
                <a href="game/rockwall.html">
                  <div className="box-heading rock-wall" />
                  <div className="circle-img"><img src="assets/img/ico-rock-wall-2x.png" /></div>
                  <h3>Rock Wall</h3>
                  <p>It's a test of courage and strength when you scale the mighty wall. How high can you go?</p>
                  <span className="explore-link">Explore Rock Wall »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-9" data-original="true">
                <a href="game/gyroscope.html">
                  <div className="box-heading gyroscope" />
                  <div className="circle-img"><img src="assets/img/ico-gyroscope-2x.png" /></div>
                  <h3>Gyroscope</h3>
                  <p>Upside down is downside up and everything in between when you party with our Gyroscope!</p>
                  <span className="explore-link">Explore Gyroscope »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-10" data-original="true">
                <a href="game/foammachine.html">
                  <div className="box-heading foam-party" />
                  <div className="circle-img"><img src="assets/img/ico-foam-party-2x.png" /></div>
                  <h3>Foam Machine</h3>
                  <p>More foam means more fun! It never stops when you throw a foam machine party!</p>
                  <span className="explore-link">Explore Foam Machine »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-2" data-original="true">
                <a href="game/hamsterball.html">
                  <div className="box-heading hamster-ball" />
                  <div className="circle-img"><img src="assets/img/ico-hamster-ball-2x.png" /></div>
                  <h3>Hamster Ball</h3>
                  <p>End over end you’ll go as you roll around like a human hamster in our giant inflatable balls!
                  </p>
                  <span className="explore-link">Explore Hamster Ball »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-12" data-original="true">
                <a href="game/bubblesoccer.html">
                  <div className="box-heading bumper-balls-w-arena" />
                  <div className="circle-img"><img src="assets/img/ico-bubble-ball-2x.png" /></div>
                  <h3>Bubble Soccer</h3>
                  <p>It's a bouncing, crashing and smashing good time with our version of the world's most popular
                    sport!</p>
                  <span className="explore-link">Explore Bubble Soccer »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-13" data-original="true">
                <a href="game/gaga.html">
                  <div className="box-heading gaga" />
                  <div className="circle-img"><img src="assets/img/ico-gaga-2x.png" /></div>
                  <h3>Gaga</h3>
                  <p>You'll go gaga competing against each other in a fun and fast-paced game of single-ball
                    dodgeball.</p>
                  <span className="explore-link">Explore Gaga »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-14" data-original="true">
                <a href="game/bouncehouses.html">
                  <div className="box-heading inflatable-bounce-houses" />
                  <div className="circle-img"><img src="assets/img/ico-bounce-house-2x.png" /></div>
                  <h3>Bounce Houses</h3>
                  <p>From castles to slides and everything in between we've got the inflatables that kids love the
                    most!</p>
                  <span className="explore-link">Explore Bounce Houses »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-15" data-original="true">
                <a href="game/giantwaterslide.html">
                  <div className="box-heading inflatable-water-slides" />
                  <div className="circle-img"><img src="assets/img/ico-slide-2x.png" /></div>
                  <h3>Giant Water Slide</h3>
                  <p>Your party will be a summertime sensation when you book our incredible giant water slide!</p>
                  <span className="explore-link">Explore Giant Water Slide »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-16" data-original="true">
                <a href="game/obstaclecourse.html">
                  <div className="box-heading inflatable-obstacle-course" />
                  <div className="circle-img"><img src="assets/img/ico-obstacle-course-2x.png" />
                  </div>
                  <h3>Obstacle Course</h3>
                  <p>Our giant, inflatable obstacle course is an exciting new twist on a time-tested favorite!</p>
                  <span className="explore-link">Explore Obstacle Course »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-17" data-original="true">
                <a href="game/ubot.html">
                  <div className="box-heading u-bot" />
                  <div className="circle-img"><img src="assets/img/ico-ubot-2x.png" /></div>
                  <h3>U:bot</h3>
                  <p>Be the Bot when you step inside and control a giant robot! A Games2U exclusive event!</p>
                  <span className="explore-link">Explore U:bot »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-18" data-original="true">
                <a href="game/beatthebucket.html">
                  <div className="box-heading beat-the-bucket" />
                  <div className="circle-img"><img src="assets/img/ico-beat-the-bucket-2x.png" />
                  </div>
                  <h3>Beat the Bucket</h3>
                  <p>It's a modern-day dunk tank that's easy to play and hard to resist! Can you beat the bucket?
                  </p>
                  <span className="explore-link">Explore Beat the Bucket »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-19" data-original="true">
                <a href="game/megascreen.html">
                  <div className="box-heading av-cart" />
                  <div className="circle-img"><img src="assets/img/ico-av-cart-2x.png" /></div>
                  <h3>Mega Screen</h3>
                  <p>Watch the latest hit movies or play your favorite video game on our 20 foot mega screen!</p>
                  <span className="explore-link">Explore Mega Screen »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-20" data-original="true">
                <a href="game/videogamestation.html">
                  <div className="box-heading video-game-station" />
                  <div className="circle-img"><img src="assets/img/ico-video-game-2x.png" /></div>
                  <h3>Video Game Station</h3>
                  <p>Play any game, any time and anywhere with our mobile big screen video game stations!</p>
                  <span className="explore-link">Explore Video Game Station »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-21" data-original="true">
                <a href="game/bungeejoust.html">
                  <div className="box-heading inflatable-bungee-joust" />
                  <div className="circle-img"><img src="assets/img/ico-inflatable-bungee-joust-2x.png" /></div>
                  <h3>Bungee Joust</h3>
                  <p>Who will emerge victorious when you compete in our giant inflatable bungee joust?</p>
                  <span className="explore-link">Explore Bungee Joust »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-22" data-original="true">
                <a href="game/socialphotobooth.html">
                  <div className="box-heading social-photo-booth" />
                  <div className="circle-img"><img src="assets/img/ico-social-photo-booth-2x.png" />
                  </div>
                  <h3>Social Photo Booth</h3>
                  <p>Dress up (or down) and share photos from your event on your favorite social media accounts!
                  </p>
                  <span className="explore-link">Explore Social Photo Booth »</span>
                </a>
              </div>
              <div className="col-md-4 col-xs-6 col-ie-4 ti-box game-408" data-original="true">
                <a href="game/nerfwar.html">
                  <div className="box-heading nerf-battle" />
                  <div className="circle-img"><img src="assets/img/ico-nerf-battle-2x.png" /></div>
                  <h3>Nerf War</h3>
                  <p>Let the battle and fun begin with a Nerf party they'll never forget!</p>
                  <span className="explore-link">Explore Nerf War »</span>
                </a>
              </div>
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