import { useState } from "react";
import "./Category.scss";

function Category(props) {
  const [statusType, setStatusType] = useState();

  const handleChangeStatus = (id) => {
    setStatusType({
      ...statusType,
      [id]: document.getElementById(id).checked ? 1 : 0,
    });
  };

  return (
    <div className="category-container">
      <div className="card mb-3 accordion">
        <div
          className="card-header fw-bold accordion-icon-button"
          data-bs-toggle="collapse"
          data-bs-target="#filterCategory"
          aria-expanded="true"
          aria-controls="filterCategory"
        >
          Categories
        </div>
        <ul className="list-group list-group-flush show" id="filterCategory">
          {props.data &&
            props.data.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  <input
                    className="form-check-input stretched-link"
                    type="checkbox"
                    id={item.id}
                    onClick={() => {
                      handleChangeStatus(item.id);
                    }}
                  />

                  {item.type}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Category;
