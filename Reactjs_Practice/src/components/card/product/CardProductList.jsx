import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import "./CardProductList.scss";

function CardProductList(props) {
  const product = props.data;
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const discountPrice =
    (product.originPrice * product.discountPercentage) / 100;
  const price = product.originPrice - discountPrice;
  return (
    <div className="card-container">
      <div class="card">
        <div class="row g-2">
          <div class="col-md-5">
            <img src={product.img} class="img-fluid" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <div>
                {product.star > 0 &&
                  Array.from({ length: 5 }, (_, key) => {
                    if (key <= product.star)
                      return (
                        <IconStarFill className="text-warning me-1" key={key} />
                      );
                    else
                      return (
                        <IconStarFill
                          className="text-secondary me-1"
                          key={key}
                        />
                      );
                  })}
              </div>
              <div className="mb-2">
                <span className="fw-bold h4">{formatter.format(price)}</span>
                {product.originPrice > 0 && (
                  <del className="small text-muted ms-2">
                    {formatter.format(product.originPrice)}
                  </del>
                )}
                {(product.discountPercentage > 0 ||
                  product.discountPrice > 0) && (
                  <span className={`rounded p-1 bg-warning ms-2 small`}>
                    -{product.discountPercentage + "%"}
                  </span>
                )}
              </div>
              <div className="btn-group">
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
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductList;
