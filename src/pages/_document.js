import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" />

        <script src="/assets/js/jquery-2.2.4.min.js"></script>
        <script type="text/javascript" src="/assets/js/slick-1.9.0.min.js"></script>

        <link rel="stylesheet" href="/assets/css/bootstrap-3.3.7.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-4-latest.min.css" />
        <link rel="stylesheet" href="/assets/css/foundation.css" />

        <link rel="stylesheet" href="/assets/css/modal.css" />
        <script src="/assets/js/bootstrap-3-latest.min.js"></script>
        <script src="/assets/js/jquery.mask.min.js"></script>
        <script src="/assets/js/foundation.js"></script>
        <script src="/assets/js/zenscroll-min.js"></script>
      </Head>
      <body>

        <Main />

        <NextScript />

        <script src="/assets/js/jstracker.min.js"></script>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJxVHORCgo3I1WOhbDoEnqKkRrq7VDmdY&callback=initMap"
          type="text/javascript"></script>

        <script src="/assets/js/custom.js" />
      </body>
    </Html>
  )
}
