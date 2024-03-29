/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=31536000, immutable',
    }
  ],
  images: {
    domains: ["localhost", "g2u.cwsbuild.com"],
    minimumCacheTTL: 1000 * 60 * 60 * 24 * 30,
  },
  compress: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }));
    return config;
  },
}

module.exports = nextConfig
