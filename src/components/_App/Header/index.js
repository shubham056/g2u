import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { SwrUtils } from '@/utils/SwrUtils';


const modalSchema = Yup.object().shape({
    zipcode: Yup.number()
        .required('Zip code is a required field')// optional
        .typeError('Please enter valid zip code.')// optional as well
    // .test('len', 'Please enter valid zip code.', val => val.toString().length === 5)
})
const bg = {
    overlay: {
        background: "rgba(128, 128, 128, 0.5)"
    }
};

const Header = (
    // { categoryData, affiliate, onSubmitTopBarChangeLocation, register, handleSubmit, errors, isOpen }
) => {
    const zipCode = useRef(0)
    let g2uZipCode = localStorage.getItem('g2u_zipcode'); // get zipcode from local storage
    const [open, setOpen] = useState((g2uZipCode != null && g2uZipCode != 'undefined') ? false : true);
    const onCloseModal = () => setOpen(false);

    const [isShownMenu, setIsShownMenu] = useState(false);
    const [changeLocation, setChangeLocation] = useState(false)

    console.log("modal open data +++++++", open)

    const modalFormOptions = { resolver: yupResolver(modalSchema) }
    const { register, setValue, formState: { errors, isSubmitting }, handleSubmit } = useForm(modalFormOptions);
    const { register: register1, setValue: setValue1, formState: { errors: errors1, isSubmitting: isSubmitting1 }, handleSubmit: handleSubmit1 } = useForm(modalFormOptions); //for topbar change location

    useEffect(() => {
        console.log("call use effect in header")
        zipCode.current = g2uZipCode ? g2uZipCode : "00000"
    }, [])

    const apicallUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const { data: gamesData, isLoading, isError, mutate } = SwrUtils(`${apicallUrl}/games/${zipCode.current}`)
    console.log("swr data in header ++++++", gamesData)
    if (gamesData && gamesData.data?.games != null) {
        if (gamesData.data.games !== "" && gamesData.data.games.affiliate) {
            localStorage.setItem('g2u_zipcode', zipCode.current);
            open ? setOpen(false) : ''
        }
    }

    //Main popup submit handler
    const onSubmit = async formValue => {
        const { zipcode } = formValue
        zipCode.current = zipcode
        mutate(`${apicallUrl}/games/${zipCode.current}`)
    }
    //topbar change location submit handler
    const onSubmitTopBarChangeLocation = async formValue => {
        const { zipcode } = formValue
        zipCode.current = zipcode
        mutate(`${apicallUrl}/games/${zipCode.current}`)
    };
    if (errors1?.zipcode != null) {
        setValue1('zipcode', '')
        console.log("errrrTopBar", errors1)
    }

    if (errors?.zipcode != null) {
        setValue('zipcode', '')
        console.log("errrr", errors)
    }

    return (
        <>
            <div id="navigation" className="clearfix">
                <div className="col-sm-4 ti-main-logo">
                    <Link href="/"><img src="/assets/img/g2u-logo.png" /></Link>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="ti-underline-element clearfix hidden-sm hidden-xs">
                        <div className="col-sm-6 ti-location location-update-wrap" id="locationNav">
                            <span className="ti-sprite location-pin" />
                            <span className="selected-location">
                                <span id="navbarLocation"><strong /></span>

                                {
                                    (gamesData != undefined && gamesData && gamesData.data?.games.affiliate != undefined)
                                        ?
                                        <span class="selected-location" style={{ display: changeLocation ? 'none' : '' }}>
                                            <span id="navbarLocation"><strong>{gamesData.data.games.affiliate.city} {changeLocation}</strong></span>
                                            <span class="ti-light-orange-text">(&nbsp;<a href="javascript:void(0);" class="ti-light-orange-text location-edit-link" onClick={() => setChangeLocation(true)} >change location</a>&nbsp;)</span>
                                        </span>
                                        :
                                        <>
                                            <span className="ti-light-orange-text" style={{ display: changeLocation ? 'none' : '' }}>(&nbsp;<a href="javascript:void(0);" className="ti-light-orange-text location-edit-link" onClick={() => setChangeLocation(true)}>Enter Zip Code</a>&nbsp;)</span>
                                        </>


                                }
                                <span className="update-location" style={{ display: (changeLocation) ? 'block' : 'none', margin: '-25px', paddingLeft: 40 }}>
                                    <form
                                        onSubmit={handleSubmit(onSubmitTopBarChangeLocation)}
                                    // id="frmLocNav"
                                    // name="frmLocNav"
                                    // method="post" action="/"
                                    >
                                        <span className="close-btn" onClick={() => setChangeLocation(false)} />
                                        <input type="hidden" id="franchiseNameNav" name="franchiseName" defaultValue />
                                        <div className="ti-input">
                                            <input
                                                {...register("zipcode")}
                                                type="text"
                                                // id="headerZip"
                                                // name="headerZip"
                                                placeholder={errors?.zipcode != null ? (errors.zipcode.message) ? errors.zipcode.message : zipCodeServiceStaus : "Enter your zip code"}
                                                className="zip-code-input"
                                            />
                                        </div>
                                        <button className="ti-yellow-button" type="submit">Go!</button>
                                    </form>
                                </span>
                            </span>

                        </div>
                        <div className="col-sm-6 ti-align-right" id="headerPhone">Book Your Event Today! <strong><a href="tel:18007142637" className="ti-dark-blue-text">1‑800‑71‑<span className="ti-orange-text">GAMES</span></a></strong></div>
                    </div>
                    <div id="navLinks" className="clearfix">
                        <span id="mobileMenu"><span className="ti-sprite hamburger-icon" /><span className="hidden-xs">
                            MENU</span></span>
                        <a href="javascript:void(0);" className="visible-sm" id="mobileLocationIcon">
                            <span className="ti-sprite blue-location-pin" />
                        </a>
                        <a href="tel:18007142637" className="visible-xs visible-sm" id="mobilePhoneIcon">
                            <span className="ti-sprite blue-phone" />
                        </a>
                        <div className="links-container">
                            <div className="visible-sm visible-xs mobile-location location-update-wrap">
                                <span className="ti-sprite location-pin" />
                                <span className="selected-location">
                                    <strong />
                                    <span className="ti-light-orange-text">( <a href="javascript:void(0);" className="ti-light-orange-text location-edit-link">change location</a> )</span>
                                </span>
                                <span className="update-location" >
                                    <form method="post" id="frmMobileZipNav" name="frmMobileZipNav" action="/">
                                        <input type="hidden" id="franchiseNameMobNav" name="franchiseName" defaultValue />
                                        <span className="close-btn" />
                                        <div className="ti-input">
                                            <input type="tel" name="mobileZipNav" id="mobileZipNav" placeholder="Enter Your Zip Code" className="zip-code-input" />
                                        </div>
                                        <button id="btnMobileZip" className="ti-yellow-button">Go!</button>
                                    </form>
                                </span>
                            </div>
                            <div className="no-padding" id="ourGamesNav" onMouseEnter={() => setIsShownMenu(true)} onMouseLeave={() => setIsShownMenu(false)}>
                                <a href="#footerContact" className="visible-sm visible-xs ti-blue-background">BOOK YOUR
                                    EVENT</a>
                                <a href="/ourgames">OUR GAMES</a>
                                <div className="sub-menu" style={{ display: isShownMenu ? 'block' : 'none' }}>
                                    <div className="ti-sub-head clearfix">
                                        <h2 className="no-border ti-dark-blue-text pull-left">Games They'll Love!</h2>
                                        <Link href="/ourgames" className="ti-orange-text pull-right ti-inline-block">View All
                                            Available Games</Link>
                                    </div>
                                    <div className="col-md-4 padding-top">
                                        {
                                            (gamesData != undefined && gamesData && gamesData.data?.games.categories != undefined && gamesData.data?.games.categories.length > 0)
                                                ?
                                                gamesData.data.games.categories.map(item => {
                                                    return (
                                                        <Link href={`/game/${item.category_name}`}><img src={item.icon != '' ? item.icon : "assets/img/ico-video-game-theater-blue-2x.png"} />{item.category_name}</Link>
                                                    )
                                                })

                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="no-padding" id="g2uExperience">
                                <Link href="/theg2u-difference">THE G2U DIFFERENCE</Link>
                            </div>
                            <div className="no-padding" id="corporateEventsNav">
                                <Link href="/corporate-events">CORPORATE EVENTS</Link>
                            </div>
                            <div className="no-padding" id="franchiseNav">
                                <Link href="/franchise-information">OWN A FRANCHISE</Link>
                            </div>
                            <div className="no-padding" id="freePartyNav">
                                <Link href="/yourparty-couldbefree">YOUR PARTY COULD BE FREE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={onCloseModal}
                closeOnOverlayClick={false}
                styles={{ bg }}
            >
                <div className="container-modal">
                    <div className="logo-container">
                        <img data-em="logo" src="assets/img/g2u-logo.png" />
                    </div>
                    <div className="text-container">
                        <div data-em="text-line-1" className="zip-text-line-1">Please enter your zipcode so we can provide you
                            with local pricing and options:</div>
                        <div className="border-container">
                            <span className="arrow arrow-bg-color" />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="hidden" id="modalFranchiseName" name="modalFranchiseName" defaultValue />
                                <div className="template-inputs">
                                    <input
                                        {...register("zipcode")}
                                        type="zip"
                                        placeholder={errors?.zipcode != null ? (errors.zipcode.message) ? errors.zipcode.message : zipCodeServiceStaus : "Enter your zip code"}
                                        data-required="Zip code is required"
                                        autoComplete="off"
                                        className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
                                    />
                                    {/* <span style={{ color: 'red' }}>{errors.zipcode?.message}</span> */}
                                </div>
                                <div className="buttons-container">
                                    <button
                                        data-em="button"
                                        type="submit"
                                        className="submit btn-bg-color jsBtnPopupSubmit"
                                        //id="submit-button"
                                        target
                                    >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal >
        </>

    )
}

export default Header