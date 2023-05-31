import React, { useState } from 'react';
import Link from 'next/link'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import useGamesData from '@/states/stores/games-data';
import { useRouter } from 'next/router'

const modalSchema = Yup.object().shape({
    zipcode: Yup.string().matches(/^[0-9]{5}$/, 'Zip code must be 5 digits.'),
})
const bg = {
    overlay: {
        background: "rgba(128, 128, 128, 0.5)"
    }
};

const Header = () => {
    const router = useRouter()
    const [zipCodeServiceStaus, setZipCodeServiceStaus] = useState('Enter your zip code.')
    const { zipcode, setZipcode, games, loading, error, updateGamesData } = useGamesData();
    console.log('games============', games, zipcode)

    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);
    if (!loading && zipcode == 0) {
        open ? '' : setOpen(true)
    }

    const [isShownMenu, setIsShownMenu] = useState(false);
    const [changeLocation, setChangeLocation] = useState(false)

    const modalFormOptions = { resolver: yupResolver(modalSchema) }
    const { register, setValue, formState: { errors, isSubmitting }, handleSubmit } = useForm(modalFormOptions);

    //Main popup submit handler
    const onSubmit = async formValue => {
        const { zipcode } = formValue
        try {
            await setZipcode(zipcode).then(
                updateGamesData(zipcode, async function (err, callBackRes) {
                    if (err) {
                        console.log(err?.message)
                        let errorMsg = err?.message != null ? err.message : 'This Zip is not serviced.'
                        setZipCodeServiceStaus(errorMsg)
                        setValue('zipcode', '')
                    }
                    else {
                        setOpen(false)
                    }
                }))
        } catch (e) {
            //error handling logic
            console.log(e)
        }
    }

    //topbar change location submit handler
    const onSubmitTopBarChangeLocation = async formValue => {
        const { zipcode } = formValue
        try {
            await setZipcode(zipcode).then(
                updateGamesData(zipcode, async function (err, callBackRes) {
                    if (err) {
                        console.log(err?.message)
                        let errorMsg = err?.message != null ? err.message : 'This Zip is not serviced.'
                        setZipCodeServiceStaus(errorMsg)
                        setValue('zipcode', '')
                    } else {
                        setChangeLocation(false)
                        router.push("/")
                    }
                }))
        } catch (e) {
            //error handling logic
            console.log(e)
        }
    };

    if (errors?.zipcode != null) {
        setValue('zipcode', '')
        console.log("errrr", errors)
    }

    return (
        <>
            <div id="navigation" className="clearfix">
                <div className="col-sm-4 ti-main-logo">
                    <Link href="/"><img src="/assets/img/g2u-logo.png" alt="g2u-logo" /></Link>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="ti-underline-element clearfix hidden-sm hidden-xs">
                        <div className="col-sm-6 ti-location location-update-wrap" id="locationNav">
                            <span className="ti-sprite location-pin" />
                            <span className="selected-location" >
                                <span id="navbarLocation"><strong /></span>
                                {
                                    (!loading && games && games?.affiliate != undefined)
                                        ?
                                        <span className="selected-location" style={{ display: changeLocation ? 'none' : 'block', margin: '-21px', paddingLeft: 44 }}>
                                            <span id="navbarLocation"><strong>{games.affiliate.city} {changeLocation}</strong></span>
                                            <span className="ti-light-orange-text">(&nbsp;<span style={{ cursor: 'pointer' }} className="ti-light-orange-text location-edit-link" onClick={() => setChangeLocation(true)} >change location</span>&nbsp;)</span>
                                        </span>
                                        :
                                        <>
                                            <span className="ti-light-orange-text" style={{ display: changeLocation ? 'none' : '' }}>(&nbsp;<span style={{ cursor: 'pointer' }} className="ti-light-orange-text location-edit-link" onClick={() => setChangeLocation(true)}>Enter Zip Code</span>&nbsp;)</span>
                                        </>


                                }
                                <span className="update-location" style={{ display: (changeLocation) ? 'block' : 'none', margin: '-25px', paddingLeft: 40 }}>
                                    <form
                                        onSubmit={handleSubmit(onSubmitTopBarChangeLocation)}
                                        autoComplete='off'
                                    >
                                        <span className="close-btn" onClick={() => setChangeLocation(false)} />
                                        <input type="hidden" id="franchiseNameNav" name="franchiseName" defaultValue />
                                        <div className="ti-input">
                                            <input
                                                {...register("zipcode")}
                                                type="text"
                                                placeholder={errors && errors.zipcode != null && errors.zipcode.message ? errors.zipcode.message : zipCodeServiceStaus}
                                                className="zip-code-input"
                                                maxLength={5}
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
                        <a href="#" className="visible-sm" id="mobileLocationIcon">
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
                                    <span className="ti-light-orange-text">( <span className="ti-light-orange-text location-edit-link">change location</span> )</span>
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
                                <Link href="/our-games">OUR GAMES</Link>
                                <div className="sub-menu" style={{ display: isShownMenu ? 'block' : 'none' }}>
                                    <div className="ti-sub-head clearfix">
                                        <h2 className="no-border ti-dark-blue-text pull-left">Games They'll Love!</h2>
                                        <Link href="/our-games" className="ti-orange-text pull-right ti-inline-block">View All
                                            Available Games</Link>
                                    </div>
                                    <div className="col-md-4 padding-top">
                                        {
                                            (!loading && games && games?.categories != undefined && games?.categories.length > 0)
                                                ?
                                                games.categories.map(item => {
                                                    return (
                                                        <Link href={`/game/${item.slug}`} key={`game-cat-${item.id}`}><img src={item.icon != '' ? item.icon : "assets/img/ico-video-game-theater-blue-2x.png"} />{item.category_name}</Link>
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
                        <img data-em="logo" src="assets/img/g2u-logo.png" alt="g2u-logo" />
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
                                        placeholder={errors && errors.zipcode != null && errors.zipcode.message ? errors.zipcode.message : zipCodeServiceStaus}
                                        data-required="Zip code is required"
                                        autoComplete="off"
                                        className={`form-control ${errors.zipcode ? 'is-invalid' : ''}`}
                                        maxLength={5}
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