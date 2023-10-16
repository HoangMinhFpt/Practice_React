import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons"
import "./Signin.scss"

function Signin() {
    const [customer, setCustomer] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleChangeInput = (event, id) => {
        setCustomer({
            ...customer,
            [id]: event.target.value
        })
    }

    const handleLogin = () => {
        if (customer !== null) {
            navigate("/")
        } else {
            alert("Error")
        }
    }
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
            <div className="signin-content">
                <div className="signin-input-content">
                    <input type="text" value={customer.username} onChange={(event) => handleChangeInput(event, "username")} required />
                    <span>Username</span>
                </div>
                <div className="signin-input-content">
                    <input type="password" value={customer.password} onChange={(event) => handleChangeInput(event, "password")} required />
                    <span>Password</span>
                </div>
            </div>
            <div className="toggle-signin">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                remember me
            </div>
            <div>
                <button className="btn-submit" onClick={handleLogin}>Sign in
                </button>
            </div>
            <div className="text-signup-content">
                Don't have an account?
                <Link className="link-signup" to={"/signup"}>
                    Sign up
                </Link>
            </div>

        </div>
    );
}

export default Signin;
