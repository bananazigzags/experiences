import "./Hero.css"
import pic from "../photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={ pic } className="hero-pic"/>
            <div className="text-block">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}