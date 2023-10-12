import "./Signup.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="signup-container">
            <div className="title-signup">Create Account</div>
            <div className="signup-group">
                <div className="signup-group-icon">
                    <FontAwesomeIcon icon={faGooglePlus} className="icon-google" />
                    <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
                </div>
            </div>
            <div className="text-content">or use your email for registration</div>
            <div className="signup-input-content">
                <input type="text" required />
                <span>Username</span>
            </div>
            <div className="signup-input-content">
                <input type="password" required />
                <span>Password</span>
            </div>
            <div className="signup-input-content">
                <input type="text" required />
                <span>Phone number</span>
            </div>
            <div>
                <button className="btn-submit" >
                    <Link to={{ pathname: `/` }} className="link-submit">Sign Up</Link></button>
            </div>
        </div>
    );
}

export default Signup;
