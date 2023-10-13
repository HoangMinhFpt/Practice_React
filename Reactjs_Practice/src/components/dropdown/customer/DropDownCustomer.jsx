import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./DropDownCustomer.scss"

function DropDownCustomer() {
    return (
        <div className="dropdown-customer-container">
      <button className="rounded-circle border btn-customer "> 
      <FontAwesomeIcon icon={faUser}  />
      </button>
            </div>
  );
}

export default DropDownCustomer;
