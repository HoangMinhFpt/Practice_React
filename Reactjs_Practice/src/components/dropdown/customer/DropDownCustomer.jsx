import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./DropDownCustomer.scss"
import { Link } from "react-router-dom";


function DropDownCustomer() {
    return (
        <div className="dropdown-customer-container">
      <button className="btn-customer" type="button" aria-expanded="false" data-toggle="dropdown" data-bs-toggle="dropdown"> 
      <FontAwesomeIcon icon={faUser}  />
      </button>
      <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/star/zone">
                       Star Zone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                       Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                       Wishlist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                       Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Logout
                    </Link>
                  </li>
                </ul>
            </div>
  );
}

export default DropDownCustomer;
