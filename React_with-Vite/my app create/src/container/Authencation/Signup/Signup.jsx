import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import "./Signup.scss";

function Signup() {
  const [newCustomer, setNewCustomer] = useState({
    username: "",
    password: "",
    phonenumber: "",
  });
  const navigate = useNavigate();

  const handleChangeInput = (event, id) => {
    setNewCustomer({
      ...newCustomer,
      [id]: event.target.value,
    });
  };

  const handleSignUp = () => {
    if (newCustomer !== null) {
      navigate("/");
    } else {
      alert("Error");
    }
  };

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
        <input
          type="text"
          value={newCustomer.username}
          onChange={(event) => handleChangeInput(event, "username")}
          required
        />
        <span>Username</span>
      </div>
      <div className="signup-input-content">
        <input
          type="password"
          value={newCustomer.password}
          onChange={(event) => handleChangeInput(event, "password")}
          required
        />
        <span>Password</span>
      </div>
      <div className="signup-input-content">
        <input
          type="text"
          value={newCustomer.phonenumber}
          onChange={(event) => {
            handleChangeInput(event, "phonenumber");
          }}
          required
        />
        <span>Phone number</span>
      </div>
      <div>
        <button className="btn-submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <div className="text-signin-content">
        Already have an account?
        <Link className="link-signin" to={"/login"}>
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Signup;
