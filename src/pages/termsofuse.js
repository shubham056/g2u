import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const termsofuse = () => {
    const SEO = {
        title: "Privacy Policy | Games2U Mobile Entertainment",
        description: "View the privacy policy for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
        canonical: "https://www.g2u.com/privacypolicy",
        openGraph: {
            type: 'website',
            title: 'Privacy Policy | Games2U Mobile Entertainment',
            description: "View the privacy policy for the website for Games2U, America's most trusted provider of mobile entertainment including video game trucks, laser tag equipment, human hamster balls, and more!",
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

                <div className="row no-padding not-home all-events-page" id="headerBanner">
                    <div className="ti-page-header row clearfix">
                        <div className="row ti-row">
                            <div className="limited-width">
                                <h1>Terms of Use</h1>
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
                            <div className="col-sm-12 col-md-12">
                                <h2>ACCEPTANCE OF TERMS THROUGH USE</h2>
                                <p>By using this site or by clicking "I agree" to this Agreement, you ("User") signify your agreement to these terms and conditions. If you do not agree to this Agreement please do not use this site and do not click "I agree". Please check this Agreement periodically for changes as the owner of this site, Games2U ("Company"), reserves the right to revise this Agreement and your continued use of this site following the posting of any changes to the Agreement constitutes acceptance of such changes. The Company reserves the right to terminate a User's use of this site at any time without notice and may do so for any breach of this Agreement or the instructions on this site by User. This Agreement applies to licencors and advertisers as well.</p>
                                <h2>YOU MUST BE OVER 18 TO AGREE TO THIS AGREEMENT AND USE THIS SITE</h2>
                                <p>This Agreement must be completed, understood and agreed to by a person over 18. If a parent or guardian wishes to permit a person under 18, and under his or her supervision, to use this site, he or she should email the Company with his or her explicit permission and acceptance of full legal responsibility for the minor to do so. If you are not yet 18, if you are easily offended, or are accessing this site from any country where material on this site is prohibited or illegal, please leave now as you do not have permission to access this site.</p>
                                <h2>LICENSE TO USE THIS SITE</h2>
                                <p>Upon your agreement to this Agreement, the Company hereby grants you a non-exclusive, non-transferable limited license to use this site in strict accordance with the terms and conditions in this Agreement and as permitted via instructions on this site. You agree not to make any false or fraudulent statements in your use of or to gain access to this site. You acknowledge and agree that all content and services available on this site are property of the Company and its advertisers and licencors and are protected by copyrights, moral rights, trademarks, service marks, patents, trade secrets, and other proprietary rights and laws, in the U.S. and internationally. All rights not expressly granted herein are fully reserved by the Company, its advertisers and licencors. You agree to pay for any and all purchases and services made using your name and credit card through this Site, not to challenge any such charges and to pay for all collections and/or attorneys fees resulting from any non-payment.</p>
                                <h2>LICENSE RESTRICTIONS</h2>
                                <h3>Use</h3>
                                <p>&nbsp;</p>
                                <p>Except as may be explicitly permitted through this site, you agree not to save, download, cut and paste, sell, license, rent, lease, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit, or create derivative works from materials, code or content on or from this site. Systematic retrieval of data or other content from this site to create or compile, directly or indirectly, a collection, compilation, database or directory without written permission from the Company is prohibited. In addition, use of the content or materials for any purpose not expressly permitted in this Agreement is prohibited.</p>
                                <p>&nbsp;</p>
                                <h3>Security</h3>
                                <p>&nbsp;</p>
                                <p>You agree that if you are issued a Username and Password by the Company, you shall use your best efforts to prevent access to this site through your Username and Password by anyone other than yourself, including but not limited to, keeping such information strictly confidential, notifying the Company immediately if you discover loss or access to such information by another party not under your control and supervision, and by using a Username and Password not easily guessed by a third party.</p>
                                <p>You agree that you shall not try to reverse engineer, reverse assemble, reverse compile, decompile, disassemble, translate or otherwise alter any executable code, contents or materials on or received via this site. You understand that such actions are likely to subject you to serious civil and criminal legal penalties and that the Company shall pursue such penalties to the full extent of the law to protect its rights and the rights of its other licencors.</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content section end */}
        </>)
}

export default termsofuse