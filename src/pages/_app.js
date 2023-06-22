import '@/styles/globals.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Layout from '../components/_App/Layout';
import axios from "axios";
import { Analytics } from '@vercel/analytics/react';
import SEO from '../../next-seo-config';
import { DefaultSeo } from 'next-seo';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
