import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBell,
  faIdBadge,
  faListCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./DropDownCustomer.scss";
import { Link } from "react-router-dom";

function DropDownCustomer() {
  return (
    <div className="dropdown-customer-container">
      <button
        className="btn-customer"
        type="button"
        aria-expanded="false"
        data-toggle="dropdown"
        data-bs-toggle="dropdown"
      >
        <FontAwesomeIcon icon={faUser} style={{ color: "##22232b" }} />
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" to="/profile">
            <FontAwesomeIcon icon={faIdBadge} className="text-info" />
            &nbsp; My Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/wishlist">
            <FontAwesomeIcon icon={faListCheck} className="text-success" />
            &nbsp; Wishlist
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/notification">
            <FontAwesomeIcon icon={faBell} className="text-warning" />
            &nbsp; Notification
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/login">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-danger"
            />
            &nbsp; Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDownCustomer;
