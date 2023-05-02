import React from 'react';
import Testimonials from './Testimonials';
import ZipCodeFormFooter from './ZipCodeFormFooter';
import BottonNav from './BottonNav';
import BottomFooter from './BottomFooter';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container-fluid no-padding" id="footer">
        <Testimonials />
        <div id="enterZipCode" />
        <ZipCodeFormFooter />
        <BottonNav />
        <BottomFooter />
      </div>
      <div id="overlay" />
      <div id="videoModal">
        <a href="javascript:void(0);" id="videoModalClose">Close X</a>
      </div>
      <div id="mobile-bottom-nav">
        <div className="location-update-wrap">
          <a href="javascript:void(0);" className="location-edit-link"><span className="ti-sprite location-pin" /> (
            <span className="mobile-underline">change location</span> )</a>
          <span className="update-location">
            <span className="close-btn" />
            <form method="post" id="frmMobileFooter" name="frmMobileFooter" action="/">
              <input type="hidden" id="franchiseNameMobFooter" name="franchiseName" defaultValue />
              <div className="ti-input">
                <input id="mobileZipFooter" name="mobileZipFooter" placeholder="Enter Your Zip Code" className="zip-code-input mobile-bottom-nav-input" type="tel" />
              </div>
              <button id="btnMobileZipFooter" className="ti-yellow-button">Go!</button>
            </form>
          </span>
        </div>
        <div><a href="#footerContact"><span className="ti-sprite envelope" /> Request Info</a></div>
        <div><a href="tel:18007142637"><span className="ti-sprite phone" /> Give Us a Call!</a></div>
      </div>
      <div className="mobile-menu-overlay" />
    </div>
  )
}

export default Footer;