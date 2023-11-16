import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModuleTitle.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ModuleTitle(props) {
  return (
    <div className="module-title-container">
      <span className="module-title-content">
        <FontAwesomeIcon icon={faStar} className="icon-star" />
        {props.title}
        <FontAwesomeIcon icon={faStar} className="icon-star" />
      </span>
    </div>
  );
}

export default ModuleTitle;
