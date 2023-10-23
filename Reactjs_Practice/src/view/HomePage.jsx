import Banner from "../components/banner/Banner";
import CardProductGrid from "../components/card/product/CardProductGrid";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";
import Footer from "../components/footer/Footer";
import ModulTitle from "../components/modul/title/ModulTitle";

function HomePage() {
  return (
    <div className="App">
      <Banner className="mb-3" id="carouselBannerHome" data={data.banner} aria-hidden="true" />
      <Collection id="collectionHome" data={data.collection} aria-hidden="true" />
      <ModulTitle />
      <div className="container-fluid">
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
      <Footer />
    </div>
  );
}

export default HomePage;
