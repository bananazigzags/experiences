import "./Card.css"
import star from "../star.png"

export default function Card(props) {
    let statusText;
    if (props.event.openSpots === 0) {
        statusText = "SOLD OUT"
    } else if (props.event.location === "Online") {
        statusText = "ONLINE"
    }
    return (
        <div className="card">
            <div className="main-card-pic">
            <span className="status">{statusText}</span>
            <img src={process.env.PUBLIC_URL + `/${props.event.coverImg}`} className="card-pic" alt=""/>
            </div>
            <div>
                <img src={star} className="star-img" alt=""/>
                <p className="review-line"> {props.event.stats.rating}({props.event.stats.reviewCount}) • {props.event.location}</p>
            </div>
            <p className="card-heading">{props.event.title}</p>
            <p className="price-line"><span className="price-from">From ${props.event.price}</span>/person</p>
        </div>
        
    )
}