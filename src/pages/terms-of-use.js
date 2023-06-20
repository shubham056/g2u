import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const termsofuse = ({ content, page_name, page_caption, banner_img, meta_title, meta_description }) => {
    const SEO = {
        title: meta_title && meta_title != '' ? meta_title : "Privacy Policy | Games2U Mobile Entertainment",
        description: meta_description && meta_description != '' ? meta_description : "View the privacy policy for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
        canonical: "https://www.g2u.com/privacypolicy",
        openGraph: {
            type: 'website',
            title: meta_title && meta_title != '' ? meta_title : 'Privacy Policy | Games2U Mobile Entertainment',
            description: meta_description && meta_description != '' ? meta_description : "View the privacy policy for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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

export default termsofuse;

export async function getStaticProps() {
    try {
        const payload = { url: `${apiBaseUrl}/content/terms-of-use`, method: 'GET' }
        const termsOfUseContent = await fetchApi(payload);
        const termsOfUseContentData = termsOfUseContent.data.content;
        if (termsOfUseContentData && termsOfUseContentData.content != undefined && termsOfUseContentData.content == '') {
            return {
                notFound: true,
                revalidate: 5,
            };
        } else {
            const { content, page_name, page_caption, banner_img, meta_title, meta_description } = termsOfUseContentData
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
        console.log('error in terms of use us api call', error)
        return {
            notFound: true
        };
    }
}