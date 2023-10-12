import "./Signin.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";

function Signin() {

    return (
        <div className="signin-container">
            <div className="title-signin">Sign In</div>
            <div className="signin-group">
                <div className="signin-group-icon">
                    <FontAwesomeIcon icon={faGooglePlus} className="icon-google" />
                    <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
                </div>
            </div>
            <div className="text-content">or use your account</div>
            <div className="signin-input-content">
                <input type="text" required />
                <span>Username</span>
            </div>
            <div className="signin-input-content">
                <input type="password" required />
                <span>Password</span>
            </div>
            <div>
                <button className="btn-submit">
                    <Link to={{ pathname: `/` }} className="link-submit">Sign in</Link>
                </button>
            </div>

        </div>
    );
}

export default Signin;
