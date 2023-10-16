import { useMatch, useResolvedPath } from "react-router-dom";
import "./Login.scss"
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";


function Login({ to }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className="login-container">
      <div className="login-background-content">
      </div>
      <div className="login-form-content">
        {/* <Signin /> */}
        <div>
          {isActive.pathname === "/login" ? <Signin /> : <Signup />}
        </div>
      </div>
    </div>
  );
}

export default Login;
