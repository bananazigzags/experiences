import "./Navbar.css"
import pic from "../airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={pic} className="navbar-pic" alt=""/>
        </nav>
    )
}