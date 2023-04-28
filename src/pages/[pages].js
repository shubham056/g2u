import React from 'react'
import { NextSeo } from 'next-seo';
import Header from '../components/_App/Header'


const DynamicPages = () => {
    const SEO = {
        title: "Austin Game Trucks, Laser Tag & Hamster Balls from Games2U",
        description: "Austin's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience they'll never forget!",
        openGraph: {
            type: 'website',
            url: 'https://www.g2u.com/',
            title: "Austin Game Trucks, Laser Tag & Hamster Balls from Games2U",
            description: "Austin's #1 Rated provider of video game trucks, laser tag equipment, human hamster balls, and more! Book your Games2U event today for an experience they'll never forget!"
            // images: [
            //     {
            //       url: '/images/banner-two/banner_main.jpg',
            //       width: 800,
            //       height: 600,
            //       alt: 'Og Image Alt',
            //     },
            //     {
            //       url: '/images/banner-two/banner_main.jpg',
            //       width: 800,
            //       height: 600,
            //       alt: 'Og Image Alt 2',
            //     },
            //   ],
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
            {/* <Header/> */}
            <div>DynamicPages</div>
        </>

    )
}

export default DynamicPages