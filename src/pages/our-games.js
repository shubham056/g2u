import React, { useEffect, useState } from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import useGamesData from '@/states/stores/games-data';
import trimString from '@/utils/trimString'
import Link from 'next/link';
import Footer from '@/components/_App/Footer/Footer';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";
import BrandLogo from '@/components/_App/BrandLogo';
import LoadMoreButton from '@/components/LoadMoreButton';
import GamesCard from '@/components/GamesCard';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

const viewSuggestionsSchema = Yup.object().shape({
  sAgeRange: Yup.string().required('First name is required.'),
  sGroupSize: Yup.string().required('Last name is required.'),
})

const ourgames = ({ testimonialsData, investorsData, siteSettingData, gamesSelectOptionData }) => {
  const { zipcode, games, loading, error } = useGamesData(); // ftech initail games data  

  const [isLoading, setisLoading] = useState(false);
  const [isLoadingViewSuggestion, setisLoadingViewSuggestion] = useState(false);
  const [loadingBtnText, setLoadingBtnText] = useState('Load More');
  const [viewSuggestionBtnText, setViewSuggestionBtnText] = useState('View Suggestion');
  const [page, setPage] = useState(1);
  const [gamesData, setGamesData] = useState([]);
  const [ageRangeVal, setAgeRangeVal] = useState('')
  const [participantsVal, setParticipantsVal] = useState('')
  const [showSuggestionData, setShowSuggestionData] = useState(false)
  const [suggestionData, setSuggestionData] = useState([])

  const suggestionFormOptions = { resolver: yupResolver(viewSuggestionsSchema) }
  const { register, setValue, formState: { errors, isSubmitting, isDirty, isValid }, handleSubmit } = useForm(suggestionFormOptions);

  useEffect(() => {
    if (!loading && games && games.categories.list.length > 0) {
      setGamesData(games.categories.list)
      setPage(games.categories.pagination.next)
    }
  }, [games])

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

  // function for get more events data
  const getMoreGames = async () => {
    setisLoading(true)
    setLoadingBtnText('Loading...')
    const payload = { url: `${apiBaseUrl}/games/${zipcode}/${page}/3`, method: 'GET' }
    const response = await fetchApi(payload); // call event list API
    const responseData = response.data.games;
    //merging two arrays
    if (responseData && responseData.categories.list.length > 0) {
      setGamesData([...gamesData, ...responseData.categories.list])
      setPage(page + 1)
      setisLoading(false)
      setLoadingBtnText('Load More')
    } else {
      setGamesData(gamesData)
      setisLoading(false)
      setLoadingBtnText('Load More')
    }
  };

  const handleChangeAgeRange = (event) => {
    setAgeRangeVal(event.target.value);
  };
  const handleChangeParticipants = (event) => {
    setParticipantsVal(event.target.value);
  };
  //handle View Suggestion function
  const onSubmit = async (data) => {
    const { sAgeRange, sGroupSize } = data
    if (sAgeRange != '' && sGroupSize != '') {
      setisLoadingViewSuggestion(true)
      setViewSuggestionBtnText("Loading...")
      //call filter API here
      const payload = {
        url: `${apiBaseUrl}/games/search`, method: 'POST', data: { "zipcode": zipcode, "age_range_id": sAgeRange, "participants_range_id": sGroupSize, "page_limit": 3, "page_record": 1 }
      }
      const response = await fetchApi(payload); // call event list API
      const responseData = response.data.games;
      if (responseData && responseData.categories.list.length > 0) {
        setSuggestionData(responseData.categories.list)
        setisLoadingViewSuggestion(false)
        setViewSuggestionBtnText("View Suggestion")
        setShowSuggestionData(true)
      } else {
        setisLoadingViewSuggestion(false)
        setViewSuggestionBtnText("View Suggestion")
        setShowSuggestionData(true)
      }
    } else {
      console.log("select options is null, please section any option first")
    }

  }

  return (
    <>
      <NextSeo {...SEO} />
      {/* <!-- top header and banner with mobile menu section start --> */}
      <div className="container-fluid">
        {/* <!-- header section start with mobile naviagtion  --> */}
        <Header siteSettings={siteSettingData} />
        {/* <!-- header section end with mobile naviagtion  --> */}

        {/*  Find the Perfect Game section start */}
        <div className="row no-padding not-home all-games-page" id="headerBanner">
          <div className="ti-page-header row clearfix">
            <div className="row ti-row">
              <div className="limited-width">
                <h1>Find the Perfect Game</h1>
                <p>Enter the details below, and we'll give you our suggestions.</p>
                <div className="text-center">
                  <form id="frmSuggestGame" name="frmSuggestGame" onSubmit={handleSubmit(onSubmit)}>
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <select id="sAgeRange" {...register("sAgeRange")} className={errors && errors.sAgeRange != null && errors.sAgeRange.message ? "ti-error ti-error-text" : null}>
                          <option value=''>Please select...</option>
                          {
                            gamesSelectOptionData && gamesSelectOptionData.age_range_list.length > 0
                              ?
                              gamesSelectOptionData.age_range_list.map(item => <option key={item.id} value={item.id}>{item.age_range}</option>)
                              :
                              null
                          }
                        </select>
                        <span className="ti-sprite select-arrows" />
                      </div>
                    </div>
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <select id="sGroupSize" {...register("sGroupSize")} className={errors && errors.sGroupSize != null && errors.sGroupSize.message ? "ti-error ti-error-text" : null}>
                          <option value=''>Please select...</option>
                          {
                            gamesSelectOptionData && gamesSelectOptionData.participants_range_list.length > 0
                              ?
                              gamesSelectOptionData.participants_range_list.map(item => <option key={item.id} value={item.id}>{item.participants_range} Attendees</option>)
                              :
                              null
                          }
                        </select>
                        <span className="ti-sprite select-arrows" />
                      </div>
                    </div>
                    <div className="ti-inline-block">
                      <div className="ti-input">
                        <button type="submit" className="ti-yellow-button view-suggestions">   {isLoadingViewSuggestion ? <i className="fa fa-refresh fa-spin"></i> : null} {viewSuggestionBtnText}</button>
                      </div>
                    </div>
                  </form>
                  { /*Filter view suggestions data start */}
                  {
                    showSuggestionData
                      ?
                      <div className="suggested-games">
                        {(suggestionData && suggestionData.length > 0)
                          ?
                          <h2 className="no-border">Our Suggested Games:</h2>
                          :
                          null
                        }

                        <div className="row">
                          {(suggestionData && suggestionData.length > 0)
                            ?
                            suggestionData.map(item => {
                              const { id, slug, image, icon, category_name } = item
                              return (
                                <GamesCard
                                  key={id}
                                  dynamicClass={"col-md-4 col-xs-6 col-ie-4 ti-box game-10"}
                                  id={id}
                                  link={games.affiliate.city.toLowerCase()}
                                  slug={slug}
                                  imgSrc={image}
                                  icon={icon}
                                  categoryName={category_name}
                                  caption={trimString(item.category_caption, 85)}
                                />
                              )
                            })
                            :
                            <div>
                              <h4 className='no-suggestion-found'>No suggestion found!</h4>
                            </div>
                          }
                        </div>
                        <div className="row ti-view-all-row">
                          <div className="col-xs-12">
                            <Link href={"/our-games#allGamesContent"}>
                              <div className="continue-to-site view-all-games"><span className="ti-sprite yellow-chevron-down" /> view entire game catalog <span className="ti-sprite yellow-chevron-down" /></div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      :
                      null
                  }

                  { /*Filter view suggestions data end */}

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
                (gamesData && gamesData.length > 0)
                  ?
                  gamesData.map(item => {
                    const { id, slug, image, icon, category_name } = item
                    return (
                      <GamesCard
                        key={id}
                        dynamicClass={"col-md-4 col-xs-6 col-ie-4 ti-box game-1"}
                        id={id}
                        link={games.affiliate.city.toLowerCase()}
                        slug={slug}
                        imgSrc={image}
                        icon={icon}
                        categoryName={category_name}
                        caption={trimString(item.category_caption, 85)}
                      />
                    )
                  })
                  :
                  null
              }
            </div>
            {
              (gamesData && games && (gamesData.length != games.categories.pagination.total))
                ?
                <LoadMoreButton
                  getMoreData={getMoreGames}
                  isLoading={isLoading}
                  loadingBtnText={loadingBtnText}
                />
                :
                null
            }

          </div>
        </div>
        <div className="row ti-blue-background as-seen-banner mobile-wrap not-home">
          <div className="limited-width">
            <div className="as-seen-images as-seen-mobile">
              <BrandLogo investors={investorsData} />
            </div>
            <div className="as-seen-images as-seen-desktop">
              <BrandLogo investors={investorsData} />
            </div>
          </div>
        </div>
      </div>
      {/* Our Complete Game Catalog section end */}

      {/* content section end */}

      <Footer
        testimonials={testimonialsData}
        siteSettings={siteSettingData}
      />
    </>
  )
}

