
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModulTitle.scss"
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ModulTitle() {
  return (
    <div className="module-title-container">
      <span className="module-title-content">
      <FontAwesomeIcon icon={faStar} className="icon-star"/>
our products
      <FontAwesomeIcon icon={faStar} className="icon-star"/>
      </span>
    </div>
  );
}

export default ModulTitle;
