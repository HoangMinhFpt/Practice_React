import { data } from "../components/data";
import Category from "../components/filter/category/Category";
import Color from "../components/filter/color/Color";
import Price from "../components/filter/price/Price";
import Review from "../components/filter/review/Review";
import HeaderTop from "../components/headertop/HeaderTop";
import ModuleToolbar from "../components/module/toolbar/ModuleToolbar";

function Product() {
  return (
    <div className="App">
      <HeaderTop data={"product"} />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Category data={data.category} />
            <Color data={data.color} />
            <Review data={data.reviewStart} />
            <Price data={data.price} />
          </div>
          <div className="col-md-9">
            <ModuleToolbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
