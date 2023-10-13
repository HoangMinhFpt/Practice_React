import React from "react";
import {  Link, useMatch, useResolvedPath } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss"
import DropDownCustomer from "../../components/dropdown/customer/DropDownCustomer";

function Header({to}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <div style={{display: isActive.pathname=== "/login"? "none":"" }} className="header-container">
            <div className="header-left-content">
            <Link  to="/" className="header-title">Logo</Link>
            </div>
            <div className="header-center-content">
                <Navbar/>
            </div>
            <div className="header-right-content">
            <form className="search-content">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <DropDownCustomer/>
            </div>
            </div>
  );
}

export default Header;
