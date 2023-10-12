import { useState } from "react";
import "./Login.scss"
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";


function Login() {
  const [showLeftContent, setShowLeftContent] = useState(true)
  const [showRightContent, setShowRightContent] = useState(false)

  const handleChange = () => {
    setShowLeftContent(!showLeftContent)
    setShowRightContent(!showRightContent)
  }

  return (
    <div className="login-background-container">
      <div className="login-container">
        <div className="login-left-content">
          <Signin className="signin-content" />
          <div className={showLeftContent ? "left-content" : "left-content show"} style={{ display: showLeftContent ? "none" : "" }}>
            <h3>Welcome back</h3>
            <div className="text-left">To keep connected with us please login with your personal info</div>
            <button onClick={handleChange}>Login</button>
          </div>
        </div>
        <div className="login-right-content">
          <Signup className="signup-content" />
          <div className={showRightContent ? "right-content " : "right-content show"} style={{ display: showRightContent ? "none" : "" }}>
            <h3>Hello, Friend</h3>
            <div className="text-right">Enter your personal details and start journey with us</div>
            <button onClick={handleChange}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
