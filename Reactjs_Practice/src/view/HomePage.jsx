import Banner from "../components/banner/Banner";
import Carousel from "../components/banner/Carousel";
import CardProductGrid from "../components/card/product/CardProductGrid";
import CardProductList from "../components/card/product/CardProductList";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";
import Footer from "../components/footer/Footer";
import ModulTitle from "../components/modul/title/ModulTitle";

function HomePage() {
  const rows = [...Array(Math.ceil(data.products.length / 2))];
  const productRows = rows.map((row, idx) =>
    data.products.slice(idx * 2, idx * 2 + 2)
  );
  const carouselContent = productRows.map((row, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <div className="row g-0">
        {row.map((product, idx) => {
          return (
            <div key={idx} className="col-md-5">
              <CardProductList data={product} />
            </div>
          );
        })}
      </div>
    </div>
  ));
  return (
    <div className="App">
      <Banner
        className="mb-3"
        id="carouselBannerHome"
        data={data.banner}
        aria-hidden="true"
      />
      <Collection
        id="collectionHome"
        data={data.collection}
        aria-hidden="true"
      />
      <div className="container-fluid">
        <ModulTitle title="our product" />
        <div className="row">
          {data.products.map((product, idx) => {
            return (
              <div className="col-sm-4" key={idx}>
                <CardProductGrid data={product} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-best">
        <ModulTitle title="best seller" />
        <Carousel id="select-product-category" className=" product-best">
          {carouselContent}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
