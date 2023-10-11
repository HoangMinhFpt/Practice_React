import "./Navbar.scss"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar({to}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <nav className="navbar-container" style={{ display: isActive.pathname === "/login" ? "none" : "" }} >
            <Link  to="/" className="navbar-title">NavBar</Link>
      <ul>
          <CustomLink to="/product">Product</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
      </ul>
</nav>
  );
}
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    console.log(isActive);
    
    return (
        <li className={isActive? "active":""}>
            <Link to={to}{...props} >{children}</Link>
        </li>
    )
}

export default Navbar;
