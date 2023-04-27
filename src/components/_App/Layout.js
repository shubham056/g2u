import React from 'react'
import SEO from '../../../next-seo-config';
import { DefaultSeo } from 'next-seo';


const Layout = ({ children }) => {
    return (
        <>
            <DefaultSeo {...SEO} />

            {children}
        </>
    );
}

export default Layout;