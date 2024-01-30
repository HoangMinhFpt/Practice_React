import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import "./ModuleToolbar.scss";

function ModuleToolbar() {
  return (
    <div className="module-toolbar-container">
      <div className="module-toolbar-content-left">
        <div className="btn-group">
          <button
            type="button"
            className="btn-grid"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="3"
          >
            <FontAwesomeIcon icon={faGrip} />
          </button>
          <button className="btn-list">
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
        <div className="text-paging">Showing 1 to 9 of 37 items</div>
      </div>
      <div className="module-toolbar-content-center">
        <div className="title-show">show</div>
        <select className="form-select">
          <option value={10}>10</option>
          <option value={30}>30</option>
          <option value={1}>All</option>
        </select>
      </div>
      <div className="module-toolbar-content-right">
        <div className="title-sort">sort by</div>
        <select className="form-select">
          <option value={1}>best selling</option>
          <option value={2}>date, old to new</option>
          <option value={3}>date, new to old</option>
          <option value={4}>price, low to high</option>
          <option value={5}>price, high to low</option>
        </select>
      </div>
    </div>
  );
}

export default ModuleToolbar;
