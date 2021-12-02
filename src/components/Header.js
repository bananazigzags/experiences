import "./Header.css"
import pic from "../biz-card-pic.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Header() {
    return (
        <div className="header">
            <img src={pic} />
            <h1>Maria Tokareva</h1>
            <h2>Frontend Developer</h2>
            <div className="header-buttons">
                <a className="button" href="mailto:bananazigzags@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
                <a className="button" href="https://github.com/bananazigzags"><FontAwesomeIcon icon={faGithub} /> Github</a>
            </div>
        </div>
    )
}