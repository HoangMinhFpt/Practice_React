import Category from "../components/filter/category/Category";
import HeaderTop from "../components/headertop/HeaderTop";

function Product() {
  return (
    <div className="App">
      <HeaderTop data={"product"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
