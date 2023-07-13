const seo = (data) => {
    const { title, description, canonical, openGraph: { type, title: openGtitle, description: openGdescription, url }, twitter: { handle, site, cardType } } = data
    console.log("seoData!!!", data)
    let seoData = {
        title,
        description,
        canonical,
        openGraph: {
            type,
            title: openGtitle,
            description: openGdescription,
            url,
            images: [
              {
                url: "/assets/img/g2u-logo.png",
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              }
            ],
        },
        twitter: {
            handle,
            site,
            cardType
        },
    }

    return seoData;
}
export default seo;