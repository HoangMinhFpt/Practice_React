
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModulTitle.scss"
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ModulTitle(props) {
  return (
    <div className="module-title-container">
      <span className="module-title-content">
      <FontAwesomeIcon icon={faStar} className="icon-star"/>
{props.title}
      <FontAwesomeIcon icon={faStar} className="icon-star"/>
      </span>
    </div>
  );
}

export default ModulTitle;
