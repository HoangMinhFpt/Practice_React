import Banner from "../components/banner/Banner";
import Carousel from "../components/banner/Carousel";
import CardBlogGrid from "../components/card/blog/CardBlogGrid";
import CardProductGrid from "../components/card/product/CardProductGrid";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";
import Footer from "../components/footer/Footer";
import ModulTitle from "../components/modul/title/ModulTitle";

function HomePage() {
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
        <div className="product-best">
          <Carousel data={data.products} />
        </div>
      </div>
      <div className="container-fluid">
        <ModulTitle title="our blog" />
        <div className="row">
          {data.blogBanner.map((blog, idx) => {
            return (
              <div className="col-sm-4" key={idx}>
                <CardBlogGrid data={blog} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
