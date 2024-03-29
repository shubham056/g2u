import { getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps  = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')

    const fields = [
        {
            loc: 'https://example.com', // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
        {
            loc: 'https://example.com/dynamic-path-2', // Absolute url
            lastmod: new Date().toISOString(),
            // changefreq
            // priority
        },
    ]

    return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() { }