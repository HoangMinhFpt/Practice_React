import { faCartPlus, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardProductGrid.scss";

function CardProductGrid(props) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const product = props.data;
  const discountPrice =
    (product.originPrice * product.discountPercentage) / 100;
  const price = product.originPrice - discountPrice;
  return (
    <div className="card-grid-container">
      <div className="card ">
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="label-product label_sale">
          <span>-{product.discountPercentage + "%"}</span>
        </div>
        <div className="card-body">
          <div className="review-star">
            <div className="star">
              {product.star > 0 &&
                Array.from({ length: 5 }, (_, key) => {
                  if (key < product.star)
                    return <FontAwesomeIcon icon={faStar} key={key} />;
                  else
                    return (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-secondary me-1"
                        key={key}
                      />
                    );
                })}
            </div>
            <div className="review-title">{product.review} review</div>
          </div>
          <hr />
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text-content">
            <span>{formatter.format(price)} </span>
            {product.originPrice > 0 && (
              <del className="small text-muted">
                {formatter.format(product.originPrice)}
              </del>
            )}
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
