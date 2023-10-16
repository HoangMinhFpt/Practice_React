import React from "react";
import {  Link, useMatch, useResolvedPath } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import "./Header.scss"
import DropDownCustomer from "../../components/dropdown/customer/DropDownCustomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
                <div className="header-one-content">
                    <div className="search-content">
                        <div className="icon-search"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                        <input type="text" className="search-form"/>
                    </div>
                </div>
                <div className="header-two-content">
                    <DropDownCustomer/>
                </div>
            </div>
        </div>
  );
}

export default Header;
