import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./ViewMore.scss";

function ViewMore() {
  return (
    <div className="view-more-container">
      <Link to="/product" className="view-more-content">
        <div className="text-view-more">
          view more
          <FontAwesomeIcon icon={faAnglesRight} />
        </div>
      </Link>
    </div>
  );
}
export default ViewMore;
