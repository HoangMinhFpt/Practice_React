import "./Login.scss"

function Login() {
  return (
    <div className="login-background-container">
      <div className="login-container">
        <div className="title-login">Login</div>
        <div className="login-input-content">
          <input type="text" required />
          <span>Username</span>
        </div>
        <div className="login-input-content">
          <input type="password" required />
          <span>Password</span>
        </div>
        <button className="btn-submit" >Submit</button>

        <div className="login-group">
          <i className="fa-brands fa-google-plus-g" />
          <i className="fa-brands fa-facebook-f"></i>

        </div>
      </div>
    </div>
  );
}

export default Login;
