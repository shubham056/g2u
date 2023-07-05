import React, { useState } from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const TopBanner = ({ banner, icon, title, caption, video }) => {
    const [open, setOpen] = useState(false);
    const onCloseModal = () => setOpen(false);

    const playVideo = (video) => {
        //console.log("video", video)


        setOpen(true)

    }

    return (
        <>
            <div className="row no-padding not-home game-page video-game-theater" id="headerBanner">
                <div className="ti-page-header row clearfix">
                    <div className="row ti-row">
                        <div className="limited-width">
                            <div className="text-center">
                                <img src={icon ? icon : "https://www.g2u.com/assets/img/ico-video-theater-2x.png"} />
                            </div>
                            <h1>{title}</h1>
                            <p>{caption}</p>
                            {
                                video && video != ''
                                    ?
                                    <div className="text-center">
                                        <a href="javascript:void(0);" className="ti-yellow-button green-button video-trigger" data-video="https://www.g2u.com/assets/video/g2u-hamster-ball.mp4" onClick={() => playVideo(video)}><i className="fa fa-lg fa-play-circle-o" aria-hidden="true"></i> SEE IT IN ACTION!</a>
                                    </div>
                                    :
                                    null
                            }

                        </div>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={onCloseModal}
                closeOnOverlayClick={false}
                classNames={{ modal: 'play-video',closeButton: 'close-video-icon' }}
            >
                <div className="container-modal">
                    <video preload="preload" id="video" autoplay="autoplay" loop="loop" controls muted="muted" >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

            </Modal>
        </>

    )
}

export default TopBanner