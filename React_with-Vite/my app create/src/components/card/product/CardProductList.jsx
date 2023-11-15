import { faCartPlus, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="card">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={product.img} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <div>
                {product.star > 0 &&
                  Array.from({ length: 5 }, (_, key) => {
                    if (key <= product.star)
                      return (
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-warning me-1"
                          key={key}
                        />
                      );
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
              <div className="mb-3">
                <span className="fw-bold h4">{formatter.format(price)}</span>
                {product.originPrice > 0 && (
                  <del className="small ms-2">
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
                <button type="button" className="btn btn-sm btn-cart">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
                <button type="button" className="btn btn-sm btn-wishlist">
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
