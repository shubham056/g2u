import React from 'react'
import Header from '@/components/_App/Header'
import { NextSeo } from 'next-seo';

const privacypolicy = () => {
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
                                <h1>Privacy Policy</h1>
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
                                <p>We have created this Privacy Policy Statement to demonstrate our firm commitment to the privacy concerns of users of our site and to disclose our information gathering and dissemination practices.</p>
                                <h2>Our Contact Information:</h2>
                                <p>Telephone: 1-800-714-2637</p>
                                <p>Email: <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0474766d7265677d446336712a676b69">[email&nbsp;protected]</a></p>
                                <h2>Information we collect:</h2>
                                <p>Our Web server may automatically recognize the domain name of each visitor to our Web site (when possible.)</p>
                                <p>We may also collect aggregate information on what pages our visitors' access, user-specific information on what pages our visitors' access, and information volunteered by our visitors (such as survey information, site registrations, and/or purchase information).</p>
                                <h2>Supplemental Information:</h2>
                                <p>We may supplement the information that you provide to use with information that is received from third parties.</p>
                                <h2>Our use of cookies:</h2>
                                <p>We may use cookies to store visitors preferences, record session information (such as items that consumers add to their shopping cart), record user-specific information on what pages user access or visit, alert visitors to new areas that we think might be of interest to them when they return to our site, and to customize Web page content based on visitors' browser type or other information that the visitor sends.</p>
                                <h2>Our use of information:</h2>
                                <p>The information we collect may be used to improve the content of our Web site(s), used to customize the content and/or layout of our page for each individual visitor, used to notify visitors about updates to our Web site, shared with other reputable organizations to help them contact consumers for marketing purposes, and/or used by us to contact consumers for marketing purposes.</p>
                                <p>If you supply us with your postal address online you may receive periodic mailings from us with information on new products and services or upcoming events. You may also receive mailings from other reputable companies. If you do not wish to receive such mailings, please notify us by contacting us at the above email address or telephone number.</p>
                                <p>If you supply us with your telephone number on-line you may receive telephone contact from us with information regarding new products and services or upcoming events. You may also receive telephone contact from other reputable companies. If you do not wish to receive such telephone contact, please notify us by contacting us at the above email address or telephone number.</p>
                                <h2>Your acceptance of this policy:</h2>
                                <p>By using this site, you signify your assent to our Privacy Policy. We reserve the right, at our discretion, to change, modify, add, or remove portions from this policy at any time.</p>
                                <p>If our information practices change at some time in the future, we will post the policy changes to our Web site to notify you of these changes and provide you with the ability to opt out of these new uses. If you are concerned about how your information is used, you should check back periodically at our Web site. You may prevent your information from being used for purposes other than those for which it was originally collected by notifying us at the above email address or telephone number.</p>
                                <h2>Corrections to your information:</h2>
                                <p>Upon request we will provide site visitors with a description of information that we may maintain about them. You may review for accuracy and update any personal information we have about you.</p>
                                <p>&nbsp;</p>
                                <p>If you feel that this site is not following its stated information policy, you may contact us at the above email address or phone number.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* content section end */}
        </>)
}

export default privacypolicy