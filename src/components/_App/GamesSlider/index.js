import React from 'react'

const GamesSlider = ({ sliderData }) => {
    return (
        <>
            {
                (sliderData != undefined && sliderData.length > 0)
                    ?
                    sliderData.map(item => {
                        return (
                            <div className="col-ie-4 ti-box game-1" data-original="true">
                                <a href="game/videogametruck.html">
                                    <div className="box-heading video-game-theater" >
                                        <img src={item.image != '' ? item.image : "/assets/img/ico-video-theater-2x.png"} height={"100%"} />
                                    </div>
                                    <div className="circle-img"><img src={item.icon != '' ? item.icon : "/assets/img/ico-video-theater-2x.png"} /></div>
                                    <h3>{item.category_name}</h3>
                                    <p>{item.category_caption}</p>
                                    <span className="explore-link">Explore {item.category_name} »</span>
                                </a>
                            </div>
                        )
                    })
                    :
                    null
            }


        </>
    )
}

export default GamesSlider