export default ourgames

export async function getStaticProps() {
  try {
    const testimonialsPayload = { url: `${apiBaseUrl}/testimonials`, method: 'POST', data: { page_limit: 20, page_record: 1 } }
    const investorsPayload = { url: `${apiBaseUrl}/investors`, method: "POST", data: { page_limit: 20, page_record: 1 } };
    const siteSettingsPayload = { url: `${apiBaseUrl}/site-settings`, method: "GET", };
    const gamesFilterOptionPlayload = { url: `${apiBaseUrl}/games/select-list`, method: "GET", };

    const testimonialsContent = await fetchApi(testimonialsPayload); // call testimonials API
    const investorsContent = await fetchApi(investorsPayload); // call investors API
    const siteSettingContent = await fetchApi(siteSettingsPayload); // call investors API
    const gamesSelectOptionContent = await fetchApi(gamesFilterOptionPlayload); // call games select option list API

    const testimonialsData = testimonialsContent.data.testimonials;
    const investorsData = investorsContent.data.investors;
    const siteSettingData = siteSettingContent.data.settings;
    const gamesSelectOptionData = gamesSelectOptionContent.data.select_list;

    return {
      props: {
        testimonialsData,
        investorsData,
        siteSettingData,
        gamesSelectOptionData,
      },
      revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log('error in testimonials api call', error)
  }
}