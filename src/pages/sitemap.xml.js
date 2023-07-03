import React from "react";
import * as fs from "fs";
import { apiBaseUrl, fetchApi } from "@/utils/fetchApi";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {

    const BASE_URL = { development: "http://localhost:3000", production: "https://g2u.vercel.app" }[process.env.NODE_ENV];

    const staticPaths = fs
        .readdirSync("src/pages")
        .filter((staticPage) => {
            return ![
                "sitemap.xml.js",
                "404.js",
                "index",
                "_app.js",
                "_document.js",
                "api",
                "[slug]"
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
        });

    //console.log("staticPaths", staticPaths)

    // remove index path
    let staticPathss = staticPaths.filter((item, index) => index != 4)
    staticPathss = staticPathss.map(item => item + "/")
    //console.log("staticPathss", staticPathss)

    const payload = { url: `${apiBaseUrl}/categoty/get-all-slug`, method: 'GET' }
    let categories = await fetchApi(payload);
    let gamesData = categories.data.slug
    console.log("gamesData", categories)

    let dynamicGamesDetailsPath = [];
    if (gamesData && gamesData.length > 0) {
        console.log("gamesData!!!!==", gamesData)
        gamesData.map(item => dynamicGamesDetailsPath.push(`${BASE_URL}/games/${item.slug}/`))
    }



    const homePath = { development: "http://localhost:3000", production: "https://g2u.vercel.app" }[process.env.NODE_ENV];

    //const allPaths = [homePath,...staticPathss,...dynamicBlogPaths,...dynamicServicesPaths];
    const allPaths = [homePath, ...staticPathss, ...dynamicGamesDetailsPath];
    // console.log("allPaths",allPaths)

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
            .map((url, index) => {
                return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${index == 0 ? "daily" : "monthly"}</changefreq>
              <priority>${index == 0 ? 1.00 : 0.8}</priority>
            </url>
          `;
            })
            .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;