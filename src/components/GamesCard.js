import Link from 'next/link'

const GamesCard = ({ dynamicClass, id, link, slug, imgSrc, icon, categoryName, caption }) => {
    return (
        <div className={dynamicClass} data-original="true">
            <Link href={`/${link}/game/${slug}`}>
                <div className="box-heading video-game-theater" >
                    <img src={imgSrc != '' ? imgSrc : "/assets/img/ico-video-theater-2x.png"} height={"100%"} />
                </div>
                <div className="circle-img"><img src={icon != '' ? icon : "/assets/img/ico-video-theater-2x.png"} alt={slug} />
                </div>
                <h3>{categoryName}</h3>
                <p>{caption}</p>
                <span className="explore-link">Explore {categoryName} »</span>
            </Link>
        </div>
    )
}

export default GamesCard