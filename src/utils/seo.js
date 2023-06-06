const seo = (seoData) => {
    let seoData = {
        title: "About Us | Games2U Mobile Entertainment",
        description: "Learn more about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
        canonical: "https://www.g2u.com/about-us",
        openGraph: {
            type: 'website',
            title: 'About Us | Games2U Mobile Entertainment',
            description: "Learn more about Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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

    return seoData;
}
export default seo;