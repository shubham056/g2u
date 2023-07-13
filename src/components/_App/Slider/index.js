const CommonSlider = ({ images }) => {
    return (
        <>
            {
                images && images.length > 0 ?
                    images.map(item => {
                        return (
                            <div className="col-md-4 col-xs-6 col-ie-4 ti-box" data-original="true" key={item.id}>
                                <img src={item?.src ?? "https://www.g2u.com/assets/img/game-slider/video-game-theater-01-2x.jpg"} alt={`slider-img-${item.id}`} />
                            </div>
                        )
                    })
                    : null
            }
        </>
    )
}
export default CommonSlider