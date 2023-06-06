import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const cancelationpolicy = ({ content }) => {
    const SEO = {
        title: "Game Trucks, Laser Tag, Hamster Ball Parties from Games2U",
        description: "America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience theyâ€™ll never forget!",
        canonical: "https://www.g2u.com/cancelationpolicy",
        openGraph: {
            type: 'website',
            title: 'Game Trucks, Laser Tag, Hamster Ball Parties from Games2U',
            description: "America's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience theyâ€™ll never forget!",
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
                                <h1>Cancellation Policy</h1>
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
                            {content && <div className="col-sm-12 col-md-12" dangerouslySetInnerHTML={{ __html: content }}></div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* content section end */}
        </>)
}

export default cancelationpolicy;

export async function getStaticProps() {
    try {
        const payload = { url: `${apiBaseUrl}/content/our-cancelation-policy`, method: 'GET' }
        const cancelationPolicyContent = await fetchApi(payload);
        const cancelationPolicyContentData = cancelationPolicyContent.data.content;
        if (cancelationPolicyContentData && cancelationPolicyContentData.content != undefined && cancelationPolicyContentData.content == '') {
            return {
                notFound: true,
                revalidate: 5,
            };
        } else {
            const { content } = cancelationPolicyContentData
            return {
                props: {
                    content
                },
                revalidate: 5, // In seconds
            };
        }
    } catch (error) {
        console.log('error in our cancelation policy api call', error)
        return {
            notFound: true
        };
    }
}