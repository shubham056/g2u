import React from 'react'

const Video = () => {
    return (
        <video preload="preload" id="video" autoPlay="autoplay" loop="loop" muted="muted" playsInline poster="assets/img/placeholder-vid.jpg">
            <source src="assets/video/final_home.mp4" type="video/mp4" />
        </video>
    )
}

export default Video