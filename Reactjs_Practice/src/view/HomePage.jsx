import Banner from "../components/banner/Banner";
import CardProductGrid from "../components/card/product/CardProductGrid";
import CardProductList from "../components/card/product/CardProductList";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";
import Footer from "../components/footer/Footer";
import ModulTitle from "../components/modul/title/ModulTitle";

function HomePage() {
  return (
    <div className="App">
      <Banner className="mb-3" id="carouselBannerHome" data={data.banner} aria-hidden="true" />
      <Collection id="collectionHome" data={data.collection} aria-hidden="true" />
      <div className="container-fluid">
      <ModulTitle title="our product" />
        <div className="row">
          {data.products.map((product, idx) => {
            return (
              <div className="col-sm-4" key={idx}>

                <CardProductGrid data={product} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="container-best">
        
          <ModulTitle title="best seller" />
          {data.products.map((product, idx) => {
            return (
              <div key={idx}>

                <CardProductList data={product} />
              </div>
            )
          })}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
