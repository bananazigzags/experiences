import "./Card.css"
import star from "../star.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="main-card-pic">
            <span className="status">{props.status}</span>
            <img src={process.env.PUBLIC_URL + `/${props.img}`} className="card-pic"/>
            </div>
            <div>
                <img src={star} className="star-img" />
                <p className="review-line"> {props.rating}({props.reviewCount}) • {props.location}</p>
            </div>
            <p className="card-heading">{props.title}</p>
            <p className="price-line"><span className="price-from">From ${props.price}</span>/person</p>
        </div>
        
    )
}