import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardProductGrid.scss"

function CardProductGrid(props) {
  const product = props.data;
  return (
    <div className="card-grid-container">
      <div className="card card-grid-content">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            title="Add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProductGrid;
