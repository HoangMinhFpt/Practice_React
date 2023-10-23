import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import "./CardProductGrid.scss"

function CardProductGrid(props) {
  const product = props.data;
  return (
    <div className="card-grid-container">
      <div className="card card-grid-content">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text-content">
            <span >${product.price}</span>
            {product.originPrice > 0 && (
              <del className="small text-muted">
                ${product.originPrice}
              </del>
            )}
            {(product.discountPercentage > 0 || product.discountPrice > 0) && (
              <span className={`rounded p-1 bg-warning small`}>
                -
                {product.discountPercentage > 0
                  ? product.discountPercentage + "%"
                  : "$" + product.discountPrice}
              </span>
            )}
          </div>
          <hr />
          <div>
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key <= product.star)
                    return (
                      <IconStarFill className="text-warning me-1" key={key} />
                    );
                  else
                    return (
                      <IconStarFill className="text-secondary me-1" key={key} />
                    );
                })}
            </div>
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
